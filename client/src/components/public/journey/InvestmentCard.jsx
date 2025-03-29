import React, { useEffect } from "react";
import { FaComments   } from "react-icons/fa";
import { formatDate } from "../../../utils/dateUtils";

const InvestmentCard = ({journey}) => {

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-12 text-center mb-3">
            <h5 className="font-bold leading-loose">{ journey.catTitle }</h5>
            <h6 className="leading-loose">{ journey.catSubtitle }</h6>
        </div>
        <div className="col-md-6">
            <iframe src={`${journey?.catVideo=='' ? 'https://placehold.co/800X400' : journey?.catVideo }?autoplay=0&controls=0`} className="w-100 rounded-lg" allowFullScreen height={400} ></iframe>
            <h6 className="text-[#767575]"><i className="fa-solid fa-location-dot me-1 text-[20px]"></i> {journey.catLocation} , India</h6>
        </div>
        <div className="col-md-3 d-flex flex-column justify-content-around p-4">
            <div>
                <div className="bg-[#0071e3] h-[0.4rem] mb-1"></div>
                <h3 className="text-[#0071e3] font-bold">₹25,000,00 Lakhs</h3>
                <p>Investment Required</p>
            </div>
            <div className="text-[#767575]">
                <h5>{formatDate(journey.catStartUpBeginDate)}</h5>
                <h6>Project Date | 6 Months Old</h6>
            </div>
            <div className="text-[#767575]">
                <h5>6 | Founder`s</h5>
                <h6>Connections</h6>
                <button className="border rounded-square bg-[#0071e3] btn btn-primary w-100 text-white p-[0.8rem] position-relative">
                    <FaComments className="text-blue-500 text-2xl text-white position-absolute left-[2rem]" /><h5> Connect Now</h5>
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard;
