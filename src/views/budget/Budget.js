import PopularCard from 'views/dashboard/Default/PopularCard';
import { Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { gridSpacing } from 'store/constant';
import { useInput } from 'hooks/useInput';
import styled from 'styled-components';
import { Box } from '@mui/system';
import CustomButton from 'views/CustomButton';
import { IconDeviceFloppy } from '@tabler/icons';

export default function Budget() {
    const [isLoading, setLoading] = useState(true);
    const budget = useInput('199,900');
    const groceries = useInput('17,200');
    const trnasport = useInput('28,000');
    const entertainment = useInput('15,700');
    const bills = useInput('20,000.00');
    const other = useInput('119,000');

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);
    return (
        <Wrapper>
            <Box
                sx={{
                    display: 'grid',
                    gap: 3,
                    flexWrap: 'wrap',
                    gridTemplateColumns: 'repeat(2, 1fr)'
                }}
            >
                <ContentWrapper>
                    <h3>Montly Budget Planning</h3>
                    <h2>HUF {budget.value}</h2>
                    <TextField fullWidth label="Montly Budget in HUF" placeholder="Insert Expected Montly Spending" {...budget} />
                    <h3>Categories</h3>
                    <SecondCon>
                        <p>Bills</p>
                        <TextField fullWidth placeholder="Insert Expected Montly Spending" {...bills} />
                    </SecondCon>
                    <SecondCon>
                        <p>Groceries</p>
                        <TextField fullWidth placeholder="Insert Expected Montly Spending" {...groceries} />
                    </SecondCon>
                    <SecondCon>
                        <p>Transport</p>
                        <TextField fullWidth placeholder="Insert Expected Montly Spending" {...trnasport} />
                    </SecondCon>
                    <SecondCon>
                        <p>Entertaiment</p>
                        <TextField fullWidth placeholder="Insert Expected Montly Spending" {...entertainment} />
                    </SecondCon>
                    <SecondCon>
                        <p>Other</p>
                        <TextField fullWidth placeholder="Insert Expected Montly Spending" {...other} />
                    </SecondCon>
                    <CustomButton title={'Save'} icon={<IconDeviceFloppy />} />
                </ContentWrapper>
                <ContentWrapper>
                    <PopularCard isLoading={isLoading} />
                </ContentWrapper>
            </Box>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-wrap: wrap;
`;

const ContentWrapper = styled.div`
    display: grid;
    gap: 10px;
`;

const SecondCon = styled.div`
    display: block;
`;
