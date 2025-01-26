import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { IoIosMore } from "react-icons/io";

interface ContactProps {
  name: string;
  description: string;
  img_url: string;
  handleClick?: () => void;
  handleDelete?: () => void;
  handleRename?: (newName: string) => void; 
}

export default function Contacts({
  name,
  description,
  img_url,
  handleClick,
  handleDelete,
  handleRename, 
}: ContactProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRenaming, setIsRenaming] = useState(false); 
  const [newName, setNewName] = useState(name); 
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    if (handleDelete) handleDelete(); 
    setIsMenuOpen(false); 
  };

  const handleRenameClick = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    setIsRenaming(true);  
    setIsMenuOpen(false); 
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);  
  };

  const handleSaveName = () => {
    if (handleRename) {
      handleRename(newName); 
    }
    setIsRenaming(false);  
  };
  

  return (
    <div
      className="flex items-center justify-between py-2 px-4 cursor-pointer border-b-2 border-gray hover:bg-cinzaclaro relative"
      onClick={handleClick}
    >
      <div className="flex items-center">
        <Image
          className="rounded-full"
          src={img_url}
          alt="user image"
          width={80}
          height={80}
        />
        <div className="ml-4">
          {isRenaming ? (
            <input
              type="text"
              value={newName}
              onChange={handleNameChange}
              className="text-black font-semibold text-lg"
            />
          ) : (
            <h3 className="text-black">{name}</h3>
          )}
          <h5 className="text-cinza">{description}</h5>
        </div>
      </div>

      <button className="p-2" onClick={toggleMenu}>
        <IoIosMore />
      </button>

      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute right-4 top-12 bg-white shadow-lg rounded-lg w-40 z-10"
        >
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={handleDeleteClick}
          >
            Excluir conversa
          </button>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={handleRenameClick}
          >
            Renomear conversa
          </button>
        </div>
      )}

      {isRenaming && (
        <button
          onClick={handleSaveName}
          className="ml-2 text-blue-500"
        >
          Salvar
        </button>
      )}
    </div>
  );
}
