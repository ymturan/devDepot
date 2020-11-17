/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

const SeekerSignup = ({ isLoggedIn, isEngineerUser, history }) => {
  return (
    <form>
      <p>Employer Signup</p>
        <label htmlFor='name'>Name: </label>
        <input
          type='text'
          name='name'
          placeholder='Name'
          id='name'>
        </input>
        <label htmlFor='email'>Email: </label>
        <input
          type='text'
          name='email'
          placeholder='email'
          id='email'>
        </input>
        <label htmlFor='username'>Username: </label>
        <input
          type='text'
          name='username'
          placeholder='Username'
          id='username'>
        </input>
        <label htmlFor='password'>Password: </label>
        <input
          type='text'
          name='password'
          placeholder='Password'
          id='password'>
        </input>
        <label htmlFor='aboutme'>Tell Us About Yourself: </label>
        <textarea
          type='text'
          name='aboutme'
          placeholder='Tell Us About Yourself...'
          id='aboutme'>
        </textarea>
        <button onClick={() => history.push('/homepage')}>
          Signup
        </button>
    </form>
  );
};

export default SeekerSignup;