import React from 'react'

export default ({data},props) => {

        
    
    
    let configSchema2 = {
        configSchema2 : {
            parameter10 : data.parameter10,
            nameSpace3:{
                subNameSpace4:{
                    parameter14: Boolean(data.parameter14 === "true"),
                    parameter15: data.parameter15 == "" ? 0.35 : Number(data.parameter15)
                },
                subNameSpace5:{
                    subNameSpace6:{
                        parameter16: data.parameter16 == "" ? 0.7 : Number(data.parameter16),
                        parameter17: data.parameter17
                    }
                },
                parameter18: Number(data.parameter18)
            }
        }
    }


    return(

        <div style={{marginLeft:'20px'}}>
            ConfigSchema2
            <textarea value={JSON.stringify(configSchema2,null,"\t")} onChange={() => {}}/>
        </div>
        

    )




}

