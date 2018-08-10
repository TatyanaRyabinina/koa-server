import Category from '../models/Category';

const createCategory = data => {
  return Category.create(data);
};

const getCategoryById = data => {
  return Category.findById(data);
};

const deleteCategory = data => {
  console.log(data);
  return Category.findByIdAndRemove(data);
};

const getAllCategories = () => {
  return Category.find();
};

export default {
  createCategory,
  getCategoryById,
  deleteCategory,
  getAllCategories
};
