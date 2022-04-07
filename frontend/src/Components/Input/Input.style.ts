import styled from "styled-components";
import { Colors } from "../../Assets/styles/thems";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 15px;

  .input-text {
    background: ${Colors.white};
    font-size: medium;
    padding: 12px 16px;
    border: 1px solid #d6d6d6;
    box-sizing: border-box;
    border-radius: 4px;
    font-weight: normal;
  }
`;
