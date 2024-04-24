import React from "react";
import { Explanations, ExplanationsContainer } from "./components";

export const ExplanationsSection = () => {
  return (
    <Explanations>
      <ExplanationsContainer>
        <div>
          <div>
            <h3>Limitations of BMI</h3>
            <p>
              Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific
              groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be
              beneficial to use.
            </p>
          </div>
        </div>
      </ExplanationsContainer>
    </Explanations>
  );
};
