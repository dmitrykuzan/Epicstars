import Link from "next/link";

export const Button = (props) => {
  const {
    tag = "button",
    variant = "accent",
    size = "M",
    text,
    href,
    onClick,
    className,
    upperCase,
    disabled = false,
    type = "button",
  } = props;

  //тег для кнопки
  const Tag = tag || "button";

  //функ. для отримання класів
  const getClasses = () => {
    let classes = className ? `${className} button` : "button";

    //Варіанти для кнопок по дизайну
    const VARIANT = {
      transparent: " button--transparent",
      accent: " button--accent",
      blue: " button--blue",
    };

    //В дизайні у нас є кнопки просто з текстом та с бекграундом. М - с бекграундом, S - с текстом без бг.
    const SIZE = {
      M: " button--medium",
      S: " button--small",
    };

    //конкатинуємо пропси до нашого класу
    classes += variant ? VARIANT?.[variant] : "";
    classes += size ? SIZE?.[size] : "";

    //якщо є пропс upperCase додай класс button--uppercase
    if (typeof upperCase === "boolean") {
      classes += " button--uppercase";
    }

    return classes;
  };

  //Для посилання
  if (href) {
    return (
      <Link className={getClasses()} href={href} disabled={disabled}>
        <span>{text}</span>
      </Link>
    );
  }

  //Для кнопки с довільним тегом
  return (
    <Tag
      onClick={onClick}
      className={getClasses()}
      type={type}
      disabled={disabled}
    >
      <span>{text}</span>
    </Tag>
  );
};
