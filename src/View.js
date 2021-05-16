export const View = {
    render({minutes, seconds}) {
        const timer = document.getElementById('app');

        timer.innerHTML = `
            <p>Proxímo post em</p>
            <span>${minutes}:${seconds}</span>
        `
    }
}
