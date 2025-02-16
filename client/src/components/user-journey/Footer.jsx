import {Link} from 'react-router-dom';
const Footer = () => {
    return (
      <footer className="bg-white text-gray-600 text-center p-0 border-t">
        <div className="container-fluid footer-2 position-fixed bottom-0">
            <div className="container d-flex flex-column flex-md-row align-items-center footer-2-body journey-footer-2-body p-3">
                <div className="d-flex gap-3">
                    <p className="mb-0 text-center">
                    © 2024 KickStarter Platform. All Rights Reserved
                    </p>
                </div>
            
                <div className="d-flex gap-3 links">
                    <Link to="/terms" className=''>Terms Of Use</Link>
                    <Link to="/trust_safety" className=''>Trust and Safety</Link>
                    <Link to="/privacy-policy" className=''>Privacy Policy</Link>
                    <Link to="/cookie-policy" className=''>Cookie Policy</Link>
                </div>

            </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
