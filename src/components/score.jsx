import React from "react"

export default class Score extends React.Component {

    render() {
        return (
            <div className="pure-u-1-2">
                {this.props.score}
            </div>
        )
    }
}

