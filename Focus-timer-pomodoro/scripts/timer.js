import { Display, toggleButtonPlay, toggleButtonStop, toggleButtonSoundOn } from "./elements.js";
import { SoundOff, timeEnd } from "./controls.js";

let timerTimeOut;
let minutes = Number(Display.Minutes.textContent);

export const UpdateDisplay = (newMinutes, seconds) => {
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds

  Display.Minutes.textContent = String(newMinutes).padStart(2, '0')
  Display.Seconds.textContent = String(seconds).padStart(2, '0')

};

export const Reset = () => {
  UpdateDisplay(minutes, 0)
  clearTimeout(timerTimeOut)
};

export const ResetControls = () => {
  toggleButtonPlay()
  toggleButtonStop()
  toggleButtonSoundOn()
  SoundOff()
}

export const updateMinutes = (newMinutes) => { minutes = newMinutes };
export const Hold = () => { clearTimeout(timerTimeOut) };

export const CountDown = () => {
  timerTimeOut = setTimeout( () => {
    let minutes = Number(Display.Minutes.textContent)
    let seconds = Number(Display.Seconds.textContent)
    const isFinished = minutes <= 0 && seconds <= 0
    
    if (isFinished) {
      ResetControls()
      UpdateDisplay()
      timeEnd()
      return
    }

    if ( seconds <= 0 ) {
      seconds = 60
      --minutes
    }

    UpdateDisplay(minutes, String(seconds - 1))
    CountDown()

  }, 1000)
}