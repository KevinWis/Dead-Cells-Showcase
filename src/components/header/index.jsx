import { useState } from "react";
import {
  StyledHeader,
  LogoContainer,
  Nav,
  NavMobile,
  StyledDrawer,
  StyledButton,
  StyledList,
  StyledListItem,
} from "./style";

import { BiMenu } from "react-icons/bi";
const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <StyledHeader>
      <LogoContainer>
        <img src="resources/images/logos/deadCellsLogo.svg" alt="Dead Cells" />
      </LogoContainer>
      <Nav>
        <StyledList>
          <StyledListItem>Trailer</StyledListItem>
          <StyledListItem>About</StyledListItem>
          <StyledListItem>DLC's</StyledListItem>
          <StyledListItem>Buy now</StyledListItem>
        </StyledList>
      </Nav>
      <NavMobile>
        <StyledButton>
          <BiMenu onClick={() => setIsDrawerOpen(!isDrawerOpen)} />
        </StyledButton>
        <StyledDrawer
          anchor={"top"}
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          <StyledList>
            <StyledListItem>Trailer</StyledListItem>
            <StyledListItem>About</StyledListItem>
            <StyledListItem>DLC's</StyledListItem>
            <StyledListItem>Buy now</StyledListItem>
          </StyledList>
        </StyledDrawer>
      </NavMobile>
    </StyledHeader>
  );
};

export default Header;
