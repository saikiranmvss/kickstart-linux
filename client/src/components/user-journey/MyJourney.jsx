import { useState } from "react";
import VideoEmbed from './VideoEmbed';
import DateInput from '../datePicker';
import { FaPlus } from "react-icons/fa";
import JourneySaveButton from './journeySaveButton';


const MyJourney = ({ journeyForm, setJourneyForm }) => {

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

           <h4><strong>AI-Powered Content Management Tool</strong></h4>
            

            <p>Our AI-driven tool helps you craft a compelling startup pitch deck by refining and customizing your content for a perfect presentation. Simply paste your story, and AI will enhance it—structuring, polishing, and optimizing it for your startup journey.</p>

            <div className="p-4 text-center bg-white shadow-sm rounded row">
                <div className="col-md-12 text-left mb-4">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={titleValue}
                        onChange={handleTitleChange}
                    />
                    <small className="text-muted float-right">
                        {wordCount}/{maxLength} characters
                    </small>
                </div>
                <br />
                <div className="col-md-12 text-left mb-4">
                    <label className="form-label">Sub Title</label>
                    <textarea
                        rows={4}
                        className="form-control"                    
                        value={SubtitleValue}
                        onChange={handleSubTitleChange}
                    ></textarea>
                    <small className="text-muted float-right">
                        {SubTitlewordCount}/{SubTitlemaxLength} characters
                    </small>
                </div>

            </div>
            <br />
            <div className="d-flex justify-content-end align-items-center"><span className="m-0 pr-4">Add More</span><button className="form-control w-10" > <FaPlus style={{fontSize:'18px'}}/></button></div>
            <br />

            <div className="p-4 text-center bg-white shadow-sm rounded row">
                <div className="col-md-12 text-left">
                    <div className="text-center">
                        <button className="btn btn-light border border-[#aeaeae]">Upload a image</button>
                    </div>
                    <div className="text-center mt-4">
                        <p>
                            Drag n Drop an image here, or select file, <br/>Note: JPG , PNG , GIF , or , WEBP , no large then 50 MB. 
                        </p>
                    </div>
                </div>
            </div>   
            <br />
            <div className="d-flex justify-content-end align-items-center"><span className="m-0 pr-4">Add More</span><button className="form-control w-10" > <FaPlus style={{fontSize:'18px'}}/></button></div>
            <br />

            <div className="p-4 text-center bg-white shadow-sm rounded row">
                <div className="col-md-12 text-left">
                    <div className="text-center">
                        <button className="btn btn-light border border-[#aeaeae]">Upload a video</button>
                    </div>
                    <div className="text-center mt-4">
                        <p>
                            Drag n Drop an image here, or select file, <br/>Note: JPG , PNG , GIF , or , WEBP , no large then 50 MB. 
                        </p>
                    </div>
                </div>
            </div>
            <br />
            <div className="d-flex justify-content-end align-items-center"><span className="m-0 pr-4">Add More</span><button className="form-control w-10" > <FaPlus style={{fontSize:'18px'}}/></button></div>
            
            <br />

            <VideoEmbed />

            <br />

            <div className="d-flex justify-content-end align-items-center"><span className="m-0 pr-4">Add More</span><button className="form-control w-10" > <FaPlus style={{fontSize:'18px'}}/></button></div>
            
            <br />

            <div className="p-4 text-center bg-white shadow-sm rounded row">
                <div className="col-md-12 text-left mb-4">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={titleValue}
                        onChange={handleTitleChange}
                    />
                    <small className="text-muted float-right">
                        {wordCount}/{maxLength} characters
                    </small>
                </div>
            </div>
                <br />
                <div className="d-flex justify-content-end align-items-center"><span className="m-0 pr-4">Add More</span><button className="form-control w-10" > <FaPlus style={{fontSize:'18px'}}/></button></div>
            
            <br />
            <div className="p-4 text-center bg-white shadow-sm rounded row">
                <div className="col-md-12 text-left mb-4">
                    <label className="form-label">Content</label>
                    <textarea
                        rows={4}
                        className="form-control"                    
                        value={SubtitleValue}
                        onChange={handleSubTitleChange}
                    ></textarea>
                    <small className="text-muted float-right">
                        {SubTitlewordCount}/{SubTitlemaxLength} characters
                    </small>
                </div>
            </div>
            <br />
            <div className="d-flex justify-content-end align-items-center"><span className="m-0 pr-4">Add More</span><button className="form-control w-10" > <FaPlus style={{fontSize:'18px'}}/></button></div>
           
            <br />

            
            <JourneySaveButton pageValue="02" journeyForm={journeyForm} setJourneyForm={setJourneyForm}  />
         
        </div>
    );
};

export default MyJourney;
