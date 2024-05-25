import { useTranslation } from "@hooks";
import { Button } from "@components/ui";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";

export const Language = (props) => {
  //props
  const { className } = props;

  // Використовуємо хук для перекладу
  const t = useTranslation();
  // Використовуємо хук для перекладу

  // Використовуємо роутер для отримання даних про локаль і маршрут
  const { locales, asPath, push, locale: currentLocale } = useRouter();

  // Функція для обробки зміни локалі
  const handleLocale = (newLocale) => () => {
    const expires = new Date();
    // Встановлюємо термін дії кукі на 365 днів вперед від сьогоднішньої дати
    expires.setDate(expires.getDate() + 365);

    // Встановлюємо кукі з новою локаллю
    setCookie("NEXT_LOCALE", newLocale, {
      expires,
    });

    push(asPath, asPath, {
      locale: newLocale,
    });
  };

  return (
    <div
      className={
        className
          ? `${className} language stack align-center`
          : "language stack align-center"
      }
    >
      {locales?.map((lang) => {
        const isActive = lang === currentLocale;
        return (
          <Button
            key={lang}
            onClick={handleLocale(lang)}
            className={`language__button ${isActive ? "active" : ""}`}
            text={t.actions[lang]}
            size="S"
            variant="transparent"
          />
        );
      })}
    </div>
  );
};
