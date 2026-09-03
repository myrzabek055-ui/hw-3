import React, { useEffect } from 'react';
import { usePostsStore } from '../store/postsStore';
import { Spin, Alert, Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const PostsAntD = () => {
  const { posts, loading, error, fetchPosts } = usePostsStore();

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) return <div style={{ textAlign: 'center', margin: '20px 0' }}><Spin size="large" /></div>;
  if (error) return <Alert message="Ката" description={error} type="error" style={{ margin: '20px 0' }} />;

  return (
    <div style={{ padding: '20px' }}>
      <Title level={3}>Ant Design Посттору</Title>
      {posts.slice(0, 3).map((post) => (
        <Card key={post.id} title={post.title} style={{ marginBottom: '16px' }}>
          <Paragraph>{post.body}</Paragraph>
        </Card>
      ))}
    </div>
  );
};

export default PostsAntD;