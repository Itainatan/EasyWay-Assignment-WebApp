import { Button, CircularProgress, Toolbar, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AppBar, } from "@src/common-components";
import * as styles from "./styles";
import useHome from "./hooks";

const Home = () => {
  const { onSubmit, isLoading, register, data, history, setData } =
    useHome();

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
            {...register("search", {
              required: "Password is required",
            })}
          />
          {isLoading ? (
            <CircularProgress color="inherit" />
          ) : (
            <Button type="submit" variant="contained" css={styles.submitButton} onClick={onSubmit}>
              search
            </Button>
          )}
        </form>

        <div css={styles.dataContainer}>
          <ul>
            <h1>History:</h1>
            {history?.map((city, index) => {
              return (
                <li key={index} style={{ marginBottom: '10px' }} onClick={() => setData([city])}>
                  <h3>{city?.name ?? city?.data?.name}</h3>
                </li>
              )
            })}
          </ul>

          <ul>
            <h1>Data From Search:</h1>
            {data.map((city, index) => {
              return(
                <li key={index}>
                  <h3>{city?.name}</h3>
                  <h4>current weather - {city?.data?.current?.cloud}</h4>
                </li>
              )
            })}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Home;
