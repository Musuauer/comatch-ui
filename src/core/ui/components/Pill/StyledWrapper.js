import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { SIZES_IN_PIXELS, TYPES_IN_COLOR } from './config';
import { palette } from '../../../styles/variables';

function generateStyling({ size, type }) {
  const colorSpecs = TYPES_IN_COLOR[type] || {
    background: 'transparent',
    borderColor: palette.black,
    color: palette.black,
  };
  const fontSpecs = SIZES_IN_PIXELS[size] || SIZES_IN_PIXELS.XS;

  return `
    background-color: ${colorSpecs.background};
    border: 1px solid ${colorSpecs.borderColor};
    color: ${colorSpecs.color};
    font-size: ${fontSpecs.fontSize};
    line-height: ${fontSpecs.lineHeight};
  `;
}

const Node = forwardRef(({ size, type, ...rest }, ref) => <div {...rest} ref={ref} />);
const StyledWrapper = styled(Node)`
  align-content: center;
  border-radius: 15px;
  display: inline-flex;
  font-weight: bold;
  justify-content: center;
  overflow: hidden;
  padding: 5px 10px;

  ${generateStyling}
`;

export { StyledWrapper };
