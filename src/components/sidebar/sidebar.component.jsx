import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import {
  FaRegUser,
  FaRegNewspaper,
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { GoGithubAction, GoMail } from "react-icons/go";
import { IconContext } from "react-icons";
import {
  ImageContainer,
  SideBarContainer,
  Name,
  NavLinks,
  ListSocial,
} from "./sidebar.styles";

const linkIcons = {
  className: "link-icons",
  size: "1.9em",
};

const socialIcons = {
    className: "social-icons",
    size: "1.9em"
};

const SideBar = () => (
  <SideBarContainer>
    <ImageContainer>
      <Name> Brad Bentow</Name>
      <img src="/images/me.jpg" alt="me" />
    </ImageContainer>
    <NavLinks>
      <ul>
        <IconContext.Provider value={linkIcons}>
          <li>
            <Link to="#" className="active">
              <AiOutlineHome /> home
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaRegUser /> about me
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaRegNewspaper /> resume
            </Link>
          </li>
          <li>
            <Link to="#">
              <GoGithubAction /> portfolio
            </Link>
          </li>
          <li>
            <Link to="#">
              <GoMail /> contact
            </Link>
          </li>
        </IconContext.Provider>
      </ul>
    </NavLinks>
    <div className="copyright">
      <ListSocial>
        <IconContext.Provider value={socialIcons}>
          <li>
            <Link to="#">
              <FaFacebookSquare />
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaGithubSquare />
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link to="#">
              <FaTwitterSquare />
            </Link>
          </li>
        </IconContext.Provider>
      </ListSocial>
      <span>
        {new Date().getFullYear()} © Brad Bentow. <br /> All Right Reserved.
      </span>
    </div>
  </SideBarContainer>
);

export default SideBar;
