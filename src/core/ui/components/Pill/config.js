import { palette, typography } from '../../../styles/variables';

const SIZES = {
    XS: 'XS',
    SM: 'SM',
    MD: 'MD',
    LG: 'LG',
    XL: 'XL',
    XXL: 'XXL',
};

const SIZES_IN_PIXELS = {
    XS: {
        fontSize: typography.fontXs,
        lineHeight: typography.lineHeightXs,
    },
    SM: {
        fontSize: typography.fontSm,
        lineHeight: typography.lineHeightSm,
    },
    MD: {
        fontSize: typography.fontMd,
        lineHeight: typography.lineHeightMd,
    },
    LG: {
        fontSize: typography.fontLg,
        lineHeight: typography.lineHeightLg,
    },
    XL: {
        fontSize: typography.fontXl,
        lineHeight: typography.lineHeightXl,
    },
    XXL: {
        fontSize: typography.fontXxl,
        lineHeight: typography.lineHeightXxl,
    },
};

const TYPES = {
    DISABLED: 'DISABLED',
    ERROR: 'ERROR',
    INFO: 'INFO',
    PRIMARY: 'PRIMARY',
    SECONDARY: 'SECONDARY',
    SUCCESS: 'SUCCESS',
    WARN: 'WARN',
};

const TYPES_IN_COLOR = {
    DISABLED: {
        background: palette.lightGray,
        borderColor: palette.lightGray,
        color: palette.black,
    },
    ERROR: {
        background: palette.red,
        borderColor: palette.red,
        color: palette.white,
    },
    INFO: {
        background: palette.lightBlue,
        borderColor: palette.lightBlue,
        color: palette.black,
    },
    PRIMARY: {
        background: palette.primary,
        borderColor: palette.primary,
        color: palette.white,
    },
    SECONDARY: {
        background: palette.secondary,
        borderColor: palette.secondary,
        color: palette.white,
    },
    SUCCESS: {
        background: palette.green,
        borderColor: palette.green,
        color: palette.white,
    },
    WARN: {
        background: palette.orange,
        borderColor: palette.orange,
        color: palette.white,
    },
};

export { SIZES, SIZES_IN_PIXELS, TYPES, TYPES_IN_COLOR };
