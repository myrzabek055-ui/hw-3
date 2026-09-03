import React, { useEffect } from 'react';
import { usePostsStore } from '../store/postsStore';
import { Spinner, Alert, Container, Card } from 'react-bootstrap';

const PostsBootstrap = () => {
  const { posts, loading, error, fetchPosts } = usePostsStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) return <Container className="text-center mt-4"><Spinner animation="border" /></Container>;
  if (error) return <Container className="mt-4"><Alert variant="danger">{error}</Alert></Container>;

  return (
    <Container className="my-4">
      <h3 className="mb-3">React-Bootstrap Посттору</h3>
      {posts.slice(0, 3).map((post) => (
        <Card key={post.id} className="mb-3">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.body}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default PostsBootstrap;