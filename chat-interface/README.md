# Interface de Chat - Teste Técnico para Estágio de Desenvolvimento Front-End

Este repositório contém o projeto desenvolvido como parte do processo seletivo para o programa de estágio na **Tech4humans**. O desafio proposto consiste na criação de uma interface de chat interativa, utilizando tecnologias modernas e boas práticas de desenvolvimento.

## 🚀 Funcionalidades Implementadas

1. **Interface de Chat**:
   - Permite iniciar e manter conversas entre o usuário e um assistente virtual. (Botão "+ Nova Conversa")
   - Respostas do assistente são baseadas em números digitados de 1 a 6.

2. **Histórico de Conversas**:
   - Armazenamento local do histórico, garantindo persistência após o refresh da página.
   - Opção de renomear as conversas para facilitar a identificação. (Três pontos -> "Renomear Conversa")

3. **Gestão de Conversas**:
   - Exclusão de conversas existentes. (Três pontos -> "Excluir Conversa")

4. **Tecnologias Utilizadas**:
   - **Next.js**: Framework React para desenvolvimento escalável.
   - **TypeScript**: Para código mais seguro e gerenciável.
   - **Tailwind CSS** e **shadcn/ui**: Para estilização moderna e componentes reutilizáveis.
---

## 🛠️ Instalação e Execução

### Pré-requisitos
Ter instalado:
- **Node.js**
- **npm** ou **yarn**

### Passos para Configuração
1. **Clone o repositório**:
   ```bash
   git clone https://github.com/matheusouzag/chat-interface.git
   cd chat-interface

2. **Instale as dependências:**:
   ```bash
   npm install

3. **Inicie o localhost (Abra http://localhost:3000 no navegador)**:
   ```bash
   npm run dev

## 🧱 Arquitetura do Projeto

O projeto foi estruturado garantindo escalabilidade e organização, seguindo a seguinte estrutura:

1. **public/images**: Para organização de imagens
2. **src/app**: Contendo a estrutura principal do chat
3. **src/components**: Com os seguintes Componentes utilizados:
   - Contacts: Para os Contatos
   - Control: Para botões utilizados
   - Header/Footer: Feitos utilizando a biblioteca shadcn/ui
   - Message: Para os balões de texto
4. **tailwind.config.ts**: Arquivo de configuração do tailwind, utilizado principalmente para criar novas cores e ter a troca dinamicamente


