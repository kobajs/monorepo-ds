import React from 'react';
import tokens from 'mono-ds-tokens';

function Button(props) {
  const {
    children
  } = props;
  const buttonStyle = {
    color: tokens.palette.white,
    backgroundColor: tokens.palette.primary,
    padding: tokens.spacing.small
  };
  return React.createElement("button", {
    style: buttonStyle
  }, children);
}

export { Button };
