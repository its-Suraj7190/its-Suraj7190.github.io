const quotes = [
    "Mathematics is the language of patterns.",
    "Every problem has a logical solution.",
    "Algorithms transform ideas into reality.",
    "Small discoveries lead to great innovations.",
    "Software and mathematics grow together.",
    "Persistence turns difficult problems into solved problems."
];

function changeQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[randomIndex];
}
