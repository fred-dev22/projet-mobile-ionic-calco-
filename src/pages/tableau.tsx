// Liste des elements de la calculatrice 

export const tableau = [
    [
        { valeur: "C", speciale: true },
        { valeur: "%", speciale: true },
        { valeur: "del", speciale: true },
        { valeur: "/", speciale: true },
    ],
    [
        { valeur: "7", speciale: false },
        { valeur: "8", speciale: false },
        { valeur: "9", speciale: false },
        { valeur: "*", speciale: true },
    ],
    [
        { valeur: "4", speciale: false },
        { valeur: "5", speciale: false },
        { valeur: "6", speciale: false },
        { valeur: "-", speciale: true },
    ],

    [
        { valeur: "1", speciale: false },
        { valeur: "2", speciale: false },
        { valeur: "3", speciale: false },
        { valeur: "+", speciale: true, },
    ],
    [
        { valeur: "plus", speciale: true },
        { valeur: "0", speciale: false },
        { valeur: ".", speciale: false },
        { valeur: "=", speciale: true },
    ],

]