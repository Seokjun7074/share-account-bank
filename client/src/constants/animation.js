import { keyframes } from "styled-components";

export const slideDown = keyframes` /* 2. css코드를 씀. */
  0%{
      transform: translate(0, -100%);
      opacity: 0;
  }
  100%{
      transform: translate(0, 0);
      opacity: 100%;
  }
`;

export const slideUp = keyframes` /* 2. css코드를 씀. */
  0%{
      transform: translate(0, 100%);
      opacity: 0;
  }
  100%{
      transform: translate(0, 0);
      opacity: 100%;
  }
`;
