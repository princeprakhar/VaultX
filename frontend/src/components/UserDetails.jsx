import { useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "./User";

const UserDetails = () => {
  const [users, setUsers] = useState([
    {
      firstName: "Prakhar",
      lastName: "Deep",
      _id: 1
    },
    {
      firstName: "Yuvraj",
      lastName: "Singh",
      _id: 2
    },
    {
      firstName: "Jashan",
      lastName: "Singh",
      _id: 3
    }
  ]);
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter(user =>
    `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleInitiatedTansfer = () => {
    navigate("/send");
  }

  return (
    <div className="container mx-4 px-1 ">
      <div className="font-bold text-4xl mt-6 ">
        Users
      </div>
      <div className="my-2">
        <input 
          type="text" 
          placeholder="Search users..." 
          className="w-full h-14 px-2 py-1 border rounded-xl border-slate-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="space-y-5 mt-7 mb-8">
        {filteredUsers.map(user => (
          <User key={user._id} user={user}  handleInitiatedTansfer={handleInitiatedTansfer}/>
        ))}
      </div>
    </div>
  );
};



export default UserDetails;