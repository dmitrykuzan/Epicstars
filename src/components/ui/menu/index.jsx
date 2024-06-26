import Link from "next/link";
import { useTranslation } from "@hooks";
import { MENU } from "@utils";

export const Menu = (props) => {
  const { className, onClose } = props;

  // Використовуємо хук для перекладу
  const t = useTranslation();

  return (
    <nav className={className}>
      <ul className="menu__list stack align-center">
        {Object.entries(MENU).map(([key, value]) => (
          <li key={key} className="menu__item">
            <Link
              className="menu__item-link stack center"
              href={value}
              onClick={onClose}
            >
              {t.navigation[key]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
