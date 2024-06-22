import LoginForm from '../components/auth/LoginForm';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate ();

  if (localStorage.getItem ('auth_token')) {
    navigate('/');
  }

  return <LoginForm />;
};

export default Login;
