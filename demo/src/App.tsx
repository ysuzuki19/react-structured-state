import { FC, useEffect } from 'react';
import { Box, Button, Divider, Grid, Paper, Typography } from '@mui/material';

// import { useArray, useRecoilArray } from './StructuredState';
import { useRecoilArray } from './structured-state';
import { arrayState } from './store/arrayState';

const ActionGroup: FC<{ title: string }> = ({ title, children }) => {
  return (
    <Grid item xs={6}>
      <Paper elevation={3}>
        <Box p={2}>
          <Typography>{title}</Typography>
          <Divider />
          <Box m={2} />
          <Grid container spacing={1}>
            {((children as any[]) || []).map((child, idx) => (
              <Grid key={idx} item>
                {child}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </Grid>
  );
};

interface ActionButtonProps {
  onClick: () => void;
  text: string;
}

const ActionButton: FC<ActionButtonProps> = ({ onClick, text }) => {
  return (
    <Button variant="outlined" onClick={onClick} sx={{ textTransform: 'none' }}>
      {text}
    </Button>
  );
};

const App = (): JSX.Element => {
  // const [arr, actionArr] = useArray<number>([1, 2, 3]);
  const [arr, actionArr] = useRecoilArray<number>(arrayState);

  useEffect(() => {
    console.log(arr);
  }, [arr]);

  return (
    <Box m={3}>
      <Box position="sticky" top={10} zIndex={1}>
        <Paper variant="outlined">
          <Box m={3}>
            <Typography variant="h5">useArray Test</Typography>
            <Box m={2} />
            <Grid container spacing={2}>
              {arr.map((elm, idx) => (
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
          <ActionButton
            onClick={() => actionArr.pushBack(10)}
            text="pushBack(10)"
          />
          <ActionButton
            onClick={() => actionArr.pushBack(4, 5, 6)}
            text="pushBack(4, 5, 6)"
          />
          <ActionButton
            onClick={() => actionArr.pushFront(0)}
            text="pushFront(0)"
          />
          <ActionButton
            onClick={() => actionArr.pushFront(-1, -2, -3)}
            text="pushFront(-1, -2, -3)"
          />
        </ActionGroup>

        <ActionGroup title="Insert Elements">
          <ActionButton
            onClick={() => actionArr.insert(1, 1)}
            text="insert(1, 1)"
          />
          <ActionButton
            onClick={() => actionArr.insert(1, -4, -5)}
            text="insert(1, -4, -5)"
          />
        </ActionGroup>

        <ActionGroup title="Pop Elements">
          <ActionButton onClick={() => actionArr.popBack()} text="popBack()" />
          <ActionButton
            onClick={() => actionArr.popBack(2)}
            text="popBack(2)"
          />
          <ActionButton
            onClick={() => actionArr.popFront()}
            text="popFront()"
          />
          <ActionButton
            onClick={() => actionArr.popFront(2)}
            text="popFront(2)"
          />
        </ActionGroup>

        <ActionGroup title="Align Elements">
          <ActionButton onClick={() => actionArr.sort()} text="sort()" />
          <ActionButton
            onClick={() => actionArr.sort((a, b) => a < b)}
            text="sort((a, b) => a < b))"
          />
          <ActionButton
            onClick={() => actionArr.sort((a, b) => a > b)}
            text="sort((a, b) => a > b)"
          />
          <ActionButton onClick={() => actionArr.reverse()} text="reverse()" />
        </ActionGroup>

        <ActionGroup title="Slice Elements">
          <ActionButton onClick={() => actionArr.slice()} text="slice()" />
          <ActionButton onClick={() => actionArr.slice(2)} text="slice(2)" />
          <ActionButton
            onClick={() => actionArr.slice(2, 6)}
            text="slice(2, 6)"
          />
          <ActionButton onClick={() => actionArr.splice(1)} text="splice(1)" />
          <ActionButton
            onClick={() => actionArr.splice(2, 6)}
            text="splice(2, 6)"
          />
          <ActionButton
            onClick={() => actionArr.splice(2, 2, -1, 1)}
            text="splice(2, 2, -1, 1)"
          />
        </ActionGroup>

        <ActionGroup title="Change Elements">
          <ActionButton
            onClick={() => actionArr.filter((e: number) => e !== 0)}
            text="filter(e: number) => e !== 0)"
          />
          <ActionButton
            onClick={() => actionArr.map((e: number) => e * 2)}
            text="map(e: number) => e * 2)"
          />
          <ActionButton
            onClick={() => actionArr.map((_e: number, idx: number) => idx)}
            text="map((_e: number, idx: number) => idx)"
          />
          <ActionButton onClick={() => actionArr.fill(0)} text="fill(0)" />
          <ActionButton onClick={() => actionArr.fill(0, 1)} text="fill(0,1)" />
          <ActionButton
            onClick={() => actionArr.fill(0, 1, 2)}
            text="fill(0, 1, 2)"
          />
        </ActionGroup>

        <ActionGroup title="Originally">
          <ActionButton
            onClick={() =>
              actionArr.chain((vals) =>
                vals.filter((val) => val !== 0).map((val) => val * 2)
              )
            }
            text="chain((vals) => vals.filter((val) => val !== 0).map((val) => val * 2))"
          />
          <ActionButton
            onClick={() => actionArr.set(10, 5)}
            text="set(10, 5)"
          />
          <ActionButton
            onClick={() => actionArr.setState([1, 2, 3])}
            text="setState([1, 2, 3])"
          />
          <ActionButton onClick={() => actionArr.erase(1)} text="erase(1)" />
          <ActionButton onClick={() => actionArr.clear()} text="clear()" />
        </ActionGroup>
      </Grid>
    </Box>
  );
};

export default App;
