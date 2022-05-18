import '../../styles/summary.css'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary () {
    return (
        <div className='container-summary'>
     <div className="div-summay">
<header>
    <p>Entradas</p>
    <img src={incomeImg} alt="Entradas"/>
</header>
<strong>R$1.000,00</strong>
     </div>
     <div className="div-summay">
<header>
    <p>Saídas</p>
    <img src={outcomeImg} alt="Entradas"/>
</header>
<strong>R$500,00</strong>
     </div>
     <div className="div-summay">
<header>
    <p>Total</p>
    <img src={totalImg} alt="Entradas"/>
</header>
<strong>R$500,00</strong>
     </div>
</div>

     
        
    );
}