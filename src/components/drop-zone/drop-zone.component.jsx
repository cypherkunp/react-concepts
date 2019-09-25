import React, { Component, createRef } from 'react';
import { GoCloudUpload } from 'react-icons/go';

import './drop-zone.styles.css';

class DropZone extends Component {
    state = {
        highLightColor: null
    };

    fileInputRef = createRef();

    openFileDialog = () => {
        if (this.props.disabled) return;
        this.fileInputRef.current.click();
    };

    handleOnFilesAdd = event => {
        const { disabled, onFilesAdd } = this.props;

        if (disabled) return;
        const files = event.target.files;
        console.log(files, typeof files, Array.isArray(files));

        if (onFilesAdd) {
            onFilesAdd([...files]);
        }
    };

    handleOnDragOver = event => {
        event.preventDefault();

        if (this.props.disabled) return;
        this.setState({ highLightColor: '#f5f1ae' });
    };

    handleOnDragLeave = () => {
        this.setState({ highLightColor: null });
    };

    handleOnDrop = event => {
        event.preventDefault();

        const { disabled, onFilesAdd } = this.props;

        if (disabled) return;
        if (onFilesAdd) {
            onFilesAdd([...event.dataTransfer.files]);
        }
        this.setState({ highLightColor: '#b8e3aa' });
    };

    componentDidUpdate = () => {
        if (this.props.disabled) {
            this.setState({ highLightColor: '#e8e1e6' });
        }
    };

    render() {
        const { disabled } = this.props;

        return (
            <div
                className={`drop-zone `}
                style={{ cursor: disabled ? 'cursor' : 'pointer', backgroundColor: this.state.highLightColor || '' }}
                onClick={this.openFileDialog}
                onDragOver={this.handleOnDragOver}
                onDragLeave={this.handleOnDragLeave}
                onDrop={this.handleOnDrop}
            >
                <GoCloudUpload className="upload-icon" />
                <input
                    ref={this.fileInputRef}
                    className="file-input"
                    style={{ display: 'none' }}
                    type="file"
                    multiple
                    onChange={this.handleOnFilesAdd}
                />

                <span>Upload Files</span>
            </div>
        );
    }
}

export default DropZone;
