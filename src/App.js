import React,{useState} from 'react';


import Person from './components/Person.js';

import antonellaImg from './assets/images/Antonella.png';
import jackImg from './assets/images/Jackson.png';
import lilyImg from './assets/images/Lily.png';
import sebastianImg from './assets/images/Sebastian.png';


function App() {

  const BIRTHDAYS=[
    {image:antonellaImg,name:"Antonella Rossi", years:22},
    {image:jackImg,name:"Jack Querales", years:25 },
    {image:lilyImg,name:"Lily Rivas", years:28},
    {image:sebastianImg,name:"Sebastian Marchiori", years:26}
  ]
  
  const [list,setList] = useState(BIRTHDAYS);
  
  const deleteList = () =>{
    setList([]);
  }

  return (
    <div className='h-screen bg-pink-300 flex justify-center items-center text-gray-900'>

    <section className='bg-gray-100 w-2/6 h-9/12 rounded-md drop-shadow-md flex flex-col items-center'>

    <h1  className=' text-2xl	font-bold mt-5'>{list.length} birthdays today</h1>
    
    <ol>

      {list.map((item)=>{

      return  <li key={item.name}> <Person image={item.image} name={item.name} years={item.years} /> </li>

      })}

    </ol>

    {list.length ===0 && <p className='my-5' >Empty list.There are not birthdays.</p>}
    
    <button onClick={deleteList} 
    className='bg-gray-900  shadow-xl shadow-gray-900 text-gray-100 
    w-3/5 h-8 mb-5 rounded-md hover:bg-gray-600 hover:shadow-gray-600 '>Clean All</button>

    </section>

    </div>
  );
}

export default App;