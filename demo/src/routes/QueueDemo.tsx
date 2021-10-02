import { useEffect } from 'react';
import { Box, Divider, Grid, Paper, Typography } from '@mui/material';

// import { useQueue } from 'react-structured-state';
import { useRecoilQueue } from 'react-structured-state';

import ActionGroup from '../components/ActionGroup';
import ActionButton from '../components/ActionButton';
import { queueState } from '../store/queueState';

const QueueDemo = () => {
  // const [que, actionQue] = useQueue<number>([1, 2, 3]);
  const [que, actionQue] = useRecoilQueue<number>(queueState);

  useEffect(() => {
    console.log(que);
  }, [que]);

  return (
    <Box m={3}>
      <Box position="sticky" top={10} zIndex={1}>
        <Paper variant="outlined">
          <Box m={3}>
            <Typography variant="h5">useQueue Test</Typography>
            <Box m={2} />
            <Typography>front value: {que[0]}</Typography>
            <Box m={2} />
            <Grid container spacing={2}>
              {que.map((elm, idx) => (
                <Grid key={idx} item>
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
        <ActionGroup title="Push Elements">
          <ActionButton onClick={() => actionQue.push(10)} text="push(10)" />
          <ActionButton
            onClick={() => actionQue.push(4, 5, 6)}
            text="push(4, 5, 6)"
          />
        </ActionGroup>

        <ActionGroup title="Pop Elements">
          <ActionButton onClick={() => actionQue.pop()} text="pop()" />
          <ActionButton onClick={() => actionQue.pop(2)} text="pop(2)" />
        </ActionGroup>

        <ActionGroup title="Originally">
          <ActionButton
            onClick={() => actionQue.setState([1, 2, 3])}
            text="setState([1, 2, 3])"
          />
          <ActionButton onClick={() => actionQue.clear()} text="clear()" />
        </ActionGroup>
      </Grid>
    </Box>
  );
};

export default QueueDemo;
