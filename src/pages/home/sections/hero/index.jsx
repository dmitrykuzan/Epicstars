import { Button, Container, Typography } from "@components/ui";
import { useTranslation } from "@hooks";
import Image from "next/image";

export const Hero = () => {
  const t = useTranslation();

  return (
    <section className="hero">
      <Image
        className="hero__bg"
        src="img/hero/bg.svg"
        width="1440"
        height="750"
        alt="bg"
      />
      <Container>
        <div className="hero__wrapper">
          <div className="hero__content stack column">
            <div className="hero__text stack column">
              <Typography
                variant="h1"
                tag="h1"
                weight="800"
                className="hero__title"
                color="light"
                dangerouslySetInnerHTML={{
                  __html: t.title.epicstars.replace(
                    /\{\{([^}]*)\}\}/g,
                    (__, captureGroup) => {
                      return `<span>${captureGroup}</span>`;
                    }
                  ),
                }}
              ></Typography>
              <Typography
                variant="h2"
                tag="h2"
                weight="300"
                color="light"
                className="hero__subtitle"
              >
                {t.subtitle.support}
              </Typography>
            </div>
            <Button text={t.actions.start} upperCase={true} />
          </div>
          <Image
            className="hero__image"
            src="/img/hero/hero.png"
            width="703"
            height="656"
            alt="Hero image"
          />
        </div>
      </Container>
    </section>
  );
};
