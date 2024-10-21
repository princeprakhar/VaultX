const Friend = ({ name }) => {
  return <>
  <div className="flex items-center shadow-sm space-x-4">
    <div className="w-12 h-12 rounded-full bg-slate-500 flex items-center justify-center">
      <span className="text-2xl text-white">{name[0]}</span>
    </div>
    <h3 className="text-2xl font-semibold">{name}</h3>
  </div>
  </>;
};
export default Friend;