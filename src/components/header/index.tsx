import '../../styles/header.css'
import logoImg from '../../assets/logo.svg'
import { useState } from 'react';

export function Header() {

const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState (false);

function handleOpenNewTransactionModal() {
  setIsNewTransactionModalOpen(true)
}

function handleCloseNewTransactionModal() {
  setIsNewTransactionModalOpen(false)

}


    return (
      <header className='container'> 
        
       <div className='content'> 
       <img src= {logoImg} alt="dt money"/>
       <button type="button" onClick={handleOpenNewTransactionModal} >Nova Transação</button>
       </div>
      
       
     
      
      </header>
    )
}