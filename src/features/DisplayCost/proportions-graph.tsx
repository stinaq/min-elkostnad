import React from 'react';
import { FullCost } from '../../types/types';

type ProportionsGraphProps = {
  taxCost: number;
  gridCost: number;
  electricityCost: number;
  fullCost: FullCost;
};

const ProportionsGraph = ({ taxCost, gridCost, electricityCost, fullCost }: ProportionsGraphProps) => {
  const electricityProportion = fullCost.electricityCost / fullCost.sumCost * 100;
  const taxProportion = fullCost.taxCost / fullCost.sumCost * 100;
  const gridProportion = fullCost.gridCost / fullCost.sumCost * 100;

  return (
    <div>
      <p>
        <span className='electricity-proportion legend-circle'></span>Elhandelsavgift {electricityCost}kr, 
        <span className='tax-proportion legend-circle'></span>skatt {taxCost}kr,
        <span className='grid-proportion legend-circle'></span>elnätsavgift {gridCost}kr
      </p>
      <div className='proportions'>
        <div style={{ width: `${electricityProportion}%` }} className='electricity-proportion'></div>
        <div style={{ width: `${taxProportion}%` }} className='tax-proportion'></div>
        <div style={{ width: `${gridProportion}%` }} className='grid-proportion'></div>
      </div>
    </div>
  );
};

export default ProportionsGraph;