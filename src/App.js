import './App.css';
import {ThemeProvider} from '@mui/material/styles';
import theme from "./styles/style";
import Work from "./components/work";
import Header from "./components/header";
import {Box, Container, Grid, Typography} from "@mui/material";
import ReferSummary from "./components/refer-summary";
import ReferralCode from "./components/referral-code";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Header/>
                <Container sx={{marginY: 6}}>
                    <Grid container spacing={10}>
                        <Grid item xs={12} md={6}><ReferSummary/></Grid>
                        <Grid item xs={12} md={6}><ReferralCode/></Grid>
                        <Grid item xs={12}><Work/></Grid>
                    </Grid>
                    <Box mt={6} mb={2}>
                        <Typography variant="body1" component="a" color="primary">Friends Who Enrolled</Typography>
                    </Box>
                    <Box>
                        <Typography variant="body1" component="a" color="primary">Terms & Conditions</Typography>
                    </Box>
                </Container>
            </div>
        </ThemeProvider>
    );
}

export default App;
