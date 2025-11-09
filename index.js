import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div style={{padding: '40px', fontFamily: 'Arial'}}>
    <h1>JurosPro</h1>
    <p>Sistema de Gestão de Empréstimos</p>
    <p>✅ App funcionando!</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
