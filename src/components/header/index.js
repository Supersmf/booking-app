import React from 'react';
import './header.css';

const Header = () => (
    <div className="header">
      <div className="header_content d-flex justify-content-between text-white">
          <div>
              <h1>JB FLIGHT-B</h1>
          </div>
          <div className="d-flex justify-content-between">
              <div>
                  <p>TOLL NUMBER</p>
                  <p>046.369.0239</p>
              </div>
              <div className="header_content_groupBtn">
                <ul className="header_content_groupBtn_ul">
                  <li className="header_content_groupBtn_btn"><a href="https://#">Sign in</a></li>
                  <li className="header_content_groupBtn_btn"><a href="https://#">Agent</a></li>
                </ul>
              </div>
          </div> 
      </div>   
    </div>
);

export default Header;