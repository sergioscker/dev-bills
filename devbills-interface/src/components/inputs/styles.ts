import { styled } from 'styled-components';
import { theme } from '../../styles/themes';

type ContainerProps = {
  $variant: 'black' | 'dark';
  $label: string;
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  width: 100%;

  label {
    color: ${theme.colors.white};
    font-size: 0.625rem;
  }

  input {
    height: 2.25rem;
    background-color: ${(props) => theme.colors[props.$variant]};
    padding: 0 0.75rem;
    color: ${theme.colors.neutral};
    font-size: 1rem;
    width: 100%;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    transition: all 100ms;

    &:focus {
      border-color: ${theme.colors.primary};
    }

    &::placeholder {
      color: ${theme.colors.neutral};
    }
  }
`;
