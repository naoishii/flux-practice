import Emitter from "./EventEmitter.js"

class PaletteStore extends Emitter {
    constructor(dispatcher) {
        super();
        var colorList = [
            {
                colorName: "あか",
                colorCode: "#fcc"
            },
            {
                colorName: "みどり",
                colorCode: "#cfc",
            },
            {
                colorName: "あお",
                colorCode: "#ccf"
            }
        ];

        this.color = "#666";
        this.colorList = colorList;
        this.nextRequest = colorList[Math.floor( Math.random() * 3 )];
        this.score = 0;

        // <--- observe event.
        dispatcher.on("changeColor", this.onChangeColor.bind(this));
    }

    getColor() {
        return this.color;
    }

    getColorList() {
        return this.colorList;
    }

    getNextRequest() {
        return {
            expect: this.colorList[Math.floor( Math.random() * 3 )],
            dummy: this.colorList[Math.floor( Math.random() * 3 )]
        };
    }

    getScore() {
        return this.score;
    }

    onChangeColor(data) {
        if (data.dropedColor === data.expect.colorCode) {
            this.score += 1;
        }

        this.color = data.dropedColor;
        // emit "CHANGE" ---> self
        this.emit("CHANGE");
    }
}
export default PaletteStore;

