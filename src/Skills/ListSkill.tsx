import React, {useState} from 'react'
import SkillItem from './SkillItem'
import styles from './Skills.module.scss'
import {useSelector } from 'react-redux'
import type { StepsProps } from 'antd';
import { Popover, Steps, Tooltip  } from 'antd';
import type { TooltipProps } from 'antd';

type listSkillsObject={
  key:string;
  name:string;
  img:string;
}

function ListSkill() {
  const [mode, setMode] = useState<'left' | 'alternate' | 'right'>('left');
  const listSkills = useSelector((state:{CVSlice:{listSkills:listSkillsObject[]}})=> state.CVSlice.listSkills)
  const data = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
      cardDetailedText: `On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and Belgium and attacking northern France. Holland capitulated after only five days of fighting, and the Belgians surrendered on 28 May. With the success of the German ‘Blitzkrieg’, the British Expeditionary Force and French troops were in danger of being cut off and destroyed.`
    },
    {
      title: "25 July 1940",
      cardTitle: "The Battle of Britain",
      cardSubtitle: `RAF Spitfire pilots scramble for their planes`,
      cardDetailedText: `After France’s surrender in June 1940, Churchill told the British people, “Hitler knows that he will have to break us in this island or lose the war”. To mount a successful invasion, the Germans had to gain air superiority. The first phase of the battle began on 10 July with Luftwaffe attacks on shipping in the Channel.
        The following month, RAF Fighter Command airfields and aircraft factories came under attack. Under the dynamic direction of Lord Beaverbrook, production of Spitfire and Hurricane fighters increased, and despite its losses in pilots and planes, the RAF was never as seriously weakened as the Germans supposed.`
    }
  ];
  const customDot: StepsProps['progressDot'] = (dot, { status, index }) => (
    <Tooltip 
    placement="top"
      open={true}
      overlayStyle={{
        background:"none"
        // borderRadius:"50%",
        // background:"red",
        // height:"40px",
        // width:"40px"
      }}
      arrow = {false}
      overlayInnerStyle={{
         background:"none",
         boxShadow:"none"
      }}
      title={<div>
        sdsdsdsd
        <img src="https://res.cloudinary.com/dvvi0pivw/image/upload/v1679798292/CV%20Image/pngwing.com_d7tpbn.png" 
        style={{width:"10px", height:"10px"}}/>
        </div>}
    >
      {dot}
    </Tooltip>
  );
  return (
    <div className={styles['listSkill']}>
        <Steps
      // progressDot
      progressDot={customDot}
      current={1}
      items={[
        {
          title: 'Finished',
          description:<button>sdsdsdsdsd</button>,
        },
        {
          title: 'In Progress',
          description: 'This is a description.',
        },
        {
          title: 'Waiting',
          description: 'This is a description.',
        },
      ]}
    />
    
      {
        listSkills.map((item,index)=>(
          <SkillItem key={index} order={item.key} name={item.name} img={item.img}/>
        ))
      }
    </div>
  )
}



export default ListSkill
