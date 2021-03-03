import { Container, Overlay, LateralSection, Scroll } from "./style";
const Home = () => {
  return (
    <Container>
      <Overlay>
        <LateralSection className="left">
          <img src="resources/images/misc/character.svg" alt="Character" />
        </LateralSection>
        <LateralSection className="right">
          <img src="resources/images/logos/deadCellsLogo.svg" alt="DeadCells" />
        </LateralSection>
        <Scroll>
          <div className="text">Scroll</div>
          <div className="bar" />
        </Scroll>
      </Overlay>
    </Container>
  );
};
export default Home;
