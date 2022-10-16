import React from 'react'; // we need this to make JSX compile
import { Power } from './../../types/types';

type InputPowerProps = {
  power: Power;
  onKiloWattChange: (newValue?: string) => void;
};

const InputPower = ({ power, onKiloWattChange }: InputPowerProps) => {
  const handleWattChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // changing watt ==> kiloWatt
    onKiloWattChange(event.target.value);
  };

  return (
    <div>
      <section className='input-kilo-watt'>
        <label htmlFor="watt">Watt</label>
        <input
          type='number'
          name='watt'
          placeholder='t.ex 700'
          value={power.userInput}
          onChange={handleWattChange} />
      </section>
    </div>
  );
};

export default InputPower;
