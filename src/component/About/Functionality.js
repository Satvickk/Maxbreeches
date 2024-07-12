import React from "react";
import SkillBar from "react-skillbars";

const skills = [
  { type: "TECHNOLOGY", level: 85 },
  { type: "SYSTEMS", level: 75 },
  { type: "MANAGEMENT", level: 65 },
  { type: "AIMS", level: 95 },
];

const colors = {
  bar: "#f798378a",
  title: {
    text: "#fff",
    background: "#f79837",
  },
};

const Functionality = () => {
  return (
    <>
      <section id="about_progressbar" className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about_progressbar_content">
                <h2>Functionality meets perfection</h2>
                <p>
                  Max Breeches are always welcomes the new ideas and suggestions
                  from the customers from the better improvement and long term
                  business relationship.
                </p>
                <p>
                  Just we welcome for very small quantity to insure the product
                  and quality at both end to build the satisfaction labels. It
                  is not necessary that we need huge quantity for the start. All
                  customers are the god for us.
                </p>
                <p>
                  Max Breeches making ensure all delivery in time as committed
                  for on time delivery with right product which is our aim of
                  planning department this is also a weightage for us. We have
                  doing all this on through strong ERP system which is enables
                  us to monitor all day-by-day activities in the factory this is
                  not a system only we are very strictly follow all the dates
                  timely.
                </p>
                <p>
                  We can just say only come and test our sample to see the
                  difference at every point for the raw materials, fitting and
                  workmanships, it all things will do force to work with us.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="custom-progress m-t-40">
                <SkillBar skills={skills} height={50} colors={colors} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Functionality;
