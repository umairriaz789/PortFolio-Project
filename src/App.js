import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/common/Container.styled";
import { NavBar } from "./components/layout/NavBar";
import { GlobalStyles } from "./components/styles/Globals.styled";
import { HeroSection } from "./components/sections/HeroSection";
import { TopBanner } from "./components/layout/TopBanner";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { ContactSection } from "./components/sections/ContactSection";
import { Footer } from "./components/layout/Footer";

const theme = {
  colors: {
    white: "rgba(240, 247, 255, 1)",
    navyBlue: "rgba(2, 12, 27, 1)",
    lightNavyBlue: "rgba(4, 22, 48, 1)",
    green: "rgba(0, 206, 158, 1)",
    orange: "rgb(249, 105, 14)",
    purple: "rgba(102, 51, 153, 1)",
  },
  mobile: "768px",
  transition: "all 650ms ease-in-out",
};

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <TopBanner />
        <NavBar />
        <HeroSection />
        <Container>
          <AboutSection />
          <ProjectsSection />
          <ServicesSection />
          <ContactSection />
          {/* <CourseSection /> */}
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
