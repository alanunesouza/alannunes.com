import styled from 'styled-components';
import * as V from '../../styles/variables';

export const Search = styled.section`
  display: block;

  .ais {
    &-InstantSearch__root {
      position: relative;
    }

    &-SearchBox {
      margin-bottom: ${V.Size.md};
      position: relative;

      &-input {
        -webkit-appearance: none;
        border: 2px solid ${(props) => props.theme.primary};
        background-color: ${V.Color.grayLighter};
        display: block;
        font-size: 1.8rem;
        height: ${V.Size.lg};
        width: 100%;
        padding: 1rem;
        border-radius: 5px;
      }

      &-reset,
      &-submit {
        align-items: center;
        border-width: 0;
        cursor: pointer;
        display: flex;
        height: 100%;
        justify-content: center;
        position: absolute;
        right: 0;
        top: 0;
        transition: color ${V.Transition.default};
        width: ${V.Size.lg};
        will-change: color;
      }

      &-reset {
        border: none;
        margin-right: ${V.Size.lg};

        &[hidden] {
          display: none;
        }
      }

      &-submitIcon {
        height: ${V.Size.sm};
        width: ${V.Size.sm};
      }
    }

    &-Stats {
      margin-bottom: ${V.Size.xs};

      span {
        color: ${(props) => props.theme.primary};
        font-size: 1.4rem;
      }
    }
  }
`;
