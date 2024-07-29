import './App.css';
import { useState } from 'react';
import Modal from './components/Modal/Modal';


function App() {
  const [isModalOpen, setIsModalOpen] = useState()
  
  return (
    <div className='section'>
      <h1 className='heading-h1'>User Details Modal</h1>
      <button className='btn-primary' onClick={()=>setIsModalOpen(true)}>Open Form</button>

      {isModalOpen && (<Modal onClose={()=>{setIsModalOpen(false)}}></Modal>)}
    </div>
  );
}

export default App;
