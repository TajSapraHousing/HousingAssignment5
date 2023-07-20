import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';
import { Provider } from 'react-redux';
import path from 'path';
import { renderToString } from 'react-dom/server';

const app = express();

// Serve the static assets from the 'dist' directory
app.use(express.static('dist'));
function renderFullPage(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
      <title>Server-Side Rendering Taj</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // https://redux.js.org/usage/server-rendering#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
        <script src="/client_bundle.js"></script>
      </body>
    </html>
    `
}
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import reducers from "./src/state/reducers/index";
import thunk from 'redux-thunk'
const store = createStore(reducers, applyMiddleware(thunk))

app.get('/', (req, res) => {
  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const preloadedState = store.getState()
  res.send(renderFullPage(html, preloadedState))
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});