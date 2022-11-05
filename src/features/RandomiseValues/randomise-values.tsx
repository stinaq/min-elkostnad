import React from 'react';
import { powerData } from '../../data/power'

type RandomiseValuesProps = {
  onRandomise: (newOreValue: string, newWattValue: string, newThingValue: string) => void;
};

const RandomiseValues = ({ onRandomise }: RandomiseValuesProps) => {
  const handleRandomise = () => {
    const minOre = Math.ceil(20);
    const maxOre = Math.floor(700);
    const randomOre = Math.floor(Math.random() * (maxOre - minOre + 1) + minOre);
    const randomExample = powerData.getRandomExample();
    onRandomise(randomOre.toString(), randomExample.userInput, randomExample.description);
  };

  return (
    <div>
      <section className='input-section'>
        <label htmlFor="randomise">Slumpa fram lite värden</label>
        <button
          type='button'
          name='randomise'
          onClick={handleRandomise}
        >Slumpa</button>
      </section>
    </div>
  );
};

export default RandomiseValues;
