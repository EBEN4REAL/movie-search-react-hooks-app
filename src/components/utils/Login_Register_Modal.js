import React from 'react';
import {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import Auth from '../utils/authentication';
import Config from '../../config';

const Modal = ({ modalOpen, hideModal, tab}) => {
   
    const modal_main_ref = useRef();
    const regEmailRef = useRef();
    const lgEmailRef = useRef();
    const regUserNameRef = useRef();
    const regPassRef = useRef();
    const lgPassRef = useRef();
    const confPassRef = useRef();
    const [activeTab, activateTab] = useState(''); 
    

    useEffect(() => {
        activateTab(tab);
        document.addEventListener("mousedown", handleClick); // add when mounted
        return () => {
          document.removeEventListener("mousedown", handleClick); // return function to be called when unmounted
        };
      }, []);
    
    const createNotification = (type, message) => {
        switch (type) {
            case 'success':
                NotificationManager.success(message, '', 2000);
                break;
            case 'error':
                NotificationManager.error(message, '', 2000);
                break;
            default:
                return ''
        }
    }
    const validateEmail = email =>  {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          return true;
        }
        return false;
    }
    const validatePasword = password => {
        if (password.length >= 6) {
          return true;
        }else {
            return false;
        }
    }
  
    const handleClick = e => {
        if (modal_main_ref.current.contains(e.target)) {
            return;
        }
        hideModal();
    };

    const makeActive = (e, type) => {
        activateTab(type);
    }

    const register = e => {
        e.preventDefault();
        if(!regUserNameRef.current.value) {
            return createNotification('error' , "Please input your username");
        }
       
        if(!validateEmail(regEmailRef.current.value)) {
            return createNotification('error' , "Invalid Email Format");
        }
        if(!regPassRef.current.value) {
            return createNotification('error' , "Confirm your password");
        }else  {
            if(!validatePasword(regPassRef.current.value)) {
                return createNotification('error' , "Passwords must not be less than 6 characters");
            }
        }
        if(!confPassRef.current.value) {
            return createNotification('error' , "Confirm your password");
        }else  {
            if(regPassRef.current.value !== confPassRef.current.value) {
                return createNotification('error' , "Passwords must match");
            }
        }
        const data = {
            username: regUserNameRef.current.value,
            email: regEmailRef.current.value,
            password: regPassRef.current.value
        }
        axios.post(`${Config.API_BASE_URL}/users/register`, data)
            .then(() => {
                createNotification('success' , "Signup Successful")
                activateTab("login");
            }).catch((err) => {
                console.log(err);
        })
    }
    const login = e => {
        e.preventDefault();
        if(!validateEmail(lgEmailRef.current.value)) {
            return createNotification('error' , "Invalid Email Format");
        }
        if(!lgPassRef.current.value) {
            return createNotification('error' , "Confirm your password");
        }else  {
            if(!validatePasword(lgPassRef.current.value)) {
                return createNotification('error' , "Passwords must not be less than 6 characters");
            }
        }
        let data = {
            email: lgEmailRef.current.value,
            password: lgPassRef.current.value
        }

        axios.post(`${Config.API_BASE_URL}/users/login`, data)
            .then((res) => {
                createNotification('success' , "Login Successful");
                Auth.authenticate();
                localStorage.setItem('userDetails' , JSON.stringify(res.data.userDetails));
                setTimeout(() => {
                    hideModal();
                }, 3000)
            }).catch((err) => {

            })
    }
   
    return (
        <div className={`modal_wrapper ${modalOpen ? ' display-block' : 'display-none'}}`}>
            <NotificationContainer />
            <div className="modal_main" ref={modal_main_ref}>
                <div className="tab__menu">
                    <div className={`tab_item ${activeTab === 'login' ? 'acitve_tab_item' : null}`} onClick={(e) => makeActive(e, 'login')}>
                        <h4 className={`header_title ${activeTab === 'login' ? 'active_tab_header' : null}`} >Login</h4>
                    </div>
                    <div className={`tab_item ${activeTab === 'register' ? 'acitve_tab_item' : null}`} onClick={(e) => makeActive(e, 'register')}>
                        <h4 className={`header_title ${activeTab === 'register' ? 'active_tab_header' : null}`} >Register</h4>
                    </div>
                </div>
                <form className="form_wrapper mt-5">
                    
                    {
                        activeTab === 'login' ? (
                           <div>
                                <div className="input_wrapper"  >
                                    <div className="input_icon_placeholder">
                                        <i className="fa fa-user" aria-hidden="true" style={{color: '#eaeaea', fontSize: '20px'}}></i>
                                    </div>
                                    <div className="input_div" >
                                        <input type="email" ref={lgEmailRef} placeholder="Username or Email" name="lgemail" className="input__container"   />
                                    </div>
                                </div>
                                <div className="input_wrapper mt-4" >
                                    <div className="input_icon_placeholder">
                                        <i className="fa fa-lock" aria-hidden="true" style={{color: '#eaeaea', fontSize: '20px'}}></i>
                                    </div>
                                    <div className="input_div" >
                                        <input type="password" ref={lgPassRef} placeholder="Password" className="input__container" name="lgpassword"  />
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <button className="button success max-width" style={{padding: '10px'}} onClick={(e) => login(e)}>
                                        Login
                                    </button>
                                </div>
                           </div>
                        ) : 
                        (
                            <div>
                                <div className="input_wrapper" >
                                    <div className="input_icon_placeholder">
                                        <i className="fa fa-user" aria-hidden="true" style={{color: '#eaeaea', fontSize: '20px'}}></i>
                                    </div>
                                    <div className="input_div">
                                        <input type="text" placeholder="Username" ref={regUserNameRef} name="regusername" className="input__container"  />
                                        <div className="error_div"></div>
                                    </div>
                                    
                                </div>
                                <div className="input_wrapper mt-4"  >
                                    <div className="input_icon_placeholder">
                                        <i className="fa fa-envelope" aria-hidden="true" style={{color: '#eaeaea', fontSize: '20px'}}></i>
                                    </div>
                                    <div className="input_div" >
                                        <input type="email" placeholder="Email" ref={regEmailRef} name="regemail" className="input__container" />
                                        <div className="error_div"></div>
                                    </div>
                                    
                                </div>
                                <div className="input_wrapper mt-4" >
                                    <div className="input_icon_placeholder">
                                        <i className="fa fa-lock" aria-hidden="true" style={{color: '#eaeaea', fontSize: '20px'}}></i>
                                    </div>
                                    <div className="input_div">
                                        <input type="password" name="regpassword" ref={regPassRef} placeholder="Password" className="input__container" />
                                        <div className="error_div"></div>
                                    </div>
                                </div>
                                <div className="input_wrapper mt-4" >
                                    <div className="input_icon_placeholder">
                                        <i className="fa fa-lock" aria-hidden="true" style={{color: '#eaeaea', fontSize: '20px'}}></i>
                                    </div>
                                    <div className="input_div">
                                        <input type="password" placeholder="Confirm Password" ref={confPassRef} name="confPass" className="input__container"   />
                                        <div className="error_div"></div>
                                    </div>
                                </div>
                                <div className="text-center mt-3">
                                    <p className="terms_text">
                                        By clicking Register, you agree to our  
                                        <span style={{color: '#428bca'}}> Terms and Conditions </span>
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <button className="button success max-width" style={{padding: '10px'}} onClick={(e) => register(e)} >
                                        Register
                                    </button>
                                </div>
                        </div>
                        )
                    }
                </form>
                
            </div>
        </div>
    )
}


export default Modal;