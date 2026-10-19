# Construindo Portfolio com IA

Portfólio pessoal de Lívia Pisanello, desenvolvedora full stack e estudante de Engenharia de Software. A experiência combina identidade arcade com leitura clara, projetos verificáveis e uma apresentação acessível em telas grandes e pequenas.

## Resultado e execução

- Página estática: `index.html`, com estilos em `assets/css/styles.css` e interações em `assets/js/main.js`.
- O currículo em PDF está em `assets/docs/curriculo-livia-laur-pisanello.pdf` e pode ser baixado pelo botão no destaque inicial.
- Para visualizar localmente, na raiz do projeto execute `python3 -m http.server 8000` e acesse `http://localhost:8000`.
- O Tailwind Play CDN, Lucide e Google Fonts são carregados externamente; recursos visuais e interações podem ficar limitados sem conexão com a internet. Para publicação em produção, compile o Tailwind em CSS estático.
- Os links de projeto abrem os repositórios GitHub; os dados de contato incluem LinkedIn, e-mail e telefone para facilitar contato profissional.

## Prompt Inicial

Preciso que faça um projeto em html com tailwind. Ele consiste em um portfólio dev interessante, claro e que chame a atenção para as skills.
Sobre mim, sou desenvolvedora fullstack e estudante de engenharia de software.

## Sobre mim

Gosto muito de tecnologia, comunicação e aprender coisas novas.
Tech Stack

- TypeScript / JavaScript 90%
- Node.js / NestJS 85%
- Next.js / React 85%
- Python 80%
- SQL / Prisma ORM 80%
- MongoDB 75%
- Java 65%

As barras exibem uma autoavaliação aproximada de familiaridade, não uma certificação ou medida objetiva de competência.

---

## Decisões de identidade visual

Paleta de cores:

| Papel                | Hex       | Uso no site                                             |
| -------------------- | --------- | ------------------------------------------------------- |
| Fundo (`ink`)        | `#0A0614` | Fundo da página                                         |
| Superfície (`panel`) | `#130B26` | Cards, caixas de diálogo, painéis                       |
| Texto (`fg`)         | `#EDE9FE` | Texto principal e títulos                               |
| Violeta 400          | `#A78BFA` | Textos e ícones secundários                             |
| Violeta 500          | `#8B5CF6` | Bordas, destaques e estados de foco                     |
| Violeta 700          | `#5B21B6` | Divisórias e sombras dos cards                          |
| Ciano                | `#22E5FF` | Interação, links, HUD, hover                            |
| Verde neon           | `#39FF14` | Progresso (XP), CTA principal, conquistas desbloqueadas |

Tipografia:

- Space Grotesk: títulos e chamadas, para dar presença sem comprometer a leitura.
- IBM Plex Mono: corpo e detalhes técnicos (pesos 400, 500 e 700).
- Press Start 2P: permanece disponível apenas em pequenos detalhes de HUD que reforçam a referência arcade.

Tom e personalidade:

- Tecnológico, curioso e acolhedor; o neon e os detalhes de jogo aparecem como acentos, sem competir com os projetos.

Estrutura da página:

- Hero
- Sobre mim
- Stack tecnológica
- Como eu trabalho (cartões interativos)
- Projetos
- Contato

---

## Referências

![Referência visual de uma seção de habilidades com barras e porcentagens](references/image-skills.png)
**Skills —** a composição em grupos e barras torna várias tecnologias fáceis de comparar. Serviu de referência para a seção Tech Stack; os níveis exibidos seguem os valores informados pela autora e são identificados como autoavaliação.

![Referência visual de um portfólio com cards de projetos](references/image-projects.png)
**Projetos —** os cards organizam imagem, título, descrição e acesso ao código. Inspirou os três destaques com ilustrações próprias e links diretos para os repositórios.

![Referência visual de um portfolio escuro com detalhes ciano](references/image-theme.png)
**Tema —** o fundo escuro, a grade técnica e o contraste ciano criam uma atmosfera de desenvolvimento sem depender de uma foto genérica. Inspirou o fundo, os detalhes de grade e a combinação de violeta e ciano.

![Referência visual de uma interface retrô com ícones de pastas](references/image-game.png)
**Interface lúdica —** ícones de pastas, janelas e elementos de desktop retrô sugerem personalidade. A ideia foi traduzida em pequenos detalhes arcade, barras animadas e uma interação secreta, mantendo uma navegação convencional.

![Referência visual de uma seção de contato tipográfica](references/image-contact.png)
**Contato —** a tipografia em grande escala e a chamada concentrada em uma seção própria dão peso ao encerramento da página. A hierarquia foi reaproveitada, mas adaptada à paleta violeta/ciano e aos canais profissionais disponíveis: LinkedIn, e-mail e telefone.

## Reflexão sobre a identidade visual

A base escura e os tons de violeta mantêm o clima digital das referências; ciano destaca navegação e informação técnica, enquanto o verde neon fica reservado para progresso e ações principais. A tipografia de títulos foi refinada para Space Grotesk, mais confortável em frases longas; a fonte pixel permanece em elementos curtos de interface. A página conserva a linguagem de jogo em detalhes e interações, sem transformar experiência ou níveis de habilidade em métricas objetivas.

O que ficou como imaginei: uma identidade dark com personalidade, habilidades fáceis de percorrer e projetos reais em destaque. O que evoluiu: a estética arcade foi reduzida a acentos, para que a leitura e o conteúdo profissional tenham prioridade. Ainda gostaria de incluir capturas reais dos projetos e um deploy público do portfólio quando esses materiais e URLs estiverem disponíveis; por enquanto, as capas são ilustrações e o código aponta para os repositórios.

### Registro da correção

| Campo              | Registro                                                                                                                                                                                                                                                                                                         |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Problema           | O site ainda continha percentuais demonstrativos, títulos e descrições genéricos, links para páginas de exemplo e um contato por e-mail que não havia sido informado. As barras também não representavam a stack completa.                                                                                       |
| Prompt de correção | Usar os níveis fornecidos e apresentar os três repositórios indicados; melhorar o portfólio e sua documentação.                                                                                                                                                                                                  |
| Resultado          | Os onze itens da stack agora exibem os níveis informados; os cards apresentam o propósito e as tecnologias descritas nos READMEs dos projetos; links de demonstração e dados de contato fictícios foram removidos. A hierarquia visual foi refinada para equilibrar personalidade arcade e leitura profissional. |
| Aprendizado        | Validar o conteúdo antes de priorizar efeitos visuais. Links reais, descrições específicas e níveis transparentes dão mais credibilidade do que placeholders ou indicadores decorativos sem contexto.                                                                                                            |

## Verificação manual

- Navegação por âncoras e menu mobile.
- Links dos três cards para os respectivos repositórios GitHub.
- Barras de tecnologia e respeito à preferência por movimento reduzido.
- Interações dos cartões e do controle de efeitos CRT.
- Layout em telas pequenas e grandes.

O portfólio está pronto para contato profissional direto via LinkedIn, e-mail e telefone. O endereço de deploy público ainda não foi informado, mas o site e os projetos já apontam para recursos públicos confirmados.

---

## Prompts

### #1

"Quero criar um portfólio pessoal como desenvolvedora Full Stack e estudante de Engenharia de Software, usando HTML e Tailwind CSS.

Quero que o site tenha uma identidade visual bem marcante, moderna e criativa, fugindo um pouco daquele estilo de portfólio genérico. Gosto de tecnologia, comunicação e de estar sempre aprendendo coisas novas, então queria que isso também aparecesse na personalidade do site.

A ideia é seguir uma estética dark, com tons de roxo e lilás, usando principalmente as cores #0D0B14, #C4B5FD, #A78BFA, #7C3AED e #F5F3FF. Para a tipografia, quero usar Cantarell.

Quero uma vibe meio futurista, com referências a interfaces de jogos, elementos de programação e detalhes que deixem a experiência mais interessante, mas sem perder o profissionalismo. Algo criativo, intenso e tecnológico, com animações sutis, efeitos de hover e uma boa combinação entre espaços vazios, tipografia e elementos visuais.

A página deve ter uma seção inicial que apresente quem sou, com uma frase de impacto e links para explorar meus projetos ou entrar em contato. Depois, quero uma parte sobre mim, uma seção de tecnologias e habilidades, uma área para mostrar meus principais projetos e, por fim, uma seção de contato.

Na parte de skills, quero manter a ideia da referência que mostra as tecnologias com porcentagens de conhecimento. Minha stack inclui NestJS, Next.js, Python, MongoDB, TypeScript, JavaScript, Node.js, Java, SQL e Prisma.

Na seção de projetos, quero destacar três projetos com imagens, títulos e links para o GitHub, seguindo a ideia da referência que enviei. Como ainda vou definir alguns conteúdos, pode deixar espaços fáceis de editar para adicionar as informações depois.

Também quero manter a proposta visual das referências de tema, gamificação e contato que estão na pasta references/. Use essas imagens como inspiração para criar algo com a mesma atmosfera, adaptando tudo à minha paleta de cores e à identidade do site.

Quero que o resultado seja bonito, mas também funcional e responsivo, funcionando bem tanto no computador quanto no celular. A navegação deve ser simples, e o site precisa ter uma boa experiência de uso.

No geral, quero que meu portfólio transmita a imagem de uma desenvolvedora criativa, que gosta de tecnologia e se preocupa com os detalhes. Quero algo com personalidade, que chame a atenção de quem visita e destaque minhas habilidades sem ficar exagerado ou visualmente poluído.

Pode explorar ideias de layout e composição, mantendo essa direção visual como base. O mais importante é que o resultado tenha identidade própria e pareça realmente pensado para mim, em vez de ser apenas mais um template de portfólio."

### #2

Problema

- O layout gerado ficou genérico e idêntico aos portfólios padrões criados por IA (Dark Mode simples, blocos estáticos). Faltaram os elementos gamificados, interatividade real (como HUD de jogo, barras de XP animadas, conquistas/achievements desbloqueáveis) e animações dinâmicas (efeito pixel art, retro-gaming ou micro-interações hover).

Prompt de correção

- "Ajuste o código HTML/Tailwind para afastar o design do padrão genérico de IA e criar um portfólio verdadeiramente gamificado e interativo. Adicione: 1) Um HUD / card estilo RPG de personagem com Status (HP, MP, Nível de Dev); 2) Barras de skill que pareçam barras de XP com efeito de carregamento em CSS; 3) Seção de conquistas (Achievements) desbloqueáveis ao passar o mouse ou clicar; 4) Animações suaves em Tailwind/CSS (efeito scanline de CRT ou iluminação neon retro); 5) Troque o esquema de cores para um estilo retrô-arcade ou cyber-RPG com paleta em tons de violeta, ciano e verde neon com fontes em estilo pixel/monospace."

Resultado

- Resolveu totalmente. A estrutura passou de uma página corporativa simples para uma experiência imersiva de RPG/Arcade, destacando a criatividade e tornando o portfólio memorável.

Aprendizado

- No prompt inicial, não basta citar "estética gamificada" de forma genérica. É necessário especificar quais mecânicas de jogo devem ser implementadas no front-end (ex.: status de RPG, badges de conquistas, animações CSS de barra de XP, paleta de cores retrô/arcade e fontes pixel/mono).

### #3

Problema

- O layout apresentava blocos de texto puros e placeholders vazios (ex.: [ Imagem ]), sem ícones representativos para as tecnologias (ex.: React, NestJS, Python) e sem nenhum elemento gráfico ou avatar personalizado que desse personalidade ao portfólio.

Prompt de correção

- "Adicione ícones correspondentes ao lado de cada tecnologia na seção de Tech Stack; Adicione uma moldura / card estilizado com bordas arredondadas e efeito de brilho para a foto de perfil/avatar no Hero;"

Resultado

- O portfólio deixou de parecer um modelo genérico e passou a ter uma identidade rica, visualmente rápida de escanear e com cara de produto finalizado.

Aprendizado

- Para que uma interface web não pareça um rascunho, o prompt inicial deve exigir a integração explícita de uma biblioteca de ícones SVG e a inclusão de componentes visuais estilizados (avatares, tags e ícones funcionais em botões/links).
