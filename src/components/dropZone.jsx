import React from "react"

export default class DropZone extends React.Component {
    handleDragOver(ev) {
        ev.preventDefault();
    }

    handleDrop(ev) {
        var color = ev.dataTransfer.getData('color'),
            data = {
                dropedColor: color,
                expect: this.props.expect
            };
        this.props.onChangeColor(data);
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
                onDragOver={this.handleDragOver.bind(this)}
            />
        )
    }
}

DropZone.propTypes = {
    onChangeColor: React.PropTypes.func.isRequired,
    expect: React.PropTypes.object.isRequired,
    color: React.PropTypes.string.isRequired
}
