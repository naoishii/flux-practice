import PaletteConstants from "./PaletteConstants.js"

export default class PaletteAction {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
    }

    // "Emit" event ----> Store
    countUp(data) {
        this.dispatcher.emit("countUp", data);
    }

    changeColor(data) {
        this.dispatcher.emit("changeColor", data);
    }
}

