// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // get all components of web page
  const selectVoice = document.getElementById('voice-select');
  const textBox = document.getElementById('text-to-speak');
  const pressToTalk = document.querySelector('button');
  const faceImage = document.querySelector('img');
  const smiling = 'assets/images/smiling.png';
  const smilingOpen = 'assets/images/smiling-open.png'

  let synth = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    for(let i = 0; i < voices.length; i++) {
      let option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      selectVoice.appendChild(option);
    }
  }

  populateVoiceList();
  speechSynthesis.onvoiceschanged = populateVoiceList;

  pressToTalk.addEventListener('click', () => {
    let textToSpeak = textBox.value;
    let utterance = new SpeechSynthesisUtterance(textToSpeak);
    let selectedVoiceName = selectVoice.selectedOptions[0].getAttribute('data-name');
    utterance.voice = voices.find(voice => voice.name === selectedVoiceName);
    utterance.onstart = () => {
      faceImage.src = smilingOpen;
    };
    utterance.onend = () => {
      faceImage.src = smiling;
    };
    synth.speak(utterance);
  });
}