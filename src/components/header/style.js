import styled from "styled-components";
import { Drawer, IconButton, List, ListItem } from "@material-ui/core";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 4rem;

  background-color: rgb(0, 1, 31, 0.75);

  position: fixed;
  z-index: 10;
`;
export const LogoContainer = styled.div``;

export const StyledButton = styled(IconButton)`
  width: 100%;
  height: 100%;
  svg {
    font-size: 3rem;
    color: var(--white);
  }
`;

export const StyledDrawer = styled(Drawer)`
  background-color: none !important;
`;

export const StyledList = styled(List)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: var(--main-dark);
  color: var(--text);

  @media (min-width: 768px) {
    flex-direction: row;
    background-color: transparent !important;
  }

  padding: 0 !important;
`;

export const StyledListItem = styled(ListItem)`
  flex: 1 1 0;

  display: flex;
  align-items: center;
  justify-content: center !important;
  text-align: center !important;

  list-style: none;

  font-size: 1.8rem !important;
  letter-spacing: 0.25em;
  text-align: center;

  height: 100%;

  cursor: pointer;

  transition: 0.6s cubic-bezier(0.9, 0.04, 0.38, 1);

  margin: 0;
  padding: 2rem !important;
  &:hover {
    background-color: rgb(10, 15, 45, 0.75);
  }

  @media (min-width: 768px) {
    font-size: 1.4rem !important;
    padding: 0 !important;
  }
`;

export const Nav = styled.nav`
  display: none;

  width: 50%;
  height: 100%;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavMobile = styled.nav`
  display: flex;

  @media (min-width: 768px) {
    display: none;
  }
`;
