import { useEffect, useState } from "react";
import VideoEmbed from './VideoEmbed';
import DateInput from '../datePicker';
import { FaPlus } from "react-icons/fa";
import JourneySaveButton from './journeySaveButton';
import { TagInput } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const MyJourney = ({ journeyForm, setJourneyForm }) => {
    const [imageFiles, setImageFiles] = useState([]);
    const [videoFiles, setVideoFiles] = useState([]);
    const maxLength = 60;
    const SubTitlemaxLength = 135;

    useEffect(() => {
        if (journeyForm.journeyTitleBlocks.length === 0) {
            addBlock();
        }

        // Preload existing journeyImages and journeyVideos into state
        if (journeyForm.journeyImages) {
            setImageFiles(journeyForm.journeyImages);
        }
        if (journeyForm.journeyVideos) {
            setVideoFiles(journeyForm.journeyVideos);
        }
    }, []);

    const addBlock = () => {
        setJourneyForm(prev => ({
            ...prev,
            journeyTitleBlocks: [...prev.journeyTitleBlocks, { id: Date.now(), title: '', subTitle: '' }]
        }));
    };

    const updateBlock = (id, field, value) => {
        setJourneyForm(prev => ({
            ...prev,
            journeyTitleBlocks: prev.journeyTitleBlocks.map(block =>
                block.id === id ? { ...block, [field]: value } : block
            )
        }));
    };

    const handleTitleChange = (id, value) => {
        updateBlock(id, 'title', value);
    };

    const handleSubTitleChange = (id, value) => {
        updateBlock(id, 'subTitle', value);
    };

    const handleContentChange = (value) => {
        setJourneyForm(prevForm => ({
            ...prevForm,
            journeyContents: value,
        }));
    };

    const handleJourneyTitlesChange = (value) => {
        setJourneyForm(prevForm => ({
            ...prevForm,
            journeyTitles: value,
        }));
    };

    const handleJourneyWebVideosChange = (value) => {
        setJourneyForm(prevForm => ({
            ...prevForm,
            journeyWebVideos: value,
        }));
    };

    const handleImageUpload = (event) => {
        const files = Array.from(event.target.files).map(file => ({
            image: file.name,
            file
        }));
        setImageFiles(prev => [...prev, ...files]);
        setJourneyForm(prev => ({
            ...prev,
            journeyImages: [...(prev.journeyImages || []), ...files]
        }));
    };

    const handleVideoUpload = (event) => {
        const files = Array.from(event.target.files).map(file => ({
            video: file.name,
            file
        }));
        setVideoFiles(prev => [...prev, ...files]);
        setJourneyForm(prev => ({
            ...prev,
            journeyVideos: [...(prev.journeyVideos || []), ...files]
        }));
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event, type) => {
        event.preventDefault();
        const files = Array.from(event.dataTransfer.files).map(file => ({
            [type === "images" ? "image" : "video"]: file.name,
            file
        }));

        if (type === "images") {
            setImageFiles(prev => [...prev, ...files]);
        } else {
            setVideoFiles(prev => [...prev, ...files]);
        }

        setJourneyForm(prev => ({
            ...prev,
            [type === "images" ? "journeyImages" : "journeyVideos"]: [
                ...(prev[type === "images" ? "journeyImages" : "journeyVideos"] || []),
                ...files
            ]
        }));
    };

    return (
        <div>
            <br />
            <h4><strong>AI-Powered Content Management Tool</strong></h4>
            <p>Our AI-driven tool helps you craft a compelling startup pitch deck by refining and customizing your content for a perfect presentation. Simply paste your story, and AI will enhance it—structuring, polishing, and optimizing it for your startup journey.</p>
            
            {journeyForm.journeyTitleBlocks.map(block => (
                <div className="p-4 text-center bg-white shadow-sm rounded row mt-4" key={block.id}>
                    <div className="col-md-12 text-left mb-4">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            value={block.title}
                            onChange={(e) => handleTitleChange(block.id, e.target.value)}
                        />
                    </div>
                    <br />
                    <div className="col-md-12 text-left mb-4">
                        <label className="form-label">Sub Title</label>
                        <textarea
                            rows={4}
                            className="form-control"
                            value={block.subTitle}
                            onChange={(e) => handleSubTitleChange(block.id, e.target.value)}
                        ></textarea>
                    </div>
                </div>
            ))}

            <br />
            <div className="d-flex justify-content-end align-items-center" onClick={addBlock}>
                <span className="m-0 pr-4">Add More</span>
                <button type="button" className="form-control w-10">
                    <FaPlus style={{ fontSize: '18px' }} />
                </button>
            </div>
            <br />

            <div className="p-4 text-center bg-white shadow-sm rounded row" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'images')}>
                <div className="col-md-12 text-left">
                    <div className="text-center">
                        <input type="file" id="image-upload" multiple hidden onChange={handleImageUpload} />
                        <button className="btn btn-light border border-[#aeaeae]" type="button" onClick={() => document.getElementById('image-upload').click()}>
                            Upload an image
                        </button>
                    </div>
                    <div className="text-center mt-4">
                        <p>Drag n Drop an image here, or select file. <br />Note: JPG, PNG, GIF, or WEBP, no larger than 50 MB.</p>
                    </div>
                    <div className="mt-3">
                        {imageFiles.map((file, i) => (
                            <div key={i} className="mb-2">
                                <p>{file.image || file.video}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <br />
            <div className="p-4 text-center bg-white shadow-sm rounded row" onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, 'videos')}>
                <div className="col-md-12 text-left">
                    <div className="text-center">
                        <input type="file" id="video-upload" multiple hidden onChange={handleVideoUpload} />
                        <button className="btn btn-light border border-[#aeaeae]" type="button" onClick={() => document.getElementById('video-upload').click()}>
                            Upload a video
                        </button>
                    </div>
                    <div className="text-center mt-4">
                        <p>Drag n Drop a video here, or select file. <br />Note: MP4, no larger than 50 MB.</p>
                    </div>
                    <div className="mt-3">
                        {videoFiles.map((file, i) => (
                            <div key={i} className="mb-2">
                                <p>{file.video || file.image}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <br />
            <div className="p-4 text-center bg-white shadow-sm rounded row">
                <div className="col-md-12 text-left mb-4">
                    <label className="form-label">Video or Web Video URLs</label>
                    <TagInput
                        className="form-control"
                        defaultValue={journeyForm.journeyWebVideos}
                        onChange={(value) => handleJourneyWebVideosChange(value)}
                        style={{ width: '100%' }}
                    />
                </div>
            </div>

            <br />
            <div className="p-4 text-center bg-white shadow-sm rounded row">
                <div className="col-md-12 text-left mb-4">
                    <label className="form-label">Title</label>
                    <TagInput
                        className="form-control"
                        defaultValue={journeyForm.journeyTitles}
                        onChange={(value) => handleJourneyTitlesChange(value)}
                        style={{ width: '100%' }}
                    />
                </div>
            </div>

            <br />
            <div className="p-4 text-center bg-white shadow-sm rounded row">
                <div className="col-md-12 text-left mb-4">
                    <label className="form-label">Content</label>
                    <TagInput
                        rows={4}
                        className="form-control"
                        defaultValue={journeyForm.journeyContents}
                        onChange={(value) => handleContentChange(value)}
                        style={{ width: '100%', height: '150px' }}
                    />
                </div>
            </div>
            <br />
            <JourneySaveButton pageValue="04" nextPageName="JourneyTeam" journeyForm={journeyForm} setJourneyForm={setJourneyForm} />
        </div>
    );
};

export default MyJourney;
