import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import {
  FaRegUser,
  FaRegNewspaper,
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitterSquare,
} from 'react-icons/fa';
import { GoGithubAction, GoMail } from 'react-icons/go';
import { IconContext } from 'react-icons';
import {
  ImageContainer,
  SideBarContainer,
  Name,
  NavLinks,
  ListSocial,
} from './sidebar.styles';

const linkIcons = {
  className: 'link-icons',
  size: '1.9em',
};

const socialIcons = {
  className: 'social-icons',
  size: '1.9em',
};

const getUrl = window.location.href.split('/');

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nav_location: getUrl[3],
    };
  }
  render() {
    let { nav_location } = this.state;

    return (
      <SideBarContainer>
        <ImageContainer>
          <Name> Bradley Bentow</Name>
          <img src="/images/me.jpg" alt="me" />
        </ImageContainer>
        <NavLinks>
          <ul>
            <IconContext.Provider value={linkIcons}>
              <li>
                <Link
                  to="/"
                  onClick={() => this.setState({ nav_location: '' })}
                  className={nav_location === '' ? 'active' : ''}
                >
                  <AiOutlineHome /> home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => this.setState({ nav_location: 'about' })}
                  className={nav_location === 'about' ? 'active' : ''}
                >
                  <FaRegUser /> about me
                </Link>
              </li>
              <li>
                <Link
                  to="/resume"
                  onClick={() => this.setState({ nav_location: 'resume' })}
                  className={nav_location === 'resume' ? 'active' : ''}
                >
                  <FaRegNewspaper /> resume
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  onClick={() => this.setState({ nav_location: 'portfolio' })}
                  className={nav_location === 'portfolio' ? 'active' : ''}
                >
                  <GoGithubAction /> portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => this.setState({ nav_location: 'contact' })}
                  className={nav_location === 'contact' ? 'active' : ''}
                >
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
                <a href="https://www.facebook.com/bentow131">
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a href="https://github.com/Belligerent131">
                  <FaGithubSquare />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/bbentow">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/BradBentow">
                  <FaTwitterSquare />
                </a>
              </li>
            </IconContext.Provider>
          </ListSocial>
          <span>
            {new Date().getFullYear()} © Brad Bentow. <br /> All Right Reserved.
          </span>
        </div>
      </SideBarContainer>
    );
  }
}

export default SideBar;
