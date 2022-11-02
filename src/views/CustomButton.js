import { ButtonBase, Avatar, Chip } from '@mui/material';
import { IconBell } from '@tabler/icons';
import { useTheme } from '@emotion/react';

export default function CustomButton({ icon, title, action }) {
    const theme = useTheme();

    const handleToggle = () => {
        action();
    };
    return (
        <Chip
            sx={{
                height: '48px',
                alignItems: 'center',
                borderRadius: '27px',
                transition: 'all .2s ease-in-out'
            }}
            icon={icon ? icon : <IconBell />}
            label={title}
            variant="outlined"
            aria-haspopup="true"
            onClick={handleToggle}
            color="primary"
        />
    );
}
