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
        background: `url('data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9LmNscy0ye2ZpbGw6IzQ0NDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmFycm93czwvdGl0bGU+PHJlY3QgY2xhc3M9ImNscy0xIiB3aWR0aD0iNC45NSIgaGVpZ2h0PSIxMCIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIxLjQxIDQuNjcgMi40OCAzLjE4IDMuNTQgNC42NyAxLjQxIDQuNjciLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMy41NCA1LjMzIDIuNDggNi44MiAxLjQxIDUuMzMgMy41NCA1LjMzIi8+PC9zdmc+') no-repeat right 2px center`,
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
    menuPortal: (provided) => ({
        ...provided,
        zIndex: 4,
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? palette.lightGray : palette.white,
        color: state.isFocused ? palette.darkGray : palette.black,
        transition: 'background-color 250ms ease-out',
        '&:hover': {
            backgroundColor: palette.lightGray,
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
};
