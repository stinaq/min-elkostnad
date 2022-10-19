import React from 'react'; // we need this to make JSX compile
import { Fee } from '../../types/types';

type InputFeeProps = {
  fee: Fee;
  onFeeKrPerKWhChange: (newValue?: string) => void;
};

const InputValues = ({ fee, onFeeKrPerKWhChange }: InputFeeProps) => {
  const handleOreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onFeeKrPerKWhChange(value);
  };

  return (
    <div>
      <section className='input-section'>
        <label htmlFor="ore">Pris per kWh i öre</label>
        <input
          type='number'
          name='ore'
          placeholder='t.ex 200'
          value={fee.userInput}
          onChange={handleOreChange} />
      </section>
    </div>
  );
}; 

export default InputValues;