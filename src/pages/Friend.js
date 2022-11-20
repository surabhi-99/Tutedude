import {Box, Grid, Stack, Typography} from "@mui/material";
import friends from '../data/friends.json'
import FriendCard from "../components/FriendCard";

const Friend = () => {
    return (
        <>
            <Grid container justifyContent="space-between">
                <Grid item md={2}>
                    <Typography variant="body2" color="primary" mb={1}>Your Referral Code</Typography>
                    <Box sx={{background: 'white', borderRadius: '10px', py: 2, px: 1, border: '1.5px solid #DFDFDF'}}>
                        <Typography variant="h6" align="center">EDCH54</Typography>
                    </Box>
                </Grid>
                <Grid item md={2}>
                    <Box sx={{borderRadius: '20px', boxShadow: '0px 2px 8px 0px #80008026', p: 2}}>
                        <Typography variant="subtitle2" color="primary">Referral Earning</Typography>
                        <Typography variant="h1" color="">₹500</Typography>
                    </Box>
                </Grid>
            </Grid>
            <Typography variant="h4" color="primary" sx={{my: 2}}>Friends who enrolled(3)</Typography>
            <Stack direction={{sm: "column", md: "row"}} alignItems="center" spacing={2} width="100%" overflow="auto" borderRadius="20px">
                {friends.map((friend, i) => (
                    <FriendCard key={i} friend={friend}/>
                ))}
            </Stack>

        </>
    )
}

export default Friend