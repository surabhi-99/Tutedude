import {Box, Button, Grid, Typography} from "@mui/material";

const ReferSummary = () => {
    return (
        <Box boxShadow="1" sx={{background: '#ffffff', borderRadius: '20px'}}>
            <Grid container spacing={2} justifyContent="center" p={2}>
                <Grid item md={4} mb={2}>
                    <Grid container direction="column" spacing={2} alignContent="center">
                        <Grid item md={2}>
                            <Typography variant="subtitle2" color="primary">Referral Earning</Typography>
                            <Typography variant="h1" color="">₹2500</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={4} mb={2}>
                    <Grid container direction="column" spacing={2} alignContent="center">
                        <Grid item md={2}>
                            <Typography variant="subtitle2" color="primary">Total Referrals</Typography>
                            <Typography variant="h1">7</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={4} mb={2}>
                    <Grid container direction="column" spacing={2} alignContent="center">
                        <Grid item md={2}>
                            <Typography variant="subtitle2" color="primary">Referral Earning</Typography>
                            <Typography variant="h1" color="">₹500</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={6} mb={2}>
                    <Button sx={{background: '#800080', borderRadius: '20px', px: 2, py: 1}}>
                        <Typography variant="button" color="white">
                            Withdraw Balance
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default ReferSummary