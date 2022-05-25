export function tableOff(props) {
    const {value1,value2,value3,value4,value5,value6} = props

    return(
        <tr>
            <th>{value1}</th>
            <th>{value2}</th>
            <th>{value3}</th>
            <th>{value4}</th>
            <th>{value5}</th>
            <th>{value6}</th>
        </tr>
    )
    
}