import React from "react"

export default class ColorCell extends React.Component {
    constructor(props) {
        super();
    }

    handleDragStart(ev) {
        console.log(ev);
         ev.dataTransfer.setData('color', this.props.colorCode);
    }

    render() {
        var styles = {
            backgroundColor: this.props.colorCode,
            height: '100px',
        };

        return (
            <div
                className="pure-u-1-3"
                style={styles}
                draggable="true"
                onTouchMove={this.handleDragStart.bind(this)}
                onDragStart={this.handleDragStart.bind(this)}
            />
        )
    }
}

ColorCell.propTypes = {
    colorName: React.PropTypes.string.isRequired,
    colorCode: React.PropTypes.string.isRequired
};
