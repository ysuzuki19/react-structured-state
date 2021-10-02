import { FC } from 'react';
import { Box, Divider, Grid, Paper, Typography } from '@mui/material';

interface ActionGroupProps {
  title: string;
}

const ActionGroup: FC<ActionGroupProps> = ({ title, children }) => {
  return (
    <Grid item xs={6}>
      <Paper elevation={3}>
        <Box p={2}>
          <Typography>{title}</Typography>
          <Divider />
          <Box m={2} />
          <Grid container spacing={1}>
            {((children as any[]) || []).map((child, idx) => (
              <Grid item key={idx}>
                {child}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ActionGroup;
