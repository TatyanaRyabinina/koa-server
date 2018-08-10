import ToDo from '../models/ToDo';

const createToDo = data => {
  return ToDo.create(data);
};

const getAllToDos = data => {
  return ToDo.find({ categoryId: data });
};

const deleteToDo = data => {
  return ToDo.remove(data);
};

const completeToDo = (todoId, data) => {
  return ToDo.findByIdAndUpdate(todoId, data);
};

export default {
  createToDo,
  getAllToDos,
  deleteToDo,
  completeToDo
};
