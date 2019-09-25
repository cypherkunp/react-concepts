import React, { Component } from 'react';

class XORComponent extends Component {
    state = { checkbox1Checked: true, checkbox2Checked: false };

    handleOnChange = event => {
        const { id } = event.currentTarget;
        this.setState({ [id + 'Checked']: !this.state[id + 'Checked'] });
    };

    render() {
        const { checkbox1Checked, checkbox2Checked } = this.state;
        const checkbox3Checked = checkbox1Checked ^ checkbox2Checked;

        return (
            <div style={{ margin: 150 }}>
                <h2>Problem Statement:</h2>
                <span>
                    Render three checkboxes. User should be able to set the first and the second checkbox. Third
                    checkbox should be an XOR (^) of the state of first and the second and should not be selectable.
                </span>
                <h3>Solution:</h3>
                <hr />
                <input type="checkbox" id="checkbox1" onChange={this.handleOnChange} checked={checkbox1Checked} />
                <input type="checkbox" id="checkbox2" onChange={this.handleOnChange} checked={checkbox2Checked} />
                <input type="checkbox" id="checkbox3" onChange={this.handleOnChange} checked={checkbox3Checked} />
            </div>
        );
    }
}

export default XORComponent;
