import React, { Component } from 'react';

class UploadDownload extends Component {
    state = {};

    handleOnChange = event => {
        console.log(event.target);
    };

    render() {
        return (
            <div style={{ margin: '100px auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <input id="fileInput" type="file" onChange={this.handleOnChange} />
            </div>
        );
    }
}

export default UploadDownload;
