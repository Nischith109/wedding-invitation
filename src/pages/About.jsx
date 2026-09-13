import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";
import ScrollReveal from "../components/ScrollReveal";

import ananyaImage from "../assets/5c6d525c-5ff5-47e5-ac52-895a120389ca_image.jpg";
import aaravImage from "../assets/eda11278-f82b-4c3c-9f69-b15336041793_image.jpg";

import familyTopRight from "../assets/900b54f6-2a52-4069-ba67-b376ea76277e_familytopright.svg";

import familyBottomLeft from "../assets/403798ac-c16c-4239-806f-7fe13c88fc9d_familybottomleft.svg";

import leaf from "../assets/f8c96c73-2fc2-463e-ba43-89c45f631b91_groomleaf.svg";


function About() {
  return (
    <div className="about-page">

      <Navbar />

      <section className="about-section">

        <img
          src={familyTopRight}
          alt=""
          className="about-family-top-right"
        />

        <img
          src={familyBottomLeft}
          alt=""
          className="about-family-bottom-left"
        />

        <div className="about-title">

          <img src={leaf} alt="" />

          <h1>
            About The Couple
          </h1>

          <img src={leaf} alt="" />

        </div>


        {/* ============================
            ANANYA
        ============================ */}

        <ScrollReveal>

          <div className="about-person about-ananya">

            <div className="about-photo-wrap">

              <img
                src={ananyaImage}
                alt="Ananya Sharma"
              />

            </div>

            <div className="about-person-text">

              <h2>
                Ananya Sharma
              </h2>

              <h3>
                D/o Mr. Rajesh & Mrs. Sunita Sharma
              </h3>

              <p>
                A free spirit wrapped in grace,
                Ananya moves through life with
                quiet confidence, an infectious
                laugh, and a kindness that makes
                everyone around her feel at home.
              </p>

            </div>

          </div>

        </ScrollReveal>


        {/* ============================
            AARAV
        ============================ */}

        <ScrollReveal>

          <div className="about-person about-aarav">

            <div className="about-person-text">

              <h2>
                Aarav Verma
              </h2>

              <h3>
                S/o Mr. Anand & Mrs. Kavitha Verma
              </h3>

              <p>
                A gentle soul with a poet's heart
                and an architect's mind, Aarav
                finds beauty in the details,
                whether in the curve of a building
                or the warmth of a quiet afternoon.
              </p>

            </div>


            <div className="about-photo-wrap">

              <img
                src={aaravImage}
                alt="Aarav Verma"
              />

            </div>

          </div>

        </ScrollReveal>

      </section>


      <Footer />

      <FloatingActions />

    </div>
  );
}

export default About;