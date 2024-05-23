import { ServicesCard } from "@components/cards";
import { Container } from "@components/ui";
import { useTranslation } from "@hooks";
import { SERVICES } from "@utils";

export const Services = () => {
  //translation
  const t = useTranslation();

  return (
    <section className="services">
      <Container>
        <ul className="services__list">
          {SERVICES.map(({ id, title, description, src }) => (
            <li className="services__item" key={id}>
              <ServicesCard
                src={src}
                title={t.title[title]}
                description={t.subtitle[description]}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
