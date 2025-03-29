import React from "react";
import { FaSearch, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import InvestmentCard from '../../../components/public/journey/InvestmentCard';
import NestedTabs from '../../../components/public/journey/NestedTabs';

const HomePage = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">

      <InvestmentCard />

    <div className="container-fluid">
        <div className="row justify-content-center mt-4">                    
          <div className="col-md-12"><img src="images/banner-stick.png" alt="" /></div>
          <div className="col-md-7">
            <NestedTabs />
          </div>
          <div className="col-md-4">
            
          </div>
        </div>
    </div>

      </div>
  );
};

export default HomePage;
