import { useTranslation } from "@hooks";
import { Button } from "@components/ui";

export const Language = (props) => {
  //props
  const { className } = props;

  const t = useTranslation();

  return (
    <div
      className={
        className
          ? `${className} language stack align-center`
          : "language stack align-center"
      }
    >
      <Button
        className="language__button"
        text={t.actions.eng}
        size="S"
        variant="transparent"
      />
      <span className="language__separator"></span>
      <Button
        className="language__button"
        text={t.actions.ru}
        size="S"
        variant="transparent"
      />
    </div>
  );
};
