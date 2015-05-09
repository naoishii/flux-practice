import React from "react"

export default class DropZone extends React.Component {
    handleDragOver(ev) {
        ev.preventDefault();
    }

    handleDrop(ev) {
        var color = ev.dataTransfer.getData('color');
        this.props.onChangeColor(color);
    }

    render() {
        var styles = {
            width: '300px',
            height: '300px',
            backgroundColor: this.props.color
        };
        console.log(styles);

        return (
            <div
                style={styles}
                onDrop={this.handleDrop.bind(this)}
                onDragOver={this.handleDragOver}
            />
        )
    }
}

DropZone.propTypes = {
    onChangeColor: React.PropTypes.func.isRequired,
    color: React.PropTypes.string.isRequired
}
