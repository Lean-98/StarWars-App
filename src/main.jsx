import React from 'react';
import ReactDOM from 'react-dom/client';
import { StarWarsApp } from './StarWarsApp'

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StarWarsApp />
  </React.StrictMode>,
);
