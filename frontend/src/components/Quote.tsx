interface QuoteProp{
  quote: string;
  name: string;
}
const Quote = ({quote,name}:QuoteProp) => {
  return (
    <div className="bg-slate-200 h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="max-w-md ">
          <div className="text-2xl font-bold">
            {quote}
          </div>
          <div className="max-w-md text-xl font-semibold">- {name}</div>
        </div>
      </div>
    </div>
  );
}

export default Quote