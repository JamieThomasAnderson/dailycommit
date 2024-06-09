"use client";

import React, { useState } from 'react';
import HeatMap from '@uiw/react-heat-map';

const end = new Date();
const start = new Date;
start.setMonth(start.getMonth() - 11);

const heatmapData = [
  // This is an example data format. You need to replace it with your actual data.
  { date: '2023-05-01', count: 1 },
  { date: '2023-05-02', count: 2 },
  // Add more data points as needed
];

const ProjectHeatmap = () => {
  const [selected, setSelected] = useState('')

  console.log(selected);

  return (
    <div>
      <HeatMap
        value={heatmapData}
        width={800}
        startDate={start}
        endDate={end}
        // panelColors={{
        //     0: '#000000',
        //     2: '#e4b293',
        //     4: '#d48462',
        //     10: '#c2533a',
        //     20: '#ad001d',
        //     30: '#000',
        //   }}
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
export default ProjectHeatmap;
