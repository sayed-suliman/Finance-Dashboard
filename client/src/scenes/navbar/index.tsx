/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {useState} from 'react';
import { Link } from 'react-router-dom';
import PixIcon from '@mui/icons-material/Pix';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Box,Typography,useTheme } from '@mui/material';
import FlexBetween from '@/components/flexBetween';

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {}

const Navbar = (props: Props) => {
    const {palette} = useTheme();
    const [selected,setSelected]= useState('dashboard');
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
        {/* Left Side */}
        <FlexBetween gap="0.75">
            <PixIcon sx={{fontSize:"28px"}} />
            <Typography variant='h4' fontSize="16px">
                Finanseer
            </Typography>
        </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar