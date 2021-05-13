import React from 'react'
import {alert} from 'react-bootstrap'
export default function Message({children}) {
    return (
        <alert>
            {children}

        </alert>
    )
}
