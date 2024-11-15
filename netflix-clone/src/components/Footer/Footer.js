import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footer.css";

const Footer = () => {
  return (
    <div className='footer-outer-container'>
      <div className='footer-inner-container'>
        <div className='footer-icons'>
          <FacebookOutlinedIcon/>
          <InstagramIcon/>
          <YouTubeIcon/>
        </div>
        <div className='footer-data'>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help center</li>
              <li>Jobs</li>
              <li>Cookie preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift cards</li>
               <li>Terms of Use</li>
                <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
      </div>
      <div className='service-code'>
        <p>
          Service Code
        </p>
      </div>
      <div className='copy-write'>
        &copy;1997-2024 Netflix,Inc.
      </div>
    </div>
    </div>
  );
};
export default Footer;