import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

const Cta = () => {
  return (
    <>
      {/* <!-- CTA Area --> */}
      <div className="cta-section pt-13 pt-lg-25 pb-13 pb-lg-25 bg-blue bg-pattern pattern-7">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <div className="text-center dark-mode-texts">
                <h2 className="gr-text-4 mb-7 text-white">Ready to get treatment?</h2>
                <p className="gr-text-9 mb-11 px-xl-7 gr-text-color">
                  We've made telemedicine simple and easy for you. Create your
                  personal room and start practicing telemedicine today.
                </p>
                <Link
                  to="/#"
                  className="btn btn-green text-white gr-hover-y px-lg-9"
                >
                  Book my appointment
                </Link>
                <p className="gr-text-11 mb-0 mt-6 text-color-opacity">It takes only 2 mins!</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Cta;
