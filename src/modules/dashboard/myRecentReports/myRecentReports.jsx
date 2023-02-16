import React from "react";
import BlurCircularOutlinedIcon from "@mui/icons-material/BlurCircularOutlined";
import Tile from "../../../components/tile/tile";
import KcTabs from "../../../components/muiExtended/kcTabs/kcTabs";
import { Button, Divider, Typography } from "@mui/material";

const Row = (props) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px 0",
        }}
      >
        <div>
          <Typography variant="subtitle1" color={"primary"}>
            {props.heading}
          </Typography>
          <Typography variant="subtitle2">{props.description}</Typography>
        </div>
        <Typography variant="subtitle2" sx={{ opacity: 0.6 }}>
          {props.date}
        </Typography>
      </div>
      <Divider />
    </>
  );
};

const TABS_DATA = [
  {
    label: "My Recent Reports",
    panel: (
      <>
        <Row
          heading="Standard Total Report for Affiliated Funds"
          description="Report Description"
          date="11/02/2022"
        />
        <Row
          heading="Standard Total Report"
          description="October month comparision of MTP, Standard total..."
          date="14/04/2022"
        />
        <Row
          heading="Report for Alternative Investments"
          description="Alternative investments of MTP, Standard total..."
          date="15/02/2023"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gridGap: "16px",
            paddingTop: "16px",
          }}
        >
          <Button variant="outlined" size="small">
            Create New Report
          </Button>
          <Button variant="outlined" size="small">
            View All Reports
          </Button>
        </div>
      </>
    ),
  },
  {
    label: "My Recent Comparisions",
    panel: "Panel Comparisions",
  },
];

const MyRecentReports = () => {
  return (
    <Tile
      icon={<BlurCircularOutlinedIcon color="primary" fontSize="large" />}
      heading="My Recent Reports & Comparisions"
    >
      <KcTabs tabs={TABS_DATA} />
    </Tile>
  );
};

export default MyRecentReports;
