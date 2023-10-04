import { createTheme } from '@mui/material/styles';

// Define the custom theme
const theme = createTheme({
    palette: {
        mode: 'dark',
    },
    typography: {
        fontFamily: [
            'Martian Mono',
            'Poppins', // Include Poppins as the primary font
            'Arial',
            'sans-serif',
        ].join(','),
    },
    // Add any additional theme customization here
});

export default theme;