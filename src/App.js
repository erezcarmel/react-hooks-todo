import React from 'react';
import {
	AddForm,
	List
} from './components';

import './App.css';

const App = () => {
  return (
    <div className="app" data-testid="app">
      <AddForm />
			<List/>
    </div>
  );
};

export default App;
