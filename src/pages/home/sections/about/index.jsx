import { Container, SkillProgress, Typography } from "@components/ui";
import { useTranslation } from "@hooks";
import { SKILLS } from "@utils";
import Image from "next/image";

export const About = () => {
  const t = useTranslation();

  return (
    <section className="about">
      <Container>
        <div className="about__wrapper stack align-center justify-space-between">
          <Image
            className="about__image"
            src="/img/about/about.png"
            width="550"
            height="416"
            alt="About image"
          />

          <div className="about__content stack column">
            <div className="about__text stack column">
              <div className="about__titles">
                <Typography
                  className="about__title"
                  tag="h2"
                  variant="h4"
                  color="blue"
                  weight="500"
                >
                  {t.title.about}
                </Typography>
                <Typography
                  className="about__subtitle"
                  tag="h2"
                  variant="h3"
                  color="black"
                  weight="700"
                >
                  {t.title.mission}
                </Typography>
              </div>
              <Typography className="about__description" tag="p" variant="p">
                {t.subtitle.services}
              </Typography>
            </div>
            <ul className="about__list stack column">
              {SKILLS.map(({ id, name, value }) => (
                <li key={id}>
                  <SkillProgress name={t.title[name]} value={value} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
