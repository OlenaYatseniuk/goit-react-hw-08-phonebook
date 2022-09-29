import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authLogin } from 'redux/auth/operations.auth';
import s from './LoginForm.module.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = event => {
    event.preventDefault();
    const user = { email, password };
    console.log(user);
    dispatch(authLogin(user))
      .unwrap()
      .then(() => {
        toast.success('Success!');
        navigate('/contacts', { replace: true });
      })
      .catch(() => toast.error('Error in Login !!!!!!!'));
    resetForm();
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <h2> Login Form</h2>
      <form className={s.form} onSubmit={handleSubmitForm}>
        <div className={s.wrapper}>
          <label className={s.label}>
            <span className={s.span}>Email</span>
            <input
              onChange={handleInputChange}
              className={s.input}
              value={email}
              type="email"
              name="email"
              placeholder="JohnSmith@gmail.com"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <label className={s.label}>
            <span className={s.span}>Password</span>
            <input
              onChange={handleInputChange}
              className={s.input}
              value={password}
              type="password"
              name="password"
              placeholder="gfcvjbkn;m8865"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
        </div>

        <button type="submit" name="submit" className={s.submit}>
          Login
        </button>
      </form>
    </>
  );
}

export default LoginForm;
