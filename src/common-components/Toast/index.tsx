import * as styles from "./styles";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

function Toast() {
  return (
    <ToastContainer
      position="top-center"
      enableMultiContainer
      autoClose={7_000}
      hideProgressBar
      limit={3}
      css={styles.container}
      transition={Slide}
    />
  );
}

export default Toast;
