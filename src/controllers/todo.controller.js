import Router from 'koa-router';
import ToDoService from '../services/todo.service';

const createToDo = async ctx => {
  const { body } = ctx.request;
  const { catId } = ctx.params;
  console.log(body);
  const createdToDo = await ToDoService.createToDo({
    ...body,
    categoryId: catId
  });
  ctx.body = {
    data: createdToDo
  };
};

const getAllToDosByCategoryId = async ctx => {
  const { catId } = ctx.params;
  const allToDos = await ToDoService.getAllToDos(catId);
  ctx.body = {
    data: allToDos
  };
};

const deleteToDo = async ctx => {
  const { todoId } = ctx.params;
  console.log(todoId);
  const deletedToDo = await ToDoService.deleteToDo(todoId);
  ctx.body = {
    data: deletedToDo
  };
};

const completeToDo = async ctx => {
  const { todoId } = ctx.params;
  const { body } = ctx.request;

  const category = await ToDoService.completeToDo(todoId, body);
  ctx.body = {
    data: category
  };
};

export default () => {
  const todoRouter = new Router();

  todoRouter.get('/categories/:catId/todos', getAllToDosByCategoryId);
  todoRouter.post('/categories/:catId/todos', createToDo);
  todoRouter.delete('/categories/:catId/todos/:todoId', deleteToDo);
  todoRouter.put('/categories/:catId/todos/:todoId', completeToDo);

  return todoRouter.routes();
};
