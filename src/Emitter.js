export const Emitter = {
    events: [],
    on(event, cb) {
        Emitter.events[event] = Emitter.events[event] || []
        Emitter.events[event].push(cb)
    },

    emit(event, ...rest) {
        if (!(event in Emitter.events)) {
            return
        }
        Emitter.events[event].forEach(e => {
            e(...rest)
        });
    }
}

Emitter.on('click', () => console.log('clickou 1'))
Emitter.on('click', () => console.log('clickou 2'))
Emitter.on('click', () => console.log('clickou 3'))
Emitter.on('click', () => console.log('clickou 4'))
Emitter.emit('click')

