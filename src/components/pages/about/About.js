import React from 'react';
import Hello from '../../images/hello.jpg';

export default function About() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <div className='card-image'>
					<img className='activator' src={Hello} alt='John Doe' />
          </div>
          <p className="black-text">
            My name is BINGJIE CHEN and I am currently a computer science master student from University of York. I love coding and building new things 😎
          </p>
        </div>
      

     
        </div>
      </div>
   
  );
}
