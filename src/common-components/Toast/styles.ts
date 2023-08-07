import { useMemo } from "react";
import { css } from "@emotion/react";
import { useTheme } from "@mui/material";

export const container = css`
  padding: 0 32px;
  top: 1em;
  left: 50%;
  transform: translateX(-50%);
  @media (min-width: 480px) {
    width: auto;
  }

  .Toastify__toast {
    font-family: "Inter", sans-serif;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    font-weight: 500;
    font-size: 13px;
    min-height: 48px;
    padding: 6px 16px;
  }

  .Toastify__toast-body {
    margin: auto 0 !important;
    padding: 0;
  }

  .Toastify__toast-icon {
    display: none;
  }

  .Toastify__close-button {
    transition: color 100ms;
    margin: auto 0 auto 16px;
    width: 16px;
    height: 16px;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .Toastify__toast--error {
  }

  .Toastify__toast--success {

    &:hover {
    }
  }

  .Toastify__toast--info {
  }
`;
