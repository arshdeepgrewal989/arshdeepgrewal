import React from 'react';

import default_logo from '../assets/images/default_logo.png';

import Card from '../Components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class work extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            items: [
                {
                    id:0,
                    title: 'Coffee Runners',
                    subtitle: 'Founder, CEO',
                    imgSrc: default_logo,
                    link: 'https://coffeerunners.ca',
                    selected: false
                },
                {
                    id:1,
                    title:'React Projects',
                    subTitle:'Just some Stuff I have made :)',
                    link:'',
                    selected:false
                },
                {
                    id:2,
                    title:'Job Experience',
                    subTitle:'Where Iv\'e worked ',
                    link:'',
                    selected:false
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

export default work;