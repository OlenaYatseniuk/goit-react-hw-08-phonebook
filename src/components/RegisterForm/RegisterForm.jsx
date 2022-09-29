import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { authLogin, authRegister } from 'redux/auth/operations.auth';
import s from './RegisterForm.module.css';

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitForm = event => {
    event.preventDefault();
    const newUser = { name, email, password };
    dispatch(authRegister(newUser))
      .unwrap()
      .then(() => {
        toast.success('Success!');
        dispatch(authLogin({email, password}))
        navigate('/', { replace: true });;
      })
      .catch(() => toast.error('Error in Register!!!!!!!'));
    console.log(newUser);
    resetForm();
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'name') {
      setName(value);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setName('');
  };
  return (
    <>
      <h2>Register Form</h2>
      <form className={s.form} onSubmit={handleSubmitForm}>
        <div className={s.wrapper}>
          <label className={s.label}>
            <span className={s.span}>Name</span>
            <input
              onChange={handleInputChange}
              className={s.input}
              value={name}
              type="text"
              name="name"
              placeholder="John Smith"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
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
          Register
        </button>
      </form>
    </>
  );
}

export default RegisterForm;
