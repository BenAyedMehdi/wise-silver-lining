import SubCard from 'ui-component/cards/SubCard';
import { Grid, Stack } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import CustomButton from 'views/CustomButton';

export default function RedeemCard({ logo, desc, btitle }) {
    return (
        <SubCard>
            <Stack direction={'row'} sx={{ justifyContent: 'space-between' }}>
                {logo}
                <MuiTypography variant="body" display="block" gutterBottom>
                    {desc}
                </MuiTypography>
            </Stack>

            <CustomButton icon={<></>} title={btitle} />
        </SubCard>
    );
}
