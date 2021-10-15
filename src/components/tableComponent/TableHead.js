import React from 'react'
import TableRowHead from './TableRowHead'

export default function TableHead({list}) {
    return (
        <thead>
            <TableRowHead list={list}/>
        </thead>
    )
}
