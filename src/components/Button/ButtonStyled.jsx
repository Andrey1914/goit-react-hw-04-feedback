import styled from '@emotion/styled';

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${p => p.theme.space[7]}px;
  border-radius: ${p => p.theme.radii.small};
  padding: ${p => p.theme.space[3]}px;
  cursor: pointer;
  border: ${p => p.theme.borders.none};
  box-shadow: 0px 3px 5px 1px rgba(45, 90, 124, 0.2);
  transition: background-color 250ms linear, transform 250ms ease-in-out;
  background-color: rgb(0, 157, 192);
  color: ${p => p.theme.colors.text};
  :hover,
  :focus {
    background-color: rgb(0, 91, 157);
    color: ${p => p.theme.colors.muted};
    transform: scale(1.08);
  }
`;
