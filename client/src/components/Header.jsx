import { Link , useNavigate } from 'react-router-dom';
import {useContext} from 'react'
import { AuthContext } from "../context/AuthContext";
import axios from 'axios';
import { toast } from "react-toastify";

const Header = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
      try {
        const response = await axios.post('/api/auth/logout', {}, { withCredentials: true }); 
        if (response.status === 200) {
          
          toast.success(response.data.message);
          
          localStorage.removeItem('accessToken');
          localStorage.removeItem('user');
          
          window.location.href = "/login";
        }
      } catch (error) {
        console.error("Error logging out:", error);
        toast.error("Failed to log out. Please try again.");
      }
    };
  return (
    <header id="page-topbar">
    <div className="navbar-header">
        <div className="d-flex">
            
            <div className="navbar-brand-box text-center">
                <a href="/" className="logo logo-dark">
                    <span className="logo-sm">
                        <img src="assets/images/logo-sm.png" alt="logo-sm-dark" height="50" />
                    </span>
                    <span className="logo-lg">
                        <img src="assets/images/logo-dark.png" alt="logo-dark" height="50" />
                    </span>
                </a>

                <a href="/" className="logo logo-light">
                    <span className="logo-sm">
                        <img src="assets/images/logo-sm.png" alt="logo-sm-light" height="50" />
                    </span>
                    <span className="logo-lg">
                        <img src="assets/images/logo-light.png" alt="logo-light" height="50" />
                    </span>
                </a>
            </div>

            <button type="button" className="btn btn-sm px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn">
                <i className="ri-menu-2-line align-middle"></i>
            </button>

            
            <form className="app-search d-none d-lg-block">
                <div className="position-relative">
                    <input type="text" className="form-control" placeholder="Search..." />
                    <span className="ri-search-line"></span>
                </div>
            </form>
        </div>

        <div className="d-flex">

            <div className="dropdown d-inline-block d-lg-none ms-2">
                <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="ri-search-line"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                    aria-labelledby="page-header-search-dropdown">
        
                    <form className="p-3">
                        <div className="mb-3 m-0">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search ..." />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="submit"><i className="ri-search-line"></i></button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="dropdown d-inline-block user-dropdown">
                <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img className="rounded-circle header-profile-user" src="/images/default_img.jpg"
                        alt="Header Avatar" />
                    <span className="d-none d-xl-inline-block ms-1">
                    {user?.name 
                        ? user.name 
                        : (user?.firstName || user?.lastName 
                            ? `${user?.firstName || ''} ${user?.lastName || ''}`.trim() 
                            : user?.email || ''
                        )
                    }
                    </span>
                    <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                    <Link className="dropdown-item" to='/view-profile'><i className="ri-user-line align-middle me-1"></i> View Profile</Link>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item text-danger" href="#" onClick={handleLogout}><i className="ri-shut-down-line align-middle me-1 text-danger"></i> Logout</a>
                </div>
            </div>

        </div>
    </div>
</header>
  );
};

export default Header;
