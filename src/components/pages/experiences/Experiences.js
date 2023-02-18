import React from 'react';

export default function Experiences() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>EXPERIENCE</strong>
          </h6>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                Mar
                <strong>2021</strong> - Dec
                <strong>2021</strong>
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>Lanehub</strong>
                </h6>
                <p>
                Business Intelligence Engineer
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt-top">
            <div className="col xl4 l4 m6 s12">
              <p className="teal year_exp white-text">
                Jan
                <strong>2020</strong> - Mar
                <strong>2021</strong>
              </p>
            </div>
            <div className="col xl8 l8 m6 s12">
              <blockquote className="no-pad">
                <h6 className="no-pad mt-bottom">
                  <strong>Loreal</strong>
                </h6>
                <p>
                Business Analyst
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
