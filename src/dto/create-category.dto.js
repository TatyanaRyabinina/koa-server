import * as Yup from 'yup';
import validateMiddlware from '../middlewares/validate.middleware';

const validationSchema = Yup.object().shape({
  categoryName: Yup.string()
    .required('Category is required!')
    .min(5, 'Category must be at least 5 characters!')
});

export default validateMiddlware(validationSchema);
