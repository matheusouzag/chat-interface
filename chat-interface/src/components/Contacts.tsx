import Image from "next/image";

interface ContactProps {
  name: string;
  description: string;
  img_url: string;
  handleClick?: () => void;
}

export default function Contacts({ name, description, img_url, handleClick }: ContactProps) {
  return (
    <div
      className="flex items-center py-2 cursor-pointer border-b-2 border-gray hover:bg-slate-800"
      onClick={handleClick}
    >
      <Image className="rounded-full" src={img_url} alt="user image" width={80} height={80} />
      
      <div>
        <h3 className=" text-black">{name}</h3>
        <h5 className=" text-[#494949]">{description}</h5>
      </div>
      
    </div>
  );
}
