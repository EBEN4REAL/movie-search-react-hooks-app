import React from "react";
import LoginRegisterModal from '../Components/utils/Login_Register_Modal.js';
import {useState, useRef} from 'react';
import {Dropdown} from 'react-bootstrap';
import Auth from './utils/authentication';



const logoURl = "https://yts.mx/assets/images/website/logo-YTS.svg";



const Header = (props) => {
  const [modalOpen, showModal]  = useState(false);
  const [activeMenu, setActiveMenu] = useState('login')
  const [compKey, reMountComponent] = useState(0)

  const openModal = (type) => {
    setActiveMenu(type)
    showModal(true);
  }
  const hideModal = () => {
    showModal(false);
  }
  const logout = () => {
    localStorage.removeItem("userDetails");
    Auth.signout();
    let key = compKey + 1;
    reMountComponent(key);
  }
  console.log(Auth.getAuth());
  return (
    <header className="nav">
       <div className="main_header">
        <div className="logo_wrapper">
          <img src={logoURl} />
        </div>  
        <div className="menu_items">
          <div className="search_wrapper">
            <div className="search_icon_wrapper">
            <i className="fa fa-search search_icon" aria-hidden="true"></i>
            </div>
            <div className="search_input">
                <input type="search" placeholder="Quick Search" onChange={props.inputChange } />
            </div>
          </div>
          <div className="menu_item">
            <h2 className="">Home</h2 >
          </div>
          <div className="menu_item">
            <h2 className="" style={{color: '#6AC045'}}>4K</h2>
          </div>
          <div className="menu_item">
            <h2 className="">Browse Movies</h2>
          </div>
          <div className="menu_item">
            {
              Auth.getAuth() ? 
              (
                <Dropdown key={compKey}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {Auth.getAuth().username}
                  </Dropdown.Toggle>
      
                  <Dropdown.Menu>
                    <Dropdown.Item href="#" onClick={() => logout()}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : 
              <h2 className="" style={{color: 'white'}} ><span className="account_link" onClick={() => openModal('login')}>Login</span> | <span className="account_link" onClick={() => openModal('register')}>Register</span></h2>
            }
          </div>
         
        </div>
      </div>
      {
        modalOpen ? (
          <LoginRegisterModal modalOpen={modalOpen} hideModal={() => hideModal()} tab={activeMenu}   />
        ) : null
      }
    </header>
   
  );
};

export default Header;





