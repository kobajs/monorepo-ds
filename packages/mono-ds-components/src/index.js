"use strict";

import React from 'react';
import tokens from "mono-ds-tokens";

export function Button(props) {
  const { children } = props;

  const buttonStyle = {
    color: tokens.palette.white,
    backgroundColor: tokens.palette.primary,
    padding: tokens.spacing.small
  };

  return <button style={buttonStyle}>{children}</button>;
}
