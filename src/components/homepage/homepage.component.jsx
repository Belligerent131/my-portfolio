import React from 'react';
import Typewriter from 'typewriter-effect';
import {PageContainer, BackgroundContainer, InfoContainer} from './homepage.styles';

const HomepageComponent = () => (
    <PageContainer fluid>
        <BackgroundContainer />
        <InfoContainer>
            <div className="name"><span className="first">Bradley</span> <span className="last">Bentow</span></div>
            <div className="description"><p>I am a&nbsp;  

            <Typewriter
            options={{
              strings: ['Full-Stack Developer', 'Web Developer', 'Software Engineer', 'Student', 'Database Developer'],
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 1
            }}
          />
            
            </p></div>
        </InfoContainer>
    </PageContainer>
);

export default HomepageComponent;