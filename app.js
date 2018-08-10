import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from 'koa2-cors';
import configurePublicRouter from './src/controllers/index';
import './db-connection';
import error from './src/middlewares/error.middleware';

const app = new Koa();
const PORT = 3000;

app.use(cors());
app.use(bodyParser());
app.use(error);
app.use(configurePublicRouter());
app.listen(PORT);
console.log('listening on port 3000');
