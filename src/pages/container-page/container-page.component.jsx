import React from "react";
import SideBar from "../../components/sidebar/sidebar.component";
import { Route, Switch } from "react-router-dom";
import HomePage from "../homePage/homePage.component";
import AboutMe from "../about-me/about-me.component";
import {PageDivContainer} from './container-page.styles';

export default class ContainerPage extends React.Component {
  render() {
    return (
      <PageDivContainer>
        <SideBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutMe} />
        </Switch>
      </PageDivContainer>
    );
  }
}
