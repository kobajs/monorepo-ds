import tokens from 'mono-ds-tokens';

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
