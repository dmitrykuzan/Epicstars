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

  const Tag = tag || "div";

  const getClasses = () => {
    let classes = className ? `typography ${className}` : "typography";

    const VARIANT = {
      h1: " h1",
      h2: " h2",
      h3: " h3",
      h4: " h4",
      p: " p",
    };

    const WEIGHT = {
      300: " w-300",
      400: " w-400",
      400: " w-500",
      600: " w-600",
      700: " w-700",
      800: " w-800",
    };

    const COLOR = {
      light: " light",
      black: " black",
      blue: " blue",
      error: " error",
    };

    classes += variant ? VARIANT?.[variant] : "";
    classes += weight ? WEIGHT?.[weight] : "";
    classes += color ? COLOR?.[color] : "";

    if (typeof upperCase === "boolean") {
      classes += " text-uppercase";
    }

    if (typeof center === "boolean") {
      classes += " text-center";
    }

    return classes;
  };

  return (
    <Tag className={getClasses()} {...rest}>
      {children}
    </Tag>
  );
};
