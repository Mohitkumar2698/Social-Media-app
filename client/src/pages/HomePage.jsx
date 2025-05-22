import React from "react";

const HomePage = ({ getUser, users }) => {
  return (
    <div className="body-div pt-[2rem] flex justify-center">
      <div className="users-div w-[50vw] flex flex-wrap gap-[1rem]">
        {Array.isArray(users) &&
          users.map((userObj, index) => (
            <div
              key={index}
              className="w-[24vw] cursor-pointer border p-2 border-amber-500 bg-amber-200 text-black rounded"
              onClick={() => {
                getUser(userObj._id);
              }}
            >
              <p>{userObj.username}</p>
              <p>{userObj.bio}</p>
              <p>Posts: {userObj.posts}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
