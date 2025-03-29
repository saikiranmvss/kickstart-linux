import React, { useState } from "react";

const NestedTabs = () => {
  const [activeTopTab, setActiveTopTab] = useState("My Journey");
  const [activeLeftTab, setActiveLeftTab] = useState("Our Story");

  const leftTabsContent = {
    "Our Story": "This is the content for 'Our Story'.",
    "The Science": "This is the content for 'The Science'.",
    "The Products": "This is the content for 'The Products'.",
    "Our Promise": "This is the content for 'Our Promise'.",
    "Our Principles": "This is the content for 'Our Principles'.",
    "Our Material": "This is the content for 'Our Material'.",
    "Research Driven": "This is the content for 'Research Driven'.",
    "Sustainability First": "This is the content for 'Sustainability First'.",
  };

  return (
    <div className="p-6">
      <div className="flex border-b border-gray-300">
        {["My Journey", "Team", "Investors", "FAQ's", "Connections", "Community"].map((tab) => (
          <a
            key={tab}
            className={`px-4 py-2 text-lg font-medium bg-white ${
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
        <div className="flex mt-4">
          <div className="w-1/4 border-r border-gray-300">
            {Object.keys(leftTabsContent).map((tab) => (
              <a
                key={tab}
                className={`block w-full text-left px-4 py-2 text-lg font-medium bg-white ${
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

          <div className="w-3/4 px-6">
            <h2 className="text-xl font-bold mb-4">{activeLeftTab}</h2>
            <p className="text-gray-700">{leftTabsContent[activeLeftTab]}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default NestedTabs;
