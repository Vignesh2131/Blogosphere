
const Skelton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="px-5 my-2 w-screen max-w-screen-md cursor-pointer">
        <div className="text-xl font-bold py-2">
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="text-md font-thin py-2">
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="text-slate-500 text-sm font-thin py-2">
          <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
        </div>
        <div className="bg-slate-200 h-[1px] w-full"></div>
      </div>
    </div>
  );
}

export default Skelton