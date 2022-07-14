import NotificationButton from '../NotificationButton';
import './styles.css';

interface ISalesRowProps {
  sales_value: number;
}

const SalesRow = ({sales_value} : ISalesRowProps) => {
  const dollarUSLocale = Intl.NumberFormat('en-US');
  return (
    <tr>
        <td className="show992">#341</td>
        <td className="show576">08/07/2022</td>
        <td>Anakin</td>
        <td className="show992">15</td>
        <td className="show992">11</td>
        <td>U$ {dollarUSLocale.format(sales_value)}</td>
        <td>
            <div className="dsmeta-red-btn-container">
            <NotificationButton />
            </div>
        </td>
        </tr>
  )
}

export default SalesRow