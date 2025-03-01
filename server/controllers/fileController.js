const bcrypt = require('bcrypt');
const crypto = require('crypto'); 
const path = require("path");
const fs = require("fs");

const storageBasePath = path.join(__dirname, ".."  , "storage");

  const getFileCategory = (mimetype) => {
    if (mimetype.startsWith("image/")) return "images";
    if (mimetype.startsWith("video/")) return "videos";
    if (mimetype.startsWith("audio/")) return "audio";
    if (
      mimetype.includes("pdf") ||
      mimetype.includes("msword") ||
      mimetype.includes("spreadsheet") ||
      mimetype.includes("presentation")
    )
      return "documents";
    return null;
  };
  

  const fileUpload = async (req, res) => {
    try {
      if (!req.files || !req.files.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }
  
      let file = req.files.file;
      let fileType = getFileCategory(file.mimetype);
  
      if (!fileType) {
        return res.status(400).json({ message: "Invalid file type" });
      }
  
      let uploadDir = path.join(storageBasePath, fileType);
  
      
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
  
      let filePath = path.join(uploadDir, Date.now() + path.extname(file.name));
  
      
      await file.mv(filePath);
      const appUrl = process.env.APP_URL || "http://localhost:5000";
      res.json({
        message: "File uploaded successfully",
        fileUrl: `${appUrl}/files/${fileType}/${path.basename(filePath)}`,
      });
    } catch (error) {
      console.error("File upload error:", error);
      res.status(500).json({ message: "Server error", error });
    }
  };

module.exports = {fileUpload};