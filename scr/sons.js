const soundCards = document.querySelectorAll(".sound-card");

soundCards.forEach(card => {

    const link = card.getAttribute("href");
    const parametros = new URLSearchParams(link.split("?")[1]);
    const som = parametros.get("som");

    const estrela = card.querySelector(".sound-star");


    // =====================================
    // VERIFICA SE ALGUMA PALAVRA DO SOM
    // ESTÁ FAVORITADA
    // =====================================

    function atualizarCartao() {

        let temFavorita = false;

        /*
        Aqui verificamos todas as palavras
        daquele som usando as chaves
        "favorita-palavra" do localStorage.
        */

        const palavrasPorSom = {

            oa: ["boat", "coat", "goal", "goat", "road", "toad"],

            en: ["den", "hen", "pen", "ten", "then", "blend"],

            sh: ["shed", "shin", "ship", "dish", "wash", "splash"],

            ow: ["bow", "cow", "how", "owl", "chow", "towel"],

            ar: ["bar", "car", "far", "park", "dark", "star", "part"],

            in: ["bin", "win", "chin", "shin", "wind", "winner"],

            ut: ["but", "cut", "rut", "shut", "strut", "butter"],

            ine: ["mine", "nine", "pine", "vine", "shine", "diner"],

            ing: ["ring", "bring", "thing", "finger", "string", "singing"],

            ain: ["again", "main", "rain", "brain", "stain", "train"],

            ap: ["cap", "gap", "lap", "map", "trap", "strap"],

            ape: ["cape", "gape", "nape", "tape", "drape", "shape"],

            ate: ["date", "hate", "late", "mate", "crater", "plate"]

        };


        const palavras = palavrasPorSom[som] || [];


        palavras.forEach(palavra => {

            if (
                localStorage.getItem(
                    "favorita-" + palavra
                ) === "true"
            ) {
                temFavorita = true;
            }

        });


        // =====================================
        // ATUALIZA O CARTÃO
        // =====================================

        if (temFavorita) {

            card.classList.add("favorite-card");

            estrela.classList.add("active");

        } else {

            card.classList.remove("favorite-card");

            estrela.classList.remove("active");

        }

    }


    // =====================================
    // ESTRELA
    // =====================================

    estrela.addEventListener("click", function(event) {

        /*
        Impede que clicar na estrela
        abra palavras.html.
        */

        event.preventDefault();
        event.stopPropagation();


        const palavrasPorSom = {

            oa: ["boat", "coat", "goal", "goat", "road", "toad"],

            en: ["den", "hen", "pen", "ten", "then", "blend"],

            sh: ["shed", "shin", "ship", "dish", "wash", "splash"],

            ow: ["bow", "cow", "how", "owl", "chow", "towel"],

            ar: ["bar", "car", "far", "park", "dark", "star", "part"],

            in: ["bin", "win", "chin", "shin", "wind", "winner"],

            ut: ["but", "cut", "rut", "shut", "strut", "butter"],

            ine: ["mine", "nine", "pine", "vine", "shine", "diner"],

            ing: ["ring", "bring", "thing", "finger", "string", "singing"],

            ain: ["again", "main", "rain", "brain", "stain", "train"],

            ap: ["cap", "gap", "lap", "map", "trap", "strap"],

            ape: ["cape", "gape", "nape", "tape", "drape", "shape"],

            ate: ["date", "hate", "late", "mate", "crater", "plate"]

        };


        const palavras = palavrasPorSom[som] || [];


        /*
        Descobre se o grupo já possui
        alguma palavra favorita.
        */

        const algumaFavorita = palavras.some(
            palavra =>
                localStorage.getItem(
                    "favorita-" + palavra
                ) === "true"
        );


        /*
        Se já tem favorita:
        desmarca todas.

        Se não tem:
        marca todas.
        */

        palavras.forEach(palavra => {

            localStorage.setItem(
                "favorita-" + palavra,
                (!algumaFavorita).toString()
            );

        });


        atualizarCartao();

    });


    // =====================================
    // CARREGA O ESTADO AO ABRIR A PÁGINA
    // =====================================

    atualizarCartao();

});