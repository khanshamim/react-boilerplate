import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import KCTabs from "../../components/muiExtended/kcTabs/kcTabs";
import { TABS_DATA } from "./mockData";
import Tile from "../../components/tile/tile";
import AcUnitOutlinedIcon from "@mui/icons-material/AcUnitOutlined";
import MyRecentReports from "./myRecentReports/myRecentReports";

const Dashboard = () => {
  return (
    <Box component="main" sx={{ p: 2 }}>
      <Typography variant="h4">Dashboard</Typography>
      <Grid container direction="row" justifyContent="center" alignItems="flex-start" spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <MyRecentReports />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Tile
            heading={"With Heading & Sub Heading"}
            subHeading="As on date: 11/01/2022"
            icon={<AcUnitOutlinedIcon color="primary" fontSize="large" />}
          >
            <Typography variant="h4" sx={{ p: "16px 0" }}>
              Content Can Go Below...
            </Typography>
            <Typography variant="body1" sx={{ p: "16px 0" }}>
              Footer can go here
            </Typography>
          </Tile>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Tile heading={"Tile Without Icon & Sub Heading"}>
            <KCTabs tabs={TABS_DATA} />
          </Tile>
        </Grid>
      </Grid>
    </Box>
  );
};

export default React.memo(Dashboard);
