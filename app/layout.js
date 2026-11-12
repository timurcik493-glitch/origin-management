import "./globals.css";
import PageProgress from "./components/PageProgress";
import LoadingScreen from "./components/LoadingScreen";
import SidebarShell from "./components/SidebarShell";
import AutoAnimate from "./components/AutoAnimate";
import MagneticButtons from "./components/MagneticButton";
import TiltAuto from "./components/TiltAuto";
import ParallaxAuto from "./components/ParallaxAuto";
import SmoothScroll from "./components/SmoothScroll";
import PageTheme from "./components/PageTheme";
import PageTransition from "./components/PageTransition";

export const metadata = {
  title: "ORIGIN — образовательная платформа по менеджменту",
  description: "Полный курс: теория, функции, структуры, стратегия, лидерство",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <PageTheme />
        <SmoothScroll />
        <PageTransition />
        <LoadingScreen />
        <PageProgress />
        <SidebarShell />
        <AutoAnimate />
        <MagneticButtons />
        <TiltAuto />
        <ParallaxAuto />
        {children}
      </body>
    </html>
  );
}