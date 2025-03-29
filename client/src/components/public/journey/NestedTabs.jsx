import React, { useState, useMemo } from "react";

const NestedTabs = ({ journey }) => {
  const [activeTopTab, setActiveTopTab] = useState("My Journey");
  const [activeLeftTab, setActiveLeftTab] = useState("Our Story");

  const MyJourneyContent = useMemo(() => {
    if (!journey || !journey.journeyTitleBlocks) return {};
    return journey.journeyTitleBlocks.reduce((contentMap, block) => {
      contentMap[block.title] = block.subTitle;
      return contentMap;
    }, {});
  }, [journey]);

  useMemo(() => {
    if (Object.keys(MyJourneyContent).length > 0) {
      setActiveLeftTab(Object.keys(MyJourneyContent)[0]);
    }
  }, [MyJourneyContent]);

  return (
    <div className="p-6 cursor-pointer">
      <div className="flex border-b border-gray-300">
        {["My Journey", "Team", "Investors", "FAQ's", "Connections", "Community"].map((tab) => (
          <a
            key={tab}
            className={`px-4 py-2 mx-3 text-lg font-medium bg-white ${
              activeTopTab === tab
                ? "tab-border-bottom text-blue-500"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTopTab(tab)}
          >
            {tab}
          </a>
        ))}
      </div>

      {activeTopTab === "My Journey" && (
        <div className="flex mt-4 row">          
          <div
            className="border-r border-gray-300 col-md-2  no-scrollbar"
            style={{
              position: "sticky",
              top: "0px",
              height: "calc(100vh - 100px)", 
              overflowY: "auto",
            }}
          >
            {Object.keys(MyJourneyContent).map((tab) => (
              <a
                key={tab}
                className={`block w-full text-left px-2 mb-4 text-lg font-medium bg-white ${
                  activeLeftTab === tab
                    ? "tab-border-left text-blue-500"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveLeftTab(tab)}
              >
                {tab}
              </a>
            ))}
          </div>

          <div
            className="px-6 col-md-10 no-scrollbar"
            style={{
              height: "calc(100vh - 100px)",
              overflowY: "auto",
            }}
          >
            <div
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: MyJourneyContent[activeLeftTab] }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NestedTabs;
