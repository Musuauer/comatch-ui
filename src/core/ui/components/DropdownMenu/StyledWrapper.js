import styled from 'styled-components';
import { palette } from '../../../styles/variables';

export const ItemStyledWrapper = styled.div`
    background-color: transparent;
    color: ${palette.black};
    padding: 5px 10px;
    transition: background-color 250ms ease-out;

    &:hover {
        background-color: ${palette.lightGray};
    }
`;

export const StyledWrapper = styled.div`
    background-color: ${palette.white};
    border-radius: 5px;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
    overflow: hidden;
`;
