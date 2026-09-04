import React from 'react';
import PostsBootstrap from './components/PostsBootstrap';
import PostsMUI from './components/PostsMUI';
import PostsAntD from './components/PostsAntD';
import TaskForm from './components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      <div className="container mb-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <h2 className="mb-3" style={{ fontSize: '24px', fontWeight: 'bold' }}>Тапшырма кошуу</h2>
              <TaskForm />
              <HookForm />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div style={{ background: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <PostsBootstrap />
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div style={{ background: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <PostsMUI />
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div style={{ background: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
              <PostsAntD />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;