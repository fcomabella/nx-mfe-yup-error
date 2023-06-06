// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useForm } from 'react-hook-form';
import { ObjectSchema, object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classes from './app.module.css';

type ValidatedFormRequest = {
  firstName: string;
  lastName: string;
  title?: string;
};

const validatedFormSchema: ObjectSchema<ValidatedFormRequest> = object().shape({
  firstName: string().required('Write your first name.'),
  lastName: string().required('Write your last name.'),
  title: string(),
});

export const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidatedFormRequest>({
    defaultValues: {
      firstName: '',
      lastName: '',
      title: '',
    },
    resolver: yupResolver(validatedFormSchema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit} noValidate>
      <div>
        <label>
          First name: <input type="text" {...register('firstName')} />
        </label>
      </div>
      {errors.firstName?.message && (
        <div className={classes.error}>{errors.firstName.message}</div>
      )}
      <div>
        <label>
          Last name: <input type="password" {...register('lastName')} />
        </label>
      </div>
      {errors.lastName?.message && (
        <div className={classes.error}>{errors.lastName.message}</div>
      )}
      <div>
        <label>
          Title: <input type="password" {...register('title')} />
        </label>
      </div>
      {errors.title?.message && (
        <div className={classes.error}>{errors.title.message}</div>
      )}
      <button type="submit">Login</button>
    </form>
  );
};

export default App;
