import React from 'react'

export default function Alert(props) {
    function capitalize(str) {
        let tmp = str.toLowerCase();
        return tmp.charAt(0).toUpperCase() + tmp.slice(1);
    }
    return (
        <div style={{ height: '30px' }}>
            {props.alert &&
            <div className={`alert alert-${props.alert.res} alert-dismissible fade show`} role="alert">
                <div className="container">
                    <strong>{capitalize(props.alert.res)} : </strong>{props.alert.msg}
                </div>
            </div>}
        </div>
    )
}
