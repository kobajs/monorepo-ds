'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tokens = _interopDefault(require('mono-ds-tokens'));

module.exports = {
  Button
};

function Button(props) {
  const {
    children
  } = props;
  const buttonStyle = {
    backgroundColor: tokens.palette.primary,
    padding: tokens.spacing.small
  };
  return React.createElement("button", {
    style: buttonStyle
  }, children);
}
