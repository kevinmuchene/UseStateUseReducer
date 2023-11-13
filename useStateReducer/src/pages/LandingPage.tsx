import { styled } from "@mui/material/styles";
import { Container, Paper, Grid, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { generateColorRange } from "./ColorGenerator";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "purple",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function LandingPage() {
  const [color, setColor] = useState<string>("red");
  const [nameColor, setNameColor] = useState<string>("red");
  const [triggerChange, setTriggerChange] = useState<boolean>(true);

  const changeColor = (value: string) => {
    const colorRange = generateColorRange(value);
    let index = 0;

    const intervalId = setInterval(() => {
      setColor(colorRange[index].color);
      setNameColor(colorRange[index].name);
      index += 1;

      if (index === colorRange.length) {
        clearInterval(intervalId);
        setTriggerChange(false);
      }
    }, 1000);
  };

  useEffect(() => {
    if (triggerChange) {
      changeColor(color);
    }
  }, [triggerChange]);

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
      <Grid item spacing={2} minHeight={"90vh"} sx={{ backgroundColor: color }}>
        <Typography color={"orange"} variant="h2" textAlign={"center"}>
          {nameColor}
        </Typography>
      </Grid>
    </Container>
  );
}
