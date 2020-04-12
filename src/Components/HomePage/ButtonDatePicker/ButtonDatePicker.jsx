import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class ButtonDatePicker extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
    return(
        <div className="input-group">
            <input type="text" className="form-control" placeholder="12.04.2020" />
        </div>
    )

    }
}

export default ButtonDatePicker