import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const StyledDiv = styled.div`
  animation: ${rotate} 2s linear infinite;
`;

const Spinner = ({ children }) => {
  return (
    <StyledDiv>
      {children ? (
        children
      ) : (
        <div
          className="w-10 h-10 border-4 border-gray-600 rounded-full"
          style={{ borderRightColor: "transparent" }}
        ></div>
      )}
    </StyledDiv>
  );
};

export default Spinner;
