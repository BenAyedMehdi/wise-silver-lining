import { Grid } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import CustomButton from './CustomButton';
import FutureTrip from './track/FutureTrip';
import { gridSpacing } from 'store/constant';
import { Stack } from '@mui/material';
import { IconPlus } from '@tabler/icons';

export default function Plan() {
    return (
        <MainCard title="Future trips">
            <Stack spacing={2}>
                <CustomButton title="Add Trip" icon={<IconPlus />} />
                <Grid container spacing={gridSpacing} xs="auto" item>
                    <Grid item sm={12} xs={12} md={6} lg={6}>
                        <FutureTrip country={'USA'} days="19" budget={'700,000'} isLoading={false} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6}>
                        <FutureTrip country={'Egypt'} days="19" budget={'200,000'} isLoading={false} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6}>
                        <FutureTrip country={'Tunisia'} days="10" budget={'100,000'} isLoading={false} />
                    </Grid>
                    <Grid item sm={12} xs={12} md={6} lg={6}>
                        <FutureTrip country={'Nigeria'} days="28" budget={'70,000'} isLoading={false} />
                    </Grid>
                </Grid>
            </Stack>
        </MainCard>
    );
}
