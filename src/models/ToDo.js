import mongoose from 'mongoose';

const ToDoSchema = new mongoose.Schema({
  todoName: String,
  done: Boolean,
  categoryId: { type: mongoose.Schema.Types.ObjectId }
});

const ToDo = mongoose.model('ToDo', ToDoSchema);
export default ToDo;
