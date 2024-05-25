import { Button, Typography } from "@components/ui";
import { useTranslation } from "@hooks";
import Image from "next/image";

export const ServicesCard = (props) => {
  //props
  const { src, title, description } = props;

  // Використовуємо хук для перекладу
  const t = useTranslation();
  // Використовуємо хук для перекладу

  return (
    <div className="services__card">
      <div className="services__card-wrapper stack column center">
        <Image src={src} width="64" height="64" alt={title} loading="lazy" />
        <Typography
          className="services__card-title"
          tag="h3"
          variant="h4"
          color="black"
          weight="700"
          center
        >
          {title}
        </Typography>
        <Typography className="services__card-text" variant="p" tag="p" center>
          {description}
        </Typography>
        <Button
          className="services__card-button"
          variant="transparent"
          color="blue"
          text={t.actions.more}
        />
      </div>
    </div>
  );
};
