import PaletteConstants from "./PaletteConstants.js"

export default class PaletteAction {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
    }

    // "Emit" event ----> Store
    changeColor(data) {
        this.dispatcher.emit("changeColor", data);
    }
}

