const {withNativeWind} = require('nativewind/metro');
import React from "react";

import "'./global.css'";
import { GluestackUIProvider } from "@/'components/ui'/gluestack-ui-provider";

const CustomizeTable = ({columns,data})=>{
    return (
        <table>
            <thead>
                <tr>
                    {columns.map((column,index) =>(
                        <th key={index}>{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row,rowindex)=>(
                    <tr key={index}>
                    
                    {columns.map((col,colIndex) =>(
                        <td key={colIndex}>{row[col]}</td>
                    ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default CustomizeTable;