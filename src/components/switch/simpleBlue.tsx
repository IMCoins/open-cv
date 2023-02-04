import { Fragment, useState } from "react";

export const BlueSwitch = () => {
    const [use, toUse] = useState();
    return (
        <Fragment>
            <div style={{
                display: "flex",
                alignItems: "center"
            }}>
                <p
                    style={{
                        marginInline: "10px",
                        fontSize: "1rem",
                    }}
                >
                    FR
                </p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round" ></span>
                </label>
                <p style={{marginInline: "10px"}}>EN</p>
            </div>
        </Fragment>
    )
}