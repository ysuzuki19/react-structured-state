import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/system';
import { Button, Divider, Grid, Typography } from '@mui/material';

import Center from '../components/Center';

interface LinkButtonProps {
  to: string;
  title: string;
}
const LinkButton = ({ to, title }: LinkButtonProps) => {
  const navigate = useNavigate();
  return (
    <Button variant="contained" onClick={() => navigate(to)}>
      {title}
    </Button>
  );
};

const demos = [
  { to: '/demo/array', title: 'Array Demo' },
  { to: '/demo/queue', title: 'Queue Demo' },
  { to: '/demo/set', title: 'Set Demo' },
  { to: '/demo/map', title: 'Map Demo' },
];

const Root = () => {
  return (
    <>
      <Box m={3} />
      <Center>
        <Typography variant="h3">Demo Pages</Typography>
      </Center>
      <Divider />

      <Center>
        <Box m={3}>
          <Grid container spacing={2}>
            {demos.map((demo) => (
              <Grid item key={demo.to}>
                <LinkButton to={demo.to} title={demo.title} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Center>
    </>
  );
};

export default Root;
