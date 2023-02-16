import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent, { cardContentClasses } from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const StyledTileHeader = styled("div")(() => ({
  display: "flex",
  width: "100%",
}));

const StyledTileIcon = styled("div")(({ theme }) => ({
  display: "flex",
  paddingRight: theme.spacing(1),
}));

const StyledHeadingSection = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  gridGap: theme.spacing(2),
  alignItems: "center",
}));

const StyledTileContent = styled((props) => {
  return <CardContent {...props} />;
})(({ theme }) => {
  return {
    [`&.${cardContentClasses.root}`]: {
      padding: theme.spacing(0),
    },
  };
});

const Tile = (props) => {
  const {
    icon,
    heading,
    subHeading,
    children,
    cardProps,
    headingProps,
    subHeadingProps,
    cardContentProps,
  } = props;

  const hasTileHeader = React.useMemo(() => {
    return !!(icon || heading || subHeading);
  }, [icon, heading, subHeading]);

  return (
    <Card sx={{ p: 2 }} {...cardProps} data-testid="tileCard">
      {hasTileHeader && (
        <StyledTileHeader>
          {icon && <StyledTileIcon data-testid="tileIcon">{icon}</StyledTileIcon>}
          <StyledHeadingSection>
            <Typography variant="subtitle1" {...headingProps} data-testid="tileHeading">
              {heading}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ opacity: 0.6 }}
              {...subHeadingProps}
              data-testid="tileSubHeading"
            >
              {subHeading}
            </Typography>
          </StyledHeadingSection>
        </StyledTileHeader>
      )}
      <StyledTileContent {...cardContentProps} data-testid="tileContent">
        {children}
      </StyledTileContent>
    </Card>
  );
};

Tile.propTypes = {
  cardProps: PropTypes.object,
  headingProps: PropTypes.object,
  subHeadingProps: PropTypes.object,
  cardContentProps: PropTypes.object,
  icon: PropTypes.node,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
  children: PropTypes.node,
};

export default React.memo(Tile);
