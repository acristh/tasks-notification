import { Timer } from './Timer.js';
import { Notifyer } from './Notifyer.js';

export const App = {
    start() {
        Notifyer.init()
        Timer.init()
    }
}