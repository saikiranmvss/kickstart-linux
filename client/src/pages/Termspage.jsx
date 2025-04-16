import React, { useState, useEffect, useRef } from "react";
import axios from "../utils/axiosConfig";
import Quill from "quill"; // Import the Quill library directly
import "quill/dist/quill.snow.css"; // Import Quill's default theme

const TermPage = () => {
  const [content, setContent] = useState("<p>Enter your Terms & Conditions here...</p>");
  const editorRef = useRef(null); // This is the ref for the editor
  const quillRef = useRef(null); // This is the ref for the Quill instance

  // Toolbar options for Quill
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    ['link', 'video', 'formula'],
    [{ 'header': 1 }, { 'header': 2 }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']
  ];

  // Initialize Quill editor
  useEffect(() => {
    if (editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: toolbarOptions
        },
        placeholder: 'Enter your Terms & Conditions here...'
      });

      // Sync Quill content with state
      quillRef.current.on('text-change', () => {
        setContent(quillRef.current.root.innerHTML);
      });
    }

    return () => {
      if (quillRef.current) {
        quillRef.current = null; // Cleanup the Quill instance
      }
    };
  }, []);

  // Handle save function
  const handleSave = async () => {
    try {
      // Get the user ID from the session (this depends on your setup)
      const userId = localStorage.getItem("userId"); // Assuming userId is stored in localStorage

      // Prepare the data to send
      const pageData = {
        pageName: "Terms", // You can dynamically change the page name if needed
        pageContent: content,
        userId: userId // Send userId from session
      };

      // Make the POST request using axios
      const response = await axios.post("/api/page/store", pageData);

      if (response.status === 200) {
        console.log("Page content saved successfully!");
      } else {
        console.log("Error saving page content:", response);
      }
    } catch (error) {
      console.error("Error sending data to the server:", error);
    }
  };

  return (
    <div className="container-fluid test">
      <div className="row">
        <div className="col-12">
          <h4 className="mb-sm-0">Terms & Conditions</h4>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div ref={editorRef} style={{ height: "320px" }} />
            </div>

            <button className="btn btn-primary mt-5" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermPage;
