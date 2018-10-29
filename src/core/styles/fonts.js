import { createGlobalStyle } from 'styled-components';

function injectFonts([atcRegularWoff, atcBoldWoff, atcRegularTtf, atcBoldTtf]) {
    return createGlobalStyle`
        @font-face {
            font-family: 'ATCOverlook';
            src: url(${atcRegularWoff}) format(woff), // Modern browsers
                url(${atcRegularTtf}) format(truetype); // Safari, Android, iOS font-weight: normal;
            font-style: normal;
        }
        @font-face {
            font-family: 'ATCOverlook';
            src: url(${atcBoldWoff}) format(woff), // Modern browsers
                url(${atcBoldTtf})format(truetype); // Safari, Android, iOS
            font-weight: bold;
            font-style: normal;
        }
    `;
}

export async function importFonts() {
    const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
    if (IS_DEVELOPMENT) {
        // Development env
        const [
            { default: atcRegularWoff },
            { default: atcBoldWoff },
            { default: atcRegularTtf },
            { default: atcBoldTtf },
        ] = await Promise.all([
            import('../fonts/ATCOverlook/atcoverlook_regular.woff'),
            import('../fonts/ATCOverlook/atcoverlook_bold.woff'),
            import('../fonts/ATCOverlook/atcoverlook_regular.ttf'),
            import('../fonts/ATCOverlook/atcoverlook_bold.ttf'),
        ]);
        return injectFonts([atcRegularWoff, atcBoldWoff, atcRegularTtf, atcBoldTtf]);
    }
    // Production env
    const CDN_URL = process.env.REACT_APP_CDN_URL;
    const fonts = [
        `${CDN_URL}/fonts/ATCOverlook/atcoverlook_regular.woff`,
        `${CDN_URL}/fonts/ATCOverlook/atcoverlook_bold.woff`,
        `${CDN_URL}/fonts/ATCOverlook/atcoverlook_regular.ttf`,
        `${CDN_URL}/fonts/ATCOverlook/atcoverlook_bold.ttf`,
    ];
    return injectFonts(fonts);
}
