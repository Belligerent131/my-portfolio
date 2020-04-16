import React from "react";
import SideBar from "../../components/sidebar/sidebar.component";
import { Route, Switch } from "react-router-dom";
import HomePage from "../homePage/homePage.component";
import AboutMe from "../about-me/about-me.component";
import {PageDivContainer} from './container-page.styles';
import Resume from '../resume/resume.component';
import Portfolio from '../portfolio/portfolio.component';
import Contact from '../contact/contact.component'

export default class ContainerPage extends React.Component {
  render() {
    return (
      <PageDivContainer>
        <SideBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </PageDivContainer>
    );
  }
}
