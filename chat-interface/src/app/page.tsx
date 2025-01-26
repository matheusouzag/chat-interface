"use client"

import { useState, useEffect } from "react";
import Contacts from "../components/Contacts";
import { Button } from "../components/Control";

import { GoPaperclip } from "react-icons/go";
import { IoSearchSharp } from "react-icons/io5";
import { VscSmiley } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import { HiPaperAirplane } from "react-icons/hi";
import { LeftMessage, RightMessage } from "@/components/Message";
import { Header } from "../components/Header";
import Footer from "../components/Footer";

export default function Chat() {
  const [contacts, setContacts] = useState([
    {
      name: "Assistente Virtual 1",
      description: "Tech4Humans",
      img_url: "/images/foto_perfil.png",
      messages: [
        {
          text: "Bem-vindo! Qual é a sua dúvida técnica? (1-6):<br />1. Intelligence Doc Processing<br />2. WorkForce<br />3. WorkFlow<br />4. WebApp<br />5. IAG<br />6. RPA",
          sender: "left",
        },
      ],
    },
  ]);

  const [activeChat, setActiveChat] = useState(0);
  const [inputMessage, setInputMessage] = useState("");

  const topics = [
    "O Intelligence Doc Processing utiliza inteligência artificial e aprendizado de máquina para automatizar a captura, extração e processamento de informações contidas em documentos",
    "O WorkForce é uma plataforma para time de Atendimento e Backoffice operar diferentes processos e gerir solicitações de clientes.",
    "O WorkFlow é um Hub de integrações Low-Code, comunicação e evolução do processo, capaz de gerir a solicitação por um período longo evoluindo entre áreas.",
    "O WebApp é uma aplicação Cloud-based Multi Experiências Web e mobile com IA para jornada ser totalmente única por usuário com base nos dados coletados. A solução combina tendência de Mini Programas usados em países desenvolvidos.",
    "O IAG é um conjunto de APIs de Inteligência Artificial adaptados para seguradoras e financeiras facilitando atendimentos com base em eventos anteriores (em desenvolvimento).",
    "O RPA é utilizado robôs de software para automatizar tarefas repetitivas e manuais normalmente realizadas por seres humanos."
  ];

  useEffect(() => {
    const storedContacts = localStorage.getItem("contacts");
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem("contacts", JSON.stringify(contacts)); 
    }
  }, [contacts]);

  

  const addNewContact = () => {
    const newContact = {
      name: `Assistente Virtual ${contacts.length + 1}`,
      description: "Tech4Humans",
      img_url: "/images/foto_perfil.png",
      messages: [
        {
          text: "Olá! Tudo bem? Aqui é o Assistente Virtual da Tech4Humans. Selecione uma das opções abaixo para esclarecer suas dúvidas sobre a Plataforma Hyperautomation. (1-6) <br><br />1. Intelligence Doc Processing<br />2. WorkForce<br />3. WorkFlow<br />4. WebApp<br />5. IAG<br />6. RPA",
          sender: "left",
        },
      ],
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    const newContacts = [...contacts];
    const userMessage = { text: inputMessage, sender: "right" };
    newContacts[activeChat].messages.push(userMessage);

    const userChoice = parseInt(inputMessage, 10);

    if (userChoice >= 1 && userChoice <= 6) {
      const supportResponse = {
        text: `Você escolheu a opção ${userChoice}:<br />${topics[userChoice - 1]}<br />Gostaria de saber mais sobre outro tópico? (1-6)`,
        sender: "left",
      };
      newContacts[activeChat].messages.push(supportResponse);
    } else {
      const errorMessage = {
        text: "Por favor, escolha um número válido entre 1 e 6.",
        sender: "left",
      };
      newContacts[activeChat].messages.push(errorMessage);
    }

    setContacts(newContacts);
    setInputMessage("");
  };

  const deleteContact = (index: number) => {
    const newContacts = contacts.filter((_, i) => i !== index);

    const newActiveChat = index === activeChat
      ? Math.max(0, index - 1) 
      : activeChat > index
      ? activeChat - 1 
      : activeChat;
  
    setContacts(newContacts);
    setActiveChat(newActiveChat);
  };

  const renameContact = (index: number, newName: string) => {
    const updatedContacts = [...contacts];
    updatedContacts[index].name = newName;
    setContacts(updatedContacts);  
    localStorage.setItem("contacts", JSON.stringify(updatedContacts));  
  };

  const [searchTerm, setSearchTerm] = useState("");

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  

  return (
    <>
      <div className="bg-gradient-fundo">
      <Header></Header>
        <div className="max-h-screen px-20 grid place-items-center bg-no-repeat bg-[url('/images/linhas-bg.png')] py-10">
          <div className="grid grid-cols-[25rem_auto] grid-rows-[calc(100vh-7rem)] gap-8 py-4">
            <div className="flex flex-col self-start items-center justify-start gap-8 h-full">
            <div className="w-full h-12 bg-white rounded-[50vh] flex items-center justify-start overflow-hidden p-[1px]">
              <IoSearchSharp className="text-2xl ml-5 text-cinza cursor-pointer" />
              <input
                className="w-full h-12 pl-4 bg-none border-none text-cinza outline-none font-semibold text-[1.1rem]"
                type="text"
                placeholder="Pesquisar contatos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
              <div className="w-full h-[calc(100vh-2rem)] flex bg-white rounded-[22px] flex-col shadow-[0_0_10px_rgba(0,0,0,0.4)] pb-1 overflow-y-auto">
                {filteredContacts.map((contact, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveChat(index)}
                    className={`cursor-pointer ${activeChat === index ? "bg-blue-200" : ""}`}
                  >
                    <Contacts
                      name={contact.name}
                      description={contact.description}
                      img_url={contact.img_url}
                      handleDelete={() => deleteContact(index)}
                      handleRename={(newName: string) => renameContact(index, newName)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[60vw] max-h-screen flex flex-col gap-6">
              <div className="flex items-center justify-end flex-row gap-[1rem]">
                <Button name={"Nova Conversa"} onClick={addNewContact}>
                  <FaPlus className="font-[2rem]" />
                </Button>
              </div>
              <div className="grid grid-rows-[auto_5rem] w-full h-full bg-white rounded-[22px] overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.4)]">
                <div className="flex flex-col bg-white p-6 gap-4 overflow-y-scroll">
                  {contacts[activeChat]?.messages.map((msg, i) =>
                    msg.sender === "left" ? (
                      <LeftMessage key={i} dangerouslySetInnerHTML={{ __html: msg.text }}>{msg.text}</LeftMessage>
                    ) : (
                      <RightMessage key={i} dangerouslySetInnerHTML={{ __html: msg.text }}>{msg.text}</RightMessage>
                    )
                  )}
                </div>
                <div className="grid grid-cols-[auto_3rem] p-4 gap-4 h-fit">
                  <div className="grid grid-cols-[2rem_auto_2rem] items-center text-cinza px-4 w-full h-12 rounded-[50vh] bg-cinzaclaro gap-4">
                    <VscSmiley className="text-[1.5rem] cursor-pointer" />
                    <input
                      className="h-full bg-transparent border-none text-cinza text-[1.2rem] outline-none"
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          sendMessage(); 
                        }
                      }}
                    />
                    <GoPaperclip className="text-[1.5rem] cursor-pointer" />
                  </div>
                  <button
                    onClick={sendMessage}
                    className="w-12 h-12 rounded-[50vh] border-none text-[1.2rem] rotate-[45deg] bg-azultech text-white cursor-pointer flex justify-center  items-center"
                  >
                    <HiPaperAirplane />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
