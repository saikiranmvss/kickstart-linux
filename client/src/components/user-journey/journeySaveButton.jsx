import { FaEye, FaSave } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import axios from "../../utils/axiosConfig";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const JourneySaveButton = ({ pageValue, nextPageName, journeyForm, setJourneyForm }) => {
    const { setJourneyActiveTab } = useOutletContext();              
      const handleSave = async () => {
        const email = JSON.parse(localStorage.getItem('user')).email;
        setJourneyForm(prevForm => ({...prevForm,email: email }))
        if(nextPageName!=''){
            setJourneyActiveTab(nextPageName);
        }
        const updatedJourneyForm = {
            ...journeyForm,
            email,
            journeyTitleBlocks: journeyForm.journeyTitleBlocks ?? journeyForm.journeyTitleBlocks.map(block => block.title).join(', '),
            journeyVideos: journeyForm.journeyVideos ??  journeyForm.journeyVideos.map(video => video.video).join(', '),
            journeyWebVideos: journeyForm.journeyWebVideos ?? journeyForm.journeyWebVideos.join(', '),
            journeyTitles: journeyForm.journeyTitles ?? journeyForm.journeyTitles.join(', '),
            journeyContents: journeyForm.journeyContents ?? journeyForm.journeyContents.join(', '),
            journeyImages: journeyForm.journeyImages ?? journeyForm.journeyImages.map(image => image.image).join(', '),
        };

        setJourneyForm(updatedJourneyForm);
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/journey/user-journey`, {
                ...journeyForm, 
                email: email,
                urlSlug:email.split('@')[0],
            });
            if (response.status == 200) {
                if (nextPageName == "end") {
                    Swal.fire({
                      title: "Details Submitted and Public Url Generated Successfully!",
                      icon: "success",
                      showConfirmButton: false,
                      timer: 3000, 
                    });
            
                    toast.success("Redirecting to your page...", {
                      position: "top-right",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                    });
                                
                    setTimeout(() => {
                      window.location.href = "/"+email.split('@')[0];
                    }, 3000); 

                }

            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("Something went wrong. Please try again.", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }

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
