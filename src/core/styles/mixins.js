import { breakpoints } from './variables';

const device = {
    // Desktop first
    mobile: `(max-width: ${breakpoints.xsMaxWidth})`,
    mobileLandscape: `screen and (orientation: landscape) and (max-width: ${breakpoints.smMaxWidth})`,
    // Mobile first
    mobileLarge: `(min-width: ${breakpoints.smWidth})`,
    tablet: `(min-width: ${breakpoints.mdWidth})`,
    desktop: `(min-width: ${breakpoints.lgWidth})`,
    desktopLarge: `(min-width: ${breakpoints.xlWidth})`,
};

const mixins = {
    device,
};

export { mixins, device };
