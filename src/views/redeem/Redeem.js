import MainCard from 'ui-component/cards/MainCard';
import { Grid, Stack } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import SubCard from 'ui-component/cards/SubCard';
import { IconWallet } from '@tabler/icons';
import { Airbnb, Booking, RyanAir, WizAir } from 'views/svg/SVG';
import CustomButton from 'views/CustomButton';
import RedeemCard from './RedeemCard';

export default function Redeem() {
    return (
        <MainCard title="203 Wise Points Available to use" secondary={<IconWallet />}>
            <Stack spacing={1}>
                <RedeemCard desc="Get 10% off your next stay at an Airbnb bookings" btitle={'Redeem for 20 points'} logo={<Airbnb />} />
                <RedeemCard desc="Get 10% off your next stay at an  Bookings.com" btitle={'Redeem for 40 points'} logo={<Booking />} />
                <RedeemCard desc="Get 10% off your next flight with Ryan Air" btitle={'Redeem for 50 points'} logo={<RyanAir />} />
            </Stack>
        </MainCard>
    );
}
