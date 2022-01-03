import React, { useEffect, useRef } from 'react';

import { Link } from 'react-router-dom';
import './header.scss';

const Header = ({ authService }) => {
  const logoutEl = useRef(null);
  const loginEl = useRef(null);

  useEffect(() => {
    //console.log(authService.state.login);
  }, []);
  const onLogout = () => {
    authService.logout();
    authService.state.login = true;

    console.log(logoutEl, loginEl);

    //loginEl.current.style.display = 'inline-blox';

    alert('로그아웃 되었습니다.');
  };
  return (
    <header className="header">
      <div className="wrapper">
        <div className="d-flex">
          <ul className="nav">
            <li className="nav-item">
              <Link to="/main" className="nav-link">
                main
              </Link>
            </li>
            {/*<li className="nav-item">
							<Link to="/shop" className="nav-link">
								shop
							</Link>
						</li>*/}

            <li className="nav-item">
              <Link to="/goods" className="nav-link">
                goods
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/crud" className="nav-link">
                Crud
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/board" className="nav-link">
                board
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/board" className="nav-link">
                board
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/news" className="nav-link">
                news
              </Link>
            </li>
          </ul>

          <div className="membership ml-auto">
            <Link to="/join" className=" button button-primary">
              회원가입
            </Link>

            <Link to="/login" ref={loginEl} className="ml-3 button button-primary ">
              로그인
            </Link>

            {authService.state.login == false ? (
              <button className="ml-3 button button-primary" onClick={onLogout} ref={logoutEl}>
                Logout
              </button>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
