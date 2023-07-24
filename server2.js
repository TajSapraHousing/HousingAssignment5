import express from 'express';
import React, {Suspense} from 'react';
import {Switch} from 'react-router-dom'
import ReactDOMServer from 'react-dom/server';
import App from './src/components/app';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server'; // Change BrowserRouter to StaticRouter
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import reducers from "./src/state/reducers/index";
import thunk from 'redux-thunk'
const app = express();
app.use(express.static('dist'));
// http://localhost:3000/dist/src_components_Home_js.client_bundle.js
const store = createStore(reducers, applyMiddleware(thunk))

app.get('*', (req, res) => { // Use '' to handle all routes
  console.log(req.url)
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url}> {/* Pass the location and context */}
        <Suspense fallback={<div>Loading</div>}>
            <App />
        </Suspense>
      </StaticRouter>
    </Provider>
  )
  console.log('here')
    const preloadedState = store.getState();
    console.log('here')
    res.send(renderFullPage(html, preloadedState));
});

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
          window._PRELOADED_STATE_ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
        <script src="/client_bundle.js"></script>
      </body>
    </html>
  `;
}
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});