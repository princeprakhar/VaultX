const InputHandler = ({label, type, placeholder,onChange}) => {
  return (
    <>
      <label className="block text-slate-700 font-bold mb-1">{label}</label>
      <input
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        className="border rounded bg-slate-100 border-slate-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-slate-500 mb-1"
      />
    </>
  );
};
export default InputHandler;
