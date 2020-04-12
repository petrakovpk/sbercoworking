import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class ButtonDatePicker extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
    return(
        <div className="card">
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">Дата: </span>
            </div>
            <input type="text" className="form-control" placeholder="12.04.2020" />
        </div>
        </div>
    )

    }
}

export default ButtonDatePicker