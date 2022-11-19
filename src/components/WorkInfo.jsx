import {Avatar, Grid, Stack, Typography} from "@mui/material";
import {Groups} from "@mui/icons-material";

const WorkInfo = (props) => {
    return (
        <Grid item xs={5}>
            <Stack spacing={2} direction="row">
                <Avatar alt={props.heading}>
                    <props.image/>
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
