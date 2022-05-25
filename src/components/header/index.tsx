import '../../styles/header.css'
import logoImg from '../../assets/logo.svg'


interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}


export function Header( {onOpenNewTransactionModal}: HeaderProps ) {




    return (
      <header className='container'> 
        
       <div className='content'> 
       <img src= {logoImg} alt="dt money"/>
       <button type="button" onClick={onOpenNewTransactionModal}> Nova Transação</button>
       </div>
      
   
       
     
      
      </header>
    )
}