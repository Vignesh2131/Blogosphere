interface AvatarProps{
    authorname:string
}
const Avatar = ({ authorname }:AvatarProps) => {
  return (
    <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span className="font-medium text-sm text-gray-600 dark:text-gray-300">{authorname[0]}</span>
    </div>
  );
}

export default Avatar