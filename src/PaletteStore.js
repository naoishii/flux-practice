import Emitter from "./EventEmitter.js"

class PaletteStore extends Emitter {
    constructor(dispatcher) {
        super();

        this.color = "#666";
        // <--- observe event.
        dispatcher.on("changeColor", this.onChangeColor.bind(this));
    }

    getCount() {
        return this.count;
    }

    getColor() {
        return this.color;
    }

    onCountUp(count) {
        if (this.count === count) {
            return;
        }
        this.count = count;
        // emit "CHANGE" ---> self
        this.emit("CHANGE");
    }

    onChangeColor(color) {
        if (this.color === color) {
            return;
        }
        this.color = color;
        // emit "CHANGE" ---> self
        this.emit("CHANGE");
    }
}
export default PaletteStore;

