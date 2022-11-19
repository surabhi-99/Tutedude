import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const breakpoints = {
    values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
    },
}

let theme = createTheme({
    palette: {
        primary: {
            main: '#800080',
            light: '#8ED1FC',
        },
        secondary: {
            main: '#C21170',
        },
        text: {
            primary: '#800080',
            secondary: '#7C7C7C',
            disabled: '#999999',
        },
        background: {
            default: '#EEEEEE',
        },
        info: {
            main: '#7C7C7C',
        },
    },
    typography: {
        fontFamily: 'Montserrat',
        h1: {
            fontSize: 32,
            fontWeight: 500,
        },
        h2: {
            fontSize: 24,
            fontWeight: 600,
        },
        h3: {
            fontSize: 20,
            fontWeight: 500,
            letterSpacing: '150%'
        },
        h4: {
            fontSize: 20,
            fontWeight: 700,
        },
        h5: {
            fontSize: 18,
            fontWeight: 700,
        },
        h6: {
            fontSize: 16,
            fontWeight: 500,
        },
        body1: {
            fontSize: 16,
            fontWeight: 500,
        },
        body2: {
            fontSize: 16,
            fontWeight: 400,
        },
        button: {
            fontSize: 16,
            fontWeight: 500,
        },
        subtitle1: {
            fontSize: 18,
            fontWeight: 500,
        },
        subtitle2: {
            fontSize: 14,
            fontWeight: 400,
        },
        caption: {
            fontSize: 10,
            fontWeight: 400,
        },
    },
    breakpoints,
})

theme = responsiveFontSizes(theme)

theme.shadows[1] =
    '0px 3px 100px rgba(0, 0, 0, 0.1);'

export default theme
