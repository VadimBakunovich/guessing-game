class GuessingGame {
    constructor() {
        this.low = 0;
        this.high = 0;
        this.result = 0;
    }

    setRange = (min, max) => this.high = max;

    guess = () => this.result = Math.ceil((this.low + this.high)/2);

    lower = () => this.high = this.result;

    greater = () => this.low = this.result;
}

module.exports = GuessingGame;
