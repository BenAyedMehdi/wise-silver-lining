import { Grid, Link } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { IconPlaneDeparture } from '@tabler/icons';
import FutureTrip from './FutureTrip';
import CountryDetails from './CountryDetails';

// ==============================|| TYPOGRAPHY ||============================== //

const InternationalSpending = () => (
    <div>
        <MainCard title="Previous Trips">
            <CountryDetails />
        </MainCard>
    </div>
);

export default InternationalSpending;
