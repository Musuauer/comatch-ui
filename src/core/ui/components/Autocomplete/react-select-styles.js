import { palette, typography } from '../../../styles/variables';

const optionColor = '#f2f9f9';

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
        minWidth: '90px',
        zIndex: 1,
    }),
    dropdownIndicator: () => ({
        height: '37px',
        width: '20px',
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
    input: (provided) => ({
        ...provided,
        fontSize: '14px',
        lineHeight: '20px',
    }),
    menu: (provided) => ({
        ...provided,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: '3px',
        borderBottomRightRadius: '3px',
        marginTop: 0,
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? optionColor : palette.white,
        color: state.isFocused ? palette.darkGray : palette.black,
        transition: 'background-color 250ms ease-out',
        fontSize: '14px',
        lineHeight: '20px',
        padding: '0 10px',
        '&:hover': {
            backgroundColor: optionColor,
            color: palette.darkGray,
            cursor: 'pointer',
        },
        '&:last-child': {
            borderBottomRightRadius: '3px',
            borderBottomLeftRadius: '3px',
        },
    }),
    multiValue: () => ({
        border: `1px solid ${palette.gray}`,
        borderRadius: '3px',
        color: palette.gray,
        fontSize: typography.fontSm,
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: '0 4px',
        marginRight: '10px',
        marginBottom: '3px',
        marginTop: '3px',
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
        paddingRight: '4px',
        position: 'relative',
        top: '2px',
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
