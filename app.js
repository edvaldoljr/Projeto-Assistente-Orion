const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Bom dia, chefe...");
    } else if (hour >= 12 && hour < 17) {
        speak("Boa tarde, mestre...");
    } else {
        speak("Boa noite, senhor...");
    }
}

window.addEventListener('load', () => {
    speak("Inicializando ORIONN");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Ouvindo...";
    recognition.start();
});

function takeCommand(message) {
    if (message.includes('oi') || message.includes('olá')) {
        speak("Olá, senhor. Como posso ajudar?");
    }else if (message.includes('time')) {
        const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
        const finalText = "A hora atual é " + time;
        speak(finalText);
    } else if (message.includes('data')) {
        const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
        const finalText = "A data de hoje é " + date;
        speak(finalText);
    } else if (message.includes('calculadora')) {
        window.open('Calculator:///');
        const finalText = "Abrindo Calculadora";
        speak(finalText);
    } else if (message.includes('abrir microsoft teams')) {
        window.open('msteams:///');
        const finalText = "Abrindo Microsoft Teams";
        speak(finalText);
    } else if (message.includes("abrir google")) {
        window.open("https://google.com", "_blank");
        speak("Abrindo Google...");
    } else if (message.includes("abrir youtube")) {
        window.open("https://youtube.com", "_blank");
        speak("Abrindo Youtube...");
    } else if (message.includes("abrir facebook")) {
        window.open("https://facebook.com", "_blank");
        speak("Abrindo Facebook...");
    } else if (message.includes("abrir amazon")) {
        window.open("https://amazon.com", "_blank");
        speak("Abrindo Amazon...");
    } else if (message.includes("abrir netflix")) {
        window.open("https://netflix.com", "_blank");
        speak("Abrindo Netflix...");
    } else if (message.includes("abrir twitter")) {
        window.open("https://twitter.com", "_blank");
        speak("Abrindo Twitter...");
    } else if (message.includes("abrir linkedin")) {
        window.open("https://linkedin.com", "_blank");
        speak("Abrindo LinkedIn...");
    } else if (message.includes("abrir instagram")) {
        window.open("https://instagram.com", "_blank");
        speak("Abrindo Instagram...");
    } else if (message.includes("abrir whatsapp")) {
        window.open("https://web.whatsapp.com", "_blank");
        speak("Abrindo WhatsApp...");
    } else if (message.includes("abrir reddit")) {
        window.open("https://reddit.com", "_blank");
        speak("Abrindo Reddit...");
    } else if (message.includes("abrir stack overflow")) {
        window.open("https://stackoverflow.com", "_blank");
        speak("Abrindo Stack Overflow...");
    } else if (message.includes("abrir github")) {
        window.open("https://github.com", "_blank");
        speak("Abrindo GitHub...");
    } else if (message.includes("abrir wikipedia")) {
        window.open("https://pt.wikipedia.org", "_blank");
        speak("Abrindo Wikipedia...");
    } else if (message.includes("abrir mercado livre")) {
        window.open("https://mercadolivre.com.br", "_blank");
        speak("Abrindo Mercado Livre...");
    } else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "Encontrei algumas informações sobre " + message + " no Google";
        speak(finalText);
    }
}
