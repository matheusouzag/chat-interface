import Head from "next/head";

import Contacts from "../components/Contacts";
import { Button } from "../components/Control";

import { GoPaperclip } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { VscSmiley } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import { HiPaperAirplane } from "react-icons/hi";
import { LeftMessage, RightMessage } from "@/components/Message";


export default function Chat () {
    return (<>
        <div className="bg-blue-500">
          <Head>
            <link rel="stylesheet" href="" />
          </Head>
          <div className="max-h-screen px-20 grid place-items-center bg-no-repeat bg-blue-300 bg-[-150vh_-146vh] bg-[length:150rem]">
            <div className="grid grid-cols-[25rem_auto] grid-rows-[calc(100vh-7rem)] gap-8 py-4">
              <div className="flex flex-col self-start items-center justify-start gap-8 h-full">
                  <div className="w-full h-12 bg-white rounded-[50vh] flex items-center justify-start overflow-hidden p-[1px]">
                    <IoSearchSharp className="text-2xl ml-5 text-[#494949] cursor-pointer" />
                    <input className="w-full h-12 pl-4 bg-none border-none text-[#494949] outline-none font-semibold text-[1.1rem]" type="text" />
                  </div>
                  <div className="w-full h-[calc(100vh-2rem)] flex bg-white rounded-[22px] flex-col shadow-[0_0_10px_rgba(0,0,0,0.4)] py-2">
                      <Contacts name={"Suporte Técnico"} description={"Tech4humans"}  img_url={`/images/foto_perfil.png`}></Contacts>
                      <Contacts name={"Suporte Técnico2"} description={"Tech4humans"}  img_url={`/images/foto_perfil.png`}></Contacts>
                      <Contacts name={"Suporte Técnico3"} description={"Tech4humans"}  img_url={`/images/foto_perfil.png`}></Contacts>
                  </div>
              </div>
              <div className="w-[60vw] max-h-screen flex flex-col gap-6">
                 <div className="flex items-center justify-end flex-row gap-[1rem]">
                    <Button name={"Nova Conversa"}><FaPlus className="font-[2rem]"/></Button>
                    <Button name={"Descer"}><IoIosArrowDown className="font-[2rem]" /></Button>
                 </div>
                 <div className="grid grid-rows-[auto_5rem] w-full h-full bg-white rounded-[22px] overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.4)]">
                    <div className="flex flex-col bg-white p-6 gap-4 overflow-y-scroll">
                      <LeftMessage>Alou</LeftMessage>
                      <LeftMessage>Teste</LeftMessage>
                      <LeftMessage>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quia, facilis placeat maiores commodi eius quaerat iusto accusamus ullam consequuntur asperiores dolorem vero? Nulla asperiores cum maiores et quas earum, voluptatem assumenda eveniet esse dicta, ipsum voluptas dolorum commodi, aspernatur harum suscipit laboriosam libero placeat quasi neque provident ratione. Laudantium.</LeftMessage>
                  
                      <RightMessage>Tudo bem</RightMessage>
                      <RightMessage>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum quaerat ea quae ducimus delectus eos a obcaecati mollitia similique odio dolor id, quo vitae recusandae omnis adipisci cupiditate. Illo dolorum magnam repellendus eveniet repudiandae esse neque modi at. Provident, omnis?</RightMessage>
                    </div>
                    <div className="grid grid-cols-[auto_3rem] p-4 gap-4 h-fit">
                    
                    <div className="grid grid-cols-[2rem_auto_2rem] items-center text-[#494949] px-4 w-full h-12 rounded-[50vh] bg-[#E6E9ED] gap-4">
                    <VscSmiley className="text-[1.5rem] cursor-pointer" />
                      <input className="h-full bg-transparent border-none text-[#494949] text-[1.2rem] outline-none" type="text" />
                      <GoPaperclip className="text-[1.5rem] cursor-pointer" />
                      </div>
                      
                      <button className="w-12 h-12 rounded-[50vh] border-none text-[1.2rem] rotate-[45deg] bg-gradient-to-tl from-[#0c8f00] to-[#11ca00] hover:from-[#0b8b00] hover:to-[#0eae00] text-white cursor-pointer flex justify-center  items-center"><HiPaperAirplane />
                      </button>
                      
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
        </>);
}