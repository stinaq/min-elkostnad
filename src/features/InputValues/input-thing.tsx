import React from 'react'; // we need this to make JSX compile
import { Thing } from '../../types/types';

type InputThingProps = {
  thing: Thing;
  onThingChange: (newValue?: string) => void;
};

const InputThing = ({ thing, onThingChange }: InputThingProps) => {
  const handleThingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onThingChange(value);
  };

  return (
    <div>
      <section className='input-section'>
        <label htmlFor="thing">Min pryl</label>
        <input
          type='text'
          name='thing'
          placeholder='micro'
          value={thing.userInput}
          onChange={handleThingChange} />
      </section>
    </div>
  );
}; 

export default InputThing;