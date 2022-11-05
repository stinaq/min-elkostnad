import React from 'react'; // we need this to make JSX compile
import { Power, Fee, Thing } from '../../types/types';
import { calculateCost } from './calculate-cost';

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
        <p>om den använder {power.userInput} watt och priset på el är <b>{fee.userInput} öre</b> per kWh. </p>
        <p>Skatten är {formattedTax}kr, elnätsavgiften är {formattedGrid}kr, elhandelsavgiften är {formattedElectricity}kr</p>
      </div>
    </section>
  );
}; 

export default DisplayCost;