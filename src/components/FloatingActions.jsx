import { useState } from "react";

function FloatingActions() {

  const [muted, setMuted] =
    useState(false);


  const callCouple = () => {

    window.location.href =
      "tel:+919999999999";

  };


  const toggleSound = () => {

    setMuted(
      (previous) => !previous
    );

  };


  return (

    <div className="floating-actions">

      <button
        className="floating-action"
        onClick={callCouple}
        aria-label="Call"
        title="Call"
      >
        📞
      </button>


      <button
        className="floating-action"
        onClick={toggleSound}
        aria-label="Toggle music"
        title="Toggle music"
      >
        {muted ? "🔇" : "🎵"}
      </button>

    </div>

  );
}

export default FloatingActions;