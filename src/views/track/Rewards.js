import { Button, CircularProgress, Divider, Grid, Link, Stack } from '@mui/material';
import MuiTypography from '@mui/material/Typography';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import { gridSpacing } from 'store/constant';
import { IconChecks, IconCoin, IconWallet } from '@tabler/icons';
import TotalIncomeDarkCard from 'views/dashboard/Default/TotalIncomeDarkCard';
import TotalIncomeLightCard from 'views/dashboard/Default/TotalIncomeLightCard';
import CircularStatic from './CircularProgressWithLabel';
import RewardCheckmark from './Checkmark';
import styled from 'styled-components';
import RewardDetails from './RewardDetails';

// ==============================|| TYPOGRAPHY ||============================== //

const Rewards = () => (
    <>
        <MainCard title="Get Rewarded for keeping on track" secondary={<IconCoin />}>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12} sm={6}>
                    <TotalIncomeDarkCard isLoading={false} />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TotalIncomeLightCard isLoading={false} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Achieved Saving Goals">
                        <ContentWrapper spacing={0}>
                            <RewardDetails title={'On Track Budget'} description="Completed October 2022" points={'20'} />
                            <RewardDetails title={'On Track Budget'} description="Completed September 2022" points={'20'} />
                            <RewardDetails title={'On Track Budget'} description="Completed August 2022" points={'20'} />
                            <RewardDetails title={'On Track Budget'} description="Completed June 2022" points={'20'} />
                            <RewardDetails title={'On Track Budget'} description="Completed May 2022" points={'20'} />
                            <RewardDetails title={'On Track Budget'} description="Completed April 2022" points={'20'} />
                        </ContentWrapper>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Referals">
                        <ContentWrapper spacing={0}>
                            <RewardDetails title={'Referred'} description="Abdulrahim Iliasu" points={'30'} />
                            <RewardDetails title={'Referred'} description="Ayo" points={'30'} />
                            <RewardDetails title={'Referred'} description="Ume" points={'30'} />
                            <RewardDetails title={'Referred'} description="Ben" points={'30'} />
                            <RewardDetails title={'Referred'} description="Abdulrehman" points={'30'} />
                            <RewardDetails title={'Referred'} description="Basit" points={'30'} />
                        </ContentWrapper>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubCard title="International Spendings">
                        <ContentWrapper spacing={0}>
                            <RewardDetails title={'Spent'} description="100, 000 HUF" points={'30'} />
                            <RewardDetails title={'Spent'} description="200, 000 HUF" points={'30'} />
                            <RewardDetails title={'Spent'} description="400, 000 HUF" points={'30'} />
                            <RewardDetails title={'Spent'} description="150, 000 HUF" points={'30'} />
                            <RewardDetails title={'Spent'} description="110, 000 HUF" points={'30'} />
                        </ContentWrapper>
                    </SubCard>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <SubCard title="Jars Savings">
                        <ContentWrapper spacing={0}>
                            <RewardDetails title={'Saved'} description="10, 000 HUF" points={'10'} />
                            <RewardDetails title={'Saved'} description="20, 000 HUF" points={'10'} />
                            <RewardDetails title={'Saved'} description="40, 000 HUF" points={'10'} />
                            <RewardDetails title={'Saved'} description="10, 000 HUF" points={'10'} />
                            <RewardDetails title={'Saved'} description="11, 000 HUF" points={'10'} />
                        </ContentWrapper>
                    </SubCard>
                </Grid>
            </Grid>
        </MainCard>
        <Divider />
    </>
);

const ContentWrapper = styled.div`
    display: grid;
    gap: 6px;
`;

export default Rewards;
