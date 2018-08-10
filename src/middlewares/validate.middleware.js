import * as Yup from 'yup';

const validateMiddlware = validationSchema => {
  return (ctx, next) => {
    try {
      const { body } = ctx.request;
      console.log('start validation');
      validationSchema.validateSync(body, { returnError: true });
      return next();
    } catch (error) {}
  };
};

export default validateMiddlware;
