import { useEffect } from 'react';
import { Box, Divider, Grid, Paper, Typography } from '@mui/material';

// import { useMap } from 'react-structured-state';
import { useRecoilMap } from 'react-structured-state';

import ActionGroup from '../components/ActionGroup';
import ActionButton from '../components/ActionButton';
import { mapState } from '../store/mapState';

const MapDemo = () => {
  // const [mp, actionMp] = useMap<number>([1, 2, 3]);
  const [mp, actionMp] = useRecoilMap<string, number>(mapState);

  useEffect(() => {
    console.log(mp);
  }, [mp]);

  return (
    <Box m={3}>
      <Box position="sticky" top={10} zIndex={1}>
        <Paper variant="outlined">
          <Box m={3}>
            <Typography variant="h5">useMap Test</Typography>
            <Box m={2} />
            <Grid container spacing={2}>
              {Array.from(mp).map((elm) => (
                <Grid key={elm[0]} item>
                  {elm[0]}: {elm[1]}
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
        <ActionGroup title="Set Elements">
          <ActionButton
            onClick={() => actionMp.set('a', 1)}
            text="set('a', 1)"
          />
          <ActionButton
            onClick={() => actionMp.set('a', 2)}
            text="set('a', 2)"
          />
          <ActionButton
            onClick={() => actionMp.set('b', 2)}
            text="set('b', 2)"
          />
        </ActionGroup>

        <ActionGroup title="Delete Elements">
          <ActionButton
            onClick={() => actionMp.delete('a')}
            text="delete('a')"
          />
          <ActionButton
            onClick={() => actionMp.delete('b')}
            text="delete('b')"
          />
          <ActionButton onClick={() => actionMp.clear()} text="clear()" />
        </ActionGroup>

        <ActionGroup title="Originally">
          <ActionButton
            onClick={() => actionMp.setState(new Map([['c', 4]]))}
            text="setState(new Map([['c', 4]]))"
          />
          <ActionButton
            onClick={() => actionMp.setState(new Map([['d', 5]]))}
            text="setState(new Map([['d', 5]])"
          />
        </ActionGroup>
      </Grid>
    </Box>
  );
};

export default MapDemo;
