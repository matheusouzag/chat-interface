import { Separator } from "@/components/ui/separator";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
      <footer className="w-full bg-footercor p-10">
        <div className="container mx-auto text-center">
          <div className="flex justify-center gap-4 mb-4">
            <a href="https://www.facebook.com/profile.php?id=61563823186859" target="_blank" className="text-white"><FaFacebook size={24} /></a>
            <a href="https://www.instagram.com/tech4humansbr/" target="_blank" className="text-white"><FaInstagram size={24} /></a>
            <a href="https://www.linkedin.com/company/tech4humans-hyperautomation/posts/?feedView=all" target="_blank" className="text-white dark:text-gray-400"><FaLinkedin size={24} /></a>
          </div>
          <Separator />
          <p className="text-sm text-white mt-4">© {new Date().getFullYear()} Criado por Matheus Souza.</p>
        </div>
      </footer>
  );
}

export { Footer };
