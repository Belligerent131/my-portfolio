import React from 'react';
import PageHeader from '../page-header/page-header.component';
import {Container} from 'react-bootstrap';

class ContactComponent extends React.Component {

    render() {
        return(
            <Container>
                <PageHeader title="Contact Me" icon="contact" />
            </Container>
        )
    }
} 

export default ContactComponent;