import React from 'react'; // we need this to make JSX compile
import { calculateCost } from './calculate-cost';

type DisplayCostProps = {
  kW: number;
  possessivePronoun: string;
  thing: string;
  feeKrPerKWh: number;
};

const formatCost = (costInKr: number) => {
  return Math.round((costInKr + Number.EPSILON) * 100) / 100;
};

const DisplayCost = ({ kW, possessivePronoun, thing, feeKrPerKWh }: DisplayCostProps) => {
  const resultingCost = calculateCost.getFullCost({kW, feeKrPerKWh});
  const { sumCost, taxCost, gridCost, electricityCost } = resultingCost;
  const formattedSum = formatCost(sumCost);
  const formattedGrid = formatCost(gridCost);
  const formattedTax = formatCost(taxCost);
  return (
    <section className='display-cost'>
      <h2>{possessivePronoun} {thing} kommer kosta <b>{formattedSum}kr</b> per timme</h2>
      <p>om den använder {kW * 1000} watt och priset på el är <b>{feeKrPerKWh * 100} öre</b> per kWh. 
      Skatten är {formattedTax}kr, elnätsavgiften är {formattedGrid}kr, elhandelsavgiften är {electricityCost}kr</p>
    </section>
  );
}; 

export default DisplayCost;