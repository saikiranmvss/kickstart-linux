import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { FaClock } from "react-icons/fa";

const JourneyTeam = () => {

    const [titleValue, setTitleValue] = useState("");
    const [SubtitleValue, setSubTitleValue] = useState("");
    const maxLength = 60;
    const SubTitlemaxLength = 135;
  
    const handleTitleChange = (e) => {
        const words = e.target.value.trim().split(/\s+/); 
        if (words.filter(word => word !== "").length <= maxLength) {
            setTitleValue(e.target.value);
        }
    };

    const handleSubTitleChange = (e) => {
        const words = e.target.value.trim().split(/\s+/); 
        if (words.filter(word => word !== "").length <= SubTitlemaxLength) {
            setSubTitleValue(e.target.value);
        }
      };

      const wordCount = titleValue.trim() === "" ? 0 : titleValue.trim().split(/\s+/).length;
      const SubTitlewordCount = SubtitleValue.trim() === "" ? 0 : SubtitleValue.trim().split(/\s+/).length;

    return (
        <div>
            <br />
           <h4><strong>Multi-Owner Project Setup</strong></h4>
            <p>If your startup has multiple co-founders or a team contributing to your journey—such as advisors, developers, or designers—you can add them here to showcase their involvement and expertise.</p>

            <div className="p-4 text-center bg-white shadow-sm rounded row">
                <div className="col-md-12 text-left mb-4">
                    <label className="form-label">Send Multi-Owner Request</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="For Example: name@example.com"
                    />
                    <small className="text-muted float-right">
                    Max 5 requests at a time
                    </small>
                    <br />
                    <p>Note: Requested multi-owners must regular with portal, before or After receiving the request.</p>
                </div>
            </div>
            <br />
            <h4><strong>Add Title, Roles and Responsibilities</strong></h4>
            <p>If your startup has multiple co-founders or a team contributing to your journey—such as advisors, developers, or designers—you can add them here to showcase their involvement and expertise.</p>

            <div className="p-4 text-center bg-white shadow-sm rounded row">
                <div className="col-md-6 text-left mb-4">
                    <label htmlFor="primary-cat">Primary Category</label>
                    <select className="form-select" name="primary-cat" id="primary-cat">
                        <option value="0">Select</option>
                        <option value="1">Eco-Friendly</option>
                        <option value="2">Technology</option>
                        <option value="3">Manufature</option>
                    </select>
                </div>
                <div className="col-md-6 text-left mb-4">
                    <label htmlFor="primary-cat">Roles & Responsibilities</label>
                    <select className="form-select" name="primary-cat" id="primary-cat">
                        <option value="0">Select</option>
                        <option value="1">Eco-Friendly</option>
                        <option value="2">Technology</option>
                        <option value="3">Manufature</option>
                    </select>
                </div>

                <div className="col-md-12 text-left mb-4">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={titleValue}
                        onChange={handleTitleChange}
                    />
                    <small className="text-muted float-right">
                        {wordCount}/{maxLength} Words
                    </small>
                </div>

                <div className="col-md-12 text-left mb-4">
                    <label className="form-label">Sub Title</label>
                    <textarea
                        rows={4}
                        className="form-control"                    
                        value={SubtitleValue}
                        onChange={handleSubTitleChange}
                    ></textarea>
                    <small className="text-muted float-right">
                        {SubTitlewordCount}/{SubTitlemaxLength} Words
                    </small>
                </div>
            </div>
            <br />
            <div className="col-md-12 text-left mb-4">
                <h4><strong>Multi-Owner Project Access</strong></h4>
                <p>If your startup has multiple co-founders or a team contributing to your journey—such as advisors, developers, or designers—you can add them here to showcase their involvement and expertise.</p>
            </div>

            <div className="p-4 text-center bg-white shadow-sm rounded row">
                <div className="col-12">
                    <h5 className="text-left">Total 5 Requested</h5>
                    <br />
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <span className="mr-2"><i className="fas fa-user"></i></span>
                                    name@mail.com
                                </td>
                                <td>
                                    <span className="status-circle bg-danger"></span> Inactive
                                </td>
                                <td><button className="btn btn-light btn-set">Re-Send</button></td>
                            </tr>
                            <tr>
                                <td>
                                    <span className="mr-2"><i className="fas fa-user"></i></span>
                                    name@mail.com
                                </td>
                                <td>
                                    <span className="status-circle bg-danger"></span> Inactive
                                </td>
                                <td><button className="btn btn-light btn-set">Re-Send</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <p>Note: Requested multi-owners must register with portal, before or after receiving the request.</p>
                </div>
                <div className="col-12">
                    <h5 className="text-left">Active Status</h5><br />
                    <div>

                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span className="mr-2"><i className="fas fa-user"></i></span>
                                        name@mail.com
                                    </td>
                                    <td>
                                        <span className="status-circle bg-success"></span> Active
                                    </td>
                                    <td><button className="btn btn-light btn-set">Remove</button></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="row justify-content-center">
                            <div className="col-md-4 text-left mb-4">
                                <label htmlFor="primary-cat">Primary Category</label>
                                <select className="form-select" name="primary-cat" id="primary-cat">
                                    <option value="0">Select</option>
                                    <option value="1">Eco-Friendly</option>
                                    <option value="2">Technology</option>
                                    <option value="3">Manufature</option>
                                </select>
                            </div>
                            <div className="col-md-4 text-left mb-4">
                                <label htmlFor="primary-cat">Roles & Responsibilities</label>
                                <select className="form-select" name="primary-cat" id="primary-cat">
                                    <option value="0">Select</option>
                                    <option value="1">Eco-Friendly</option>
                                    <option value="2">Technology</option>
                                    <option value="3">Manufature</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <div>
                        <p className="text-left"><strong>Note:</strong> Make sure primary category 'Leader & Founders and Co-Founders'. Will have access to edit and make any necessary changes in the project. You can add or remove anytime you want.</p>
                    </div>
                </div>
            </div>

        </div>
    )

}

    
export default JourneyTeam;
