import { Header } from './components/header'
import { Dashboard } from './components/Dashboard';
import './styles/global.css'
import Modal from 'react-modal'
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');



export function App(): JSX.Element {
 
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState (false);

function handleOpenNewTransactionModal() {
  setIsNewTransactionModalOpen(true);
}

function handleCloseNewTransactionModal() {
  setIsNewTransactionModalOpen(false)

}
return (
  <>

    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

    <Dashboard/>

   <NewTransactionModal 
   isOpen={isNewTransactionModalOpen}
  onRequestClose={handleCloseNewTransactionModal}
   
   />
  

   
 

  </>
  );
}