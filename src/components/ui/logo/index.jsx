import Link from "next/link";

export const Logo = (props) => {
  //props
  const { src, className } = props;

  const logoClassName = className ? `logo ${className}` : "logo";

  return (
    <div className={logoClassName}>
      <Link href="/">
        <img src={src} width="70" height="40" alt="Logo" loading="eager" />
      </Link>
    </div>
  );
};
