import React from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import CaseStudies from './Pages/CaseStudies';
import Contact from './Pages/Contact';




class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: 'Arshdeep',
      headerLinks: [
        {title:'Arshdeep', path:'/'},
        {title:'About', path:'/about'},
        {title:'Case Studies', path:'/studies'},
        {title:'Contact', path:'/contact'}
      ],
      home: {
        title: 'AAP',
        subTitle: 'Another A Production',
        text: 'Check out some Things I Have done below'
      },
      studies:{
        title: 'Case Studies',
        subTitle: "Things I've done"
      },
      about: {
        title: 'About Me'
      },
      contact: {
        title: 'Let\'s Talk'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Arshdeep Grewal</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
              <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/case-studies">Case Studies</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>} />
          <Route path="/about" exact render={() => <About title={this.state.about.title} />} />
          <Route path="/contact" exact render={() => <Contact title={this.state.contact.title} />} />
          <Route path="/case-studies" exact render={() => <CaseStudies title={this.state.studies.title} />} />

          <Footer />

        </Container>
      </Router>
    );
  }
}

export default App;