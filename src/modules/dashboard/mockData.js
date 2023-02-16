import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const TABS_DATA = [
  {
    label: "Item One",
    panel: (
      <Box>
        <Typography variant="h5">I'm Typograhy</Typography>
        <Button variant="contained">I'm Primary Button</Button>
      </Box>
    ),
  },
  {
    label: "Item Two",
    panel: <div>Hello</div>,
  },
  { label: "Item Three", panel: "Panel Three" },
  { label: "Item Four", panel: "Panel Four" },
  { label: "Item Five", panel: "Panel Five" },
];
