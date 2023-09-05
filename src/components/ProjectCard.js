import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="img" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
        <h5 className="sourcecode">
          {" "}
          <a className="sourcecode" href={link}>
            Source Code / Link
          </a>
        </h5>
      </>{" "}
    </Col>
  );
};
