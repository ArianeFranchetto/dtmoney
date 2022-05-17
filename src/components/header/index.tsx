import '../../styles/header.css'
import logoImg from '../../assets/logo.svg'

export function Header() {
    return (
      <header className='container'> 
        
       <div className='content'> 
       <img src= {logoImg} alt="dt money"/>
       <button type="button">Nova Transação</button>
       </div>
      
       
     
      
      </header>
    )
}