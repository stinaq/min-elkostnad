import React from 'react'; // we need this to make JSX compile

const PickTimespan = () => {
  return (
    <section className='input-section'>
      <div className='radio-group'>
        <input name='timespan' type='radio' id='hour'/>
        <label htmlFor='hour'>timme</label>
        <input name='timespan' type='radio' id='day'/>
        <label htmlFor='day'>dygn</label>
        <input name='timespan' type='radio' id='month' />
        <label htmlFor='month'>månad</label>
        <input name='timespan' type='radio' id='year' />
        <label htmlFor='year'>år</label>
      </div>
    </section>
  );
}; 

export default PickTimespan;