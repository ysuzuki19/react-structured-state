import { FC } from 'react';
import { Button } from '@mui/material';

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

export default ActionButton;
