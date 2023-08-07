import { Button, CircularProgress, IconButton, Toolbar, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AppBar, } from "@src/common-components";
import * as styles from "./styles";
import useLogin from "./hooks";

const Login = () => {
  const { onSubmit, isLoading, } =
    useLogin();

  return (
    <div css={styles.container}>
      <AppBar position="absolute" open={false} >
        <Toolbar
          sx={{
            pr: "24px",
          }}
        >
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            EasyWay - Wether App
          </Typography>
        </Toolbar>
      </AppBar>

      <div css={styles.card}>
        <form onSubmit={onSubmit} style={{
          display: 'flex',
          height: 'min-content',
        }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="type locations"
            css={styles.input}
          />
          {isLoading ? (
            <CircularProgress color="inherit" />
          ) : (
            <Button type="submit" variant="contained" css={styles.submitButton} onClick={onSubmit}>
              search
            </Button>
          )}
        </form>
      </div>

    </div>
  );
};

export default Login;
