import React, { Component } from 'react';

class PwaInstaller extends Component {
  state = {
    installed: true
  }
  download = () => {
  }
  render() {
    const { installed } = this.state;
    return (
        !installed && (
            <div className="installer" onClick={this.download}>
                <div className="installer__btn" />
            </div>
        )
    )
  }
}

export default PwaInstaller;