import React from 'react';

type Avatar = {
  id: number;
  name: string;
  imageSrc: string;
};

interface AvatarGroupProps {
  avatars: Avatar[];
  maxVisible: number;
}

function AvatarGroup({ avatars, maxVisible }: AvatarGroupProps) {
  const visibleAvatars = avatars.slice(0, maxVisible);
  const hiddenAvatarCount = avatars.length - maxVisible;

  return (
    <div className="flex w-full -space-x-4">
      {visibleAvatars.map((avatar) => (
        <img
          key={avatar.id}
          src={avatar.imageSrc}
          alt={avatar.name}
          className="rounded-full border-2 border-white w-10 h-10"
        />
      ))}
      {hiddenAvatarCount > 0 && (
        <div className=" rounded-full text-gray-600 bg-gray-100 flex items-center justify-center font-medium text-xs w-10 h-10">
          +{hiddenAvatarCount}
        </div>
      )}
    </div>
  );
}

export default AvatarGroup;
