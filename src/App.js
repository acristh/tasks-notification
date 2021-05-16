import { Timer } from './Timer.js';
import { Notifyer } from './Notifyer.js';
import { Emitter } from './Emitter.js';

export const App = {
    start() {
        Notifyer.init()
        Timer.init()
    }
}