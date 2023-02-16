import { memo, useEffect, useState } from "react";
import styles from "./tickerBar.styles";
import Marquee from "react-fast-marquee";
import { Typography, Box, Grid, Divider } from "@mui/material";
import { withStyles } from "@mui/styles";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import IconButton from '@mui/material/IconButton';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const TickerBar = (props) => {
    const { classes } = props;
    const [tickerData, setTickerDate] = useState([]);
    const [playTicker, setPlayTicker] = useState(true);

    const fetchTickerData = () => {
        const data = [{ name: "S & 500", price: 11669, discount: 1.71, growth: 'down' },
        { name: "S&PLatinAmerica40", price: 11200, discount: 2.05, growth: 'down' },
        { name: "S&PAsia50", price: 16179, discount: 1.11, growth: 'up' },
        { name: "S&PGlobal BMI", price: 1216, discount: 0.57, growth: 'down' },
        { name: "S&PChine500", price: 21216, discount: 1.57, growth: 'down' },
        { name: "S&PEurope340", price: 1216, discount: 0.57, growth: 'down' },
        { name: "S&P500Bond", price: 1579, discount: 0.79, growth: 'up' },
        { name: "DJIA", price: 2816, discount: 1.21, growth: 'up' },
        { name: "S&P/TSX60", price: 2228, discount: 1.91, growth: 'up' },
        { name: "S&P/ASX200", price: 2228, discount: 1.91, growth: 'down' },
        { name: "S & 500", price: 11669, discount: 1.71, growth: 'down' },
        { name: "S&PLatinAmerica40", price: 11200, discount: 2.05, growth: 'down' },
        { name: "S&PAsia50", price: 16179, discount: 1.11, growth: 'up' },
        { name: "S&PGlobal BMI", price: 1216, discount: 0.57, growth: 'down' },
        { name: "S&PChine500", price: 21216, discount: 1.57, growth: 'down' },
        { name: "S&PEurope340", price: 1216, discount: 0.57, growth: 'down' },
        { name: "S&P500Bond", price: 1579, discount: 0.79, growth: 'up' },
        { name: "DJIA", price: 2816, discount: 1.21, growth: 'up' },
        { name: "S&P/TSX60", price: 2228, discount: 1.91, growth: 'up' },
        { name: "S&P/ASX200", price: 2228, discount: 1.91, growth: 'down' }];
        setTickerDate(data);
    };

    useEffect(() => {
        fetchTickerData();
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                data-test="tickerContainer"
                className={classes.container}>
                <Grid item xs={1}>
                    <Typography variant="body2" >
                        INDICES
                    </Typography>
                    <Typography variant="body2" className={classes.disclaimerLink}>
                        Disclaimer
                    </Typography>
                </Grid>
                <Grid item xs={10}>
                    <Marquee play={playTicker} gradient={false}>
                        {
                            tickerData.map((item, index) => (
                                <Grid item key={item.name + index} className={classes.tickerItem}>
                                    <Typography variant="body2" className={classes.tickerName} data-test="tickerName">{item.name}</Typography>

                                    <Grid className={classes.pricePanel}>
                                        <Typography variant="caption" className={classes.price}>
                                            {item.price}
                                        </Typography>
                                        {
                                            item.growth === 'up' ?
                                                <Typography variant="caption" className={classes.disountProfit}>
                                                    +{item.discount}% <ArrowUpwardIcon fontSize={"small"} />
                                                </Typography>
                                                :
                                                <Typography variant="caption" className={classes.discountLoss}>
                                                    -{item.discount}% <ArrowDownwardIcon fontSize={"small"} />
                                                </Typography>
                                        }
                                    </Grid>
                                </Grid>
                            ))
                        }
                    </Marquee>
                </Grid>
                <Grid item xs={1} className={classes.actionButtonPanel}>
                    {

                        playTicker ?
                            <IconButton color="inherit" aria-label="pause ticker" component="label" onClick={() => setPlayTicker(false)}>
                                <PauseIcon />
                            </IconButton> :
                            <IconButton color="inherit" aria-label="play ticker" component="label" onClick={() => setPlayTicker(true)}>
                                <PlayArrowIcon />
                            </IconButton>
                    }
                    <Divider orientation="vertical" className={classes.divider} flexItem />
                </Grid>
            </Grid>
        </Box>
    );
};

export default memo(withStyles(styles, { withTheme: true })(TickerBar));
