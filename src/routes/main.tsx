import React from "react";
import DisplayCost from './../features/DisplayCost/display-cost';

function Main() {
  return (
    <div>
      <DisplayCost watt={0.3} possessivePronoun={'Min'} thing={'glödlampa'} costPerKWh={2222}></DisplayCost>
    </div>
  );
}

export default Main;