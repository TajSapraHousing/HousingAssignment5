import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';
import { hydrateRoot } from 'react-dom/client';
hydrateRoot(document.getElementById('root'), <App/>)