import React from 'react';
import Hero from '../Components/Hero';

import work from '../Components/work';
import Experience from '../Components/Experience'

function CaseStudies(props){
    return(
        <div>
          <Hero title={props.title} subtitle={props.subtitle}/>

         <work/>

         <Experience/>

         </div>
    )
    
}

export default CaseStudies;