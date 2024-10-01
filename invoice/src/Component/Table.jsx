import React from "react";

const CustomizeTable = ({columns,data})=>{
    return(
        <table>
            <thead>
                <tr>
                    {columns.map((column,index) =>(
                        <th key={index}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((data,index)=>(
                    <td key={index}>{data}</td>
                ))}
            </tbody>
        </table>
    )
}

export default CustomizeTable;