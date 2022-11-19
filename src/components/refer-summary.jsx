import { Box, Grid, Typography } from "@mui/material";

const referSummary = (props) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={4}>
            <Grid container spacing={2}>
            <Grid item md={2}>
            <Typography variant="subtitle2" color="primary">Referral Earning</Typography>
            <Typography variant="h1" color="">₹2500</Typography>
            </Grid>
            </Grid>
        </Grid>
        <Grid item md={4}>
        <Grid container spacing={2}>
            <Grid item md={2}>
            <Typography variant="subtitle2" color="primary">Total Referrals</Typography>
            <Typography variant="h1" color="">7</Typography>
            </Grid>
            </Grid>
        </Grid>
        <Grid item md={4}>
            <Grid container spacing={2}>
            <Grid item md={2}>
            <Typography variant="subtitle2" color="primary">Referral Earning</Typography>
            <Typography variant="h1" color="">₹500</Typography>
            </Grid>
            </Grid>
        </Grid>
        <Grid item md={12}>
          <Button>Withdraw Balance</Button>
        </Grid>
      </Grid>
    </Box>
  );
};
