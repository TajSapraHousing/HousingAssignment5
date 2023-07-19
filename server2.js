import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/components/App';
import path from 'path';

const app = express();

// Serve the static assets from the 'dist' directory
app.use(express.static('dist'));

app.get('/', (req, res) => {
  const jsx = (
    <html lang="en">
      <head>
        <title>Server-Side Rendering Taj</title>
      </head>
      <body>
        <div id="root">
          <App />
        </div>
        <script src="/client_bundle.js"></script>
      </body>
    </html>
  );

  const reactStream = ReactDOMServer.renderToNodeStream(jsx);

  res.write('<!DOCTYPE html>');
  reactStream.pipe(res, { end: false });
  reactStream.on('end', () => {
    res.end();
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});