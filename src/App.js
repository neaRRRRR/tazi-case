import './App.css';
import DynamicForm from 'dynamic-form-json'
import { formData1 } from './schema/formData1';
import { formData2 } from './schema/formData2';
import ConfigSchema1 from './schema/ConfigSchema1';
import ConfigSchema2 from './schema/ConfigSchema2';
import { useEffect, useState } from 'react';

function App() {
  let [selected,setSelected] = useState('ConfigSchema1')
  let [arr,setArr] = useState([])
  let [arr2,setArr2] = useState([])
  let [cf1,setCf1] = useState('')
  let [cf2,setCf2] = useState('')

  let handleForm = (val) => {
    
    if(arr.length > 4){
      console.log('nop')
    }
    else{
      setArr([...arr,val])
    }
  }

  
  let handleForm2 = (val) => {
    if(arr2.length > 4){
      console.log('nop')
    }
    else{
      setArr2([...arr2,val])
    }
  }

  return (
    <div className="grid-container">

    <div className="grid-child left">
     <button className="cfg-btn" style={{width:'130px'}} onClick={() => {setSelected('ConfigSchema1')}}>ConfigSchema1</button>
     <button className="cfg-btn" style={{width:'120px'}} onClick={() => {setSelected('ConfigSchema2')}} >ConfigSchema2</button> 
     <h2>{selected}</h2>    
    
      {selected == 'ConfigSchema1' ?
      <> 
      <DynamicForm fields={formData1} cbSubmit={handleForm}  />
      {arr.length > 4 ? <p style={{color:'red'}}>Can not add more !</p> : ''}
      </>
        :
      <> 
      <DynamicForm fields={formData2} cbSubmit={handleForm2} />
      {arr2.length > 4 ? <p style={{color:'red'}}>Can not add more !</p> : ''}
      </>
       }
     
     {/* {arr.length > 4 ? <p style={{color:'red'}}>Can not add more !</p> : ''} */}
     </div>
    <div className="grid-child right">
       <div>
        {arr.map((item,i) => {
          return(
            <button className="cfg-btn" onClick={() => {setCf1(item)}}>{item.configName}</button>
          )
        })}
        </div>
        <div>
        {arr2.map((item,i) => {
          return(
            <button className="cfg-btn" onClick={() => {setCf2(item)}}>{item.configName}</button>
          )
        })}
        </div>
        <div style={{display:'flex'}}>
        
        <ConfigSchema1 data={cf1}/>
        
        <ConfigSchema2 data={cf2}/>
        </div>
    </div>
  
</div>
  );
}




export default App;
