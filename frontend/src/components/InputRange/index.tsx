import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css';

interface IInputRangeProps {
    dateRange: number
}
const InputRange = ({dateRange}: IInputRangeProps) => {

    const [defaultDate, setDefaultDate] = useState<Date>(new Date(new Date().setDate(new Date().getDate() - dateRange)));

    return(
        <div className="dsmeta-form-control-container">
            <DatePicker
                selected={defaultDate}
                onChange={(date: Date) => {setDefaultDate(date)}}
                className="dsmeta-form-control"
                dateFormat="dd/MM/yyyy"
            />
        </div>
    )
}

export default InputRange;