import React from 'react'

export default ({data},props) => {

    
    
    let configSchema2 = {
        configSchema2 : {
            parameter10 : data.parameter10,
            nameSpace3:{
                subNameSpace4:{
                    parameter14: data.parameter14,
                    parameter15: data.parameter15
                },
                subNameSpace5:{
                    subNameSpace6:{
                        parameter16: data.parameter16,
                        parameter17: data.parameter17
                    }
                },
                parameter18: data.parameter18
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

