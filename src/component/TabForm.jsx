import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";
import { useState } from "react";

export default function Tabform() {
  const [activeTab, setIsActiveTab] = useState(0);
  const [error, setError] = useState({});
  const [data, setData] = useState({
    name: "",
    age: "",
    email: "",
    interest: ["coding", "music"],
    theme: "dark",
  });
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 3) err.name = "Invalid name";
        if (!data.age || data.age < 18) err.age = "Invalid age";
        if (!data.email || data.email.length < 3) err.email = "Invalid email";

        setError(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (data.interest.length < 1)
          err.interest = "Choose at least one interest";

        setError(err);
        return err.interest ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];
  const ActiveTabComponent = tabs[activeTab].component;

  function handlePrevClick() {
    if (tabs[activeTab].validate()) setIsActiveTab((prev) => prev - 1);
  }
  function handleNextClick() {
    if (tabs[activeTab].validate()) setIsActiveTab((prev) => prev + 1);
  }
  function handleSubmitClick() {
    console.log(data);
  }
  return (
    <div>
      <div className="heading-container">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className="heading"
            onClick={() => {
              if (tabs[activeTab].validate()) setIsActiveTab(index);
            }}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} error={error} />
      </div>
      {activeTab > 0 && (
        <button id="prevButton" onClick={handlePrevClick}>
          Prev
        </button>
      )}
      {activeTab < tabs.length - 1 && (
        <button id="nextButton" onClick={handleNextClick}>
          Next
        </button>
      )}
      {activeTab == tabs.length - 1 && (
        <button id="submitButton" onClick={handleSubmitClick}>
          Submit
        </button>
      )}
    </div>
  );
}
