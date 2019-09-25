import React, { Component } from 'react';
import DropZone from '../../components/drop-zone/drop-zone.component';

class UploadDownload extends Component {
    state = {};

    handleOnChange = event => {
        console.log(event.target);
    };

    render() {
        return (
            <div style={{ margin: '100px auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <DropZone />
            </div>
        );
    }
}

export default UploadDownload;
