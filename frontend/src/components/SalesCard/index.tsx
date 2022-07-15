import InputRange from '../InputRange';
import SalesRow from '../SalesRow';
import { SalesTable } from '../SalesTable';
import './styles.css';

const SalesCard = () => {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <InputRange dateRange={365}/>
                <InputRange dateRange={0}/>
                <SalesTable>
                    <SalesRow sales_value={12345.67}/>
                    <SalesRow sales_value={1111.30}/>
                </SalesTable>
            </div>
        </div>
    )
}

export default SalesCard;