import Slider from "react-slick";

const ProjectSlider = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust based on screen size if needed
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="px-4">
      <h2 className="text-center mb-4">Featured Projects</h2>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="px-2">
            <div className="card h-100">
              <img
                src={project.imageUrl || "https://placehold.co/397X261"}
                alt={project.catTitle}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{project.catTitle}</h5>
                <p className="card-text">{project.catSubtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
