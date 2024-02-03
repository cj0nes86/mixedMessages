let button = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = ["When you have a dream, you've got to grab it and never let go.",  "Nothing is impossible. The word itself says 'I'm possible!'", "There is nothing impossible to they who will try.",
"The bad news is time flies. The good news is you're the pilot.",];

btn.addEventListener('click', function() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})