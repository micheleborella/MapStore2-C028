/**
 * Copyright 2017, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React = require('react');
const PropTypes = require('prop-types');

class Header extends React.Component {

    static propTypes = {
        style: PropTypes.object,
        className: PropTypes.object
    };

    render() {
        return (
            <div style={this.props.style} className="mapstore-header"></div>
        );
    }
}

module.exports = {
    HeaderPlugin: Header
};
