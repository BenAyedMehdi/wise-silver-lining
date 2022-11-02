import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, CardActions, CardContent, Divider, Grid, Menu, MenuItem, Typography } from '@mui/material';

// project imports
import BajajAreaChartCard from '../dashboard/Default/BajajAreaChartCard';
import MainCard from 'ui-component/cards/MainCard';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

// assets
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import countryDetailsArray from './countryDetailsArray';

const DetailsCard = ({ name, budget, transport, accommodation, expenses, overspend, spendingDifference }) => {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Grid item xs={12} md={4}>
            <MainCard content={false}>
                <CardContent>
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <Grid container alignContent="center" justifyContent="space-between">
                                <Grid item>
                                    <Typography variant="h4">{name}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="column">
                                <Grid item>
                                    <Grid container alignItems="center" justifyContent="space-between">
                                        <Grid item>
                                            <Typography variant="subtitle1" color="inherit">
                                                Budget
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Grid container alignItems="center" justifyContent="space-between">
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        HUF {numberWithCommas(budget)}
                                                    </Typography>
                                                </Grid>
                                                <Grid item>
                                                    <Avatar
                                                        variant="rounded"
                                                        sx={{
                                                            width: 16,
                                                            height: 16,
                                                            borderRadius: '5px',
                                                            backgroundColor: overspend
                                                                ? theme.palette.orange.light
                                                                : theme.palette.success.light,
                                                            color: overspend ? theme.palette.orange.dark : theme.palette.success.dark,
                                                            ml: 2
                                                        }}
                                                    >
                                                        {overspend ? (
                                                            <KeyboardArrowDownOutlinedIcon fontSize="small" color="inherit" />
                                                        ) : (
                                                            <KeyboardArrowUpOutlinedIcon fontSize="small" color="inherit" />
                                                        )}
                                                    </Avatar>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle2" sx={{ color: overspend ? theme.palette.orange.dark : 'success.dark' }}>
                                        {spendingDifference}% {overspend ? 'overspend' : 'remains'}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container direction="column">
                                <Grid item>
                                    <Grid container alignItems="center" justifyContent="space-between">
                                        <Grid item>
                                            <Typography variant="subtitle1" color="inherit">
                                                Transport:
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Grid container alignItems="center" justifyContent="space-between">
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        HUF {numberWithCommas(transport)}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Divider sx={{ my: 1.5 }} />
                            <Grid container direction="column">
                                <Grid item>
                                    <Grid container alignItems="center" justifyContent="space-between">
                                        <Grid item>
                                            <Typography variant="subtitle1" color="inherit">
                                                Accommodation
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Grid container alignItems="center" justifyContent="space-between">
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        HUF {numberWithCommas(accommodation)}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Divider sx={{ my: 1.5 }} />
                            <Grid container direction="column">
                                <Grid item>
                                    <Grid container alignItems="center" justifyContent="space-between">
                                        <Grid item>
                                            <Typography variant="subtitle1" color="inherit">
                                                Expenses
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Grid container alignItems="center" justifyContent="space-between">
                                                <Grid item>
                                                    <Typography variant="subtitle1" color="inherit">
                                                        HUF {numberWithCommas(expenses)}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions sx={{ p: 1.25, pt: 0, justifyContent: 'center' }}>
                    <Button size="small" disableElevation>
                        View All
                        <ChevronRightOutlinedIcon />
                    </Button>
                </CardActions>
            </MainCard>
        </Grid>
    );
};
DetailsCard.propTypes = {
    name: PropTypes.string,
    budget: PropTypes.number,
    transport: PropTypes.number,
    accommodation: PropTypes.number,
    expenses: PropTypes.number,
    overspend: PropTypes.bool,
    spendingDifference: PropTypes.number
};
export default DetailsCard;
