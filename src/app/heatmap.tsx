"use client";

import React from 'react';
import HeatMap from '@uiw/react-heat-map';

const Demo = () => {
  return (
    <div>
      <HeatMap
        weekLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
        startDate={new Date('2016/01/01')}
      />
    </div>
  )
};

export default Demo