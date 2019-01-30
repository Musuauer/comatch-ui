import styled from 'styled-components';
import { palette } from '../../../styles/variables';

export const ItemStyledWrapper = styled.div`
    color: ${palette.black};
    padding: 5px 10px;

    &:hover {
        background-color: ${palette.lightGray};
        transition: background-color 250ms ease-out;
    }
`;

export const StyledWrapper = styled.div`
    overflow: hidden;
    border-radius: 5px;
    background-color: ${palette.white};
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.5);
`;
