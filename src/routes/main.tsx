import React, { useState } from 'react';
import DisplayCost from './../features/DisplayCost/display-cost';
import InputFee from '../features/InputValues/input-fee';
import InputPower from '../features/InputValues/input-power';
import InputThing from '../features/InputValues/input-thing';
import PickTimespan from '../features/InputValues/pick-timespan';
import RandomiseValues from '../features/RandomiseValues/randomise-values';
import { powerData } from '../data/power'

import { Power, Fee, Thing } from './../types/types'

function Main() {
  var randomExample = powerData.getRandomExample();
  const [fee, setFee] = useState<Fee>({ userInput: '243', electricityKrPerKiloWattH: 2.43, });
  const [power, setPower] = useState<Power>({
    userInput: randomExample.userInput, 
    kiloWatt: randomExample.kiloWatt
  });
  const [thing, setThing] = useState<Thing>({ userInput: randomExample.description});


  const handlePowerChange = (newWattValue?: string) => {
    if (!newWattValue) {
      setPower({ userInput: newWattValue, kiloWatt: 0 });
    } else {
        const parsedWatt = Number(newWattValue);
        const parsedKiloWatt = parsedWatt / 1000;
        setPower({ userInput: newWattValue, kiloWatt: parsedKiloWatt });
    }
  };

  const handleFeeKrPerKWhChange = (newOreValue?: string) => {
    if (!newOreValue) {
      setFee({ userInput: newOreValue, electricityKrPerKiloWattH: 0 });
    } else {
        const parsedOre = Number(newOreValue);
        const parsedKr = parsedOre / 100;
        setFee({ userInput: newOreValue, electricityKrPerKiloWattH: parsedKr });
    }
  };

  const handleThingChange = (newThingValue?: string) => {
    setThing({ userInput: newThingValue });
  };

  const setAllValues = (newOreValue: string, newWattValue: string, newThingValue: string) => {
    handleFeeKrPerKWhChange(newOreValue);
    handlePowerChange(newWattValue);
    handleThingChange(newThingValue);
  };

  return (
    <div>
      <DisplayCost power={power} thing={thing} fee={fee} />
      <PickTimespan />
      <RandomiseValues onRandomise={setAllValues} />
      <InputFee fee={fee} onFeeKrPerKWhChange={handleFeeKrPerKWhChange} />
      <InputPower power={power} onKiloWattChange={handlePowerChange} />
      <InputThing thing={thing} onThingChange={handleThingChange} />
    </div>
  );
}

export default Main;