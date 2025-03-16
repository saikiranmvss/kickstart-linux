import { FaEye, FaSave } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";

const JourneySaveButton = ({ pageValue, nextPageName, journeyForm, setJourneyForm }) => {
    const { setJourneyActiveTab } = useOutletContext();

      const handleSave = () => {
        if(nextPageName!=''){
            setJourneyActiveTab(nextPageName);
        }
        setJourneyForm(prevForm => ({
          ...prevForm,
          catTitle: prevForm.journeyTitleBlocks.map(block => block.title).join(', '),
          catSubtitle: prevForm.journeyTitleBlocks.map(block => block.subTitle).join(', '),
          catVideo: prevForm.journeyVideos.map(video => video.video).join(', '),
          journeyWebVideos: prevForm.journeyWebVideos.join(', '),
          journeyTitles: prevForm.journeyTitles.join(', '),
          journeyContents: prevForm.journeyContents.join(', '),
          journeyImages: prevForm.journeyImages.map(image => image.image).join(', '),
        }));
        
        console.log("Updated Journey Form:", journeyForm);
        alert("Journey Form updated successfully!");
      };

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
                    <button type="button" className="btn btn-primary" onClick={handleSave} >
                        <FaSave /> Save and Next
                    </button>  
                </div>
            </div>
        </div>
    );
};

export default JourneySaveButton;
