import React, { useState } from 'react';
import DisplayCost from './../features/DisplayCost/display-cost';
import InputFee from '../features/InputValues/input-fee';
import InputPower from '../features/InputValues/input-power';
import { powerData } from '../data/power'

import { Power, Fee } from './../types/types'

function Main() {
  var randomExample = powerData.examples[Math.floor(Math.random()*powerData.examples.length)];
  const [fee, setFee] = useState<Fee>({ userInput: '40', electricityKrPerKiloWattH: 0.4, });
  const [power, setPower] = useState<Power>({userInput: randomExample.watt.toString(), kiloWatt: randomExample.watt/1000});

  const handlePowerChange = (newWattValue?: string) => {
    if (!newWattValue) {
      setPower({ userInput: newWattValue, kiloWatt: 0 });
    } else {
        const parsedWatt = Number(newWattValue);
        const parsedKiloWatt = parsedWatt / 1000;
        setPower({ userInput: newWattValue, kiloWatt: parsedKiloWatt });
    }
  };

  const handleFeeKrPerKWh = (newOreValue?: string) => {
    if (!newOreValue) {
      setFee({ userInput: newOreValue, electricityKrPerKiloWattH: 0 });
    } else {
        const parsedOre = Number(newOreValue);
        const parsedKr = parsedOre / 100;
        setFee({ userInput: newOreValue, electricityKrPerKiloWattH: parsedKr });
    }
  };

  return (
    <div>
      <DisplayCost power={power} thing={randomExample.description} fee={fee} />
      <InputFee fee={fee} onFeeKrPerKWhChange={handleFeeKrPerKWh} />
      <InputPower power={power} onKiloWattChange={handlePowerChange} />
    </div>
  );
}

export default Main;