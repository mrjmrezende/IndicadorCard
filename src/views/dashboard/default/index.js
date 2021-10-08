import React, { useEffect, useState } from "react";

// material-ui
import { Grid } from "@material-ui/core";

// project imports
import EarningCard from "./EarningCard";
import { gridSpacing } from "./../../../store/constant";

//-----------------------|| DEFAULT DASHBOARD ||-----------------------//

const Dashboard = () => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} md={6} sm={6} xs={12}>
            <EarningCard isLoading={isLoading} />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xs={12}></Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item xs={12} md={8}></Grid>
          <Grid item xs={12} md={4}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
