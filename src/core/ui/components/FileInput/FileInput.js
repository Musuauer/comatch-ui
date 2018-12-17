import React, { Component } from 'react';
import PropTypes from 'prop-types';
import set from 'lodash/set';
import { Button } from '../Button';

import './FileInput.scss';

export class FileInput extends Component {
    static propTypes = {
        accept: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
            .isRequired,
        buttonText: PropTypes.string.isRequired,
        name: PropTypes.string,
        multiple: PropTypes.bool,
        onChange: PropTypes.func.isRequired,
    };

    static defaultProps = {
        name: null,
        multiple: false,
    };

    constructor(props) {
        super(props);

        this.fileInputRef = React.createRef();
    }

    generateAcceptValue(accept) {
        if (Array.isArray(accept)) {
            return accept.join(',');
        }
        return accept;
    }

    handleButtonClick = () => this.fileInputRef.current.click();

    handleChange = (event) => {
        this.props.onChange(event);
        // After calling the user defined onChange we have to reset the event.target.value
        // to empty string to "trick" the input into triggering another change event in case
        // the user selects the same file they did before for another consecutive time.
        set(event, 'target.value', '');
    }

    render() {
        const { accept, buttonText, multiple } = this.props;

        return (
            <div className="Input FileInput">
                <input
                    ref={this.fileInputRef}
                    type="file"
                    accept={this.generateAcceptValue(accept)}
                    onChange={this.handleChange}
                    multiple={multiple}
                />
                <Button text={buttonText} onClick={this.handleButtonClick} />
            </div>
        );
    }
}
