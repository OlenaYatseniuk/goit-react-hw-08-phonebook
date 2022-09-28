import { useState } from 'react';
import s from './RegisterForm.module.css';

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitForm = event => {
    event.preventDefault();
    const newContact = { username, email, password };
    console.log(newContact);
    resetForm();
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'username') {
      setUsername(value);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setUsername('');
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
              value={username}
              type="text"
              name="username"
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
