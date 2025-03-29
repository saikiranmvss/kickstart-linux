import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { BsClock } from "react-icons/bs";

const CommentCard = ({ comment }) => {
  const { date, name, profileImage, content, likes } = comment;

  return (
    <div className="border rounded-lg p-4 bg-white">
      <h3 className="font-bold text-lg mb-3">Investors Comments</h3>
      <p className="text-gray-700 text-sm mb-4">{content}</p>
      <div className="flex items-center text-gray-500 text-sm mb-3">
        <BsClock className="mr-2" />
        <span>{date}</span>
      </div>
      <div className="flex items-center">
        <img
          src={profileImage}
          alt={name}
          className="w-8 h-8 rounded-full mr-3"
        />
        <a
          href="#"
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          {name}
        </a>
      </div>
      <div className="flex items-center mt-3">
        <FaRegThumbsUp className="text-gray-500 mr-2" />
        <span className="text-gray-700 text-sm">{likes}</span>
      </div>
    </div>
  );
};

const CommentList = () => {
  const comments = [
    {
      date: "15th, Nov 2024",
      name: "Mr. Investor Name",
      profileImage: "https://placehold.co/50",
      content:
        "This project has strong potential to address sustainability concerns while creating unique, eco-friendly products. By using crop waste, it tackles agricultural byproduct disposal issues and reduces environmental pollution. Additionally, it could appeal to a growing market for green and ethical products. Consider exploring partnerships with farmers for consistent raw material supply.",
      likes: "9.2K",
    },    
    {
      date: "15th, Nov 2024",
      name: "Mr. Investor Name",
      profileImage: "https://placehold.co/50",
      content:
        "This project has strong potential to address sustainability concerns while creating unique, eco-friendly products. By using crop waste, it tackles agricultural byproduct disposal issues and reduces environmental pollution. Additionally, it could appeal to a growing market for green and ethical products. Consider exploring partnerships with farmers for consistent raw material supply.",
      likes: "9.2K",
    },    
    {
      date: "15th, Nov 2024",
      name: "Mr. Investor Name",
      profileImage: "https://placehold.co/50",
      content:
        "This project has strong potential to address sustainability concerns while creating unique, eco-friendly products. By using crop waste, it tackles agricultural byproduct disposal issues and reduces environmental pollution. Additionally, it could appeal to a growing market for green and ethical products. Consider exploring partnerships with farmers for consistent raw material supply.",
      likes: "9.2K",
    },    
    {
      date: "15th, Nov 2024",
      name: "Mr. Investor Name",
      profileImage: "https://placehold.co/50",
      content:
        "This project has strong potential to address sustainability concerns while creating unique, eco-friendly products. By using crop waste, it tackles agricultural byproduct disposal issues and reduces environmental pollution. Additionally, it could appeal to a growing market for green and ethical products. Consider exploring partnerships with farmers for consistent raw material supply.",
      likes: "9.2K",
    },    
  ];

  return (
    <div className="grid grid-cols-1 gap-6">
      {comments.map((comment, index) => (
        <CommentCard key={index} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
