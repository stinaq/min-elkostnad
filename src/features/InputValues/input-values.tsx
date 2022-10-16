import React from 'react'; // we need this to make JSX compile

type InputValuesProps = {
  kiloWatt: number;
  onKiloWattChange: (newValue: number) => void;
  feeKrPerKWh: number;
  onFeeKrPerKWhChange: (newValue: number) => void;
};

const InputValues = ({ kiloWatt, onKiloWattChange, feeKrPerKWh, onFeeKrPerKWhChange }: InputValuesProps) => {
  const displayFeeKrPerKWh = !feeKrPerKWh && feeKrPerKWh !== 0 ? '' : feeKrPerKWh

  const handleWattChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // changing watt ==> kiloWatt
    onKiloWattChange(Number(event.target.value)/1000);
  };

  const handleOreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log({value})
    // changing Öre ==> kr
    
    onFeeKrPerKWhChange(Number(event.target.value)/100);
  };

  const oreToKr = (ore: number): number => {
    const result = ore / 1000;
    return result;
  };

  return (
    <div>
      <section className='input-kilo-watt'>
        <label htmlFor="watt">Watt</label>
        <input type='number' name='watt' placeholder='t.ex 700' value={kiloWatt} onChange={handleWattChange} />
      </section>
      <section className='input-price'>
        <label htmlFor="ore">Pris per kWh i öre</label>
        <input
          type='number'
          name='ore'
          placeholder='t.ex 200'
          value={displayFeeKrPerKWh}
          onChange={handleOreChange} />
      </section>
    </div>
  );
}; 

export default InputValues;