import { useEffect } from 'react';
import { Box, Divider, Grid, Paper, Typography } from '@mui/material';

// import { useSet } from 'react-structured-state';
import { useRecoilSet } from 'react-structured-state';

import ActionGroup from '../components/ActionGroup';
import ActionButton from '../components/ActionButton';
import { setState } from '../store/setState';

const SetDemo = () => {
  // const [st, actionSt] = useSet<number>([1, 2, 3]);
  const [st, actionSt] = useRecoilSet<number>(setState);

  useEffect(() => {
    console.log(st);
  }, [st]);

  return (
    <Box m={3}>
      <Box position="sticky" top={10} zIndex={1}>
        <Paper variant="outlined">
          <Box m={3}>
            <Typography variant="h5">useSet Test</Typography>
            <Box m={2} />
            <Grid container spacing={2}>
              {Array.from(st).map((elm) => (
                <Grid key={elm} item>
                  {elm}
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Box>

      <Box m={3} />
      <Divider />
      <Box m={2} />

      <Grid container spacing={2}>
        <ActionGroup title="Add Elements">
          <ActionButton onClick={() => actionSt.add(4)} text="push(4)" />
          <ActionButton onClick={() => actionSt.add(5, 6)} text="add(5, 6)" />
        </ActionGroup>

        <ActionGroup title="Delete Elements">
          <ActionButton onClick={() => actionSt.delete(4)} text="delete(4)" />
          <ActionButton onClick={() => actionSt.clear()} text="clear()" />
        </ActionGroup>

        <ActionGroup title="Originally">
          <ActionButton
            onClick={() => actionSt.setState(new Set([1, 2, 3]))}
            text="setState(new Set([1, 2, 3]))"
          />
          <ActionButton
            onClick={() => actionSt.setState(new Set([4, 5, 6]))}
            text="setState(new Set([4, 5, 6]))"
          />
        </ActionGroup>
      </Grid>
    </Box>
  );
};

export default SetDemo;
