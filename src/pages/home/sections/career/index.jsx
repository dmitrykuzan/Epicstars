import { Container, Typography } from "@components/ui";
import { useTranslation } from "@hooks";
import { CAREER } from "@utils";

export const Career = () => {
  const t = useTranslation();

  return (
    <section className="career">
      <Container>
        <div className="career__wrapper stack column">
          <div className="career__text stack column">
            <Typography tag="h2" variant="h4" weight="500" color="blue" center>
              {t.title.career}
            </Typography>
            <Typography tag="h3" variant="h2" center>
              {t.title.team}
            </Typography>
          </div>
          <ul className="career__list">
            {CAREER.map(({ id, vacancy }) => (
              <li className="career__item card" key={id}>
                <Typography tag="p" weight="600" color="blue" center>
                  {t.common[vacancy]}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};
