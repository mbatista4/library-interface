import React from 'react'
import TableRow from './TableRow'

export default function TableBody({personList}) {
    return (
        <tbody>
           {personList.map((person, idx) => {
               return (<TableRow person={person} key={idx} />)
           })} 
        </tbody>
    )
}
