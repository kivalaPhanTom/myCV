import React, { useState } from 'react'
import SkillItem from './SkillItem'
import styles from './Skills.module.scss'
import { useSelector } from 'react-redux'
import type { StepsProps } from 'antd';
import { Popover, Steps, Tooltip } from 'antd';
import type { TooltipProps } from 'antd';

type listSkillsObject = {
  key: string;
  name: string;
  img: string;
}

function ListSkill() {
  const listSkills = useSelector((state: { CVSlice: { listSkills: listSkillsObject[] } }) => state.CVSlice.listSkills)
  const convertedData: any = []
  listSkills.forEach(e => {
    convertedData.push({
      key: e.key,
      title: <p  className={styles['titleSkill']}>{e.name}</p>,
      img: e.img,
      status: 'finish'
    })
  })

  console.log('convertedData:', convertedData)
  const customDot: StepsProps['progressDot'] = (dot, { status, index }) => (
    <Tooltip
      placement="top"
      open={true}
      overlayStyle={{
        background: "none"
      }}
      arrow={false}
      overlayInnerStyle={{
        background: "none",
        boxShadow: "none"
      }}
      title={() => {
        let img: string = ""
        const findObject = convertedData.find((e: any, order: number) => order === index)
        if (findObject) img = findObject.img
        return <SkillItem img={img} />;
      }
      }
    >
      {dot}
    </Tooltip>
  );
  return (
    <div className={styles['listSkill']}>
      <Steps
        progressDot={customDot}
        current={1}
        items={convertedData}
      />

      {/* {
        listSkills.map((item, index) => (
          <SkillItem key={index} order={item.key} name={item.name} img={item.img} />
        ))
      } */}
    </div>
  )
}

export default ListSkill
