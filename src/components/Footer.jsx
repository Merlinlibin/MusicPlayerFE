import React from 'react'
import '../style/Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-bottom">
        <p>
          copyright &copy; <a href="#"></a>{" "}
        </p>
        <div className="footer-menu">
          <ul className="f-menu">
            <li>
              <a href="">Home</a>
            </li>

            <li>
              <a href="">Contact</a>
            </li>
            
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer