import React from 'react';
import MainLayout from './layouts/MainLayout';
import './App.css';

const App = () => {
     return (
          <React.Suspense fallback={<h1>Loading...</h1>}>
               <MainLayout />
          </React.Suspense>
     );
};

export default App;
