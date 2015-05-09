import React from "react"
import Score from "./score.jsx"
import Palette from "./palette.jsx"
import DropZone from "./dropZone.jsx"
import NextColor from "./nextColor.jsx"
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
            color: store.getColor(),
            colorList: store.getColorList(),
            nextRequest: store.getNextRequest(),
            score: store.getScore()
        };

        store.on("CHANGE", () => {
            this._change();
        });
    }

    _change() {
        this.setState({color: store.getColor()});
    }

    handleChangeColor(data) {
        action.changeColor(data);
    }

    render() {

        return (
            <div>
                <Palette colors={this.state.colorList} />
                <div className="pure-g">
                    <Score />
                    <NextColor 
                        request={this.state.nextRequest}
                    />
                </div>
                <DropZone
                    onChangeColor={this.handleChangeColor}
                    color={this.state.color}
                />
            </div>
        )
    }
}

