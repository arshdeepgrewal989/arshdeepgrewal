import React from 'react';
import Hero from '../Components/Hero';

import work from '../Components/work';

function CaseStudies(props){
    return(
        <div>
          <Hero title={props.title} subtitle={props.subtitle}/>

         <work/>
         </div>
    )
    
}

export default CaseStudies;