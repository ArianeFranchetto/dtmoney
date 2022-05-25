import '../../styles/modal.css'
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void; }



export function NewTransactionModal({isOpen , onRequestClose}: NewTransactionModalProps){
    return (
        <Modal className="modal-type" isOpen={isOpen} 
        onRequestClose={onRequestClose}
        
       
        
        >
          
     <div   className="react-modal-overlay">

         <button
className="react-modal-closer"
         type="button"
         onClick={onRequestClose
    
        }
         >
             <img src={closeImg} alt="Fechar modal"/>
         </button>

         <form className="container-form-modal">
         
          <h2>Cadastrar transação</h2>
          
        

          <input
          placeholder='Título'
          >
              
          </input>

         <input
          placeholder='Valor'
          type="number"

          
          ></input>
          <input
          placeholder='Categoria'
          
          ></input>

<button className="form-button" type='submit'>
              Cadastrar
               
          </button>

         
          </form>

          <div className="transaction-type">
 <button
 type="button"
 >
    <img src={incomeImg} alt="entrada"/>
    <span>Entrada</span>

 </button>

 <button
 type="button"
 >
    <img src={outcomeImg} alt="saída"/>
    <span>Saída</span>

 </button>

          </div>




          </div>
       
       
       
       
        </Modal>

    )
}