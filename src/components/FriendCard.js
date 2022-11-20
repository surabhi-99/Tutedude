import {Chip, Stack, Typography} from "@mui/material";

const FriendCard = ({friend}) => {
    return (
        <Stack direction="column" spacing={2} sx={{
            background: 'linear-gradient(270deg, #800080 0%, #FF864C 100%)',
            borderRadius: '20px',
            p: 3,
            width: '100%',
            maxWidth: '350px',
            my: 1
        }}>
            <Stack direction="row" justifyContent="space-between">
                <Typography variant="h5" color="white">{friend.name}</Typography>
                <Typography variant="subtitle2" color="white">{friend.date}</Typography>
            </Stack>
            <Typography variant="caption" color="white">Courses Enrolled ({friend.courses.length})</Typography>
            <Stack direction="row" overflow="auto" justifyContent="flex-start" flexWrap="wrap" height="100px">
                {friend.courses.map((course, i) => (
                    <Chip key={i} label={
                        <Typography variant="subtitle2" color="white">{course}</Typography>
                    } variant="outlined" sx={{ mr: 1, mb: 1}}/>
                ))}
            </Stack>
            <Stack direction="row" spacing={1} justifyContent="flex-start">
                <Typography variant="subtitle2" color="white">Referral Amount</Typography>
                <Typography variant="h5" color="white">₹{friend.amount}</Typography>
            </Stack>
        </Stack>
    )
}

export default FriendCard