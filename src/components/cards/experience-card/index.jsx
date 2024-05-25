import { Typography } from "@components/ui";

export const ExperienceCard = (props) => {
  //props
  const { src, count, text } = props;

  return (
    <div className="experience-card stack align-center">
      <div className="experience-card__image">
        <img src={src} width="77" height="55" alt={text} />
      </div>
      <div className="experience-card__body stack column">
        <Typography
          tag="span"
          variant="h4"
          weight="700"
          className="experience-card__count"
          color="blue"
        >
          {count} +
        </Typography>
        <Typography
          className="experience-card__count"
          color="blue"
          weight="500"
        >
          {text}
        </Typography>
      </div>
    </div>
  );
};
