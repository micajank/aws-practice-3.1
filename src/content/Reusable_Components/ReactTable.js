import React from 'react'
import { useTable, useSortBy } from 'react-table'
const ReactTable = props => {
    const data = React.useMemo(() => props.data,[props.data])  
    const columns = React.useMemo( () => props.columnsForTable, [props.columnsForTable]   )
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable(
        {
            columns, 
            data
        },
        useSortBy
    )
    return (
        <table {...getTableProps}>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr className={props.classNames ? props.classNames.headerRow : ''} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th className='body1' {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                    {/* <span>
                                        {column.isSorted ? (column.isSortedDesc ? " " : " ") : ""}
                                    </span> */}
                                </th>
                            ))}
                        </tr>
                    ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return(
                            <tr className={props.classNames ? props.classNames.listItem: ''} {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    )
                                })}
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    )
}
export default ReactTable