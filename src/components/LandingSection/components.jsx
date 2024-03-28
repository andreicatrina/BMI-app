import { styled } from "styled-components";

export const Landing = styled.section`
  min-height: 100vh;
  background: rgb(255, 255, 255);
  background: linear-gradient(126deg, rgba(255, 255, 255, 1) 0%, rgba(151, 167, 239, 1) 77%);
`;

export const LandingContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const LandingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  gap: 20px;
  padding: 24px;

  h2 {
    font-size: 54px;
    font-weight: 700;
    width: 100%;
    max-width: 600px;
    padding: 8px;
  }

  p {
    font-size: 20px;
    font-weight: 600;
    line-height: 28px;
    color: var(--color-p-text);
    padding: 8px;
  }
`;

export const CalculatorParentContainer = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 600px;
  padding: 24px;
  border-radius: 10px;

  h3 {
    margin-bottom: 12px;
  }
`;

export const CalculatorInputsContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const HeightContainer = styled.div`
  label {
    font-size: 16px;
    font-weight: 500;
    color: var(--color-p-text);
  }
`;

export const HeightInputContainer = styled.div`
  display: flex;
  gap: 4px;

  p {
    font-size: 16px;
    font-weight: 600;
    color: var(--color-text);
  }
`;

export const WeightContainer = styled.div``;

export const WeightInputsContainer = styled.div``;
