import { Button, Language, Menu } from "@components/ui";
import { useOnClickOutside, useTranslation } from "@hooks";
import { useRef } from "react";

export const BurgerMenu = (props) => {
  const { isMenuOpen, onClose } = props;

  //useClickOutside - хук для закриття чого завгодно, якщо клік був не по єлементу в який передали ref
  const ref = useRef();
  useOnClickOutside(ref, onClose);
  //useClickOutside - хук для закриття чого завгодно, якщо клік був не по єлементу в який передали ref

  // Використовуємо хук для перекладу
  const t = useTranslation();
  // Використовуємо хук для перекладу

  return (
    <div
      ref={ref}
      className={
        isMenuOpen ? "burger__menu burger__menu--active" : "burger__menu"
      }
    >
      <div className="burger__menu-wrapper stack column">
        <button className="burger__menu-close" onClick={onClose}></button>
        <div className="burger__menu-body stack column align-center">
          <Menu onClose={onClose} className="burger__menu-list" />
          <div className="burger__menu-auth stack align-center">
            <Button
              className="burger__menu-enter"
              text={t.actions.enter}
              size="S"
              variant="transparent"
            />
            <Button text={t.actions.registration} />
          </div>
          <Language className="burger__menu-language" />
        </div>
      </div>
    </div>
  );
};
