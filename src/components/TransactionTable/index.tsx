import { useEffect } from 'react'
import '../../styles/transiction.css'
import { api } from '../services/api'

export function TransactionTable () {

    useEffect(() => {
        api.get('/transactions')
        .then(response =>  (response.data))
    }
    
    
    
    )


    return (
        <div className="dash-container">
           <thead>
           <tr>
               <th className="title">Título</th>
               <th>Valor</th>
               <th>Categoria</th>
               <th>Data</th>
           </tr>
           </thead>

           <tbody>
               <tr>
                   <td className="title">Desenvolvimento de website</td>
                   <td className="deposit">R$ 12.000,00</td>
                   <td>Desenvolvimento</td>
                   <td>20/02/2021</td>
               </tr>
           </tbody>

           <tbody>
               <tr>
                   <td className="title">Desenvolvimento de website</td>
                   <td className="withdraw"> --R$ 1.000,00</td>
                   <td>Desenvolvimento</td>
                   <td>20/02/2021</td>
               </tr>
           </tbody>

        </div>
    )
}