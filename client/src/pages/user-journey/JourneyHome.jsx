import React , {useState , useEffect} from "react";
import { useOutletContext } from "react-router-dom";
import Rules from '../../components/user-journey/Rules.jsx';
import JourneyCategory from '../../components/user-journey/Category.jsx';
import MyJourney from '../../components/user-journey/MyJourney.jsx';
import JourneyTeam from '../../components/user-journey/JourneyTeam.jsx'
import JourneyInvestors from '../../components/user-journey/JourneyInvestors.jsx'
import JourneyFaq from '../../components/user-journey/JourneyFaq.jsx'
import JourneyConnections from '../../components/user-journey/JourneyConnections.jsx'
import JourneyCommunity from '../../components/user-journey/JourneyCommunity.jsx'

const JourneyHome = () => {
  const { JourneyActiveTab , journeyData } = useOutletContext();
  const [journeyForm , setJourneyForm] = useState({
      email:'',
      agreement:'',
      catPrimaryCategory:'',
      catPrimarySubCategory:'',
      catCategory:'',
      catSubCategory:'',
      catLocation:'',
      catTitle:'',
      catSubtitle:'',
      catVideo:'',
      catStartUpBeginDate:new Date().toLocaleDateString('en-GB').split('/').reverse().join('-'),
      catStartUpLaunchDate:new Date().toLocaleDateString('en-GB').split('/').reverse().join('-'),
      journeyTitleBlocks:[],
      journeyImages:[{image:''}],
      journeyVideos:[{video:''}],
      journeyWebVideos:[],
      journeyTitles:[],
      journeyContents:[],
      teamOwnerRequest:[{}],
      teamPrimaryCategory:'',
      teamPrimaryRoles:'',
      teamTitle:'',
      teamSubTitle:'',
      faqData:[{}],
  });

  useEffect(() => {
    if (journeyData) {
      setJourneyForm((prevForm) => ({
        ...prevForm,
        ...journeyData, 
      }));
    }    
  }, [journeyData]);


  return (
    <div className="container w-50">
      <form>
        {JourneyActiveTab === "Rules" && <Rules journeyForm={journeyForm} setJourneyForm={setJourneyForm}  />}
        {JourneyActiveTab === "Category" && <JourneyCategory journeyForm={journeyForm} setJourneyForm={setJourneyForm} />}
        {JourneyActiveTab === "MyJourney" && <MyJourney journeyForm={journeyForm} setJourneyForm={setJourneyForm} />}
        {JourneyActiveTab === "JourneyTeam" && <JourneyTeam journeyForm={journeyForm} setJourneyForm={setJourneyForm} />}
        {/* {JourneyActiveTab === "JourneyInvestors" && <JourneyInvestors journeyForm={journeyForm} setJourneyForm={setJourneyForm} />} */}
        {JourneyActiveTab === "JourneyFaq" && <JourneyFaq journeyForm={journeyForm} setJourneyForm={setJourneyForm} />}
        {/* {JourneyActiveTab === "JourneyConnections" && <JourneyConnections journeyForm={journeyForm} setJourneyForm={setJourneyForm} />} */}
        {/* {JourneyActiveTab === "JourneyCommunity" && <JourneyCommunity journeyForm={journeyForm} setJourneyForm={setJourneyForm} />} */}
      </form>
    </div>
  );
};

export default JourneyHome;
