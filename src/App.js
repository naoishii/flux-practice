import React from "react"
import Palette from "./components/palette.jsx"

var colors = ['#fcc', '#cfc', '#ccf'];

React.render(
    <div>
        <h1>hello world</h1>
        <Palette colors={colors} />
    </div>
, document.body);
