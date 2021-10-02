import { Grid } from '@mui/material';

interface CenterProps {}

const Center: React.FC<CenterProps> = ({ children }) => {
  return (
    <Grid container spacing={0} direction="column" alignItems="center">
      {children}
    </Grid>
  );
};

export default Center;
