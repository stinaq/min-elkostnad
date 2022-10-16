import React, { useState } from 'react';
import DisplayCost from './../features/DisplayCost/display-cost';
import InputValues from './../features/InputValues/input-values';

function Main() {
  const [feeKrPerKWh, setFeeKrPerKWh] = useState(0);
  const [kiloWatt, setKiloWatt] = useState(0);

  const handleKiloWattChange = (newValue: number) => {
    setKiloWatt(newValue);
  };

  const handleFeeKrPerKWh = (newValue: number) => {
    setFeeKrPerKWh(newValue);
  };

  return (
    <div>
      <DisplayCost kW={kiloWatt} possessivePronoun={'Min'} thing={'vattenkokare'} feeKrPerKWh={feeKrPerKWh/100} />
      <InputValues
        kiloWatt={kiloWatt}
        onKiloWattChange={handleKiloWattChange}
        feeKrPerKWh={feeKrPerKWh}
        onFeeKrPerKWhChange={handleFeeKrPerKWh} />
    </div>
  );
}

export default Main;