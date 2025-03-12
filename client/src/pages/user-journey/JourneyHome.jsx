import React , {useState} from "react";
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
  const { JourneyActiveTab } = useOutletContext();
  const [journeyForm , setJourneyForm] = useState({
      agreement:'',
      catPrimaryCategory:'',
      catPrimarySubCategory:'',
      catCategory:'',
      catSubCategory:'',
      catLocation:'',
      catTitle:'',
      catSubtitle:'',
      catVideo:'',
      catStartUpBeginDate:'',
      catStartUpLaunchDate:'',
      jounreyTitleBlocks:{},
      jounreyImages:{},
      jounreyVideos:{},
      jounreyWebVideos:{},
      jounreyTitles:{},
      jounreyContents:{},
      teamOwnerRequest:{},
      teamPrimaryCategory:'',
      teamPrimaryRoles:'',
      teamTitle:'',
      teamSubTitle:'',
      faqData:{},
  })

  const saveJourney = () =>{

  }

  return (
    <div className="container w-50">
      <form>
        {JourneyActiveTab === "Rules" && <Rules journeyForm={journeyForm} setJourneyForm={setJourneyForm}  />}
        {JourneyActiveTab === "Category" && <JourneyCategory journeyForm={journeyForm} setJourneyForm={setJourneyForm} />}
        {JourneyActiveTab === "MyJourney" && <MyJourney journeyForm={journeyForm} setJourneyForm={setJourneyForm} />}
        {JourneyActiveTab === "JourneyTeam" && <JourneyTeam journeyForm={journeyForm} setJourneyForm={setJourneyForm} />}
        {JourneyActiveTab === "JourneyInvestors" && <JourneyInvestors journeyForm={journeyForm} setJourneyForm={setJourneyForm} />}
        {JourneyActiveTab === "JourneyFaq" && <JourneyFaq journeyForm={journeyForm} setJourneyForm={setJourneyForm} />}
        {JourneyActiveTab === "JourneyConnections" && <JourneyConnections journeyForm={journeyForm} setJourneyForm={setJourneyForm} />}
        {JourneyActiveTab === "JourneyCommunity" && <JourneyCommunity journeyForm={journeyForm} setJourneyForm={setJourneyForm} />}
      </form>
    </div>
  );
};

export default JourneyHome;
