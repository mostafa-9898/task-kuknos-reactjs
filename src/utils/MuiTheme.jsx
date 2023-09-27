import { createTheme, ThemeProvider } from "@mui/material";

const MuiThemeProvider = ({ children }) => {

    const theme = createTheme({
        palette: {
            mode: 'dark',
        }
    })

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )

}

export default MuiThemeProvider