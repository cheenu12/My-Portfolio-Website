import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/weatherapp.png";
import projImg2 from "../assets/img/crypto.png";
import projImg3 from "../assets/img/drumkit.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "CryptoSphere",
      description:
        "Built a React-based cryptocurrency tracker app with integrated Bing News Search and Coin Ranking APIs. Utilized Ant Design for a sleek user interface, offering real-time global crypto stats and news updates",
      imgUrl: projImg2,
      link: "https://github.com/cheenu12/CryptoSphere"
    },
    {
     
      title: "Weather APP",
      description:
        "Simple and responsive weather app displaying real-time forecasts using HTML, CSS, and JavaScript Stay informed about current weather conditions with ease and convenience.",
      imgUrl: projImg1,
      link: "https://github.com/cheenu12/Weather-App"
    },
    {
      title: "Drum-Kit",
      description:
        "Experience the joy of playing a virtual drum kit by pressing keys on your laptop, producing a variety of unique sounds",
      imgUrl: projImg3,
      link: "https://github.com/cheenu12/playing-drums"
    }

    // add more projects here

    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Utilized the power of MERN stack to craft impactful
                    projects, leveraging APIs and databases to build
                    feature-rich web applications that seamlessly connect with
                    external services and efficiently manage data.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <>
                                {" "}
                                <ProjectCard key={index} {...project} />
                              </>
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>More projects will be addded here in future</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>More projects will be addded here in future</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
