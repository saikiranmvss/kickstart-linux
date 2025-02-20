import React, { useState } from "react";

const VideoEmbed = () => {
  const [videoUrl, setVideoUrl] = useState(""); 
  const [embedUrl, setEmbedUrl] = useState("https://www.youtube.com/embed/X-XZx1o_w-A?si=t79V8LHyudH15n6q"); 

  const handleInputChange = (e) => {
    setVideoUrl(e.target.value);
    const embed = getEmbedUrl(videoUrl);
    if (embed) {
      setEmbedUrl(embed);
    } else {
      alert("Invalid video URL");
    }
  };

  const getEmbedUrl = (url) => {
    let videoId;
    
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
      return `https://www.youtube.com/embed/${videoId}`;
    } 
    
    if (url.includes("vimeo.com")) {
      videoId = url.split("/").pop();
      return `https://player.vimeo.com/video/${videoId}`;
    }
    
    return "";
  };

  return (
    <div className="p-4 text-center bg-white shadow-sm rounded row">
      <div className="col-md-12 text-left mb-4">
        <div>
          <label className="form-label">YouTube or Vimeo Web Link</label>
          <input
            type="text"
            className="form-control"
            value={videoUrl}
            onInput={handleInputChange}
          />
        </div>
        <br /><br />
        <div>
          <iframe width="700" height="315" src={embedUrl} title="Video Player" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoEmbed;
