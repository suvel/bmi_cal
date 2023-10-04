import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const SectionContainer = ({ children, ...rest }) => {
  return (
    <Paper square={false} sx={{ maxWidth: '500px' }} {...rest}>
      <Box padding={'30px'}>{children}</Box>
    </Paper>
  );
};

export default SectionContainer;
