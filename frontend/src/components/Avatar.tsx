
interface AvatarProps {
  authorname: string
}
const Avatar = ({ authorname }:AvatarProps) => {
  return (
    <div className="relative cursor-pointer inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span className="font-medium text-xs text-gray-600 dark:text-gray-300 md:text-sm">{authorname[0].toUpperCase()}</span>
    </div>
  );
}

export default Avatar