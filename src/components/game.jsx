import React from "react"
import Palette from "./palette.jsx"
import DropZone from "./dropZone.jsx"
import PaletteAction from "../PaletteAction.js"
import PaletteStore from "../PaletteStore.js"
import EventEmitter from "../EventEmitter.js"

var dispatcher = new EventEmitter(),
    action = new PaletteAction(dispatcher),
    store = new PaletteStore(dispatcher);

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: store.getColor()
        };

        store.on("CHANGE", () => {
            this.handleChange();
        });
    }

    handleChange() {
        this.setState({color: store.getColor()});
    }

    handleChangeColor(data) {
        action.changeColor(data);
    }

    render() {
        var colors = ['#fcc', '#cfc', '#ccf'];

        return (
            <div>
                <h1>hello world</h1>
                <Palette colors={colors} />
                <DropZone
                    onChangeColor={this.handleChangeColor}
                    color={this.state.color}
                />
            </div>
        )
    }
}

