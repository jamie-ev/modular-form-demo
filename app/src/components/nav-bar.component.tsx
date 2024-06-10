import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { REPO_URL } from '../config/constants.ts';

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <nav
      style={{
        position: 'absolute',
        top: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}
    >
      <ButtonGroup variant="contained" aria-label="nav button group">
        <Button onClick={() => navigate(`${REPO_URL}/fruits`)}>Fruits</Button>
        <Button onClick={() => navigate(`${REPO_URL}/vegetables`)}>Vegetables</Button>
      </ButtonGroup>
    </nav>
  );
};
