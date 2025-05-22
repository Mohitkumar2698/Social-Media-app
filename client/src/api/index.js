const SERVER_URI = "http://localhost:8080";

export const fetchUsers = async () => {
  const api = await fetch(SERVER_URI, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await api.json();
  return await data.response;
};

export const fetchUser = async (id) => {
  const api = await fetch(`${SERVER_URI}/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await api.json();
  return await data;
};
