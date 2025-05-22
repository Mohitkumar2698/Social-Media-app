import React from "react";

const UserPage = ({ user }) => {
  return (
    <div className="user-div bg-amber-200 h-[100vh] text-black p-4 flex justify-between">
      <div className="basic-info-div">
        <h1 className="text-3xl">{user.username}</h1>
        <p>{user.bio}</p>`
      </div>
      <div className="other-info-div gap-[10px] flex mt-[0.5rem]">
        <div className="items-center text-center">
          <p className="text-[1.2rem]">{user.posts}</p>
          <p>Post</p>
        </div>
        <div className="items-center text-center">
          <p className="text-[1.2rem]">{user.follower}</p>
          <p>Followers</p>
        </div>
        <div className="items-center text-center">
          <p className="text-[1.2rem]">{user.following}</p>
          <p>Following</p>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
