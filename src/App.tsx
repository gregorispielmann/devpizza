import React from 'react';
import Background from './components/Background';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes />
      <Background />
    </div>
  );
};

export default App;
