import Section from 'components/Section';
import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import s from './HomePage.module.css';

function HomePage() {
  return (
      <Section>
        <div className={s.box}>
      Hi! This is Phonebook App! Please,
      <Link className={s.link} to='/login'> login </Link> or <Link className={s.link} to='/register'> register </Link> to start!
      <Outlet/>
    </div>
      </Section>

  )
}

export default HomePage
