import React, { useState } from "react";
import {
  CalculatorInfoContainer,
  CalculatorInputsContainer,
  CalculatorParentContainer,
  HeightContainer,
  HeightInputContainer,
  Landing,
  LandingContainer,
  LandingTextContainer,
  WeightContainer,
  WeightInputContainer,
} from "./components";

export const LandingSection = () => {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [error, setError] = useState("");

  function CalculateBmi() {
    if (height === 0 || weight === 0) {
      setError("Please complete both fields!");
    } else {
      console.log(((weight / (height * height)) * 10000).toFixed(2));
      setBmi(((weight / (height * height)) * 10000).toFixed(2));
    }
  }

  function onChangeHeight(e) {
    // console.log(height);
    setHeight(e.target.value);
  }

  function onChangeWeight(e) {
    setWeight(e.target.value);
  }

  return (
    <Landing>
      <LandingContainer>
        <LandingTextContainer>
          <h2>
            BODY MASS <br /> INDEX CALCULATOR
          </h2>
          <p>{`Better understand your weight in relation to your height using our body mass index (BMI) calculator. While the BMI is not the sole determinant of a healthy weight it offers a valuable starting point to evaluate your overall health and well-being.`}</p>
        </LandingTextContainer>
        <CalculatorParentContainer>
          <h3>Enter your details below</h3>
          <CalculatorInputsContainer>
            <HeightContainer>
              <label htmlFor="">Height</label>
              <HeightInputContainer>
                <input onChange={onChangeHeight} type="number" placeholder="0" />
                <p>cm</p>
              </HeightInputContainer>
            </HeightContainer>
            <WeightContainer>
              <label htmlFor="">Weight</label>
              <WeightInputContainer>
                <input onChange={onChangeWeight} type="number" placeholder="0" />
                <p>kg</p>
              </WeightInputContainer>
            </WeightContainer>
          </CalculatorInputsContainer>
          <CalculatorInfoContainer>
            {bmi ? (
              <div>
                {/* <p>{error}</p> */}
                <p>{`Your Body Mass Index is ${bmi}!`}</p>
              </div>
            ) : (
              <div>
                <h3>Welcome!</h3>
                <p>Enter your height and weight and you'll see your BMI index here</p>
              </div>
            )}

            <button onClick={CalculateBmi}>See BMI</button>
          </CalculatorInfoContainer>
        </CalculatorParentContainer>
      </LandingContainer>
    </Landing>
  );
};
