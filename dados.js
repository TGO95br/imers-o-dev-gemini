let dados = [
    {
        titulo: "PlayStation 1 (PS1) - 1994",
        descricao: "A Revolução do CD-ROM: O PlayStation foi o primeiro console a utilizar o CD-ROM como mídia de armazenamento, permitindo jogos com gráficos 3D mais complexos e trilhas sonoras de alta qualidade. Jogos icônicos: Títulos como Final Fantasy VII, Metal Gear Solid, Gran Turismo e Resident Evil definiram uma geração de jogadores. Sucesso comercial: O PlayStation vendeu mais de 100 milhões de unidades em todo o mundo, superando as expectativas e estabelecendo a Sony como uma força dominante no mercado de videogames.",
        link: "",
        tags: "playstation "
    },
    {
        titulo: "PlayStation 2 (PS2) - 2000",
        descricao: "O console mais vendido de todos os tempos: O PS2 consolidou o domínio da Sony, vendendo mais de 155 milhões de unidades. Retrocompatibilidade: O PS2 era retrocompatível com jogos de PlayStation, garantindo uma vasta biblioteca de títulos para os jogadores. Versatilidade: Além de jogos, o PS2 podia rodar DVDs de filmes e CDs de música. Jogos memoráveis: Grand Theft Auto III, Metal Gear Solid 2: Sons of Liberty, God of War e Kingdom Hearts são apenas alguns dos títulos que marcaram a era do PS2.",
        link: "",
        tags: ""
    },
    {
        titulo: "PlayStation 3 (PS3) - 2006",
        descricao: "Blu-ray: O PS3 foi pioneiro no uso de discos Blu-ray, oferecendo maior capacidade de armazenamento e qualidade de vídeo. Arquitetura complexa: O console utilizava uma arquitetura complexa, o que dificultou o desenvolvimento de jogos nos primeiros anos.PlayStation Network: A Sony lançou a PlayStation Network, uma plataforma online que permitia aos jogadores jogar online, comprar jogos e baixar demos. Jogos exclusivos: Títulos como The Last of Us, Uncharted e Demon's Souls se tornaram exclusivos do PlayStation.",
        link: "",
        tags: ""
    },
    {
        titulo: "PlayStation 4 (PS4) - 2013",
        descricao: "Foco no jogador: A Sony se concentrou em oferecer uma experiência de jogo mais social e conectada, com recursos como o Share Play e o Remote Play. Sucesso comercial: O PS4 rapidamente se tornou o console mais vendido da oitava geração, superando o Xbox One. Jogos de alta qualidade: Títulos como Bloodborne, God of War (2018) e The Last of Us Part II receberam aclamação da crítica e do público.PlayStation VR: A Sony lançou o PlayStation VR, um headset de realidade virtual que expandiu as possibilidades de jogos para o PS4.",
        link: "",
        tags: ""
    },
    {
        titulo: "PlayStation 5 (PS5) - 2020",
        descricao: "Hardware poderoso: O PS5 utiliza um SSD de alta velocidade, proporcionando tempos de carregamento quase instantâneos e jogos com gráficos mais realistas. Retrocompatibilidade: O PS5 é retrocompatível com a maioria dos jogos de PS4. Novas tecnologias: O console suporta ray tracing, proporcionando efeitos de iluminação mais realistas, e áudio 3D imersivo. Jogos exclusivos: Títulos como Demon's Souls, Ratchet & Clank: Rift Apart e Horizon Forbidden West demonstram o poder do hardware do PS5.",
        link: "",
        tags: ""
    },
    {
        titulo: "Xbox (2001)",
        descricao: "A Entrada da Microsoft: O primeiro console da Microsoft foi uma aposta ousada, com um hardware poderoso e uma biblioteca de jogos que incluía títulos exclusivos como Halo: Combat Evolved. Xbox Live: O Xbox foi pioneiro em jogos online com o Xbox Live, permitindo que os jogadores competissem e cooperassem com amigos ao redor do mundo. Sucesso moderado: Embora tenha sido bem recebido pela crítica, o Xbox não conseguiu superar o PlayStation 2 em vendas.",
        link: "",
        tags: ""
    },
    {
        titulo: "Xbox 360 (2005)",
        descricao: "Uma Nova Geração: O Xbox 360 trouxe gráficos de alta definição, um novo design e uma interface mais intuitiva. Xbox Live Gold: O serviço online do Xbox 360 foi aprimorado, oferecendo jogos multiplayer, downloads de conteúdo e acesso a filmes e programas de TV. Jogos icônicos: Títulos como Halo 3, Gears of War e Mass Effect consolidaram a posição do Xbox 360 como um dos principais consoles da geração. Kinect: O Kinect, um acessório de controle por movimento, revolucionou a forma como as pessoas interagiam com os videogames.",
        link: "",
        tags: ""
    },
    {
        titulo: "Xbox One (2013)",
        descricao: "Uma Abordagem Integrada: O Xbox One foi lançado com foco em uma experiência de entretenimento completa, integrando jogos, filmes, TV e aplicativos. Kinect 2: O Kinect foi aprimorado, oferecendo maior precisão e novas funcionalidades. Backward Compatibility: O Xbox One era retrocompatível com muitos jogos do Xbox 360. Xbox Game Pass: A Microsoft introduziu o Xbox Game Pass, um serviço de assinatura que oferece acesso a uma vasta biblioteca de jogos.",
        link: "",
        tags: ""
    },
    {
        titulo: "Xbox Series X/S (2020)",
        descricao: "Nova Geração: O Xbox Series X é o console mais poderoso da Microsoft até o momento, oferecendo gráficos 4K, ray tracing e tempos de carregamento ultrarrápidos. Xbox Series S: Uma versão digital e mais acessível do Xbox Series X, focada em jogos em 1440p. Xbox Game Pass Ultimate: O serviço de assinatura foi aprimorado, incluindo acesso ao Xbox Cloud Gaming e jogos de PC. Retrocompatibilidade: O Xbox Series X/S é retrocompatível com a maioria dos jogos de Xbox, Xbox 360 e Xbox One.",
        link: "",
        tags: ""
    },
    {
        titulo: "Nintendo Entertainment System (NES)",
        descricao: "Lançado em 1983, o NES revitalizou a indústria de videogames com títulos como Super Mario Bros., The Legend of Zelda e Metroid, estabelecendo franquias que perduram até hoje. O NES introduziu o mundo a um novo nível de jogabilidade e gráficos para a época.",
        link: "",
        tags: ""
    },
    {
        titulo: "Super Nintendo Entertainment System (SNES)",
        descricao: "Sucessor do NES, o SNES elevou os gráficos e a jogabilidade a um novo patamar. Jogos como Super Mario World, Super Metroid e The Legend of Zelda: A Link to the Past se tornaram clássicos instantâneos.",
        link: "",
        tags: ""
    },
    {
        titulo: "Nintendo 64",
        descricao: "O Nintendo 64 foi pioneiro em jogos 3D com títulos como Super Mario 64 e The Legend of Zelda: Ocarina of Time. No entanto, a falta de um drive de CD-ROM e a concorrência com o PlayStation limitaram seu sucesso comercial.",
        link: "",
        tags: ""
    },
    {
        titulo: "GameCube",
        descricao: "O GameCube, lançado em 2001, trouxe jogos inovadores como The Legend of Zelda: The Wind Waker e Super Smash Bros. Melee. Apesar de uma biblioteca de jogos de alta qualidade, o GameCube não conseguiu superar o PlayStation 2 e o Xbox.",
        link: "",
        tags: ""
    },
    {
        titulo: "Nintendo Wii",
        descricao: "Em 2006, a Nintendo revolucionou a indústria com o Wii, um console que se concentrava em jogos casuais e controles de movimento. Títulos como Wii Sports e Mario Kart Wii atraíram um público mais amplo e fizeram do Wii um sucesso comercial.",
        link: "",
        tags: ""
    },
    {
        titulo: "Nintendo DS",
        descricao: "O Nintendo DS foi um dos consoles portáteis mais bem-sucedidos de todos os tempos, com jogos como New Super Mario Bros. e Pokémon Diamond e Pearl.",
        link: "",
        tags: ""
    },
    {
        titulo: "Wii U",
        descricao: "O Wii U, lançado em 2012, foi um console com um conceito inovador, mas que não conseguiu conquistar o público.",
        link: "",
        tags: ""
    },
    {
        titulo: "Nintendo Switch",
        descricao: "Em 2017, a Nintendo lançou o Switch, um híbrido entre console de mesa e portátil. O Switch foi um sucesso instantâneo, com jogos como The Legend of Zelda: Breath of the Wild, Super Mario Odyssey e Animal Crossing: New Horizons.",
        link: "",
        tags: ""
    },
    {
        titulo: "SG-1000 (1983)",
        descricao: "O primeiro console da Sega, lançado para competir com o Famicom da Nintendo. Apesar de ter hardware superior, não conseguiu alcançar o mesmo sucesso comercial.",
        link: "",
        tags: ""
    },
    {
        titulo: "Master System (1985)",
        descricao: "Sucessor do SG-1000, o Master System foi um grande sucesso em algumas regiões, especialmente na Europa. Jogos como Alex Kidd e Sonic the Hedgehog se tornaram ícones da plataforma.",
        link: "",
        tags: ""
    },
    {
        titulo: "Mega Drive/Genesis (1988)",
        descricao: "O console que colocou a Sega no mapa. Com jogos como Sonic the Hedgehog, Streets of Rage e Golden Axe, o Mega Drive/Genesis se tornou um dos principais concorrentes do Super Nintendo.",
        link: "",
        tags: ""
    },
    {
        titulo: "Sega CD (1991)",
        descricao: "Um acessório para o Mega Drive que permitia a reprodução de jogos em CD-ROM, oferecendo gráficos e som de maior qualidade.",
        link: "",
        tags: ""
    },
    {
        titulo: "32X (1994)",
        descricao: "Outra tentativa de aprimorar o Mega Drive, o 32X foi um fracasso comercial devido à falta de jogos e à confusão causada pelo lançamento iminente do Sega Saturn.",
        link: "",
        tags: ""
    },
    {
        titulo: "Sega Saturn (1994)",
        descricao: "Um console com arquitetura complexa e jogos inovadores, mas que sofreu com problemas de desenvolvimento e um preço elevado.",
        link: "",
        tags: ""
    },
    {
        titulo: "Dreamcast (1998)",
        descricao: "O último console da Sega, o Dreamcast foi pioneiro em diversos aspectos, como jogos online e controle analógico. Apesar de ser um console inovador, não conseguiu competir com o PlayStation 2.",
        link: "",
        tags: ""
    },
    {
        titulo: "Atari 2600 (1977)",
        descricao: "O pioneiro: Lançado em 1977, o Atari 2600 foi um dos primeiros consoles domésticos a alcançar sucesso comercial em massa. Jogos clássicos: Títulos como Pong, Space Invaders, Pac-Man e Pitfall! se tornaram ícones da indústria dos videogames e são lembrados com carinho até hoje. Simplicidade e versatilidade: O design simples e a grande variedade de jogos disponíveis fizeram do Atari 2600 um sucesso entre o público.",
        link: "",
        tags: ""
    },
    {
        titulo: "Atari 5200 (1982)",
        descricao: "Sucessor do 2600: O Atari 5200 foi lançado como uma atualização do Atari 2600, oferecendo gráficos e som melhorados. Vida curta: Apesar das melhorias, o 5200 não conseguiu repetir o sucesso do 2600 e teve uma vida comercial curta. Crise dos videogames: O lançamento do 5200 coincidiu com a crise dos videogames de 1983, o que prejudicou suas vendas.",
        link: "",
        tags: ""
    },
    {
        titulo: "Atari 7800 (1984)",
        descricao: "Último suspiro: Lançado após a crise dos videogames, o Atari 7800 foi uma tentativa da empresa de recuperar o mercado. Retrocompatibilidade: O console era retrocompatível com a maioria dos jogos do Atari 2600. Sucesso limitado: Apesar de ser um console sólido, o 7800 não conseguiu competir com o Nintendo Entertainment System (NES) e o Sega Master System.",
        link: "",
        tags: ""
    },
    {
        titulo: "Atari Jaguar (1993)",
        descricao: "Aposta ousada: O Atari Jaguar foi o último console da empresa a ser lançado, prometendo gráficos 64 bits e jogos inovadores. Fracasso comercial: Devido a problemas de desenvolvimento e à falta de jogos de qualidade, o Jaguar foi um fracasso comercial. Fim de uma era: O fracasso do Jaguar marcou o fim da Atari como uma grande força no mercado de consoles.",
        link: "",
        tags: ""
    },
    {
        titulo: "Magnavox Odyssey (1972)",
        descricao: "Considerado o primeiro console doméstico de videogame, o Odyssey era um sistema simples que utilizava sobreposições plásticas para criar gráficos básicos em uma televisão. Apesar de suas limitações, o Odyssey abriu caminho para uma nova forma de entretenimento.",
        link: "",
        tags: ""
    },
    {
        titulo: "PlayStation Portable (PSP) - O Começo de Uma Nova Era",
        descricao: "Lançamento: Dezembro de 2004 Características: O PSP foi concebido como um Walkman do século XXI, oferecendo não apenas jogos, mas também a capacidade de reproduzir músicas, vídeos e imagens. Seu design elegante e recursos multimídia o tornaram um dispositivo popular. Jogos: O PSP recebeu uma variedade de jogos, desde ports de títulos de PlayStation até exclusivos como a série Monster Hunter e a franquia God of War. Sucesso: O PSP foi um sucesso comercial, vendendo milhões de unidades e popularizando o conceito de jogos portáteis com gráficos de alta qualidade.",
        link: "",
        tags: ""
    },
    {
        titulo: "PlayStation Vita (PS Vita) - A Evolução do Portátil",
        descricao: "Lançamento: 2011/2012 (datas variam por região) Características: O PS Vita foi uma evolução natural do PSP, oferecendo um hardware mais poderoso, tela touchscreen, dois joysticks analógicos e recursos sociais como o Remote Play, que permitia transmitir jogos do PlayStation 4 para o portátil. Jogos: O PS Vita recebeu uma biblioteca de jogos diversificada, incluindo títulos exclusivos como Persona 4 Golden, Uncharted: Golden Abyss e Gravity Rush. Desafios: Apesar de ser um console poderoso, o PS Vita enfrentou desafios como a concorrência do Nintendo 3DS e a falta de suporte de alguns desenvolvedores de terceiros.",
        link: "",
        tags: ""
    },
    {
        titulo: "",
        descricao: "",
        link: "",
        tags: ""
    }
];