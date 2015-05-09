import React from "react"
import ColorCell from "./colorCell.jsx"

export default class Palette extends React.Component {
    render() {
        var colors = this.props.colors.map((color) => {
            return (
                <ColorCell {...color} />
            );
        });

        return (
            <div>
                {colors}
            </div>
        )
    }
}


Palette.propTypes = {
    colors: React.PropTypes.array.isRequired
};
