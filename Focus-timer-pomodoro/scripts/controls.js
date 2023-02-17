import { toggleButtonPause, toggleButtonPlay, toggleButtonStop, toggleButtonDefine, toggleButtonSoundOff, toggleButtonSoundOn } from './elements.js';
import { UpdateDisplay, Reset, updateMinutes, Hold, CountDown } from './timer.js';


const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true");

bgAudio.loop = true 

const SoundOn = () => { bgAudio.play() };
export const SoundOff = () => { bgAudio.pause() };
export const timeEnd = () => { kitchenTimer.play() };
const pressButton = () => { buttonPressAudio.play() };

export const getMinutes = () => {
  let newMinutes = prompt('Quantos minutos?')
  if (!newMinutes) {
    return false
  }

  return newMinutes
};


export const PlayDisplay = () => {
  toggleButtonPause()
  pressButton()
  CountDown()
};

export const UnpauseDisplay = () => {
  toggleButtonPlay()
  pressButton()
};

export const StopDisplay = () => {
  toggleButtonStop()
  pressButton()
  Reset()
};

export const DefineDisplay = () => {
  toggleButtonDefine()
  pressButton()
  let newMinutes = getMinutes()
  if ( !newMinutes ) {
    Reset()
  }

  UpdateDisplay(newMinutes, 0)
  updateMinutes(newMinutes)
};

export const SoundActive = () => {
  toggleButtonSoundOff()
  pressButton()
  SoundOn()
};

export const SoundDesactivate = () => {
  toggleButtonSoundOn()
  pressButton()
  SoundOff()
};

