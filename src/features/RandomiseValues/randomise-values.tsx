import React from 'react';
import { powerData } from '../../data/power'
import { ReactComponent as RandomIcon } from '../../icons/random-icon.svg';

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
      <section className='input-section random-button'>
        <label htmlFor="randomise">Slumpa fram värden</label>
        <button
          type='button'
          name='randomise'
          onClick={handleRandomise}
        ><RandomIcon /></button>
      </section>
    </div>
  );
};

export default RandomiseValues;
