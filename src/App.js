
import React, { Component } from 'react';

//import AutomationStudioContext from '../SystemComponents/AutomationStudioContext';


//import './App.css';
//import io from 'socket.io-client';
import Routes from './routes'
import LimitedRoutes from './limitedRoutes'
import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import AutomationStudioContext from './components/SystemComponents/AutomationStudioContext';
import { blue, indigo,pink, red, green,cyan,lime } from '@material-ui/core/colors'
import io from 'socket.io-client';
import { Redirect } from 'react-router-dom'
import LogIn from './LogIn';

// const socket = io('https://172.16.5.52:5000/test',{
//   transports: ['websocket'],
//   secure:true
// })


let socket;
switch(process.env.NODE_ENV){
  case 'production':
  if(typeof process.env.REACT_APP_PyEpicsServerURL==='undefined'){
    console.log('process.env',process.env)
    console.log('process.env.REACT_APP_PyEpicsServerURL!==undefined')
    socket = io('127.0.0.1:5000/test',{
      transports: ['websocket'],
    })
  }
  else{
    socket = io(process.env.REACT_APP_PyEpicsServerURL,{
      transports: ['websocket'],
    })
  }




  break;
  case 'development':
  if(typeof process.env.REACT_APP_PyEpicsServerURL==='undefined'){
    console.log('process.env',process.env)
    console.log('process.env.REACT_APP_PyEpicsServerURL!==undefined')
    socket = io('127.0.0.1:5000/test',{
      transports: ['websocket'],
    })
  }
  else{
    socket = io(process.env.REACT_APP_PyEpicsServerURL,{
      transports: ['websocket'],
    })
  }




  break;
  case 'test':
  if(typeof process.env.REACT_APP_PyEpicsServerURL==='undefined'){
    console.log('process.env',process.env)
    console.log('process.env.REACT_APP_PyEpicsServerURL!==undefined')
    socket = io('127.0.0.1:5000/test',{
      transports: ['websocket'],
    })
  }
  else{
    socket = io(process.env.REACT_APP_PyEpicsServerURL,{
      transports: ['websocket'],
    })
  }








  break;
}




/*
const socket = io('127.0.0.1:5000/test',{
transports: ['websocket']
})*/
class App extends Component {
  constructor(props) {
    super(props);

    let theme = createMuiTheme({
      palette: {
        type:'dark',
        primary: cyan,
        secondary:pink,
        error: pink,
        action:green,
        // Used by `getContrastText()` to maximize the contrast between the background and
        // the text.
        contrastThreshold: 3,
        // Used to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,



      },
      lightLineColors:['#12939A', '#79C7E3', '#1A3177', '#FF9833', '#EF5D28'],
      darkLineColors:['#ff9800', '#f44336', '#9c27b0', '#3f51b5', '#e91e63'],
      typography: {
        useNextVariants: true,
        fontFamily: [

          'Roboto',


        ].join(','),
      },
    });


    this.updateLocalVariable = (name,data) => {
      let system=this.state.system;
      let localVariables=system.localVariables;

      localVariables[name]=data;
      system.localVariables=localVariables
      this.setState({
        system:system,

      });
      //console.log('name',name)
      //console.log('data',data)
    };

    let localVariables={};
    let system={socket:socket,localVariables:localVariables,updateLocalVariable:this.updateLocalVariable,enableProbe:true,styleGuideRedirect:true}
    this.state={
      theme :theme,
      system:system,
      redirectToLoginPage:false,
      Authenticated:false,
      AuthenticationFailed:false,


    }
  this.handleConnect=this.handleConnect.bind(this);
  this.handleRedirectToLogIn=this.handleRedirectToLogIn.bind(this);
    this.handleAuthentication=this.handleAuthentication.bind(this);
  }
  handleRedirectToLogIn(){
    console.log('redirectToLogIn')
    this.setState({'redirectToLoginPage':true});
  }

  handleConnect(){

      console.log('soceket connecting');
      let jwt = JSON.parse(localStorage.getItem('jwt'));

      console.log('jwt',jwt);

      let socket=this.state.system.socket;
      socket.emit('Authenticate', jwt);


  }
  handleAuthentication(msg){

    this.setState({'Authenticated':msg.successful,'AuthenticationFailed':msg.successful!==true});


  }
  componentDidMount(){
    this.setState({'redirectToLoginPage':false});
    let socket=this.state.system.socket;
    socket.on('connect',this.handleConnect);
    //socket.on('redirectToLogIn', this.handleRedirectToLogIn);
    socket.on('authentication',this.handleAuthentication);
  }
  componentWillUnmount(){
    console.log('unmounted')
      let socket=this.state.system.socket;
      socket.removeListener('connect',this.handleConnect);
    //  socket.removeListener('redirectToLogIn', this.handleRedirectToLogIn);
      socket.removeListener('authentication',this.handleAuthentication);
  }
  render() {
  //  console.log('node env',process.env.NODE_ENV)
  //  console.log(this.state.theme)

    console.log(this.state.system)
    return (

      <AutomationStudioContext.Provider value={this.state.system}>
        <MuiThemeProvider theme={this.state.theme}>
          <CssBaseline />
            <Routes limitRoutes={false}/>
          {/*<Routes limitRoutes={this.state.AuthenticationFailed}/>*/}


        </MuiThemeProvider>
      </AutomationStudioContext.Provider>
    );
  }
}


export default App;
