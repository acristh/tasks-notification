
export const Notifyer = {
    init () {
        const permission = Notification.requestPermission()

        if (permission === 'denied') {
            throw new Error('Permissão negada!')
        }
    },

    notify({title, body, icon}) {
        new Notification(title,{ body, icon})
    }

}