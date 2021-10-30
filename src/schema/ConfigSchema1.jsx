import React from 'react'

export default ({data},props) => {

    
    
    let configSchema1 = {
        configSchema1 : {
            nameSpace1: {
                subNameSpace1 : {
                    parameter1 : data.parameter1,
                    parameter2: Number(data.parameter2)
                },
                parameter3: (data.parameter3 === "true")
            },
            nameSpace2:{
                subNameSpace2:{
                    parameter4: Number(data.parameter4)
                },
                parameter8: data.parameter8
            }
        }
    }


    return(

        <div>
            ConfigSchema1
            <textarea value={JSON.stringify(configSchema1,null,"\t")} onChange={() => {}}/>
        </div>
        

    )




}