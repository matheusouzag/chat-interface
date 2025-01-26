interface ButtonProps {
  name: string;
  onClick?: () => void; 
  children: React.ReactNode;
}

export function Button({ name, onClick, children }: ButtonProps) {
  return (
    <button
      className="h-12 px-4 text-[1.1rem] border-4 border-white flex items-center gap-4 bg-white text-cinza shadow-md font-medium cursor-pointer hover:bg-cinzaclaro hover:text-black hover:border-cinzaclaro rounded-full"
      onClick={onClick} 
    >
      {children} {name}
    </button>
  );
}
