import { ChangeEvent } from "react";

interface LabelledInputType  {
    label: string;
    placeholder: string;
    value: string;
    fieldType: string,
    onChange:(e:ChangeEvent)=>void

}
const LabelledInput = ({label,placeholder,onChange,value,fieldType}:LabelledInputType) => {
  return (
    <div className="pt-4">
      <label
        htmlFor="first_name"
        className="block mb-2 text-sm font-medium text-black md:text-base"
      >
       {label}
      </label>
      <input
        type={fieldType}
        value={value}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 md:text-base"
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default LabelledInput