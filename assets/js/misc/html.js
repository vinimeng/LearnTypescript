export default class HTML {
    constructor() {
        this.spanFPS = document.getElementById('fpsCounter');
        this.btnCredits = document.getElementById('btnCredits');
        this.modalCredits = document.getElementById('modalCredits');
        this.btnToggleFPS = document.getElementById('toggleFPS');
        this.spanFPS.style.display = 'block';
        this.modalCredits.style.display = 'none';
        this.initializeEvents();
    }
    initializeEvents() {
        this.btnCredits.addEventListener('click', () => {
            if (this.modalCredits.style.display === 'none') {
                this.modalCredits.style.display = 'block';
            }
            else {
                this.modalCredits.style.display = 'none';
            }
        });
        this.btnToggleFPS.addEventListener('click', () => {
            if (this.spanFPS.style.display === 'block') {
                this.spanFPS.style.display = 'none';
            }
            else {
                this.spanFPS.style.display = 'block';
            }
        });
    }
}
