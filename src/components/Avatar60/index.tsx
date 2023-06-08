import React from "react";

interface AvatarProps {
  imageUrl: string;
  altText: string;
}

const Avatar60: React.FC<AvatarProps> = ({ imageUrl, altText }) => {
  return (
    <div className="w-10 h-10 rounded-full overflow-hidden mr-2 border">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Avatar60;
