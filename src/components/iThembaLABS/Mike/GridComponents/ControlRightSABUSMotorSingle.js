import React from 'react'


import TextInput from '../../../BaseComponents/TextInput';
import SelectionInput from '../../../BaseComponents/SelectionInput';
import TextOutput from '../../../BaseComponents/TextOutput';
import SimpleSlider from '../../../BaseComponents/SimpleSlider';
import TextUpdate from '../../../BaseComponents/TextUpdate';
import Grid from '@material-ui/core/Grid';
import SwitchComponent from '../../../BaseComponents/SwitchComponent';
import ToggleButton from '../../../BaseComponents/ToggleButton';
import ActionButton from '../../../BaseComponents/ActionButton';
import ArrowButton from '../../../BaseComponents/ArrowButton';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import MyWindowPortal from '../../../SettingsPages/MyWindowPortal';


const styles = theme => ({
  body1: theme.typography.body1,


});

class ControlRightSABUSMotorSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state={'showSettings':false}

  }


  handleSettingsButtonClick=()=>{
    this.setState({'showSettings':true});
  }

  render() {
    const system=this.props.system;
    console.log("json stringify",JSON.stringify(system))
    const {classes}= this.props;

    return (

      <div className={classes.body1} style={{ paddingRight: 12}}>

          {system.displayName}
          {/*<TextUpdate  pv='pva://$(device):Setpoint.NAME' macros={this.props['macros']}  />*/}



        <Card style={{ padding: 12}} >



          <Grid   container
            direction="row"
            justify="flex-start"
            alignItems="center" spacing={8}>
            <Grid item xs={6}  >
              <TextInput   pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint}     usePrecision={true} prec={3}  label={'Setpoint:'} alarmSensitive={true}  usePvUnits={true} useEpicsMinMax={true}/>

            </Grid>
            <Grid item xs={6}  >
              <TextOutput style={{marginRight:10}} pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.readback}        usePrecision={true} prec={3} usePvUnits={true} alarmSensitive={true} label={'Readback'}/>


            </Grid>

            <Grid item xs={6}  >


            </Grid>
            <Grid item xs={6}  >

            </Grid>
            <Grid item xs={12}  >

            </Grid>
            <Grid item xs={4}  >





            </Grid>
            <Grid item xs={4}  >





            </Grid>
            <Grid item xs={4}  >

              <Button component={Link} to={{
                pathname: "/SettingsSinglePS",
                search:JSON.stringify(system),
                state: ["sdas"],
                data:"hello2"
              }} target="_blank" color="primary" variant='contained'>  Settings </Button>

            </Grid>





            <Grid item xs={12}  >
              <Grid   container  justify="flex-start" direction="row"    alignItems="center" spacing={8}>
                <Grid item xs={12} sm={12} >
                  <Grid   container  justify="flex-start" direction="row"    alignItems="center" spacing={8}>
                    <Grid item  sm={2}>


                      <div >
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']} label={"100"} labelPlacement={"bottom"}
                          actionValue={+100} useEpicsMinMax={true}/>
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']}
                          actionValue={-100} useEpicsMinMax={true}/>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={2} >
                      <div >
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']} label={"10"} labelPlacement={"bottom"}
                          actionValue={+10} useEpicsMinMax={true}/>
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']}
                          actionValue={-10} useEpicsMinMax={true}/>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                      <div >
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']} label={"1"} labelPlacement={"bottom"}
                          actionValue={+1} useEpicsMinMax={true}/>
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']}
                          actionValue={-1} useEpicsMinMax={true}/>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                      <div >
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']} label={"0.1"} labelPlacement={"bottom"}
                          actionValue={+0.1} useEpicsMinMax={true}/>
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']}
                          actionValue={-0.1} useEpicsMinMax={true} />
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                      <div >
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']} label={"0.01"} labelPlacement={"bottom"}
                          actionValue={+0.01} useEpicsMinMax={true}/>
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']}
                          actionValue={-0.01} useEpicsMinMax={true}/>
                      </div>
                    </Grid>
                    <Grid item xs={3} sm={2}>
                      <div >
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']} label={"0.001"} labelPlacement={"bottom"}
                          actionValue={+0.001} useEpicsMinMax={true}/>
                        <ArrowButton pv={'pva://'+system.devices.device.deviceName+":"+system.devices.device.setpoint} macros={this.props['macros']}
                          actionValue={-0.001} useEpicsMinMax={true}/>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} >
              <SelectionInput  pv={'pva://'+system.devices.device.deviceName+':put-S&EImmed'} label={'Mode'} useStringValue={true}/>
            </Grid>
            <Grid item xs={6}  >
              <ActionButton pv={'pva://'+system.devices.device.deviceName+":put-enter"} macros={this.props['macros']}   actionValue={"1"}
                actionString={"Enter"}/>
            </Grid>

          </Grid>

        </Card>


      </div>


    );
  }
}

ControlRightSABUSMotorSingle.contextType=SocketContext;
export default withStyles(styles,{withTheme:true})(ControlRightSABUSMotorSingle)
