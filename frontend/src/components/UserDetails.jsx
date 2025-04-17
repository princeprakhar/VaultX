import { useState, useEffect } from "react";
import axios from "axios";
import User from "./User";

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:4001/root/user/all?filter=${filter}`)
      .then(response => {
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }, [filter]);

  return (
    <div className="container mx-4 px-1">
      <div className="font-bold text-4xl mt-6">Users</div>
      <div className="my-2">
        <input 
          type="text" 
          placeholder="Search users..." 
          className="w-full h-14 px-2 py-1 border rounded-xl border-slate-200"
          value={filter}  
          onChange={(e) => setFilter(e.target.value)}  
        />
      </div>
      <div className="space-y-5 mt-7 mb-8">
        {users.map(user => (  
          <User key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserDetails;