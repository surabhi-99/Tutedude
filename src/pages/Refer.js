import {Box, Grid, Link, Typography} from "@mui/material";
import ReferSummary from "../components/ReferSummary";
import ReferralCode from "../components/ReferralCode";
import Work from "../components/Work";

const Refer = () => {
    return (
        <>
            <Grid container spacing={10}>
                <Grid item xs={12} md={6}><ReferSummary/></Grid>
                <Grid item xs={12} md={6}><ReferralCode/></Grid>
                <Grid item xs={12}><Work/></Grid>
            </Grid>
            <Box mt={6}>
                <Link href="/refer/friends" sx={{textDecoration: 'none'}}>
                    <Typography variant="body1" color="primary">Friends Who Enrolled</Typography>
                </Link>
            </Box>
        </>
    )
}

export default Refer