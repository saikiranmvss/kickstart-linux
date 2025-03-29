import React from "react"
import { useOutletContext } from "react-router-dom";
import InvestmentCard from '../../../components/public/journey/InvestmentCard';
import NestedTabs from '../../../components/public/journey/NestedTabs';
import CommentList from '../../../components/public/journey/Comments';
import FAQs from '../../../components/public/journey/FAQs';

const HomePage = () => {

  const journey = useOutletContext();

  if (!journey) {
    return (
      <div className="d-flex align-items-center justify-content-center" style={{ height: "100vh" }}>
       
      </div>
    );
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">

      <InvestmentCard journey={journey}/>

    <div className="container-fluid">
        <div className="row justify-content-center mt-4">                    
          <div className="col-md-12 g-0"><img src="images/banner-stick.png" alt="" /></div>
          <div className="col-md-7">
            <NestedTabs journey={journey}/>
          </div>
          <div className="col-md-3">
            <div className="sticky-top" style={{ top: "10px",zIndex:0 }}>
              <div className="p-4 bg-white rounded-lg">
                <h3 className="font-bold border-b pb-2 mb-3">Comments</h3>
                <div
                  className="overflow-auto max-h-[400px] no-scrollbar"
                  style={{
                    maxHeight: "800px",
                    overflowY: "auto",
                  }}
                >
                  <CommentList />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
              <FAQs journey={journey}/>
          </div>
        </div>
    </div>

      </div>
  );
};

export default HomePage;
