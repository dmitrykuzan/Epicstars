import {
  Burger,
  BurgerMenu,
  Button,
  Container,
  Language,
  Logo,
  Menu,
} from "@components/ui";
import { useTranslation } from "@hooks";
import { useState } from "react";

export const Header = () => {
  //**Menu burger state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };
  //**Menu burger state

  // Використовуємо хук для перекладу
  const t = useTranslation();
  // Використовуємо хук для перекладу

  return (
    <>
      <BurgerMenu
        isMenuOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
      <div className="header">
        <Container>
          <div className="header__wrapper stack align-center justify-space-between">
            <div className="header__left stack align-center">
              <Logo src="img/ui/logo.svg" />
              <Language className="header__language" />
            </div>
            <Menu className="header__menu" />
            <div className="header__auth stack align-center">
              <Button text={t.actions.enter} size="S" variant="transparent" />
              <Button text={t.actions.registration} />
            </div>
            <Burger openMenu={openMenu} isMenuOpen={isMenuOpen} />
          </div>
        </Container>
      </div>
    </>
  );
};
