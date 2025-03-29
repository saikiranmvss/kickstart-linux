import React, { useState } from "react";

const VideoEmbed = ({ setJourneyForm, videoKey, videoData }) => {
  const [videoUrl, setVideoUrl] = useState(videoData);
  const [embedUrl, setEmbedUrl] = useState(videoData);

  const handleInputChange = (e) => {
    const newVideoUrl = e.target.value; // Get the updated URL directly from the input
    setVideoUrl(newVideoUrl);

    setJourneyForm((prevForm) => ({
      ...prevForm,
      [videoKey]: newVideoUrl,
    }));

    // Generate embed URL using the updated input value
    const embed = getEmbedUrl(newVideoUrl);
    if (embed) {
      setEmbedUrl(embed);
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

    return ""; // Return empty if no valid video ID is found
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
            placeholder="Copy Paste URL Here"
            onInput={handleInputChange} // Updated here
          />
        </div>
        <br />
        <br />
        <div>
          <iframe
            width="700"
            height="315"
            src={embedUrl}
            title="Video Player"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoEmbed;
