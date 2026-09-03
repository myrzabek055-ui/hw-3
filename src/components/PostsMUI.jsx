import React, { useEffect } from 'react';
import { usePostsStore } from '../store/postsStore';
import { CircularProgress, Alert, Container, Card, CardContent, Typography } from '@mui/material';

const PostsMUI = () => {
  const { posts, loading, error, fetchPosts } = usePostsStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) return <Container sx={{ display: 'flex', justifyContent: 'center', my: 4 }}><CircularProgress /></Container>;
  if (error) return <Container sx={{ my: 4 }}><Alert severity="error">{error}</Alert></Container>;

  return (
    <Container sx={{ my: 4 }}>
      <Typography variant="h5" gutterBottom>MUI (Material UI) Посттору</Typography>
      {posts.slice(0, 3).map((post) => (
        <Card key={post.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{post.title}</Typography>
            <Typography variant="body2" color="text.secondary">{post.body}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default PostsMUI;