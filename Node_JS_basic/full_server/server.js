import express from 'express';
import router from './routes/index';

// Express server that uses the routes defined in routes/index.js
const app = express();

app.use('/', router);
app.listen(1245);

export default app;
