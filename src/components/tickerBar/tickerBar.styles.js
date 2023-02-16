export default (theme) => ({
    container: {
      padding: `0 ${theme.spacing(2)}`,
      minHeight: 60,
      display: "flex",
      alignItems: "center",
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    leftPanel:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingRight: 20
    },
    actionButtonPanel:{
        display: 'flex',
        flexDirection:"row-reverse",
    },
    tickerItem:{
      display: "flex",
      alignItems: "flexStart",
      flexDirection: "column",
      paddingLeft:15,
    },
    disclaimerLink:{
        textDecoration:"underline",
        cursor: "pointer",
        fontSize:10
    },
    pricePanel:{
        display: "flex",
        alignItems: "baseline",
        flexDirection: "row",
    },
    disountProfit: {
        color: '#008000',
         paddingLeft:8,
         fontWeight: 900,
    },
    discountLoss: {
        color: '#ff0000',
        paddingLeft:8,
         fontWeight: 900,
    },
    divider:{
      borderColor: theme.palette.common.white,
      marginRight:15
    }
  });
  