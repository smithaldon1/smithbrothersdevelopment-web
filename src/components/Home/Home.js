import React from 'react';

import { Card, Button, Container, Row, Col } from 'react-bootstrap';

import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { TextField, Typography, withStyles } from '@material-ui/core';

import Background from '../../laptop2.jpg';
import "./Home.css";

const styles = () => ({
    cssLabel: {
        color: 'white'
    },

    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: 'white !important',
        }
    },

    cssFocused: {
        color: 'white !import'
    },

    notchedOutline: {
        borderWidth: '1px',
        borderColor: 'white !important'
    },

    input: {
        color: 'white'
    }

});

var sectionStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${Background})`,
    backgroundPosition: "start",
    backgroundRepeat: "no-repeat",
};

let theme = createMuiTheme({
    typography: {
        fontFamily: ['Open Sans'],
    },
    MuiTextField: {
        color: {
            primary: 'white',
            secondary: 'white'
        }
    }
});
theme = responsiveFontSizes(theme);

class Home extends React.Component {
    state = {
        name: 'InputMode',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    render() {
        const { classes } = this.props;

        return (
            <div className="Home">
                <ThemeProvider theme={theme}>
                    <section className="header" style={ sectionStyle }>
                        <div className="header-text">
                            <Typography variant="h4" id="header-top-text">Automation and IT services for businesses of all shapes and sizes</Typography>
                            <Typography variant="h3" id="header-bottom-text">Increase business with quailty technical services, and increased online presence.</Typography>
                            <Typography variant="button" className="button">LET'S GET STARTED</Typography>
                        </div>
                    </section>
                    <section className="newsletter">
                        <Card id="newsletter-card" className="mx-auto">
                            <Card.Header variant="h3" className="card-header"><Typography variant="h5">Stay in the know by joining our newsletter!</Typography></Card.Header>
                            <Card.Body>
                                <Card.Title><Typography variant="h5">Stay in the know by joining our newsletter!</Typography></Card.Title>
                                <Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </section>
                    <section className="services">
                        <Container>
                            <Typography variant="h6"><i>SERVICES</i></Typography>
                            <hr />
                        </Container>
                        <Container className="services-container">
                            <Row xs={1} sm={1} md={1} lg={3} xl={3}>
                                <Col>
                                    <Typography variant="h4">Smith Brothers Development provides a wide range of services supporting the overall growth of our customers’ businesses.</Typography>
                                    <Button id="start-project" href="#">START A PROJECT</Button>
                                </Col>
                                <Col>
                                    <div className="services-descrip-div">
                                        <Typography variant="h5">CONSULTING</Typography>
                                        <p>Type Something</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="services-descrip-div">
                                        <Typography variant="h5">WEB DEVELOPMENT</Typography>
                                        <p>Type Something</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row xs={1} sm={1} md={1} lg={3} xl={3}>
                                <Col></Col>
                                <Col>
                                    <div className="services-descrip-div">
                                        <Typography variant="h5">MOBILE DEVELOPMENT</Typography>
                                        <p>Type something</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="services-descrip-div">
                                        <Typography variant="h5">UI/UX DESIGN</Typography>
                                        <p>Type something</p>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="projects">
                        <Container>
                            <Typography variant="h6"><i>PROJECTS</i></Typography>
                            <hr/>
                            <Typography id="main-project-text" variant="h4">We design and develop software solutions that solve our clients’ challenges and problems.</Typography>
                        </Container>
                        <Container className="card-container">
                            <Row xs={1} sm={1} md={1} lg={3} xl={3}>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src="holder.js/100px180" alt="img" />
                                        <Card.Body>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk
                                                of the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src="holder.js/100px180" alt="img" />
                                        <Card.Body>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk
                                                of the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src="holder.js/100px180" alt="img" />
                                        <Card.Body>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the bulk
                                                of the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="contact-us">
                        <Container className="contact-container">
                            <Row xs={1} sm={1} md={1} lg={2} xl={2}>
                                <Col>
                                    <Typography variant="h6"><i>CONTACT US</i></Typography>
                                    <div className="middle-div-text">
                                        <Typography variant="h3">Let's connect!</Typography>
                                        <Typography variant="h6">Contact us to discuss your project and how we can help</Typography>
                                    </div>
                                    <div className="bottom-div-text">
                                        <Typography variant="h6">+1 (252) 347 - 5424</Typography>
                                        <Typography variant="h6"><a href="mailto:asmith@smithbros.dev" id="email-link">asmith@smithbros.dev</a></Typography>
                                    </div>
                                </Col>
                                <Col>
                                    <form className="form" action="https://formsubmit.co/asmith@smithbros.dev" method="POST" >
                                        <div>
                                            <TextField InputLabelProps={{ classes: { root: classes.cssLabel, focused: classes.cssFocused, }, }} InputProps={{ classes: { root: classes.cssOutlinedInput, focused: classes.cssFocused, notchedOutline: classes.notchedOutline, className: classes.input },}} className="text-field" required id="full-name-field" label="FULL NAME" variant="outlined" />
                                            <TextField InputLabelProps={{ classes: { root: classes.cssLabel, focused: classes.cssFocused, }, }} InputProps={{ classes: { root: classes.cssOutlinedInput, focused: classes.cssFocused, notchedOutline: classes.notchedOutline, },}} className="text-field" id="number-field" label="PHONE NUMBER" variant="outlined" />
                                        </div>
                                        <div>
                                            <TextField InputLabelProps={{ classes: { root: classes.cssLabel, focused: classes.cssFocused, }, }} InputProps={{ classes: { root: classes.cssOutlinedInput, focused: classes.cssFocused, notchedOutline: classes.notchedOutline, },}} className="text-field" required id="email-field" label="EMAIL" variant="outlined" />
                                            <TextField InputLabelProps={{ classes: { root: classes.cssLabel, focused: classes.cssFocused, }, }} InputProps={{ classes: { root: classes.cssOutlinedInput, focused: classes.cssFocused, notchedOutline: classes.notchedOutline, },}} className="text-field" id="company-field" label="COMPANY" variant="outlined" />
                                        </div>
                                        <div id="message-field">
                                            <TextField InputLabelProps={{ classes: { root: classes.cssLabel, focused: classes.cssFocused, }, }} InputProps={{ classes: { root: classes.cssOutlinedInput, focused: classes.cssFocused, notchedOutline: classes.notchedOutline, },}} label="MESSAGE" multiline rows={3} fullWidth variant="outlined" />
                                        </div>
                                        <div>
                                            <Button id="send-message" type="submit">SEND MESSAGE</Button>
                                        </div>
                                    </form>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </ThemeProvider>
            </div>
        );
    }
}

export default withStyles(styles)(Home);