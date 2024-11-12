import './table.css'

type TableProps = {
    data : any[],
    
}
function Table({data}:TableProps) {
    
    return (
        <table className='table'>
            <tr>
                <th>#</th>
                <th>
                    Ingredient
                </th>
                <th>
                    Actions
                </th>
            </tr>
            <tr>
                <td>1</td>
                <td>test</td>
                <td>actions</td>
            </tr>

        </table>
    )
}

export default Table