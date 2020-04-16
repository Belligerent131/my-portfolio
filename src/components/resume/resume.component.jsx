import React from 'react';
import PageHeader from '../page-header/page-header.component';
import './resume.styles.scss';
import {Container} from 'react-bootstrap';

class ResumeComponent extends React.Component {

    render() {
        return(
            <Container>
                <PageHeader title="Resume" icon="resume" />
            </Container>
        )
    }
} 

export default ResumeComponent;