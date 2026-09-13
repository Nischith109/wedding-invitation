import { Link } from "react-router-dom";

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-navigation">

        <Link to="/home">
          Home
        </Link>


        <Link to="/about">
          About
        </Link>


        <Link to="/gallery">
          Gallery
        </Link>

      </div>
      <hr></hr>


      <p>
        ⚠️Report a problem    💬Contact Support    🔒Privacy Policy</p>
        <p>POWERED BY Nischith BM</p>
        <hr></hr>
        <p>© 2026 Nischith BM. All rights reserved. Crafted with love
      </p>

    </footer>

  );
}


export default Footer;