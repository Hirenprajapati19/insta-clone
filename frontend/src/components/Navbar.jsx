import React, { useContext} from "react";
import logo from '../img/insta.png'
import '../css/Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from "../context/LoginContext";

const Navbar = ({login}) => {
    const navigate=useNavigate()
    const { setModalOpen } = useContext(LoginContext);
    const loginStatus = () => {
        const token = localStorage.getItem('jwt')
        if (login || token) {
            return [
            <>
                <Link to={"/profile"}><li>Profile</li></Link>
                <Link to={"/createpost"}><li>CreatePost</li></Link>
                <Link to={"/myfollowingpost"}><li>My Following Post</li></Link>
                <Link to={""}>
            <button className="primaryBtn" onClick={() => setModalOpen(true)}>
              Log Out
            </button>
          </Link>
            </>
            ]
        }
        else{
            return [
                <>
                 <Link to={"/signup"}><li>SignUp</li></Link>
                 <Link to={"/signin"}><li>SignIn</li></Link>
                </>
            ]
        }
    }

    const loginStatusMobile = () => {
        const token = localStorage.getItem('jwt')
        if (login || token) {
            return [
            <>
                <Link to={"/"}>
                    <li>
                        <span class="material-symbols-outlined">
                            home
                        </span>
                    </li>
                </Link>
                <Link to={"/profile"}>
                    <li>
                        <span class="material-symbols-outlined">
                            account_circle
                        </span>
                    </li>
                </Link>
                <Link to={"/createPost"}>
                    <li>
                        <span class="material-symbols-outlined">
                            add_box
                        </span>
                    </li>
                </Link>
                <Link to={"/myfollowingpost"}>
                    <li>
                        <span class="material-symbols-outlined">
                            explore
                        </span>
                    </li>
                </Link>
                <Link to={""}>
            <button className="primaryBtn" onClick={() => setModalOpen(true)}>
                <span class="material-symbols-outlined" >
                    logout
                </span>
            </button>
          </Link>
            </>
            ]
        }
        else{
            return [
                <>
                 <Link to={"/signup"}><li>SignUp</li></Link>
                 <Link to={"/signin"}><li>SignIn</li></Link>
                </>
            ]
        }
    }


    return (
        <>
            <div className='navbar'>

                <img id="insta-logo" src={logo} alt="" 

                onClick={() => {
                    navigate('/')
                }}
                />
                <ul className="nav-menu">
                   {loginStatus()}
                </ul>
                <ul className="nav-mobile">
                   {loginStatusMobile()}
                </ul>
            </div>
        </>
    )
}

export default Navbar



// import React from 'react';
// import logo from '../img/insta.png';
// import './Navbar.css';
// import { Link } from 'react-router-dom';

// const Navbar = () => {

   
//     const navLinks = [
//         { path: "/signup", label: "SignUp" },
//         { path: "/signin", label: "SignIn" },
//         { path: "/profile", label: "Profile" },
//         { path: "/createpost", label: "CreatePost" },
//     ];

//     return (
//         <div className='navbar'>
//             {/* <Link to={"/"}> */}
//             <img src={logo} alt="Logo" />
//             {/* </Link> */}
//             <ul>
//                 {navLinks.map((link, index) => (
//                     <Link key={index} to={link.path}>
//                         <li>{link.label}</li>
//                     </Link>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Navbar;
