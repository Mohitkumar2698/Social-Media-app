import { useEffect, useState } from "react";
import { fetchUsers } from "./api/index.js";
import { fetchUser } from "./api/index.js";
import UserPage from "./pages/userPage.jsx";
import HomePage from "./pages/HomePage.jsx";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [showUser, setShowUser] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  const getUser = async (id) => {
    showUser ? setShowUser(false) : setShowUser(true);
    const userData = await fetchUser(id);
    setUser(userData.user);
  };

  return (
    <div className="parent-div flex justify-center">
      <div className=" h-auto w-[60vw] text-white pt-4">
        <nav className="flex items-center justify-between">
          <h1 className="text-amber-300 mb-4 text-5xl font-sans">Instagram</h1>
          <div className="search-div flex items-center">
            <input
              type="search"
              placeholder="type to search"
              className="w-[30vw] h-[6vh] rounded-tl rounded-bl text-black pl-[10px] border border-amber-300"
            />
            <input
              type="button"
              value="search"
              className="h-[6vh] w-[5vw] bg-amber-300 text-black text-[1rem] rounded-tr rounded-br cursor-pointer "
            />
          </div>
        </nav>
        {showUser ? (
          <UserPage user={user} />
        ) : (
          <HomePage getUser={getUser} users={users} />
        )}
      </div>
    </div>
  );
};

export default App;
