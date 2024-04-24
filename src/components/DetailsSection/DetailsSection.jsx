import React from "react";
import {
  DetailsContainer,
  DetailsParent,
  TextContainer,
  TipContainer1,
  TipContainer2,
  TipContainer3,
  TipsContainer,
} from "./components";
import { GiCupcake } from "react-icons/gi";
import { BiDumbbell } from "react-icons/bi";
import { GiNightSleep } from "react-icons/gi";

export const DetailsSection = () => {
  return (
    <DetailsParent>
      <DetailsContainer>
        <TextContainer>
          <h3>What your BMI result means</h3>
          <p>
            A BMI range of 18.5 to 24.9 is considered a "healthy weight". Maintaining a healthy weight may lower your
            chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious
            diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for
            regular physical activity, ideally about 30 minutes daily for five days a week.
          </p>
        </TextContainer>
        <TipsContainer>
          <TipContainer1>
            <GiCupcake />
            <h3>Healthy eating</h3>
            <p>
              Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity,
              and mood.
            </p>
          </TipContainer1>
          <TipContainer2>
            <BiDumbbell />
            <h3>Regular exercise</h3>
            <p>
              Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering
              wellness and logevity.
            </p>
          </TipContainer2>
          <TipContainer3>
            <GiNightSleep />
            <h3>Adequate sleep</h3>
            <p>
              Sleep enhances mental clarity, emotional stability, and physical wellness, promoting everall restoration
              and rejuvenation.
            </p>
          </TipContainer3>
        </TipsContainer>
      </DetailsContainer>
    </DetailsParent>
  );
};
