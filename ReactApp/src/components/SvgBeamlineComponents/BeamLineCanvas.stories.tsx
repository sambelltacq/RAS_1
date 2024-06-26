import BeamLineCanvas from "./BeamLineCanvas";

import type { Meta, StoryObj } from "@storybook/react";
import HorizontalBeamline from './HorizontalBeamline';
import QuadrapoleMagnet from './QuadrapoleMagnet';
import BendingMagnet from './BendingMagnet';
import SteererYMagnet from './SteererYMagnet';
import SteererXMagnet from './SteererXMagnet';
import SteererXYMagnet from './SteererXYMagnet';
export default {
  component: BeamLineCanvas,
  parameters: {},
  title:"Beamline components/BeamLineCanvas",
  tags: ["autodocs"],
  argTypes: {},
} as Meta;

const Template: StoryObj = {
  render: ({ ...args }) => {
    return (
      <BeamLineCanvas {...args} >
	<HorizontalBeamline 
		x={0}
		y={50}
		pv={'testIOC:BeamlineA:BeamOn'}
		width={'113px'}
	/>
	<HorizontalBeamline 
		x={'113px'}
		y={50}
		pv={'testIOC:BeamlineB:BeamOn'}
		width={'148px'}
	/>
	<HorizontalBeamline 
		x={'261px'}
		y={50}
		pv={'testIOC:BeamlineC:BeamOn'}
		width={'10px'}
	/>
	
	<QuadrapoleMagnet
		x={0}
		y={50}
	 	label='Q3'
        pv= '$(IOC):$(device):Readback'
        macros=
         {{
           '$(IOC)': 'testIOC',
           '$(device)': 'PS3',
          }}
	  	usePvUnits={true}
		usePvLabel={false}
		alarmSensitive={true}
		
		componentShadow={true}
		textShadow={false}
		componentGradient={true}
	/>
	<BendingMagnet
		x={75}
		y={50}
		label= 'BM1'
       	pv= '$(IOC):$(device):Readback'
        macros=
          {{
          '$(IOC)': 'testIOC',
          '$(device)': 'PS4',
          }}
		usePvUnits={true}
		usePvLabel={false}
		alarmSensitive={true}
		label='BM1'
		componentShadow={true}
		textShadow={false}
		componentGradient={true}
		valueOffsetY={15}
	/>
	 <SteererXYMagnet
         
          
          xPv={'$(IOC):$(device):X:Readback'}
          yPv={'$(IOC):$(device):Y:Readback'}  
          label='STRXY2'
          macros= {{
              '$(IOC)': 'testIOC',
              '$(device)': 'STR2',
              
          }
          }
          x={165}
          y={50}
          usePvUnits={true}
          prec={3}
		  valueOffsetY={15}
		   labelOffsetY={-15}
          alarmSensitive={true}
          
        />
	<SteererYMagnet
		pv={'$(IOC):$(device):$(XorY):Readback'}
        label='STR2'
        macros= {{
              '$(IOC)': 'testIOC',
              '$(device)': 'STR2',
              '$(XorY)': 'Y'
          }
        }
		x={150}
		y={50}
		usePvUnits={true}
		prec={3}
		alarmSensitive={true}
		labelOffsetY={0}
		labelOffsetX={0}
		valueOffsetY={0}
		valueOffsetX={0}
		componentShadow={true}
		textShadow={false}
		componentGradient={true}
	/>
	
</BeamLineCanvas>
    );
  },
};

export const Overview = {
  ...Template,
  args: {
    width:600,
    height:400
  },
};

