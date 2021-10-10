import React,{useEffect,useState} from "react";
import "./footer.scss";
import Insta from "./icons8-instagram.svg";
import Dis from "./icons8-discord.svg";
import Linked from "./icons8-linkedin-2.svg";
import Mail from "./icons8-mail.svg";
import DevPost from "./icons8-dev-post.svg";
import PrivacyPolicy from "./Privacy policy.pdf";
import TermsOfUse from "./Terms of use.pdf";
import Twitter from "./icons8-twitter.svg";
import {Btn} from "../Top-division-components/Top-division-components.jsx";
import {SOCIALS, TOP_SECTION, FOOTER} from "../../Module/General";
import IEEEUIET from "../../Module/Assets/IEEEUIET.png"
import PClub from "../../Module/Assets/pclub.png"

function GithubTemplate(){

  return (
  <div>
  </div>
  )
}




export default function Footer() {

  return (
    <div>
      <div className="footer">
        <div className="social-icons-container">
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.instagram}>
              <img src={Insta} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.discord}>
              <img src={Dis} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.linkedin}>
              <img src={Linked} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.email}>
              <img src={Mail} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.twitter}>
              <img src={Twitter} alt="" />
            </a>
          </div>
          <div className="social-icon">
            <a rel="noreferrer" target="_blank" href={SOCIALS.devpost}>
              <img src={DevPost} alt="" />
            </a>
          </div>
        </div>
        <div className="Register_a">
          {FOOTER.VOLUNTEERING_FORM.required && (
            <a href={FOOTER.VOLUNTEERING_FORM.src}>
              <Btn type="Volunteer" class="Volunteer" overlay="Fill the form" />
            </a>
          )}
        </div>
        <div className="footer_info">
          <div className="footer_org">
            <div className="footer_org_div">
              <hr />
              <div style={{height:"30%"}}>
                <img style={{objectFit:"scale-down" , height:"100%", marginTop:"auto", marginBottom:"auto"}} src={IEEEUIET} />
              </div>
              <hr />
              <p>IEEE mail<br />
              IEEE contact<br />
              IEEE phone number<br />
              </p>
            </div>
            <div className="footer_org_div">
              <hr />
              <div style={{height:"30%"}}>
                <img style={{objectFit:"scale-down" , height:"100%", paddingBottom:"auto", paddingTop:"auto"}} src={PClub} />
              </div>
              <hr />
              <p>PClub mail<br />
              PClub contact<br />
              PClub phone number<br />
              </p>
            </div>
          </div>
          <p>
            Made with ❤️ in UIET, Panjab University
          </p>

        </div>
      </div>
    </div>
  );
}
