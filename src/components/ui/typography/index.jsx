export const Typography = (props) => {
  // **Props
  const {
    tag,
    weight,
    color,
    className,
    variant,
    upperCase,
    center,
    children,
    ...rest
  } = props;

  // Визначаємо тег, який буде використаний (за замовчуванням "div")
  const Tag = tag || "div";

  // Функція для отримання класів CSS
  const getClasses = () => {
    let classes = className ? `typography ${className}` : "typography";

    // Мапінг для варіантів типографіки
    const VARIANT = {
      h1: " h1",
      h2: " h2",
      h3: " h3",
      h4: " h4",
      p: " p",
    };

    // Мапінг для ваги шрифту
    const WEIGHT = {
      300: " w-300",
      400: " w-400",
      500: " w-500",
      600: " w-600",
      700: " w-700",
      800: " w-800",
    };

    // Мапінг для кольорів
    const COLOR = {
      light: " light",
      black: " black",
      blue: " blue",
      error: " error",
    };

    // Додаємо відповідні класи, якщо вони передані через пропси
    classes += variant ? VARIANT?.[variant] : "";
    classes += weight ? WEIGHT?.[weight] : "";
    classes += color ? COLOR?.[color] : "";

    // Додаємо клас для верхнього регістру, якщо upperCase=true
    if (typeof upperCase === "boolean") {
      classes += " text-uppercase";
    }

    // Додаємо клас для центрування тексту, якщо center=true
    if (typeof center === "boolean") {
      classes += " text-center";
    }

    return classes; // Повертаємо згенеровані класи
  };

  return (
    <Tag className={getClasses()} {...rest}>
      {children}
    </Tag>
  );
};
