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

  const Tag = tag || "button";

  const getClasses = () => {
    let classes = className ? `${className} button` : "button";

    const VARIANT = {
      transparent: " button--transparent",
      accent: " button--accent",
    };

    const SIZE = {
      M: " button--medium",
      S: " button--small",
    };

    classes += variant ? VARIANT?.[variant] : "";
    classes += size ? SIZE?.[size] : "";

    if (typeof upperCase === "boolean") {
      classes += " button--uppercase";
    }

    return classes;
  };

  if (href) {
    return (
      <Link className={getClasses()} href={href} disabled={disabled}>
        <span>{text}</span>
      </Link>
    );
  }

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
