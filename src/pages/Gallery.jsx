import Navbar from "../components/Navbar";
import FloatingActions from "../components/FloatingActions";
import Footer from "../components/Footer";

import galleryTopLeft from "../assets/7c4eb5b8-a110-4d39-98aa-a0525259863f_aboutleft.svg";
import galleryBottomRight from "../assets/5e8570e2-9201-45c8-9dda-aaad1cffdffe_aboutright.svg";

function Gallery() {
  return (
    <main className="site gallery-page">

      <Navbar />

      <img
        src={galleryTopLeft}
        alt=""
        className="gallery-corner gallery-corner-top-left"
      />

      <img
        src={galleryBottomRight}
        alt=""
        className="gallery-corner gallery-corner-bottom-right"
      />

      <section className="gallery-content">
        <div className="gallery-inner">

          <h1>Unfolding Our Story</h1>

          <button
            type="button"
            className="gallery-upload-button"
          >
            Upload
          </button>

          <div className="gallery-pagination">

            <button
              type="button"
              className="gallery-page-arrow"
              aria-label="Previous page"
            >
              ←
            </button>

            <span>Page 1</span>

            <button
              type="button"
              className="gallery-page-arrow"
              aria-label="Next page"
            >
              →
            </button>

          </div>

        </div>
      </section>

      <Footer />

      <FloatingActions />

    </main>
  );
}

export default Gallery;