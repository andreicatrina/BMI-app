import { styled } from "styled-components";

export const Landing = styled.section`
  min-height: 100vh;
  background: rgb(255, 255, 255);
  background: linear-gradient(126deg, rgba(255, 255, 255, 1) 0%, rgba(151, 167, 239, 1) 77%);
`;

export const LandingContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 120px 24px;
  gap: 24px;
  /* position: relative; */
`;

export const LandingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
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
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: #fff;
  width: 100%;
  max-width: 600px;
  padding: 48px 24px;
  border-radius: 10px;
  margin-top: 128px;
  /* position: absolute;
  top: 200px;
  left: 50%; */

  h3 {
    margin-bottom: 12px;
    font-size: 20px;
    font-weight: 600;
  }
`;

export const CalculatorInputsContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const HeightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  label {
    font-size: 16px;
    font-weight: 500;
    color: var(--color-p-text);
  }
`;

export const HeightInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  p {
    font-size: 16px;
    font-weight: 600;
    color: var(--color-text);
  }

  input {
    height: 28px;
    border: 1px solid var(--color-p-text);
    border-radius: 4px;
    padding-left: 4px;
    font-size: 16px;
  }
`;

export const WeightContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  label {
    font-size: 16px;
    font-weight: 500;
    color: var(--color-p-text);
  }
`;

export const WeightInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  p {
    font-size: 16px;
    font-weight: 600;
    color: var(--color-text);
  }

  input {
    height: 28px;
    border: 1px solid var(--color-p-text);
    border-radius: 4px;
    padding-left: 4px;
    font-size: 16px;
  }
`;

export const CalculatorInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-div-background);
  color: #fff;
  padding: 48px 12px;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  border-bottom-right-radius: 80px;
  border-top-right-radius: 80px;
  gap: 16px;
  h3 {
    font-size: 20px;
    font-weight: 600;
  }
  p {
    font-size: 16px;
    font-weight: 400;
  }
`;
