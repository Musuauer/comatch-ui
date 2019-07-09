import { BACKGROUND_COLOR, FONT_COLOR } from '../config';
import { palette } from '../../../../styles/variables';

function background({ backgroundColor }) {
    return palette[BACKGROUND_COLOR[backgroundColor] || BACKGROUND_COLOR.WHITE];
}

function border({ bordered }) {
    return bordered ? `1px solid ${palette.gray}` : 'none';
}

function display({ inline }) {
    return inline ? 'inline-flex' : 'flex';
}

function fontColor({ backgroundColor }) {
    return palette[FONT_COLOR[backgroundColor] || FONT_COLOR.WHITE];
}

function wrapValue({ wrap }) {
    return wrap ? 'wrap' : 'nowrap';
}

export { background, border, display, fontColor, wrapValue };
