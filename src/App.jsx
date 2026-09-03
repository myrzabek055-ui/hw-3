import React from 'react';
import PostsBootstrap from './components/PostsBootstrap';
import PostsMUI from './components/PostsMUI';
import PostsAntD from './components/PostsAntD';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
      

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