// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let select = document.querySelector("select");
  let list = (window.speechSynthesis).getVoices();
  // Populate the "Select Voice" dropdown
  for(let i = 0; i < list.length; i++) {
    let option = new Option(list[i].name, i);
    select.add(option, undefined);
  }
  // Select which voice
  let utterance = new SpeechSynthesisUtterance();
  let changeVoice = function() {
    utterance.voice = list[select.value];
  }
  select.addEventListener("change", changeVoice);

  // Play voice when "Press to Talk" is pressed
  let textArea = document.querySelector("textarea");
  let button = document.querySelector("button");
  let img = document.querySelector("img");

  let startSpeaking = function() {
    utterance.text = textArea.value;
    img.src = "assets/images/smiling-open.png";
    window.speechSynthesis.speak(utterance);
  }
  let endSpeaking = function() {
    img.src = "assets/images/smiling.png";
    window.speechSynthesis.cancel();
  }
  button.addEventListener("click", startSpeaking);
  utterance.addEventListener("end", endSpeaking);
}
init();