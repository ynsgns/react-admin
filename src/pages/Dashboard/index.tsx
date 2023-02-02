import { Grid, Paper } from "@mui/material";
import React, { useState } from "react";
import { withRouter } from "react-router";
import { Container, LineChart, Doubleaxes } from "../../components";

import "./styles.scss";

function Dashboard() {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  return (
    <div>
      <Container
        title="Dashboard"
        selectedTab={selectedTab}
        setSelectedTab={(index: number) => setSelectedTab(index)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Paper className=".chartContainer">
              <h2>Kullanıcı giriş/işlem istatistikleri</h2>
              <LineChart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper className=".chartContainer">
              <h2>Kullanıcı giriş/işlem istatistikleri</h2>
              <LineChart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={12}>
            <Paper className=".chartContainer">
              <h2>Kullanıcı istatistikleri</h2>
              <Doubleaxes />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default withRouter(Dashboard);
