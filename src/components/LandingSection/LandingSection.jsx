import React from "react";
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
                <input type="text" placeholder="0" />
                <p>cm</p>
              </HeightInputContainer>
            </HeightContainer>
            <WeightContainer>
              <label htmlFor="">Weight</label>
              <WeightInputContainer>
                <input type="text" placeholder="0" />
                <p>kg</p>
              </WeightInputContainer>
            </WeightContainer>
          </CalculatorInputsContainer>
          <CalculatorInfoContainer>
            <h3>Welcome!</h3>
            <p>Enter your height and weight and you'll see your BMI index here</p>
          </CalculatorInfoContainer>
        </CalculatorParentContainer>
      </LandingContainer>
    </Landing>
  );
};
