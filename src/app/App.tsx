import { SerializedStyles } from "@emotion/react";
import Toast from "@src/common-components/Toast";
import * as styles from "./styles";
import Home from "@src/app/Home";

function App() {
  return (
    <div css={styles.container}>
      <Toast />
      <Home />
    </div>

  );
}

declare module "react" {
  interface HTMLAttributes<T> {
    css?: SerializedStyles | any[];
  }
}

export default App;
