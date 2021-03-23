import React, {useRef} from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {login} from "../../store/api-action";
import Header from '../header/header';
import {ActionCreator} from "../../store/action";

const LoginScreen = ({onSubmit}) => {
  const loginRef = useRef();
  const passwordRef = useRef();

  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }, loginRef.current.value);
    history.push(`/`);
  };

  return <div className="page page--gray page--login">
    <Header/>

    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form
            className="login__form form"
            action="#"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input className="login__input form__input"
                type="email" name="email"
                placeholder="Email"
                required
                ref={loginRef}
                id="name"
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                ref={passwordRef}
                className="login__input form__input"
                type="password" name="password"
                placeholder="Password"
                required/>
            </div>
            <button
              className="login__submit form__submit button"
              type="submit"
            >Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  </div>;
};

LoginScreen.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData, loginName) {
    dispatch(login(authData));
    dispatch(ActionCreator.setLogin(loginName));
  }
});

export {LoginScreen};
export default connect(null, mapDispatchToProps)(LoginScreen);
