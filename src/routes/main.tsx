import React, { useState } from 'react';
import DisplayCost from './../features/DisplayCost/display-cost';
import InputValues from './../features/InputValues/input-values';
import InputPower from '../features/InputValues/input-power';

import { Power } from './../types/types'

function Main() {
  const [feeKrPerKWh, setFeeKrPerKWh] = useState(0);
  const [power, setPower] = useState<Power>({userInput: '', kiloWatt: 0});

  const handlePowerChange = (newWattValue?: string) => {
    if (!newWattValue) {
      setPower({ userInput: newWattValue, kiloWatt: 0 });
    } else {
        const parsedWatt = Number(newWattValue);
        const parsedKiloWatt = parsedWatt / 1000;
        setPower({ userInput: newWattValue, kiloWatt: parsedKiloWatt });
    }
  };

  const handleFeeKrPerKWh = (newValue: number) => {
    setFeeKrPerKWh(newValue);
  };

  return (
    <div>
      <DisplayCost kW={power.kiloWatt} possessivePronoun={'Min'} thing={'vattenkokare'} feeKrPerKWh={feeKrPerKWh/100} />
      {/* <InputValues
        kiloWatt={kiloWatt}
        onKiloWattChange={handlePowerChange}
        feeKrPerKWh={feeKrPerKWh}
        onFeeKrPerKWhChange={handleFeeKrPerKWh} /> */}
        <InputPower power={power} onKiloWattChange={handlePowerChange} />
    </div>
  );
}

export default Main;