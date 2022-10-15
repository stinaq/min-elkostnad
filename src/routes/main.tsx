import React from "react";
import DisplayCost from './../features/DisplayCost/display-cost';
import InputValues from './../features/InputValues/input-values';

function Main() {
  return (
    <div>
      <DisplayCost kW={2000/1000} possessivePronoun={'Min'} thing={'vattenkokare'} feeKrPerKWh={480/100} />
      {/* <InputValues /> */}
    </div>
  );
}

export default Main;