export const Button = {
  Define: document.querySelector('.btn-define'),
  Play: document.querySelector('.btn-play'),
  Pause: document.querySelector('.btn-pause'),
  SoundOff: document.querySelector('.btn-sound-off'),
  SoundOn: document.querySelector('.btn-sound-on'),
  Stop: document.querySelector('.btn-stop'),
}

export const Display = {
  Minutes: document.querySelector('.minutes'),
  Seconds: document.querySelector('.seconds'),
}

export const toggleButtonPlay = () => {
  Button.Pause.classList.add('hide')
  Button.Play.classList.remove('hide')
}

export const toggleButtonPause = () => {
  Button.Pause.classList.remove('hide')
  Button.Play.classList.add('hide')
  Button.Stop.classList.remove('hide')
  Button.Define.classList.add('hide')
}

export const toggleButtonDefine = () => {
  Button.Stop.classList.remove('hide')
  Button.Define.classList.add('hide')
  Button.Play.classList.remove('hide')
  Button.Pause.classList.add('hide')
}

export const toggleButtonStop = () => {
  Button.Define.classList.remove('hide')
  Button.Stop.classList.add('hide')
  Button.Play.classList.remove('hide')
  Button.Pause.classList.add('hide')
}

export const toggleButtonSoundOff = (sound) => {
  Button.SoundOff.classList.add('hide')
  Button.SoundOn.classList.remove('hide')
}

export const toggleButtonSoundOn = () => {
  Button.SoundOff.classList.remove('hide')
  Button.SoundOn.classList.add('hide')
}
