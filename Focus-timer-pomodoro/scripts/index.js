import { Button } from './elements.js';
import { PlayDisplay, UnpauseDisplay, SoundActive, SoundDesactivate, StopDisplay, DefineDisplay } from './controls.js';

Button.Play.addEventListener('click', PlayDisplay);
Button.Pause.addEventListener('click', UnpauseDisplay);

Button.Define.addEventListener('click', DefineDisplay)
Button.Stop.addEventListener('click', StopDisplay)

Button.SoundOff.addEventListener('click', SoundActive);
Button.SoundOn.addEventListener('click', SoundDesactivate);