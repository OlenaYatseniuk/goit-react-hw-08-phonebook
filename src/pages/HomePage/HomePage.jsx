import Section from 'components/Section';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { selectLoggedIn } from 'redux/auth/selectors.auth';
import s from './HomePage.module.css';

function HomePage() {
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
      <Section>
        {isLoggedIn ? <div className={s.box}> Thank you for being with us! We appreciate it &#128156;</div>: <div className={s.box}>
      <span className={s.span}> Hi! This is Phonebook App! You can create your account to save your contacts for your convenience. Please,
      <Link className={s.link} to='/login'>login</Link>or<Link className={s.link} to='/register'>register</Link>to start!</span>
      <Outlet/>
    </div>}
      </Section>

  )
}

export default HomePage
