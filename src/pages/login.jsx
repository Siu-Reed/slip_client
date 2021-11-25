import React, { useState } from 'react';
import Banner from '../components/banner';
import styles from '../css/login.module.css';

const Login = ({ onSignUp, onLogin }) => {
const [signup, setSignup] = useState(false);
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [url, setURL] = useState('');
const [text, setText] = useState('');
const [isAlert, setIsAlert] = useState(false);

const onSubmit = (event) => {
    event.preventDefault();
    if (signup) {
    onSignUp(username, password, name, email, url).catch(setError);
    } else {
    onLogin(username, password).catch(setError);
    }
};

const setError = (error) => {
    setText(error.toString());
    setIsAlert(true);
};

const onChange = (event) => {
    const {
    target: { name, value, checked },
    } = event;
    switch (name) {
    case 'username':
        return setUsername(value);
    case 'password':
        return setPassword(value);
    case 'name':
        return setName(value);
    case 'email':
        return setEmail(value);
    case 'url':
        return setURL(value);
    case 'signup':
        return setSignup(checked);
    default:
    }
};

return (
    <>
    <Banner text={text} isAlert={isAlert} />
    <form className={styles.authForm} onSubmit={onSubmit}>
        <h1 className={styles.welcome}>Welcome.</h1>
        <h3 className={styles.welcomeSub}>팔로워들과, 채팅하듯, 사라질 말들을
            <br /><br /><span>던져보세요. &gt;</span>
        </h3>
        <div className={styles.inputContainer}>
            <input
                name='username'
                type='text'
                placeholder='Id'
                value={username}
                onChange={onChange}
                className={styles.formInput}
                required
            />
            <input
                name='password'
                type='password'
                placeholder='Password'
                value={password}
                className={styles.formInput}
                onChange={onChange}
            />
            {signup && (
                <>
                <input
                    name='name'
                    type='text'
                    placeholder='Name'
                    value={name}
                    onChange={onChange}
                    className={styles.formInput}
                    required
                />
                <input
                    name='email'
                    type='email'
                    placeholder='Email'
                    value={email}
                    onChange={onChange}
                    className={styles.formInput}
                    required
                />
                <input
                    name='url'
                    type='url'
                    placeholder='Profile Image URL (optional)'
                    value={url}
                    onChange={onChange}
                    className={styles.formInput}
                />
                </>
            )}
        </div>
        <div className={styles.formSignup}>
            <input
                name='signup'
                id='signup'
                type='checkbox'
                onChange={onChange}
                checked={signup}
            />
            <label htmlFor='signup'> Create a new account?</label>
        </div>
        <button className={`${styles.formBtn} ${styles.authFormBtn}`} type='submit'>
        {signup ? 'Sign Up' : 'Sign In'}
        </button>
    </form>
    </>
);
};

export default Login;
