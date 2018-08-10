import Router from 'koa-router';
import CategoryService from '../services/category.service';
import categoryValidate from '../middlewares/category-validate.middleware';

const createCategory = async ctx => {
  const { body } = ctx.request;
  const createdCategory = await CategoryService.createCategory(body);
  ctx.body = {
    data: createdCategory
  };
};

const getAllCategories = async ctx => {
  const allCategories = await CategoryService.getAllCategories();
  ctx.body = {
    data: allCategories
  };
};

const deleteCategory = async ctx => {
  const { id } = ctx.params;
  const deletedCategory = await CategoryService.deleteCategory(id);
  ctx.body = {
    data: deletedCategory
  };
};

const getCategory = async ctx => {
  const { id } = ctx.params;
  const category = await CategoryService.getCategoryById(id);
  ctx.body = {
    data: category
  };
};

export default () => {
  const categoryRouter = new Router();

  categoryRouter.get('/categories', getAllCategories);
  categoryRouter.get('/categories/:id', getCategory);
  categoryRouter.post('/categories', categoryValidate, createCategory);
  categoryRouter.delete('/categories/:id', deleteCategory);

  return categoryRouter.routes();
};
