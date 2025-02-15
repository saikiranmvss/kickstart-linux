import React from 'react';
import { FaSearch } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center p-6">
        <div className='container-fluid'>
            <div className='row'>
                <div className="col-md-12">
                    <h4>Bringin amazing ideas to life</h4>
                </div>
                <div className='col-md-12'>
                    <div className="input-group">
                        <span className="input-group-text">
                        <FaSearch />
                        </span>
                        <input
                        type="text"
                        className="form-control"
                        placeholder="Search here..."
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HomePage;