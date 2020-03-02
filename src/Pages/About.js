import React from 'react';
import Hero from '../Components/Hero'

import Content from '../Components/Content'


function About(props){
    return(
        <div>
            <Hero title={props.title} />

            <Content>
                <p>Hi there, thank you for visiting my website! 
                    My name is Arshdeep G. and I am currently a 3rd-year 
                    computer science student at Wilfrid Laurier University.</p>
                <p> </p>
                <p> My interests lie in the intersection of computer science 
                    and business. I love to complete projects because the knowledge
                    I gain and the lessons I learn during the process are essential
                    to my learning and growth. </p>
                
                <p>I am currently looking for opportunities 
                    to leverage my interests and expand my skill sets in the fields of 
                    business, web/app development, and Object-Oriented Design. My goal is 
                    to make a difference; </p>

                <p>I strive to use my abilities in order to devise a 
                    better society for the future generations and I am constantly seeking out new 
                    experiences that will assist me in meeting this objective.</p>

                <p>If you are intrested in viewing my resume, you can view that
                    <a href="https://drive.google.com/file/d/1jBXwMJORNkTxH0KFE2J4N31j6sUaquOG/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer"> here !</a> </p>
            </Content>

        </div>
    )
}

export default About;