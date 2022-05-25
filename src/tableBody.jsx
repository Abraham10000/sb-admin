export function tableBody(props) {
    const {value1,value2,value3,value4,value5,value6} = props
    return(
         <tr>
         <td>{value1}</td>
            <td>{value2}</td>
            <td>{value3}</td>
            <td>{value4}</td>
            <td>{value5}</td>
            <td>{value6}</td>
        </tr>
    )
}