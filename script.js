function convertTextToSpeech() {
    const textInput = document.getElementById('text-input').value;
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(textInput);

    // Optional: Set voice and other properties
    utterance.voice = speechSynthesis.getVoices()[0]; // Select the first available voice
    utterance.pitch = 1; // Default pitch
    utterance.rate = 1; // Default rate

    speechSynthesis.speak(utterance);
}
const voices = speechSynthesis.getVoices();
voices.forEach((voice, index) => {
    console.log(`${index}: ${voice.name} (${voice.lang})`);
});
if ('speechSynthesis' in window) {
    // Supported
} else {
    alert('Sorry, your browser does not support text-to-speech.');
}


