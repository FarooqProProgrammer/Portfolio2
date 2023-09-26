import { Box, IconButton } from '@chakra-ui/react'
import React, { useContext } from 'react'
import {AiOutlineSetting} from "react-icons/ai"
import { NavContext } from '../../hook/NavContext';

export default function ThemeProvider() {

    const {NavEnabled} = useContext(NavContext);

  return (
    <Box 
        position={'absolute'}
        top={'30%'}
        left={'1px'}
        zIndex={NavEnabled && -100}


    >
        <IconButton>
            <AiOutlineSetting color='#8A2CE2' />
        </IconButton>
        
    </Box>
  )
}
