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
    let idx = index.ind
    let sch = index.schema
    if(sch == "cf1"){
      arr[idx].configName = val.configName
      arr[idx].parameter1 = val.parameter1
      arr[idx].parameter2 = val.parameter2
      arr[idx].parameter3 = val.parameter3
      arr[idx].parameter4 = val.parameter4
      arr[idx].parameter8 = val.parameter8
    }else if(sch == "cf2"){
      arr2[idx].configName = val.configName
      arr2[idx].parameter10 = val.parameter10
      arr2[idx].parameter14 = val.parameter14
      arr2[idx].parameter15 = val.parameter15
      arr2[idx].parameter16 = val.parameter16
      arr2[idx].parameter17 = val.parameter17
      arr2[idx].parameter18 = val.parameter18
    }
    
  }

  let handleDelete = () => {
    let {schema,ind,data} = index
    if(schema == 'cf1'){
      arr = arr.filter(item => item !== data)
      setArr(arr)
    }
    else if(schema == 'cf2'){
      arr2 = arr2.filter(item => item !== data)
      setArr2(arr2)
    }
  }

  useEffect(() => {
    setIndex('')
  },[arr,arr2])

  return (
    <div className="grid-container">

    <div className="grid-child left">
     <button className="cfg-btn" style={{width:'130px'}} onClick={() => {setSelected('ConfigSchema1')}}>ConfigSchema1</button>
     <button className="cfg-btn" style={{width:'120px'}} onClick={() => {setSelected('ConfigSchema2')}} >ConfigSchema2</button> 
     <h2>{editMod ? 'Editing '+index.data.configName : 'Add '+selected}</h2>    
    
      {editMod ? index.schema == "cf1" ?
        <>
       
       <DynamicForm fields={formData1} cbSubmit={handleEdit}  />
        </>
        :
        <>
        
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
            <button className="cfg-btn" onClick={() => {setCf1(item); setIndex({schema:'cf1',ind:i,data:item})}}>{item.configName}</button>
          )
        })}
        </div>
        <div>
        {arr2.map((item,i) => {
          return(
            <button className="cfg-btn" onClick={() => {setCf2(item); setIndex({schema:'cf2',ind:i,data:item})}}>{item.configName}</button>
          )
        })}
        </div>
        <div style={{display:'flex'}}>
        
        <ConfigSchema1 data={cf1} />
        
        <ConfigSchema2 data={cf2}/>

        </div>
        {editMod ? `Editing ${index.data.configName}` : ''}
        {(arr.length > 0 || arr2.length > 0) && index ? <button className="cfg-btn" style={{height:'35px'}} onClick={() => {setEdit(!editMod)}}>{editMod ? 'SAVE AND EXIT' : 'EDIT MODE'}</button> : ''}
        {index ? `Delete ${index.data.configName}?` : ''}
        {(arr.length > 0 || arr2.length > 0) && index ? <button className="cfg-btn" style={{height:'35px'}} onClick={() => {handleDelete()}}>{`DELETE ${index.data.configName}`}</button> : ''}
    </div>
  
</div>
  );
}




export default App;
