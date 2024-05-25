import { ExperienceCard } from "@components/cards";
import { Container, Typography } from "@components/ui";
import { useTranslation } from "@hooks";
import { EXPERIENCE } from "@utils";

export const Experience = () => {
  const t = useTranslation();

  return (
    <section className="experience">
      <Container>
        <div className="experience__wrapper stack column">
          <Typography tag="h2" variant="h2" weight="700" color="blue" center>
            {t.title.experience}
          </Typography>

          <ul className="experience__list">
            {EXPERIENCE.map(({ id, src, count, text }) => (
              <li className="experience__item stack " key={id}>
                <ExperienceCard src={src} count={count} text={t.common[text]} />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
