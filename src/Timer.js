import { View } from './View.js'
import { Notifyer } from './Notifyer.js'

export const Timer = {
    initialTime: .45 * 60,
    currentTime: 0,
    interval: null,
    timeFormat: time => String(time).padStart(2, '0'),
    timeToMinutes: time => Timer.timeFormat(parseInt(Math.floor(time / 60))),
    timeToSeconds: time => Timer.timeFormat(parseInt(time % 60)),

    init(time) {
        Notifyer.notify({
            title: 'Qualquer Coisa',
            body: 'Dentro da caixinha!',
        })

        Timer.currentTime = time || Timer.initialTime
        Timer.interval = setInterval(Timer.countdown, 1000)
    },

    countdown() {
        
        Timer.currentTime = Timer.currentTime - 1

        View.render({
            minutes: Timer.timeToMinutes(Timer.currentTime),
            seconds: Timer.timeToSeconds(Timer.currentTime),
        })
        
        if (Timer.currentTime <= 0) {
            clearInterval(Timer.interval)
            Timer.init()
            return
        }
    },
}