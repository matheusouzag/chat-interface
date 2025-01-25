interface ButtonProps {
  name: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

function Button({ name, icon, children }: ButtonProps) {
  return (
    <button className="h-12 px-4 text-[1.1rem] border-4 border-white flex items-center gap-4 bg-white text-[#494949] shadow-md font-medium cursor-pointer hover:bg-[#1248B5] hover:text-white hover:border-[#093896] rounded-full">
      {children}
      {name}
    </button>
  );
}

export { Button };
