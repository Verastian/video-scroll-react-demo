import Navbar from './components/Navbar/Navbar';
import ScrollSection from './components/ScrollSection/ScrollSection';
import Spacer from './components/Spacer/Spacer';
import { useNavbarScroll } from './hooks/useNavbarScroll';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const isScrolled = useNavbarScroll();
  const { theme, toggle } = useTheme();

  return (
    <>
      <Navbar isScrolled={isScrolled} theme={theme} onThemeToggle={toggle} />
      <main>
        <ScrollSection />
        <Spacer />
      </main>
    </>
  );
}
