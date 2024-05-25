import { Typography } from "@components/ui";

export const SkillProgress = (props) => {
  //props
  const { name, value } = props;

  // Ограничил значение от 0 до 100
  const progressValue = Math.max(0, Math.min(100, value));

  return (
    <div className="skill-progress stack column">
      <div className="skill-progress__name stack align-center justify-space-between">
        <Typography weight="600">{name}</Typography>
        <Typography className="skill-progress__value">
          {progressValue}%
        </Typography>
      </div>
      <div className="skill-progress__bar">
        <span style={{ width: `${progressValue}%` }}></span>
      </div>
    </div>
  );
};
