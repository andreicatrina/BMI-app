import React from "react";
import { Landing, LandingContainer, LandingTextContainer } from "./components";

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
      </LandingContainer>
    </Landing>
  );
};
