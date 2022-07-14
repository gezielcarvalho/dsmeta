import InputRange from '../InputRange';
import NotificationButton from '../NotificationButton';
import SalesRow from '../SalesRow';
import { SalesTable } from '../SalesTable';
import './styles.css';

const SalesCard = () => {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <InputRange/>
                <InputRange/>
                <SalesTable>
                    <SalesRow sales_value={12345.67}/>
                    <SalesRow sales_value={1111.30}/>
                </SalesTable>
            </div>
        </div>
    )
}

export default SalesCard;