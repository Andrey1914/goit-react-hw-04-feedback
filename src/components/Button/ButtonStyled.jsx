import styled from '@emotion/styled';

export const Btn = styled.button`
  width: ${p => p.theme.space[7]}px;
  height: ${p => p.theme.space[5]}px;
  border-radius: ${p => p.theme.radii.normal};
  padding: ${p => p.theme.space[2]}px;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  cursor: pointer;
  border: ${p => p.theme.borders.none};
  box-shadow: 0px 3px 5px 1px rgba(45, 90, 124, 0.2);
  transition: background-color 250ms linear, transform 250ms ease-in-out;
  background-color: rgb(101, 227, 255);
  color: ${p => p.theme.colors.text};
  :hover,
  :focus {
    background-color: rgb(0, 149, 255);
    color: ${p => p.theme.colors.textHover};
    transform: scale(1.08);
  }
`;
