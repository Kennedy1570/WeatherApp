import React from 'react';
import ReactDOM from 'react-dom/client';
import Weather from './Weather';
function App() {
  return (
    <>
    <Weather />
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


