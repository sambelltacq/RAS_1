import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TraditionalLayout from "../../../components/UI/Layout/ComposedLayouts/TraditionalLayout";
import Grid from "@mui/material/Grid";

const Example = () => {
  return (
    <TraditionalLayout
      title="Staging Area Examples"
      denseAppBar
      alignTitle="center"
    >
      <Grid
        container
        direction="row"
        item
        justifyContent="center"
        spacing={1}
        alignItems="center"
        style={{ paddingTop: 64 }}
      >
        <Grid item lg={4} sm={4} xs={2}></Grid>
        <Grid item lg={2} sm={4} xs={8}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            spacing={3}
            alignItems="stretch"
          >
            <Grid item xs={12}>
              <Button
                fullWidth
                sx={{ mt: "10px", pt: "10px" }}
                component={Link}
                to="/Example1"
                color="primary"
                variant="contained"
              >
                {" "}
                Example1{" "}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                sx={{ mt: "10px", pt: "10px" }}
                component={Link}
                to="/Example2"
                color="primary"
                variant="contained"
              >
                {" "}
                Example2{" "}
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                sx={{ mt: "10px", pt: "10px" }}
                component={Link}
                to="/Example3"
                color="primary"
                variant="contained"
              >
                {" "}
                Example3{" "}
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={4} sm={4} xs={2}></Grid>
      </Grid>
    </TraditionalLayout>
  );
};

export default Example;
