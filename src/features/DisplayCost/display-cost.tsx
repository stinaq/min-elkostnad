import React from 'react';
import { Power, Fee, Thing } from '../../types/types';
import { calculateCost } from './calculate-cost';
import ProportionsGraph from './proportions-graph';

type DisplayCostProps = {
  power: Power;
  thing: Thing;
  fee: Fee;
};

const formatCost = (costInKr: number) => {
  return Math.round((costInKr + Number.EPSILON) * 1000) / 1000;
};

const DisplayCost = ({ power, thing, fee }: DisplayCostProps) => {
  const kiloWatt = power.kiloWatt;
  const feeKrPerKWh = fee.electricityKrPerKiloWattH;
  const resultingCost = calculateCost.getFullCost({kiloWatt, feeKrPerKWh });
  const { sumCost, taxCost, gridCost, electricityCost } = resultingCost;
  const formattedSum = formatCost(sumCost);
  const formattedGrid = formatCost(gridCost);
  const formattedTax = formatCost(taxCost);
  const formattedElectricity = formatCost(electricityCost);
  return (
    <section className='display-cost'>
      <div className='display-cost-content'>
        <h2>{thing.userInput} kostar <b>{formattedSum}kr</b> per timme</h2>
        <p>om den använder {power.userInput} watt och priset på el är {fee.userInput} öre per kWh. </p>
        <ProportionsGraph
          taxCost={formattedTax}
          gridCost={formattedGrid}
          electricityCost={formattedElectricity}
          fullCost={resultingCost} />
      </div>
    </section>
  );
}; 

export default DisplayCost;