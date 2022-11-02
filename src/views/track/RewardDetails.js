import PropTypes from 'prop-types';
import { useState } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Avatar,
    Item,
    Box,
    Button,
    CardActions,
    CardContent,
    Divider,
    Grid,
    Menu,
    MenuItem,
    Typography
} from '@mui/material';

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
import { IconCheck, IconChecks } from '@tabler/icons';

// ==============================|| DASHBOARD DEFAULT - POPULAR CARD ||============================== //

const RewardDetails = ({ isLoading, title, description, points }) => {
    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {isLoading ? (
                <SkeletonPopularCard />
            ) : (
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={12}>
                        <MainCard content={false}>
                            <CardContent>
                                <Grid container spacing={gridSpacing} item xs={12}>
                                    <Grid container direction="column" item>
                                        <Grid container alignItems="center" justifyContent="space-between">
                                            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <IconChecks color="green" transform="scale(1.8)" />
                                                <Grid item marginLeft="16px">
                                                    <Typography variant="subtitle1" color="inherit">
                                                        {title}
                                                    </Typography>
                                                    <Typography variant="subtitle2" color="inherit">
                                                        {description}
                                                    </Typography>
                                                </Grid>
                                            </Box>

                                            <Grid item>
                                                <Grid container alignItems="center" justifyContent="space-between">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" color="inherit">
                                                            {points} Wise Points
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </MainCard>
                    </Grid>
                </Grid>
            )}
        </>
    );
};

RewardDetails.propTypes = {
    isLoading: PropTypes.bool
};

export default RewardDetails;
