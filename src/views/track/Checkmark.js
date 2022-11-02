import { Grid } from '@mui/material';
import { IconChecks } from '@tabler/icons';

export default function RewardCheckmark(props) {
    return (
        <Grid>
            <IconChecks color="green" />
            <span>
                <b>{points} Wise Points</b>
            </span>
        </Grid>
    );
}
