import '../../styles/modal.css'
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react';
import { api } from '../services/api';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void; }



export function NewTransactionModal({isOpen , onRequestClose}: NewTransactionModalProps){
    const  [type, setType]= useState ('deposit, withdraw');
const [title, setTitle] = useState('');
const [value, setValue] = useState(0);
const [category, setCategory] = useState('');

    function handleCreateNewTransaciton(event:FormEvent) {
        event.preventDefault();

        const data = {
            title,
            value,
            category,
            type,
        };

        api.post('/transactions',data) 
    }


    
    return (

        <Modal className="modal-type" isOpen={isOpen} 
        onRequestClose={onRequestClose}
        
       
        
        >
          
     <div   className="react-modal-overlay">

         <button
className="react-modal-closer"
         type="button"
         onClick={onRequestClose}
         onSubmit={handleCreateNewTransaciton}


>
             <img src={closeImg} alt="Fechar modal"/>
         </button>

         <form className="container-form-modal">
         
          <h2>Cadastrar transação</h2>
          
        

          <input
          placeholder='Título'
          value={title}
          onChange={event => setTitle(event.target.value)}
          >
              
          </input>

         <input
          placeholder='Valor'
          type="number"
          onChange={event => setTitle(event.target.value)}

          
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
 onClick={() => {setType('deposit');}}

 >
    <img src={incomeImg} alt="entrada"/>
    <span>Entrada</span>

 </button>

 <button
 type="button"
 onClick={() => {setType('withdraw');}}
 >
    <img src={outcomeImg} alt="saída"/>
    <span>Saída</span>

 </button>

          </div>




          </div>
       
       
       
       
        </Modal>

    )
}