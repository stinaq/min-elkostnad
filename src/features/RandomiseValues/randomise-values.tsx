import { ReactComponent as RandomIcon } from "../../icons/random-icon.svg";
import { randomizeValues } from "./randomise-values-utils";

type RandomiseValuesProps = {
  onRandomise: (
    newOreValue: string,
    newWattValue: string,
    newThingValue: string
  ) => void;
};

const RandomiseValues = ({ onRandomise }: RandomiseValuesProps) => {
  const handleRandomise = () => {
    randomizeValues(onRandomise);
  };

  return (
    <div>
      <section className="input-section random-button">
        <label htmlFor="randomise">Slumpa fram värden</label>
        <button type="button" name="randomise" onClick={handleRandomise}>
          <RandomIcon />
        </button>
      </section>
    </div>
  );
};

export default RandomiseValues;
