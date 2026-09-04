import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { usePostsStore } from '../store/postsStore';

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const addTask = usePostsStore((state) => state.addTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;

    addTask({
      id: Date.now(),
      title,
      body,
    });

    setTitle('');
    setBody('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Тапшырманын аталышы"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Тапшырманын мазмуну"
        variant="outlined"
        fullWidth
        multiline
        rows={2}
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary" size="large">
        Кошуу
      </Button>
    </Box>
  );
}