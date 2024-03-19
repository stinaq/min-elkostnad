import { powerData } from "../../data/power";

export const randomizeValues = (
  randomiseCallback: (
    newOreValue: string,
    newWattValue: string,
    newThingValue: string
  ) => void
) => {
  const minOre = Math.ceil(20);
  const maxOre = Math.floor(700);
  const randomOre = Math.floor(Math.random() * (maxOre - minOre + 1) + minOre);
  const randomExample = powerData.getRandomExample();
  randomiseCallback(
    randomOre.toString(),
    randomExample.userInput,
    randomExample.description
  );
};
