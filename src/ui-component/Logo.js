import { useTheme } from '@mui/material/styles';

import logo from 'assets/images/wise-transparent-2.png';

const Logo = () => {
    const theme = useTheme();

    return <img src={logo} alt="Berry" width="100" />;
};

export default Logo;
