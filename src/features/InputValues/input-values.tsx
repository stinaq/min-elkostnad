import React from 'react'; // we need this to make JSX compile

const InputValues = () => {
  return (
    <div>
      <section className='input-watt'>
        <label htmlFor="watt">Watt</label>
        <input type='number' name='watt' placeholder='t.ex 700' />
      </section>
      <section className='input-price'>
        <label htmlFor="price">Pris per kWh i öre</label>
        <input type='number' name='watt' placeholder='t.ex 200' />
      </section>
    </div>
  );
}; 

export default InputValues;