export default class HTML {
    public spanFPS: HTMLSpanElement;
    public btnCredits: HTMLButtonElement;
    public modalCredits: HTMLDivElement;
    public btnToggleFPS: HTMLButtonElement;

    constructor() {
        this.spanFPS = document.getElementById('fpsCounter') as HTMLSpanElement;
        this.btnCredits = document.getElementById('btnCredits') as HTMLButtonElement;
        this.modalCredits = document.getElementById('modalCredits') as HTMLDivElement;
        this.btnToggleFPS = document.getElementById('toggleFPS') as HTMLButtonElement;

        this.spanFPS.style.display = 'block';
        this.modalCredits.style.display = 'none';

        this.initializeEvents();
    }

    private initializeEvents() {
        this.btnCredits.addEventListener('click', () => {
            if(this.modalCredits.style.display === 'none') {
                this.modalCredits.style.display = 'block';
            } else {
                this.modalCredits.style.display = 'none';
            }
        });

        this.btnToggleFPS.addEventListener('click', () => {
            if(this.spanFPS.style.display === 'block') {
                this.spanFPS.style.display = 'none';
            } else {
                this.spanFPS.style.display = 'block';
            }
        });
    }
}
