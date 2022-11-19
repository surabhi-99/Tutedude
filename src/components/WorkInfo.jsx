import { Avatar, Grid, Stack, Typography } from "@mui/material";

const WorkInfo = (props) => {
  return (
    <Grid item xs={5}>
      <Stack spacing={2} direction="row">
        <Avatar alt={props.heading} src={props.image} />
        <Stack spacing={2}>
          <Typography variant="h6">{props.heading}</Typography>
          <Typography variant="body2">{props.description}</Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default WorkInfo;
