import React from "react";
import {
  AgeContainer,
  AgeTitleContainer,
  Explanations,
  ExplanationsContainer,
  FirstLimitationsContainer,
  GenderContainer,
  GenderTitleContainer,
  LimitationsContainer,
  MuscleContainer,
  MuscleTitleContainer,
  PregnancyContainer,
  PregnancyTitleContainer,
  RaceContainer,
  RaceTitleContainer,
  SecondLimitationsContainer,
  ThirdLimitationsContainer,
} from "./components";

import { BsGenderAmbiguous } from "react-icons/bs";
import { FaBirthdayCake } from "react-icons/fa";
import { IoMdFitness } from "react-icons/io";
import { FaBaby } from "react-icons/fa";
import { GiHumanPyramid } from "react-icons/gi";

export const ExplanationsSection = () => {
  return (
    <Explanations>
      <ExplanationsContainer>
        <FirstLimitationsContainer>
          <LimitationsContainer>
            <h3>Limitations of BMI</h3>
            <p>
              Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific
              groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be
              beneficial to use.
            </p>
          </LimitationsContainer>
          <GenderContainer>
            <GenderTitleContainer>
              <BsGenderAmbiguous />
              <h3>Gender</h3>
            </GenderTitleContainer>
            <p>
              The development and body fat composition of girls and boys vary with age. Consequently, a child's age and
              gender are considered when evaluating their BMI.
            </p>
          </GenderContainer>
        </FirstLimitationsContainer>
        <SecondLimitationsContainer>
          <AgeContainer>
            <AgeTitleContainer>
              <FaBirthdayCake />
              <h3>Age</h3>
            </AgeTitleContainer>
            <p>
              In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.
            </p>
          </AgeContainer>
          <MuscleContainer>
            <MuscleTitleContainer>
              <IoMdFitness />
              <h3>Muscle</h3>
            </MuscleTitleContainer>
            <p>
              BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from
              fat.
            </p>
          </MuscleContainer>
        </SecondLimitationsContainer>
        <ThirdLimitationsContainer>
          <PregnancyContainer>
            <PregnancyTitleContainer>
              <FaBaby />
              <h3>Pregnancy</h3>
            </PregnancyTitleContainer>
            <p>
              Expectant mothers experience weight gain due to their baby. Maintaining a healthy pre-pregnancy BMI is
              advisable to minimise health risks for both mother and child.
            </p>
          </PregnancyContainer>
          <RaceContainer>
            <RaceTitleContainer>
              <GiHumanPyramid />
              <h3>Race</h3>
            </RaceTitleContainer>
            <p>
              Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others.
              To learn more, it is advised to discuss this with your GP or practice nurse.
            </p>
          </RaceContainer>
        </ThirdLimitationsContainer>
      </ExplanationsContainer>
    </Explanations>
  );
};
