import React, { useEffect } from 'react';
import { usePostsStore } from '../store/postsStore';
import { CircularProgress, Alert, Container, Card, CardContent, Typography, IconButton, Box, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const PostsMUI = () => {
  const { posts, loading, error, fetchPosts, deleteTask, updateTask } = usePostsStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) return <Container sx={{ display: 'flex', justifyContent: 'center', my: 4 }}><CircularProgress /></Container>;
  if (error) return <Container sx={{ my: 4 }}><Alert severity="error">{error}</Alert></Container>;

  return (
    <Container sx={{ my: 4 }}>
      <Typography variant="h5" gutterBottom>Тапшырмалар Тизмеси (List)</Typography>
      {posts.map((post) => (
        <Card key={post.id} sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Checkbox
              checked={post.completed || false}
              onChange={(e) => updateTask(post.id, { completed: e.target.checked })}
            />
            <Box>
              <Typography 
                variant="h6" 
                sx={{ textDecoration: post.completed ? 'line-through' : 'none' }}
              >
                {post.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">{post.body}</Typography>
            </Box>
          </Box>
          <IconButton color="error" onClick={() => deleteTask(post.id)}>
            <DeleteIcon />
          </IconButton>
        </Card>
      ))}
    </Container>
  );
};

export default PostsMUI;