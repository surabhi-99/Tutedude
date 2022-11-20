import {Box, Typography} from "@mui/material";

const ReferralCode = (props) => {
    return (
        <Box>
            <Typography variant="h2" mb={2} color="primary">Your Referral Code</Typography>
            <Box sx={{background: 'linear-gradient(270deg, #800080 0%, #FF864C 100%)', p: '5px', borderRadius: '10px'}}>
                <Box sx={{background: 'white', borderRadius: '5px', p: '20px'}}>
                    <Typography variant="h3" color="primary" align="center">EDCH54</Typography>
                </Box>
            </Box>
            {/*<Box sx={{*/}
            {/*    p: 2,*/}
            {/*    border: '10px solid',*/}
            {/*    borderImageSlice: 1,*/}
            {/*    borderWidth: '5px',*/}
            {/*    borderImageSource: 'linear-gradient(270deg, #800080 0%, #FF864C 100%)',*/}
            {/*    borderRadius: '10px'*/}
            {/*}}>*/}
            {/*    <Typography variant="h3" color="primary">EDCH54</Typography>*/}
            {/*</Box>*/}
        </Box>
    )
}

export default ReferralCode