import React from 'react';
import './App.scss';
import Feed from './components/Feed';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header />
        {/* App Body */}
        <div className="appBody">
          <Sidebar />
          <Feed />
          {/* Categories */}
        </div>

     
    </div>
  );
}

export default App;
