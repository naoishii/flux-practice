import React from "react"
import ColorCell from "./colorCell.jsx"

export default class Palette extends React.Component {
    render() {
        var colors = this.props.colors.map((color, i) => {
            return (
                <ColorCell {...color} key={i} />
            );
        });

        return (
            <div className="pure-g">
                {colors}
            </div>
        )
    }
}


Palette.propTypes = {
    colors: React.PropTypes.array.isRequired
};
