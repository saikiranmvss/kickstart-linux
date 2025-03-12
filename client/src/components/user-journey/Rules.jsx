import { useOutletContext } from "react-router-dom";

const Rules = ({ journeyForm, setJourneyForm }) =>{

  const { setJourneyActiveTab } = useOutletContext();

  const termsAccept = () => {
    setJourneyActiveTab("Category");
    setJourneyForm((prevForm) => ({
      ...prevForm,
      agreement: "1"
    }));
  };

    return (
        <div>
            <div className="d-flex align-items-center justify-content-between p-3 bg-white shadow-sm rounded">
          <div className='text-center w-100'><h5><strong>Rules & Regulations</strong></h5></div>
        </div>
        <div className="d-flex p-3 bg-white shadow-sm rounded rules-div">
          <div className='line-height-2'>
          <h4>Guidelines for Launching a Project on StartupKK</h4>
          <br/>
          <h5>Essential Rules & Regulations To Know Before Starting Your Project</h5>
          <h5>1. Every Project Must Create Something To Share</h5>
          StartupKK is designed to bring ideas to life—whether it’s art, technology, events, or experiences. Every project should have a clear plan for development and delivery. At the end of the process, creators should be able to say, “Here’s what we built—enjoy!”
          <br/>
          <br/>
          <h5> 2. Honesty And Transparency Are Essential</h5>
          Trust and communication are the foundation of a successful project. Creators must present their ideas truthfully, without misleading claims or misrepresented facts. If your project involves manufacturing or distribution...
          
          You must provide a working prototype rather than simulated or exaggerated visuals.
          <br/>
          <br/>
          <h5> No Misleading Imagery</h5>
          Avoid photorealistic renderings or heavily edited visuals that could give backers a false impression of the product’s stage of development.
          <br/>
          <br/>
          <h5>Prototype Demonstrations</h5>
          Any functional product must be shown as it currently exists, without CGI or special effects simulating features that don’t yet work.
          <br/>
          <br/>
          <h5> AI & AI-Generated Content</h5>
          If your project involves artificial intelligence, you must clearly disclose how it’s used and ensure you contribute original creative work.

          Regular updates are encouraged to keep investors informed about progress and any changes.
          <br/>
          <br/>
          <h5>3. Fundraising For Charity Is Not Allowed</h5>
          While nonprofits can launch projects, StartupKK does not support direct fundraising for charitable donations. Funds raised must go toward fulfilling the project as described on your campaign page.
          <br/>
          <br/>
          <h5>4. Fundraising For Charity Is Not Allowed</h5>
          While nonprofits can launch projects, StartupKK does not support direct fundraising for charitable donations. Funds raised must go toward fulfilling the project as described on your campaign page.
          <br/>
          <br/>
          <h5>5. No Equity-Based Funding</h5>

          Startupkk Is Not An Investment Platform. Projects Cannot Offer Equity.

          Revenue Sharing. Or Any Form Of Financial Return To Backers.

          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center p-3 bg-white shadow-sm rounded">
              <div><button type="button" onClick={()=>termsAccept()} className='btn btn-light'>Accept & Agree</button></div>
        </div>


        </div>
    )
}

export default Rules;