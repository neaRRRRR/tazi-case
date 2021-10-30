import './App.css';
import DynamicForm from 'dynamic-form-json'
import { formData1 } from './schema/formData1';
import { formData2 } from './schema/formData2';
import ConfigSchema1 from './schema/ConfigSchema1';
import ConfigSchema2 from './schema/ConfigSchema2';
import { useEffect, useState } from 'react';

function App() {
  let [selected,setSelected] = useState('ConfigSchema1')
  let [customVal,setCustomVal] = useState(false)
  let [arr,setArr] = useState([])
  let [arr2,setArr2] = useState([])
  let [cf1,setCf1] = useState('')
  let [cf2,setCf2] = useState('')
  let [editMod,setEdit] = useState(false)
  let [index,setIndex] = useState()

  let handleForm = (val) => {
    
    if(arr.length > 4){
      console.log('nop')
    }
    else{
      setArr([...arr,val])
    }
  }

  
  let handleForm2 = (val) => {
    console.log(val.parameter16 * 10)
    console.log((val.parameter16 * 10) % 1 == 0)
    if(!((val.parameter16 * 10) % 1 == 0)){
      setCustomVal(true)
    }
    else{
      if(arr2.length > 4){
        console.log('nop')
      }
      else{
        setArr2([...arr2,val])
        setCustomVal(false)
      }
      
    }
  }

  let handleEdit = (val) => {
    console.log(val)
    if(selected == "ConfigSchema1"){
      arr[index].configName = val.configName
      arr[index].parameter1 = val.parameter1
      arr[index].parameter2 = val.parameter2
      arr[index].parameter3 = val.parameter3
      arr[index].parameter4 = val.parameter4
      arr[index].parameter8 = val.parameter8
    }else{
      arr2[index].configName = val.configName
      arr2[index].parameter10 = val.parameter10
      arr2[index].parameter14 = val.parameter14
      arr2[index].parameter15 = val.parameter15
      arr2[index].parameter16 = val.parameter16
      arr2[index].parameter17 = val.parameter17
      arr2[index].parameter18 = val.parameter18
    }
    
  }

  return (
    <div className="grid-container">

    <div className="grid-child left">
     <button className="cfg-btn" style={{width:'130px'}} onClick={() => {setSelected('ConfigSchema1')}}>ConfigSchema1</button>
     <button className="cfg-btn" style={{width:'120px'}} onClick={() => {setSelected('ConfigSchema2')}} >ConfigSchema2</button> 
     <h2>{selected}</h2>    
    
      {editMod ? selected == "ConfigSchema1" ?
        <>
       <h3>{'Editing '+arr[index].configName}</h3>
       <DynamicForm fields={formData1} cbSubmit={handleEdit}  />
        </>
        :
        <>
        <h3>{'Editing '+arr2[index].configName}</h3>
        <DynamicForm fields={formData2} cbSubmit={handleEdit}  />
        </>
        :
        
        
        selected == 'ConfigSchema1' ?
      <> 
      <DynamicForm fields={formData1} cbSubmit={handleForm}  />
      {arr.length > 4 ? <p style={{color:'red'}}>Can not add more !</p> : ''}
      </>
        :
      <> 
      <DynamicForm fields={formData2} cbSubmit={handleForm2} />
      {arr2.length > 4 ? <p style={{color:'red'}}>Can not add more !</p> : ''}
      {customVal ? <p style={{color:'red'}}>Parameter16 should be multiple of 0.1</p> : ''}
      </>
        
         
         
      }
      
     
     {/* {arr.length > 4 ? <p style={{color:'red'}}>Can not add more !</p> : ''} */}
     </div>
    <div className="grid-child right">
       <div>
        {arr.map((item,i) => {
          return(
            <button className="cfg-btn" onClick={() => {setCf1(item); setIndex(i)}}>{item.configName}</button>
          )
        })}
        </div>
        <div>
        {arr2.map((item,i) => {
          return(
            <button className="cfg-btn" onClick={() => {setCf2(item); setIndex(i)}}>{item.configName}</button>
          )
        })}
        </div>
        <div style={{display:'flex'}}>
        
        <ConfigSchema1 data={cf1}/>
        
        <ConfigSchema2 data={cf2}/>

        </div>
        {arr.length > 0 || arr2.length > 0 ? <button className="cfg-btn" onClick={() => {setEdit(!editMod)}}>EDIT</button> : ''}
    </div>
  
</div>
  );
}




export default App;
