import React from 'react';

import medium from '../assets/images/medium.jpg';
import proj from '../assets/images/proj.jpg';
import default_logo from '../assets/images/default_logo.png';


import Card from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Experience extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            items: [
                {
                    id: 0,
                    title: 'Coffee Runners',
                    subTitle: 'Founder/CEO',
                    imgSrc: default_logo,
                    link: 'https://coffeerunners.ca',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Wilfrid Laurier University',
                    subTitle: 'Student Admin Assistant',
                    imgSrc: medium,
                    link: 'https://medium.com/@arshdeep.grewal989',
                    selected: false
                },
                {
                    id: 2,
                    title: 'City Of Brampton//Results Fitness',
                    subTitle: 'Lifeguard/Instructor',
                    imgSrc: proj,
                    link: './case-studies',
                    selected: false
                },
            ]

        }

    }

    handleCardClick = (id, card) => {

        console.log(id);

        let items= [...this.state.items];
        items[id].selected= items[id].selected ? false: true;

        items.forEach(item => {
            if(item.id !== id){
                item.selected= false;
            }
        })
        
        this.setState({
            items
        });
    }

    makeItems= (items) => {
        return items.map(item => {
            return <Card item={item} click= {(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render(){

        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default Experience;