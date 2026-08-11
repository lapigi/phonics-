const sons = {
    oa: {
        pronuncia: "OU",
        palavras: [
            { palavra: "boat", significado: "Substantivo - significa Barco" },
            { palavra: "coat", significado: "Substantivo - significa Casaco" },
            { palavra: "goal", significado: "Substantivo - significa Meta" },
            { palavra: "goat", significado: "Substantivo - significa Cabra" },
            { palavra: "road", significado: "Substantivo - significa Estrada" },
            { palavra: "toad", significado: "Substantivo - significa Sapo" }
        ]
    },

    en: {
        pronuncia: "EN",
        palavras: [
            { palavra: "den", significado: "Substantivo - significa Toca" },
            { palavra: "hen", significado: "Substantivo - significa Galinha" },
            { palavra: "pen", significado: "Substantivo - significa Caneta" },
            { palavra: "ten", significado: "Número - significa Dez" },
            { palavra: "then", significado: "Advérbio - significa Então" },
            { palavra: "blend", significado: "Substantivo - significa Mistura" }
        ]
    },

    sh: {
        pronuncia: "SH",
        palavras: [
            { palavra: "shed", significado: "Substantivo - significa Galpão" },
            { palavra: "shin", significado: "Substantivo - significa Canela" },
            { palavra: "ship", significado: "Substantivo - significa Navio" },
            { palavra: "dish", significado: "Substantivo - significa Prato" },
            { palavra: "wash", significado: "Verbo - significa Lavar" },
            { palavra: "splash", significado: "Verbo - significa Espirrar" }
        ]
    },

    ow: {
        pronuncia: "AU",
        palavras: [
            { palavra: "bow", significado: "Substantivo - significa Arco" },
            { palavra: "cow", significado: "Substantivo - significa Vaca" },
            { palavra: "how", significado: "Advérbio - significa Como" },
            { palavra: "owl", significado: "Substantivo - significa Coruja" },
            { palavra: "chow", significado: "Substantivo - significa Comida" },
            { palavra: "towel", significado: "Substantivo - significa Toalha" }
        ]
    },

    ar: {
        pronuncia: "AR",
        palavras: [
            { palavra: "bar", significado: "Substantivo - significa Bar" },
            { palavra: "car", significado: "Substantivo - significa Carro" },
            { palavra: "far", significado: "Advérbio - significa Longe" },
            { palavra: "park", significado: "Substantivo - significa Parque" },
            { palavra: "dark", significado: "Adjetivo - significa Escuro" },
            { palavra: "star", significado: "Substantivo - significa Estrela" },
            { palavra: "part", significado: "Substantivo - significa Parte" }
        ]
    },

    in: {
        pronuncia: "IN",
        palavras: [
            { palavra: "bin", significado: "Substantivo - significa Lixeira" },
            { palavra: "win", significado: "Verbo - significa Vencer" },
            { palavra: "chin", significado: "Substantivo - significa Queixo" },
            { palavra: "shin", significado: "Substantivo - significa Canela" },
            { palavra: "wind", significado: "Substantivo - significa Vento" },
            { palavra: "winner", significado: "Substantivo - significa Vencedor" }
        ]
    },

    ut: {
        pronuncia: "ÂT",
        palavras: [
            { palavra: "but", significado: "Conjunção - significa Mas" },
            { palavra: "cut", significado: "Verbo - significa Cortar" },
            { palavra: "rut", significado: "Substantivo - significa Sulco" },
            { palavra: "shut", significado: "Verbo - significa Fechar" },
            { palavra: "strut", significado: "Verbo - significa Desfilar" },
            { palavra: "butter", significado: "Substantivo - significa Manteiga" }
        ]
    },

    ine: {
        pronuncia: "AIN",
        palavras: [
            { palavra: "mine", significado: "Pronome - significa Meu/Minha" },
            { palavra: "nine", significado: "Número - significa Nove" },
            { palavra: "pine", significado: "Substantivo - significa Pinheiro" },
            { palavra: "vine", significado: "Substantivo - significa Videira" },
            { palavra: "shine", significado: "Verbo - significa Brilhar" },
            { palavra: "diner", significado: "Substantivo - significa Lanchonete" }
        ]
    },

    ing: {
        pronuncia: "ING",
        palavras: [
            { palavra: "ring", significado: "Substantivo - significa Anel" },
            { palavra: "bring", significado: "Verbo - significa Trazer" },
            { palavra: "thing", significado: "Substantivo - significa Coisa" },
            { palavra: "finger", significado: "Substantivo - significa Dedo" },
            { palavra: "string", significado: "Substantivo - significa Corda" },
            { palavra: "singing", significado: "Verbo - significa Cantando" }
        ]
    },

    ain: {
        pronuncia: "EIN",
        palavras: [
            { palavra: "again", significado: "Advérbio - significa Novamente" },
            { palavra: "main", significado: "Adjetivo - significa Principal" },
            { palavra: "rain", significado: "Substantivo - significa Chuva" },
            { palavra: "brain", significado: "Substantivo - significa Cérebro" },
            { palavra: "stain", significado: "Substantivo - significa Mancha" },
            { palavra: "train", significado: "Substantivo - significa Trem" }
        ]
    },

    ap: {
        pronuncia: "ÉP",
        palavras: [
            { palavra: "cap", significado: "Substantivo - significa Boné" },
            { palavra: "gap", significado: "Substantivo - significa Lacuna" },
            { palavra: "lap", significado: "Substantivo - significa Colo" },
            { palavra: "map", significado: "Substantivo - significa Mapa" },
            { palavra: "trap", significado: "Substantivo - significa Armadilha" },
            { palavra: "strap", significado: "Substantivo - significa Alça" }
        ]
    },

    ape: {
        pronuncia: "EIP",
        palavras: [
            { palavra: "cape", significado: "Substantivo - significa Capa" },
            { palavra: "gape", significado: "Verbo - significa Ficar Boquiaberto" },
            { palavra: "nape", significado: "Substantivo - significa Nuca" },
            { palavra: "tape", significado: "Substantivo - significa Fita" },
            { palavra: "drape", significado: "Verbo - significa Cobrir" },
            { palavra: "shape", significado: "Substantivo - significa Forma" }
        ]
    },

    ate: {
        pronuncia: "EIT",
        palavras: [
            { palavra: "date", significado: "Substantivo - significa Data" },
            { palavra: "hate", significado: "Verbo - significa Odiar" },
            { palavra: "late", significado: "Adjetivo - significa Atrasado" },
            { palavra: "mate", significado: "Substantivo - significa Companheiro" },
            { palavra: "crater", significado: "Substantivo - significa Cratera" },
            { palavra: "plate", significado: "Substantivo - significa Prato" }
        ]
    }
};


// =====================================
// PARÂMETROS
// =====================================

const parametros = new URLSearchParams(window.location.search);

const som = parametros.get("som");
const nomePalavra = parametros.get("palavra");

const grupo = sons[som];


// =====================================
// ELEMENTOS
// =====================================

const soundPage = document.getElementById("soundPage");
const wordPage = document.getElementById("wordPage");

const sound = document.getElementById("sound");
const soundPronunciation = document.getElementById("soundPronunciation");
const allWords = document.getElementById("allWords");

const startButton = document.getElementById("startButton");

const soundStar = document.getElementById("soundStar");
const wordStar = document.getElementById("wordStar");

const word = document.getElementById("word");
const meaning = document.getElementById("meaning");
const pronunciation = document.getElementById("pronunciation");

const previous = document.getElementById("previous");
const next = document.getElementById("next");


// =====================================
// FAVORITOS
// =====================================

function palavraFavoritada(nome) {
    return localStorage.getItem(
        "favorita-" + nome.toLowerCase()
    ) === "true";
}


function mudarFavorito(nome) {

    const chave = "favorita-" + nome.toLowerCase();

    const atual = palavraFavoritada(nome);

    localStorage.setItem(
        chave,
        (!atual).toString()
    );
}


// =====================================
// ATUALIZA AS PALAVRAS DA PÁGINA INICIAL
// =====================================

function atualizarPalavrasFavoritas() {

    const palavras =
        document.querySelectorAll(".all-word");

    palavras.forEach(elemento => {

        const nome =
            elemento.dataset.palavra;

        if (palavraFavoritada(nome)) {

            elemento.classList.add(
                "favorite-word"
            );

        } else {

            elemento.classList.remove(
                "favorite-word"
            );
        }
    });
}


// =====================================
// ATUALIZA A ESTRELA
// =====================================

function atualizarEstrela(estrela, nome) {

    if (!estrela) return;

    estrela.classList.toggle(
        "active",
        palavraFavoritada(nome)
    );
}


// =====================================
// PÁGINA INICIAL DO SOM
// =====================================

if (grupo && soundPage) {

    sound.textContent = som;

    soundPronunciation.textContent =
        "Pronuncia-se " + grupo.pronuncia;


    grupo.palavras.forEach(item => {

        const elemento =
            document.createElement("p");

        elemento.className = "all-word";

        // Guarda o nome da palavra
        elemento.dataset.palavra =
            item.palavra;


        const texto = item.palavra;

        const inicio =
            texto
                .toLowerCase()
                .indexOf(
                    som.toLowerCase()
                );


        if (inicio !== -1) {

            elemento.innerHTML =
                texto.substring(
                    0,
                    inicio
                ) +

                `<span class="highlight">` +

                texto.substring(
                    inicio,
                    inicio + som.length
                ) +

                `</span>` +

                texto.substring(
                    inicio + som.length
                );

        } else {

            elemento.textContent =
                texto;
        }


        // Se já estiver favoritada,
        // começa amarela
        if (
            palavraFavoritada(
                item.palavra
            )
        ) {

            elemento.classList.add(
                "favorite-word"
            );
        }


        allWords.appendChild(
            elemento
        );

    });


    atualizarPalavrasFavoritas();
}


// =====================================
// ESTRELA DA PÁGINA INICIAL
// =====================================

if (soundStar && grupo) {

    // A estrela da página inicial
    // representa a primeira palavra
    const primeiraPalavra =
        grupo.palavras[0].palavra;


    atualizarEstrela(
        soundStar,
        primeiraPalavra
    );


    soundStar.addEventListener(
        "click",
        function(event) {

            event.preventDefault();
            event.stopPropagation();


            mudarFavorito(
                primeiraPalavra
            );


            atualizarEstrela(
                soundStar,
                primeiraPalavra
            );


            atualizarPalavrasFavoritas();

        }
    );
}


// =====================================
// COMEÇAR AS PALAVRAS
// =====================================

if (startButton) {

    startButton.addEventListener(
        "click",
        function() {

            soundPage.style.display =
                "none";

            wordPage.style.display =
                "flex";

            mostrarPalavra(0);

        }
    );
}


// =====================================
// MOSTRAR PALAVRA
// =====================================

function mostrarPalavra(indice) {

    if (!grupo) return;


    const item =
        grupo.palavras[indice];

    if (!item) return;


    const texto =
        item.palavra;


    const inicio =
        texto
            .toLowerCase()
            .indexOf(
                som.toLowerCase()
            );


    // =====================================
    // PALAVRA
    // =====================================

    if (inicio !== -1) {

        word.innerHTML =

            texto.substring(
                0,
                inicio
            ) +

            `<span class="sound">` +

            texto.substring(
                inicio,
                inicio + som.length
            ) +

            `</span>` +

            texto.substring(
                inicio + som.length
            );

    } else {

        word.textContent =
            texto;

    }


    // =====================================
    // SIGNIFICADO
    // =====================================

    meaning.textContent =
        item.significado;


    // =====================================
    // PRONÚNCIA
    // =====================================

    pronunciation.innerHTML =
        `Pronuncia-se ${grupo.pronuncia} - <span class="listen">OUVIR</span>`;


    // =====================================
    // ESTRELA DA PALAVRA
    // =====================================

    atualizarEstrela(
        wordStar,
        item.palavra
    );


    // =====================================
    // SETA ESQUERDA
    // =====================================

    previous.disabled = false;


    if (indice > 0) {

        previous.onclick =
            function() {

                mostrarPalavra(
                    indice - 1
                );

            };

    } else {

        // Na primeira palavra,
        // volta para o card inicial

        previous.onclick =
            function() {

                wordPage.style.display =
                    "none";

                soundPage.style.display =
                    "flex";

                atualizarPalavrasFavoritas();

                atualizarEstrela(
                    soundStar,
                    grupo.palavras[0].palavra
                );

            };
    }


    // =====================================
    // SETA DIREITA
    // =====================================

    if (
        indice <
        grupo.palavras.length - 1
    ) {

        next.disabled = false;

        next.onclick =
            function() {

                mostrarPalavra(
                    indice + 1
                );

            };

    } else {

        next.disabled = true;

        next.onclick = null;

    }
}


// =====================================
// ESTRELA DA PÁGINA INDIVIDUAL
// =====================================

if (wordStar) {

    wordStar.addEventListener(
        "click",
        function(event) {

            event.preventDefault();
            event.stopPropagation();


            const palavraAtual =
                word.textContent
                    .trim();


            if (!palavraAtual) return;


            mudarFavorito(
                palavraAtual
            );


            atualizarEstrela(
                wordStar,
                palavraAtual
            );


            atualizarPalavrasFavoritas();

        }
    );
}


// =====================================
// ABRIR DIRETAMENTE UMA PALAVRA
// =====================================

if (
    grupo &&
    nomePalavra
) {

    const indice =
        grupo.palavras.findIndex(
            item =>
                item.palavra.toLowerCase() ===
                nomePalavra.toLowerCase()
        );


    if (indice !== -1) {

        soundPage.style.display =
            "none";

        wordPage.style.display =
            "flex";

        mostrarPalavra(indice);

    }
}