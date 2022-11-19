import {Avatar, Grid, Stack, Typography} from "@mui/material";

const WorkInfo = (props) => {
    return (
        <Grid item xs={5}>
            <Stack spacing={2} direction="row">
                <Avatar alt={props.heading} sx={{background: '#F5F5F5'}}>
                    <svg width={0} height={0}>
                        <linearGradient id="linearColors" x1={1} y1={0} x2={0} y2={0}>
                            <stop offset={0} stopColor="#800080"/>
                            <stop offset={1} stopColor="#FF864C"/>
                        </linearGradient>
                    </svg>
                    <props.image sx={{
                        background: '#F5F5F5',
                        fill: 'url(#linearColors)'
                    }}/>
                </Avatar>
                <Stack spacing={2}>
                    <Typography variant="h6">{props.heading}</Typography>
                    <Typography variant="body2">{props.description}</Typography>
                </Stack>
            </Stack>
        </Grid>
    );
};

export default WorkInfo;
