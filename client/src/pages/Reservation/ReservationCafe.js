import React from "react";
import "./style.css";
import "./bootstrap.min.css";
import SimpleAccordion from "../../component/MUI/Accordion";
import Button from "@mui/material/Button";

const ReservationResto = () => {
  return (
    <div>
      <div id="booking2" class="section">
        <div class="section-center">
          <div class="container">
            <div class="row">
              <div class="col-md-7 col-md-push-5">
                <div class="booking-cta">
                  <h1>Make your reservation</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi facere, soluta magnam consectetur molestias itaque ad
                    sint fugit architecto incidunt iste culpa perspiciatis
                    possimus voluptates aliquid consequuntur cumque quasi.
                    Perspiciatis.
                  </p>
                </div>
              </div>
              <div class="col-md-4 col-md-pull-7">
                <div class="booking-form">
                  <form>
                    {/* <div class="form-group">
                      <span class="form-label">Your Destination</span>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div class="form-group">
                      <span class="form-label">Your Destination</span>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Enter your name"
                      />
                    </div> */}
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="form-group">
                          <span class="form-label">First name</span>
                          <input
                            class="form-control"
                            type="text"
                            placeholder="Enter your first name"
                          />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <span class="form-label">Last name</span>
                          <input
                            class="form-control"
                            type="text"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="form-group">
                          <span class="form-label">Date</span>
                          <input class="form-control" type="date" required />
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <span class="form-label">Time</span>
                          <input class="form-control" type="date" required />
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <SimpleAccordion />
                    </div>
                    <div class="form-btn">
                      {/* <button class="submit-btn">Check availability</button> */}
                      <Button variant="outlined" size="large">
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationResto;
