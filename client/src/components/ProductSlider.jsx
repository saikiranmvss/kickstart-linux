import Slider from "react-slick";
import {Link} from 'react-router-dom'
import { FaComments } from "react-icons/fa"; 

const ProjectSlider = ({ projects, onChatClick }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="px-4">
      <h2 className="text-center mb-4">Featured Projects</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="px-2">
            <div className="card h-100 d-flex flex-column" style={{ height: "100%", position: "relative" }}>
            {project.catVideo ? (
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <iframe
                    width="100%"
                    height="200"
                    src={project.catVideo.replace("watch?v=", "embed/")}
                    title={project.catTitle}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img
                  src="../images/video-placeholder.jpeg"
                  alt={project.catTitle}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}

              <Link to={project.urlSlug} className="card-body d-flex flex-column justify-content-between" style={{ minHeight: "150px" }}>
                <h5 className="card-title">{project.catTitle}</h5>
                <p className="card-text">{project.catSubtitle}</p>
              </Link>

              {/* Chat Icon */}
              <button
                onClick={() => onChatClick(project)}
                className="btn btn-sm btn-primary position-absolute"
                style={{ bottom: "10px", right: "10px" }}
                title="Chat with Entrepreneur"
              >
                <FaComments />
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
