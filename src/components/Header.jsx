import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static" sx={{ mb: 3 }}>
      <Toolbar>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Тизме (List)
          </Button>
          <Button color="inherit" component={Link} to="/board">
            Канбан (Board)
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}