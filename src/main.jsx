import React from 'react';
import ReactDOM from 'react-dom/client';
import CV from './components/cv'; 

function App() {
  return (
    <div>
      <CV />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);