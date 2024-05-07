import { styled } from "styled-components";

export const DetailsParent = styled.div`
  width: 100%;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const TextContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  -webkit-box-shadow: 7.5px 8px 15px 3px #d5dbf8;
  -moz-box-shadow: 7.5px 8px 15px 3px #d5dbf8;
  box-shadow: 7.5px 8px 15px 3px #d5dbf8;

  h3 {
    font-size: 24px;
    font-weight: 700;
    padding: 12px 0;
  }

  p {
    font-size: 16px;
    font-weight: 600;
    color: var(--color-p-text);
  }
`;

export const TipsContainer = styled.div`
  display: flex;
  justify-content: center;
  background: rgba(227, 242, 253, 0.3);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  -webkit-box-shadow: 7.5px 8px 15px 3px #d5dbf8;
  -moz-box-shadow: 7.5px 8px 15px 3px #d5dbf8;
  box-shadow: 7.5px 8px 15px 3px #d5dbf8;
  padding: 60px 24px;
  border-radius: 8px;
  margin: 48px 24px;
  gap: 12px;
`;

export const TipContainer1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  gap: 4px;
  padding: 8px;
  border-right: 6px solid #fff;

  p {
    color: var(--color-p-text);
    font-size: 14px;
    font-weight: 600;
  }

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    color: #ffafcc;
    background-color: #ffe5ec;
    border-radius: 16px;
    padding: 2px;
  }
`;
export const TipContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  gap: 4px;
  padding: 8px;
  border-right: 6px solid #fff;

  p {
    color: var(--color-p-text);
    font-size: 14px;
    font-weight: 600;
  }

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    color: #ff9f1c;
    background-color: #ffe6a7;
    border-radius: 16px;
    padding: 2px;
  }
`;
export const TipContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
  gap: 4px;
  padding: 8px;

  p {
    color: var(--color-p-text);
    font-size: 14px;
    font-weight: 600;
  }

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    color: #48cae4;
    background-color: #caf0f8;
    border-radius: 16px;
    padding: 2px;
  }
`;
