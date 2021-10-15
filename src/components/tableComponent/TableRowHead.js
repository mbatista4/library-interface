import React from 'react'

export default function TableRowHead({list}) {
    return (
        <tr>
            {list.map((listItem, idx) => {
                console.log(idx)
                return (<th key={idx} >{listItem}</th>)
            })}
        </tr>
    )
}
