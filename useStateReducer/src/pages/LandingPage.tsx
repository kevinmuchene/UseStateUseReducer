import { styled } from "@mui/material/styles";
import { Container, Paper, Grid, Button, Typography } from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import { generateColorRange } from "./ColorGenerator";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "purple",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const intialState = {
  color: "red",
  nameColor: "red",
  triggerChange: true,
};

function colorReducer(state, action) {
  if (action.type === "SET_COLOR") {
    return {
      ...state,
      color: action.payload.color,
    };
  } else if (action.type === "SET_NAME_COLOR") {
    return {
      ...state,
      nameColor: action.payload.nameColor,
    };
  } else if (action.type === "SET_TRIGGER_CHANGE") {
    return {
      ...state,
      triggerChange: action.payload.triggerChange,
    };
  } else {
    return state;
  }
}

export default function LandingPage() {
  const [state, dispatch] = useReducer(colorReducer, intialState);

  const changeColor = (value: string) => {
    const colorRange = generateColorRange(value);
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < colorRange.length) {
        dispatch({
          type: "SET_COLOR",
          payload: { color: colorRange[index].color },
        });
        dispatch({
          type: "SET_NAME_COLOR",
          payload: { color: colorRange[index].name },
        });
        console.log(colorRange[index].name);
        index += 1;
      }
      console.log("check this");
      if (index === colorRange.length) {
        clearInterval(intervalId);
        dispatch({
          type: "SET_TRIGGER_CHANGE",
          payload: { triggerChange: false },
        });
      }
    }, 1000);
  };

  useEffect(() => {
    if (state.triggerChange) {
      changeColor(state.color);
    }
  }, [state.triggerChange]);

  return (
    <Container
      sx={{
        flexGrow: 1,
        marginTop: "1em",
        height: "97vh",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ marginBottom: "1em" }}
        maxHeight={"10%"}
      >
        <Grid item xs={4}>
          <Item>
            <Button
              onClick={() => changeColor("red")}
              variant="contained"
              color="error"
              fullWidth
            >
              RED
            </Button>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Button
              onClick={() => changeColor("blue")}
              variant="contained"
              fullWidth
            >
              Blue
            </Button>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Button
              onClick={() => changeColor("green")}
              variant="contained"
              color="success"
              fullWidth
            >
              Green
            </Button>
          </Item>
        </Grid>
      </Grid>
      <Grid
        item
        spacing={2}
        minHeight={"90vh"}
        sx={{ backgroundColor: state.color }}
      >
        <Typography color={"orange"} variant="h2" textAlign={"center"}>
          {state.nameColor}
        </Typography>
      </Grid>
    </Container>
  );
}
