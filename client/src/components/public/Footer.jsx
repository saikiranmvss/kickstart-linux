const Footer = () => {
    return (
      <footer className="bg-white text-gray-600 text-center p-3 border-t">
        <div className="row">
            <div className="col-md-4">
                <img src="images/footer-img.png" alt="" srcset="" className="w-100"/>
            </div>
            <div className="col-md-8" style={{padding:'4rem'}}>
                <div className="row">
                    <div className="col-md-12 text-left">
                        <h5>Kicksarter Platform</h5>
                        <h6 style={{lineHeight:'1.8'}}>
                        Launched In 2024, The Startup Platform Initiative Has Introduced Several Programs Aimed At Connecting Entrepreneurs And Investors. These Programs Foster Collaboration, Build A Robust Startup Ecosystem, And Transform Bharat Into A Nation Of Job Creators Rather Than Job Seekers. The Dedicated Kickstarter Team Manages These Initiatives
                        </h6>
                    </div>
                    <div className="col-md-12">
                        <hr />
                    </div>
                    <div className="col-md-12 footer-links">
                        <div className="row">
                            <div className="col-md-3 link-body">
                                <strong>About Us</strong>
                                <ul>
                                    <li>Our Story</li>
                                    <li>Collabaration</li>
                                    <li>Partners</li>
                                </ul>
                            </div>
                            <div className="col-md-3 link-body">
                                <strong>Support</strong>
                                <ul>
                                    <li>Support</li>
                                    <li>Blog</li>
                                    <li>Help Center</li>
                                </ul>
                            </div>
                            <div className="col-md-3 link-body">
                                <strong>Know More</strong>
                                <ul>
                                    <li>News Letters</li>
                                    <li>Contact Us</li>
                                    <li>Career</li>
                                </ul>
                            </div>
                            <div className="col-md-3 link-body">
                                <strong>Terms Of Use</strong>
                                <ul>
                                    <li>Terms Of Use</li>
                                    <li>Payment & Safty</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
