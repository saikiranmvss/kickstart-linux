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
  const [pageValue , setPageValue] = useState(0);
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
        {JourneyActiveTab === "Rules" && <Rules />}
        {JourneyActiveTab === "Category" && <JourneyCategory />}
        {JourneyActiveTab === "MyJourney" && <MyJourney />}
        {JourneyActiveTab === "JourneyTeam" && <JourneyTeam />}
        {JourneyActiveTab === "JourneyInvestors" && <JourneyInvestors />}
        {JourneyActiveTab === "JourneyFaq" && <JourneyFaq />}
        {JourneyActiveTab === "JourneyConnections" && <JourneyConnections />}
        {JourneyActiveTab === "JourneyCommunity" && <JourneyCommunity />}
      </form>
    </div>
  );
};

export default JourneyHome;
