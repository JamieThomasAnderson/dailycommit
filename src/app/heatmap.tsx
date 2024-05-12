"use client";

import React, { useState } from 'react';
import HeatMap from '@uiw/react-heat-map';

const start = new Date();
start.setFullYear(start.getFullYear() - 1);



const Demo = () => {
  const [selected, setSelected] = useState('')
  return (
    <div>
      <HeatMap
        width={600}
        startDate={start}
        rectRender={(props, data) => {
          if (selected !== '') {
            props.opacity = data.date === selected ? 1 : 0.45
          }
          return (
            <rect {...props} onClick={() => {
              setSelected(data.date === selected ? '' : data.date);
            }} />
          );
        }}
      />
    </div>
  )
};
export default Demo