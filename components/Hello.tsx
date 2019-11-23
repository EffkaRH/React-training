import React, { FunctionComponent } from "react";

type HelloProps = {
    name: string;
    color?: string;
};

const Hello: FunctionComponent<HelloProps> = ({ name, color }) => (
    <div style={{ color: color || "brown" }}>
        <h1>Hello {name}</h1>
    </div>
);

export default Hello;
