import React from "react";
import { Container } from "react-bootstrap";
import PageHeader from '../page-header/page-header.component';



class PortfolioComponent extends React.Component {

    render() {
        return (
            <Container>
                <PageHeader title="Portfolio" icon='portfolio' />
            </Container>
        )
    }
};

export default PortfolioComponent;
