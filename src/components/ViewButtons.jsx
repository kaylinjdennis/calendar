import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import theme from "./theme.js";
import "./styles.js";

const useStyles = makeStyles({
  buttonGroup: {
    color: "grey",
  },
  button: {
    "&:hover": {
      color: "black",
      // boxShadow: "1px 1px 0px black",
    },
  },
});

export default function ViewButtons() {
  const classes = useStyles();

  return (
    // <ThemeProvider theme={theme}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <ButtonGroup
        variant="outlined"
        aria-label="outlined button group"
        color="inherit"
        className={classes.buttonGroup}
      >
        <Button className={classes.button}>Day</Button>
        <Button className={classes.button}>Week</Button>
        <Button className={classes.button}>Month</Button>
        <Button className={classes.button}>Year</Button>
      </ButtonGroup>
    </Box>
    // </ThemeProvider>
  );
}
