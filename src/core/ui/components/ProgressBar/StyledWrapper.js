import styled from 'styled-components';
import { palette, typography } from '../../../styles/variables.js';

export const StyledWrapper = styled.div`
    .ProgressBar {
        position: relative;
        height: 20px;
        border: solid 1px ${palette.midGray};
        border-radius: 3px;
        background-color: ${palette.white};

        &__label {
            color: ${palette.darkGray};
            text-align: right;

            &--left {
                text-align: left;
            }

            &--lightVersion {
                color: ${palette.midGray};
                font-weight: normal;
            }
        }

        &__squareEnds--right {
            border-radius: 0 3px 3px 0;
        }

        &__squareEnds--left {
            border-radius: 3px 0 0 3px;
        }

        &__progress {
            height: 100%;
            border-radius: 3px 0 0 3px;
            transform: scaleX(0);
            transition: transform 0.5s ease-out;
            transform-origin: left;
            background-color: ${palette.primary};

            &.reverse {
                transform-origin: right;
                border-radius: 0 3px 3px 0;
            }

            &.squareEnds {
                border-radius: 0;
            }

            &.full {
                border-radius: 3px;
            }
        }

        &__progress-label {
            font-size: ${typography.fontXs};
            position: absolute;
            top: 0;
            color: ${palette.primary};
            text-align: left;

            &.ProgressBar__progress-label-lightVersion {
                color: ${palette.lightSecondary};
                font-weight: bold;
            }

            &.ProgressBar__progress-label-left {
                color: ${palette.white};
                text-align: right;
                font-weight: bold;
            }
        }

        // states
        &--secondaryColor {
            .ProgressBar__progress {
                background-color: ${palette.secondary};
            }
        }

        &--greyBackground {
            background-color: ${palette.midGray};
            border: 0;
        }

        &--danger {
            .ProgressBar__progress {
                background-color: ${palette.darkRed};
            }

            .ProgressBar__progress-label {
                color: ${palette.darkRed};
            }
        }

        &--warning {
            .ProgressBar__progress {
                background-color: ${palette.darkOrange};
            }

            .ProgressBar__progress-label {
                color: ${palette.white};
            }
        }

        &--lightVersion {
            .ProgressBar__progress {
                background-color: ${palette.lightSecondary};
            }
        }
    }
`;
