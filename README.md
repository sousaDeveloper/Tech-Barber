# Tech Barber

Este projeto foi desenvolvido para barbearias que consiste em uma plataforma completa para gerenciar serviços de barbearia. Os clientes podem visualizar várias barbearias, conferir os serviços oferecidos por cada uma, realizar agendamentos, gerenciar esses agendamentos e fazer login com sua conta Google.

## Funcionalidades
- Listagem de diversas barbearias
- Visualização dos serviços oferecidos por cada barbearia
- Agendamento de serviços
- Gerenciamento de agendamentos
- Autenticação via Google

## Tecnologias Utilizadas
- React
- TypeScript
- Next.js
- Tailwind CSS
- Prisma
- Zod
- react-hook-form
- Next-auth
- Git
- shadcn/ui

## Estrutura do Projeto

- Clone o repositório:

```
git clone https://github.com/sousaDeveloper/Tech-Barber.git
```

- Instale as dependências:

```
npm install
```

- Configure as variáveis de ambiente:

  Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:

```
DATABASE_URL="sua-string-de-conexao-do-prisma"
NEXTAUTH_URL="http://localhost:3000"
GOOGLE_CLIENT_ID="seu-client-id-do-google"
GOOGLE_CLIENT_SECRET="seu-client-secret-do-google"
```

## Crie sua migration do Prisma:
```
npx prisma migrate dev
```
## E por fim, rode a aplicacão:
```
npm run dev
```

## Contribuição
Para maiores informações, entre em contato com devlpsousa@gmail.com.
