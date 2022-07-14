import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';

const InputRange = () => {
    return(
        <div className="dsmeta-form-control-container">
            <DatePicker
                selected={new Date()}
                onChange={(date: Date) => {}}
                className="dsmeta-form-control"
                dateFormat="dd/MM/yyyy"
            />
        </div>
    )
}

export default InputRange;