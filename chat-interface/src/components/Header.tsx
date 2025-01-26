import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Header() {
  return (
      <header className="w-full bg-headercor shadow">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex py-2">
            <h1 className="text-xl font-bold hidden">Tech4Humans</h1>
            <img src="https://cdn.prod.website-files.com/65155fabb679475d43638cde/651ea5768a91286dcad5a19b_Logo.png" alt="" />
            <img src="https://cdn.prod.website-files.com/65155fabb679475d43638cde/651c83388d53934a1777c24c_Vectors-Wrapper.svg" alt="" />
          </div>
          
          <nav className="flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white">Saiba Mais</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem><a href="https://www.tech4h.com.br/" target="_blank">Tech4Humans</a></DropdownMenuItem>
                <DropdownMenuItem><a href="https://api.whatsapp.com/send?phone=5553981594880&text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20as%20solu%C3%A7%C3%B5es%20da%20Tech4Humans.">Fale com um especialista.</a></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </header>
  );
}

export { Header };
