import { FaEye, FaSave } from "react-icons/fa";

const JourneySaveButton = ({ pageValue }) => {
    return (
        <div>
            <div className="p-4 mt-4 text-center align-items-center bg-white shadow-sm rounded row">
                <div className="col-md-4">
                    Showing | <span>{pageValue} - 07</span>
                </div>
                <div className="col-md-8">
                    <button type="button" className="btn btn-light mr-4">
                        <FaEye /> Preview
                    </button>  
                    <button type="button" className="btn btn-primary">
                        <FaSave /> Save and Next
                    </button>  
                </div>
            </div>
        </div>
    );
};

export default JourneySaveButton;
