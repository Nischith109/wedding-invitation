import { useEffect, useState } from "react";

import roses from "../assets/93f28379-3f05-4b3a-a884-a8047df873c5_wishesflower.svg";

function FlowerPopup({ section }) {

  const [visible, setVisible] =
    useState(true);


  const sectionData = {

    hero: {
      title: "Roses",
      subtitle: "Love & affection",
    },

    countdown: {
      title: "Bloom",
      subtitle: "Our story unfolds",
    },

    couple: {
      title: "Together",
      subtitle: "Two hearts, one journey",
    },

    wishes: {
      title: "Blessings",
      subtitle: "Love & happiness",
    },

    "send-wishes": {
      title: "Warm wishes",
      subtitle: "Share your blessings",
    },

    events: {
      title: "Celebration",
      subtitle: "A day to remember",
    },

    location: {
      title: "The Venue",
      subtitle: "Come celebrate with us",
    },

  };


  const current =
    sectionData[section] ||
    sectionData.hero;


  useEffect(() => {

    setVisible(false);


    const timer =
      setTimeout(() => {

        setVisible(true);

      }, 180);


    return () =>
      clearTimeout(timer);

  }, [section]);


  if (!visible) {
    return null;
  }


  return (

    <div className="flower-popup">

      <div className="popup-decoration popup-one" />
      <div className="popup-decoration popup-two" />


      <img
        src={roses}
        alt=""
        className="flower-popup-image"
      />


      <div className="flower-popup-content">

        <h4>
          {current.title}
        </h4>

        <p>
          {current.subtitle}
        </p>

      </div>


      <button
        className="flower-popup-close"
        onClick={() => setVisible(false)}
        aria-label="Close"
      >
        ×
      </button>

    </div>

  );
}

export default FlowerPopup;