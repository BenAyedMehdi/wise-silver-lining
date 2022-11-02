import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

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
import DetailsCard from './DetailsCard';
import { IconTrack } from '@tabler/icons';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const CountryDetails = ({ isLoading }) => {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const [detail, setDetail] = useState(countryDetailsArray);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(() => {
        setDetail((prevDetail) => {
            const newDetail = [];
            prevDetail.map((pDetail) => {
                const spendingGap = pDetail.budget - (pDetail.expenses + pDetail.transport + pDetail.accommodation);
                const percentageDiff = Math.floor((Math.abs(spendingGap) / pDetail.budget) * 100);
                newDetail.push({ ...pDetail, spendingDifference: percentageDiff, overspend: spendingGap < 0 });
            });
            return newDetail;
        });
    }, []);

    const CountryElement = detail.map(({ name, budget, transport, accommodation, expenses, overspend, spendingDifference }) => (
        <DetailsCard
            name={name}
            budget={budget}
            transport={transport}
            accommodation={accommodation}
            expenses={expenses}
            overspend={overspend}
            spendingDifference={spendingDifference}
            key={name}
        />
    ));

    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <Grid container spacing={gridSpacing}>
                    {CountryElement}
                </Grid>
            )}
        </>
    );
};

CountryDetails.propTypes = {
    isLoading: PropTypes.bool
};

export default CountryDetails;
