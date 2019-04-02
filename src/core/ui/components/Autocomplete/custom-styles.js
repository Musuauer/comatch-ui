import { palette, typography } from '../../../styles/variables';

/**
 * Custom styles to adjust the react-select component so that
 * it conforms with the COMATCH styleguide
 *
 * @see https://react-select.com/styles#provided-styles-and-state
 */
export const customStyles = {
    control: () => ({
        border: 'none',
        position: 'relative',
        minWidth: 90,
        zIndex: 1,
    }),
    dropdownIndicator: () => ({
        height: '37px',
        width: 20,
        position: 'absolute',
        right: '.5px',
        top: '.5px',
        // This fix will remove the glossy background for select elements
        // from the Safari browser, while maintaing the default arrow icon
        /* eslint-disable max-len */
        background: 'none',
        /* eslint-enable max-len */
        svg: {
            display: 'none',
        },
    }),
    menu: (provided) => ({
        ...provided,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3,
        marginTop: 0,
    }),
    option: (provided, state) => ({
        ...provided,
        // backgroundColor: state.isFocused ? palette.lightGray : palette.white,
        backgroundColor: state.isFocused ? '#f2f9f9' : palette.white,
        color: state.isFocused ? palette.darkGray : palette.black,
        transition: 'background-color 250ms ease-out',
        fontSize: '14px',
        lineHeight: '20px',
        padding: '0 10px',
        '&:hover': {
            // backgroundColor: palette.lightGray,
            backgroundColor: '#f2f9f9',
            color: palette.darkGray,
            cursor: 'pointer',
        },
        '&:last-child': {
            borderBottomRightRadius: 3,
            borderBottomLeftRadius: 3,
        },
    }),
    multiValue: () => ({
        border: `1px solid ${palette.gray}`,
        borderRadius: 3,
        color: palette.gray,
        fontSize: typography.fontSm,
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: '0 4px',
        marginRight: 10,
        marginBottom: 3,
        marginTop: 3,
        '&:last-child': {
            marginRight: 0,
        }
    }),
    multiValueLabel: () => ({
        fontSize: typography.fontSm,
        padding: 0,
    }),
    multiValueRemove: () => ({
        fontSize: typography.fontSm,
        paddingRight: 4,
        position: 'relative',
        top: 2,
        '&:hover': {
            cursor: 'pointer',
        },
    }),
    clearIndicator: () => ({
        display: 'none',
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    valueContainer: (provided) => ({
        ...provided,
        padding: '5px 8px',
    }),
    loadingIndicator: () => ({
        display: 'none',
    }),
};
