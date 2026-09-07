import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PostsMUI from './components/PostsMUI';
import BoardView from './components/BoardView';
import TaskForm from './components/TaskForm';
import { Container } from '@mui/material';

export default function App() {
  return (
    <Router>
      <Header />
      <Container>
        <TaskForm />
        <Routes>
          <Route path="/" element={<PostsMUI />} />
          <Route path="/board" element={<BoardView />} />
        </Routes>
      </Container>
    </Router>
  );
}