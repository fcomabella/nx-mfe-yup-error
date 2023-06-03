// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useForm } from 'react-hook-form';
import { ObjectSchema, object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classes from './app.module.css';

type LoginRequest = {
  username: string;
  password: string;
};

const loginFormSchema: ObjectSchema<LoginRequest> = object().shape({
  username: string().required('Enter your username.'),
  password: string().required('Enter your password.'),
});

export const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit} noValidate>
      <div>
        <label>
          User name: <input type="text" {...register('username')} />
        </label>
      </div>
      {errors.username?.message && (
        <div className={classes.error}>{errors.username.message}</div>
      )}
      <div>
        <label>
          Password: <input type="password" {...register('username')} />
        </label>
      </div>
      {errors.password?.message && (
        <div className={classes.error}>{errors.password.message}</div>
      )}
      <button type="submit">Login</button>
    </form>
  );
};

export default App;
