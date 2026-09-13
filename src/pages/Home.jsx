import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import FloatingActions from "../components/FloatingActions";
import FlowerPopup from "../components/FlowerPopup";
import ScrollReveal from "../components/ScrollReveal";
import Footer from "../components/Footer";


// =====================================================
// MAIN IMAGES
// =====================================================

import coupleImage from "../assets/229e2db8-1167-4335-91e0-b5a52714f56a_image.webp";

import ananyaImage from "../assets/5c6d525c-5ff5-47e5-ac52-895a120389ca_image.jpg";

import aaravImage from "../assets/eda11278-f82b-4c3c-9f69-b15336041793_image.jpg";


// =====================================================
// HERO DECORATIONS
// =====================================================

import heroTopLeft from "../assets/5ba05423-1b46-4cba-93fc-6ab478f23425_topleft (1).svg";

import heroTopRight from "../assets/403798ac-c16c-4239-806f-7fe13c88fc9d_familybottomleft.svg";

import heroBottomLeft from "../assets/900b54f6-2a52-4069-ba67-b376ea76277e_familytopright.svg";

import heroBottomRight from "../assets/b65d0fc6-0c3b-4258-be70-e4c09ef5ec13_bottomright.svg";

/* ABOUT FLOWERS */
import aboutTopLeft from "../assets/7c4eb5b8-a110-4d39-98aa-a0525259863f_aboutleft.svg";

import aboutBottomRight from "../assets/5e8570e2-9201-45c8-9dda-aaad1cffdffe_aboutright.svg";

// =====================================================
// OTHER DECORATIONS
// =====================================================

import borderTop from "../assets/3dfa7ed1-9eca-44f9-9524-37e84f476a2b_bordershort.svg";

import wishesBottom from "../assets/ea3cdcb6-46d8-401c-ae0c-afface019fe8_wishesbottom.svg";

import wishesLeft from "../assets/fd380f7b-a19a-49df-871f-0f099d22c5f8_wishesleft.svg";

import wishesRight from "../assets/70ad2801-0e77-41c9-a507-56b9efb39b7e_wishesright.svg";

import leaf from "../assets/f8c96c73-2fc2-463e-ba43-89c45f631b91_groomleaf.svg";

import wishesFlower from "../assets/93f28379-3f05-4b3a-a884-a8047df873c5_wishesflower.svg";

import quotation from "../assets/732d19d9-8728-4fb2-a7eb-cc21abaa9a88_quotation.svg";

import countdownLeft from "../assets/fa949b60-5009-4ae2-88d9-4d618bd00e33_countdown_flowerleft.svg";

import countdownRight from "../assets/d6c42d02-09d7-4985-8091-2a16f134c961_countdown_flowerright.svg";

import texture from "../assets/5d9e7989-b174-46e2-8a96-2afe4e6c23c8_texture.svg";




// =====================================================
// WEDDING DATA
// =====================================================

const WEDDING = {
  brideName: "Ananya Sharma",

  groomName: "Aarav Verma",

  date: "31st Oct | 2026",

  day: "Saturday",

  venue: "Hall Complex",

  address:
    "Hall Complex, 1st B Cross Road, 7th Block, Koramangala, Bengaluru, Karnataka, India",

  brideParents:
    "D/o Mr. Rajesh & Mrs. Sunita Sharma",

  groomParents:
    "S/o Mr. Anand & Mrs. Kavitha Verma",

  brideDescription:
    "A free spirit wrapped in grace, Ananya moves through life with quiet confidence, an infectious laugh, and a kindness that makes everyone around her feel at home.",

  groomDescription:
    "A gentle soul with a poet's heart and an architect's mind, Aarav finds beauty in the details, whether in the curve of a building or the warmth of a quiet afternoon.",
};


function Home() {

  // ===================================================
  // COUNTDOWN
  // ===================================================

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });


  // ===================================================
  // WISHES
  // ===================================================

  const [wishName, setWishName] = useState("");

  const [wishText, setWishText] = useState("");

  const [submittedWishes, setSubmittedWishes] =
    useState([]);


  // ===================================================
  // FLOWER POPUP
  // ===================================================

  const [activeSection, setActiveSection] =
    useState("hero");


  // ===================================================
  // COUNTDOWN EFFECT
  // ===================================================

  useEffect(() => {

    const target = new Date(
      "2026-10-31T11:00:00+05:30"
    ).getTime();


    const updateCountdown = () => {

      const difference =
        target - Date.now();


      if (difference <= 0) {

        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }


      setTimeLeft({

        days: Math.floor(
          difference /
            (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
          (difference /
            (1000 * 60 * 60)) %
            24
        ),

        minutes: Math.floor(
          (difference /
            (1000 * 60)) %
            60
        ),

        seconds: Math.floor(
          (difference / 1000) %
            60
        ),

      });

    };


    updateCountdown();


    const timer = setInterval(
      updateCountdown,
      1000
    );


    return () =>
      clearInterval(timer);

  }, []);


  // ===================================================
  // ACTIVE SECTION
  // ===================================================

  useEffect(() => {

    const sections =
      document.querySelectorAll(
        "[data-flower-section]"
      );


    if (!sections.length) {
      return;
    }


    const observer =
      new IntersectionObserver(

        (entries) => {

          entries.forEach((entry) => {

            if (
              entry.isIntersecting
            ) {

              setActiveSection(
                entry.target.dataset
                  .flowerSection
              );

            }

          });

        },

        {
          threshold: 0.25,
        }

      );


    sections.forEach((section) => {
      observer.observe(section);
    });


    return () => {
      observer.disconnect();
    };

  }, []);


  // ===================================================
  // GOOGLE MAPS
  // ===================================================

  const openMaps = () => {

    const address =
      encodeURIComponent(
        WEDDING.address
      );


    window.open(
      `https://www.google.com/maps/search/?api=1&query=${address}`,
      "_blank"
    );

  };


  // ===================================================
  // SEND WISH
  // ===================================================

  const submitWish = (event) => {

    event.preventDefault();


    const message =
      wishText.trim();


    if (!message) {
      return;
    }


    const newWish = {

      id: Date.now(),

      name:
        wishName.trim() ||
        "A Well Wisher",

      message,

    };


    setSubmittedWishes(
      (previous) => [
        ...previous,
        newWish,
      ]
    );


    setWishText("");

    setWishName("");

  };


  // ===================================================
  // JSX
  // ===================================================

  return (

    <main
      className="site home-page"
      style={{
        "--texture-image":
          `url(${texture})`,
      }}
    >

      {/* =================================================
          NAVBAR
      ================================================= */}

      <Navbar />


      {/* =================================================
          FLOWER POPUP
      ================================================= */}

      <FlowerPopup
        section={activeSection}
      />


      {/* =================================================
          HERO / SAVE THE DATE
      ================================================= */}

      <section
        id="home"
        className="hero-section"
        data-flower-section="hero"
      >

        {/* Inner border */}

        <div className="hero-frame" />


        {/* =================================================
            TOP LEFT FLOWER
        ================================================= */}

        <img
          src={heroTopLeft}
          alt=""
          className="hero-corner hero-top-left"
        />


        {/* =================================================
            TOP RIGHT FLOWER
        ================================================= */}

        <img
          src={heroTopRight}
          alt=""
          className="hero-corner hero-top-right"
        />


        {/* =================================================
            BOTTOM LEFT FLOWER
        ================================================= */}

        <img
          src={heroBottomLeft}
          alt=""
          className="hero-corner hero-bottom-left"
        />


        {/* =================================================
            BOTTOM RIGHT FLOWER
        ================================================= */}

        <img
          src={heroBottomRight}
          alt=""
          className="hero-corner hero-bottom-right"
        />


        {/* =================================================
            HERO TWO COLUMN LAYOUT
        ================================================= */}

        <div className="hero-layout">


          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <ScrollReveal>

            <div className="hero-content">

              <p className="save-date">
                Save the date
              </p>


              <h1>
                {WEDDING.brideName}
              </h1>


              <div className="hero-ampersand">
                &
              </div>


              <h2>
                {WEDDING.groomName}
              </h2>


              <p className="engagement-text">
                are getting engaged on
              </p>


              <p className="date-text">
                {WEDDING.day} |{" "}
                {WEDDING.date}
              </p>


              <p className="hero-venue">
                {WEDDING.venue}
              </p>


              <button
                className="hero-map-button"
                onClick={openMaps}
                type="button"
              >
                Open in Maps
              </button>

            </div>

          </ScrollReveal>


          {/* =================================================
              RIGHT COUPLE IMAGE
          ================================================= */}

          <ScrollReveal>

            <div className="hero-couple-wrapper">

              <img
                src={coupleImage}
                alt="Ananya Sharma and Aarav Verma"
                className="hero-couple"
              />

            </div>

          </ScrollReveal>

        </div>

      </section>


      {/* =================================================
          COUNTDOWN
      ================================================= */}

      <section
        className="countdown-section"
        data-flower-section="countdown"
      >

        <img
          src={countdownLeft}
          alt=""
          className="countdown-flower countdown-left"
        />


        <img
          src={countdownRight}
          alt=""
          className="countdown-flower countdown-right"
        />


        <ScrollReveal>

          <div className="leaf-heading">

            <img
              src={leaf}
              alt=""
            />

            <span>
              The countdown begins
            </span>

            <img
              src={leaf}
              alt=""
            />

          </div>


          <h2>
            Until we say "Yes!"
          </h2>


          <div className="countdown-line">

            <div className="countdown-item">

              <strong>
                {timeLeft.days}
              </strong>

              <span>
                DAYS
              </span>

            </div>


            <div className="countdown-item">

              <strong>
                {timeLeft.hours}
              </strong>

              <span>
                HOURS
              </span>

            </div>


            <div className="countdown-item">

              <strong>
                {timeLeft.minutes}
              </strong>

              <span>
                MINUTES
              </span>

            </div>


            <div className="countdown-item">

              <strong>
                {timeLeft.seconds}
              </strong>

              <span>
                SECONDS
              </span>

            </div>

          </div>

        </ScrollReveal>

      </section>


      {/* =================================================
          ABOUT THE COUPLE
      ================================================= */}

      <section
        className="couple-section"
        data-flower-section="couple"
      >

        <div className="couple-heading">

          <img
            src={leaf}
            alt=""
          />

          <h2>
            About the Couple
          </h2>

          <img
            src={leaf}
            alt=""
          />

        </div>


        {/* =================================================
            ANANYA
        ================================================= */}

        <ScrollReveal>

          <div className="person-row ananya-row">

            <div className="person-image-area">

              <img
                src={ananyaImage}
                alt="Ananya Sharma"
                className="person-image"
              />

              <img
                src={wishesFlower}
                alt=""
                className="person-flower"
              />

            </div>


            <div className="person-details">

              <h3>
                Ananya Sharma
              </h3>


              <h4>
                {WEDDING.brideParents}
              </h4>


              <p>
                {WEDDING.brideDescription}
              </p>


              <img
                src={leaf}
                alt=""
                className="person-leaf"
              />

            </div>

          </div>

        </ScrollReveal>


        {/* =================================================
            AARAV
        ================================================= */}

        <ScrollReveal>

          <div className="person-row aarav-row">

            <div className="person-details">

              <h3>
                Aarav Verma
              </h3>


              <h4>
                {WEDDING.groomParents}
              </h4>


              <p>
                {WEDDING.groomDescription}
              </p>


              <img
                src={leaf}
                alt=""
                className="person-leaf"
              />

            </div>


            <div className="person-image-area">

              <img
                src={aaravImage}
                alt="Aarav Verma"
                className="person-image"
              />


              <img
                src={wishesFlower}
                alt=""
                className="person-flower"
              />

            </div>

          </div>

        </ScrollReveal>

      </section>


      {/* =================================================
          WISHES FOR THE COUPLE
      ================================================= */}

      <section
        className="wishes-display-section"
        data-flower-section="wishes"
      >

        <img
          src={borderTop}
          alt=""
          className="wish-border wish-border-top"
        />


        <img
          src={wishesBottom}
          alt=""
          className="wish-border wish-border-bottom"
        />


        <img
          src={wishesLeft}
          alt=""
          className="wish-border wish-border-left"
        />


        <img
          src={wishesRight}
          alt=""
          className="wish-border wish-border-right"
        />


        <div className="wishes-content">

          <ScrollReveal>

            <img
              src={quotation}
              alt=""
              className="quotation"
            />


            <div className="leaf-title">

              <img
                src={leaf}
                alt=""
              />

              <h2>
                Wishes For The Couple
              </h2>

              <img
                src={leaf}
                alt=""
              />

            </div>


            {/* DEFAULT WISH */}

            {!wishText &&
              submittedWishes.length === 0 && (

                <p className="default-wish">

                  Congratulations on your
                  engagement! May this lovely
                  chapter be filled with love,
                  laughter, unforgettable
                  moments, and beautiful
                  memories.

                </p>

              )}


            {/* LIVE WISH */}

            {wishText && (

              <div className="live-wish">

                <span>
                  Your wish
                </span>


                <p>
                  "{wishText}"
                </p>


                {wishName && (

                  <small>
                    — {wishName}
                  </small>

                )}

              </div>

            )}


            {/* SUBMITTED WISHES */}

            <div className="submitted-wishes">

              {submittedWishes.map(
                (wish) => (

                  <div
                    className="wish-card"
                    key={wish.id}
                  >

                    <p>
                      "{wish.message}"
                    </p>

                    <span>
                      — {wish.name}
                    </span>

                  </div>

                )
              )}

            </div>

          </ScrollReveal>

        </div>

      </section>


      {/* =================================================
          SEND YOUR WISHES
      ================================================= */}

      <section
        className="send-wishes-section"
        data-flower-section="send-wishes"
      >

        <img
          src={wishesFlower}
          alt=""
          className="send-flower send-flower-left"
        />


        <img
          src={wishesFlower}
          alt=""
          className="send-flower send-flower-right"
        />


        <ScrollReveal>

          <div className="send-wishes-container">

            <div className="send-wishes-heading">

              <img
                src={leaf}
                alt=""
              />

              <h2>
                Send Your Wishes
              </h2>

              <img
                src={leaf}
                alt=""
              />

            </div>


            <p className="send-wishes-description">

              Share your love, blessings and
              beautiful wishes with the couple.

            </p>


            {/* FORM FRAME */}

            <div className="wish-form-frame">

              <img
                src={borderTop}
                alt=""
                className="form-border form-border-top"
              />


              <img
                src={wishesBottom}
                alt=""
                className="form-border form-border-bottom"
              />


              <img
                src={wishesLeft}
                alt=""
                className="form-border form-border-left"
              />


              <img
                src={wishesRight}
                alt=""
                className="form-border form-border-right"
              />


              <form
                className="wishes-form"
                onSubmit={submitWish}
              >

                <input
                  type="text"
                  value={wishName}
                  onChange={(e) =>
                    setWishName(
                      e.target.value
                    )
                  }
                  placeholder="Your Name"
                />


                <textarea
                  value={wishText}
                  onChange={(e) =>
                    setWishText(
                      e.target.value
                    )
                  }
                  placeholder="Write your wishes..."
                  rows="6"
                />


                <button
                  type="submit"
                  className="primary-button"
                >
                  Send Wishes
                </button>

              </form>

            </div>

          </div>

        </ScrollReveal>

      </section>


      {/* =================================================
          ENGAGEMENT EVENTS
      ================================================= */}

      <section
        className="events-section"
        data-flower-section="events"
      >

        <div className="events-heading">

          <img
            src={leaf}
            alt=""
          />

          <h2>
            Engagement celebration begins
          </h2>

          <img
            src={leaf}
            alt=""
          />

        </div>


        <div className="events-grid">


          {/* RING CEREMONY */}

          <div className="event-card">

            <img
              src={wishesFlower}
              alt=""
              className="event-flower"
            />


            <div className="event-icon">
              💍
            </div>


            <h3>
              Ring Ceremony
            </h3>


            <p>
              11:00 am
            </p>


            <img
              src={leaf}
              alt=""
              className="event-bottom-leaf"
            />

          </div>


          {/* CAKE CUTTING */}

          <div className="event-card">

            <img
              src={wishesFlower}
              alt=""
              className="event-flower"
            />


            <div className="event-icon">
              🎂
            </div>


            <h3>
              Cake Cutting
            </h3>


            <p>
              11:30 am
            </p>


            <img
              src={leaf}
              alt=""
              className="event-bottom-leaf"
            />

          </div>


          {/* LUNCH */}

          <div className="event-card">

            <img
              src={wishesFlower}
              alt=""
              className="event-flower"
            />


            <div className="event-icon">
              🍴
            </div>


            <h3>
              Lunch
            </h3>


            <p>
              01:00 pm
            </p>


            <img
              src={leaf}
              alt=""
              className="event-bottom-leaf"
            />

          </div>

        </div>

      </section>


      {/* =================================================
          LOCATION
      ================================================= */}

      <section
        className="location-section"
        data-flower-section="location"
      >

        <div className="location-heading">

          <img
            src={leaf}
            alt=""
          />

          <h2>
            Location
          </h2>

          <img
            src={leaf}
            alt=""
          />

        </div>


        <div className="location-container">


          {/* MAP */}

          <div className="map-container">

            <iframe
              title="Hall Complex"
              src="https://www.google.com/maps?q=Hall%20Complex%2C%201st%20B%20Cross%20Road%2C%207th%20Block%2C%20Koramangala%2C%20Bengaluru%2C%20Karnataka&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>


          {/* LOCATION CARD */}

          <div className="location-card">

            <div className="location-card-border">

              <p>
                31ST OCTOBER, 2026
              </p>


              <h3>
                Hall Complex
              </h3>


              <p>

                Hall Complex,
                1st B Cross Road,
                <br />

                7th Block,
                Koramangala,
                <br />

                Bengaluru,
                Karnataka, India

              </p>


              <button
                onClick={openMaps}
                className="location-map-button"
                type="button"
              >
                Open in maps
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          FOOTER
      ================================================= */}

      <Footer />


      {/* =================================================
          FLOATING ACTIONS
      ================================================= */}

      <FloatingActions />

    </main>

  );
}


export default Home;
