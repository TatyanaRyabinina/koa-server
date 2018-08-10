import Router from 'koa-router';
import todoController from './todo.controller';
import categoryController from './category.controller';

export default () => {
  const publicRouter = new Router();
  publicRouter.use(categoryController());
  publicRouter.use(todoController());

  return publicRouter.routes();
};
