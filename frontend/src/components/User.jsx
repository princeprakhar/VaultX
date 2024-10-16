import { Button } from "./ui/button";
const User = ({ user }) => {
  return (
    <div className="flex justify-between items-center ">
      <div className="flex items-center">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center mr-2">
          <div className="text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div>
          {user.firstName} {user.lastName}
        </div>
      </div>
      <div>
        <Button className="bg-slate-700 rounded-xl text-white hover:bg-slate-400">Send Money</Button>
      </div>
    </div>
  );
};
export default User;