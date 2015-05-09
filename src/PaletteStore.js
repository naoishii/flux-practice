import Emitter from "./EventEmitter.js"

class PaletteStore extends Emitter {
    constructor(dispatcher) {
        super();

        this.color = "#666";
        this.colorList = [
            {
                colorName: "赤",
                colorCode: "#fcc"
            },
            {
                colorName: "緑",
                colorCode: "#cfc",
            },
            {
                colorName: "青",
                colorCode: "#ccf"
            }
        ];

        // <--- observe event.
        dispatcher.on("changeColor", this.onChangeColor.bind(this));
    }

    getCount() {
        return this.count;
    }

    getColor() {
        return this.color;
    }

    getColorList() {
        return this.colorList;
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

