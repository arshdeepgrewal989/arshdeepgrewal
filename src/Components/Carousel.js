import React from 'react';

import medium from '../assets/images/medium.jpg';
import proj from '../assets/images/proj.jpg';
import default_logo from '../assets/images/default_logo.png';


import Card from '../Components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            items: [
                {
                    id: 0,
                    title: 'Experience',
                    subTitle: 'Where Have I worked ',
                    imgSrc: default_logo,
                    link: 'https://coffeerunners.ca',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Medium',
                    subTitle: 'Just some thoughts !',
                    imgSrc: medium,
                    link: 'https://medium.com/@arshdeep.grewal989',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Projects',
                    subTitle: 'Some stuff I have made ',
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

export default Carousel;