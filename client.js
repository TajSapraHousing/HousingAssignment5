import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/app';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import reducers from "./src/state/reducers/index";
import thunk from 'redux-thunk'

const store = createStore(reducers, window.__PRELOADED_STATE__, applyMiddleware(thunk))
delete window.__PRELOADED_STATE__
hydrateRoot(document.getElementById('root'), (<Provider store={store}><BrowserRouter><Suspense fallback={<div>Loading</div>}><App/></Suspense></BrowserRouter></Provider>))