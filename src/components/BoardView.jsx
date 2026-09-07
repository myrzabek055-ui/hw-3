import React from 'react';
import { usePostsStore } from '../store/postsStore';
import { Container, Typography, Box, Card, CardContent, Checkbox, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function BoardView() {
  const { posts, deleteTask, updateTask } = usePostsStore();

  return (
    <Container sx={{ my: 4 }}>
      <Typography variant="h5" gutterBottom>Канбан Тактасы (Board)</Typography>
      <Box sx={{ display: 'flex', gap: 3, overflowX: 'auto', pb: 2 }}>
        
        {/* Аткарыла электер колонкасы */}
        <Box sx={{ flex: 1, minWidth: 280, bgcolor: 'grey.100', p: 2, borderRadius: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Аткарылууда</Typography>
          {posts.filter(p => !p.completed).map((post) => (
            <Card key={post.id} sx={{ mb: 2, p: 1 }}>
              <CardContent sx={{ p: '8px !important' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Checkbox
                    checked={false}
                    onChange={(e) => updateTask(post.id, { completed: e.target.checked })}
                  />
                  <IconButton color="error" size="small" onClick={() => deleteTask(post.id)}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{post.title}</Typography>
                <Typography variant="body2" color="text.secondary">{post.body}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Бүткөндөр колонкасы */}
        <Box sx={{ flex: 1, minWidth: 280, bgcolor: 'grey.100', p: 2, borderRadius: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Бүттү</Typography>
          {posts.filter(p => p.completed).map((post) => (
            <Card key={post.id} sx={{ mb: 2, p: 1, opacity: 0.7 }}>
              <CardContent sx={{ p: '8px !important' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Checkbox
                    checked={true}
                    onChange={(e) => updateTask(post.id, { completed: e.target.checked })}
                  />
                  <IconButton color="error" size="small" onClick={() => deleteTask(post.id)}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
                <Typography variant="subtitle1" sx={{ textDecoration: 'line-through', fontWeight: 'bold' }}>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">{post.body}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

      </Box>
    </Container>
  );
}