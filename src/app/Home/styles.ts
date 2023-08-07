import { css } from "@emotion/react";

export const container = css`
  background-color: #eef2f6;
  color: #000;
  font-family: Roboto, sans-serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  direction: ltr;

  .h3, h4 {
    margin: 0;
  }

  ul {
    padding: 0
  }
`;

export const card = css`
  display: flex;
  flex-direction: column;
  margin-top: 10vh;
  padding: 50px;
`;

export const input = css`
  color: black;
  .MuiInputLabel-root {
    color: #6a806c !important;
  }
  .MuiInputBase-root {
    border-radius: 8px;
    padding: 0;
    color: black;
    input {
      &:-webkit-autofill {
        -webkit-box-shadow: unset;
        -webkit-text-fill-color: unset;
      }
    }
    fieldset {
      border-color: rgba(0, 0, 0, 0.23) !important;

      &:hover {
        background-color: rgba(0, 0, 0, 0.23);
      }
      &:focus {
        background-color: rgba(0, 0, 0, 0.23);
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.23);
      }
      &:disabled {
        color: rgba(0, 0, 0, 0.23);
        pointer-events: none;
      }
      &::placeholder {
        color: rgba(0, 0, 0, 0.23);
      }
    }
  }
`;

export const submitButton = css`
  background-color: #6a806c !important;
  margin-left: 20px;
`;

export const loading = css`
  &.MuiCircularProgress-root {
    color: ##6a806c;
  }
`;

export const dataContainer = css`
  display: flex;
  column-gap: 100px;
`;
