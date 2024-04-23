import { styled } from "styled-components";

export const DetailsParent = styled.div`
  width: 100%;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
`;

export const TextContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;

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
