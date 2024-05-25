import { Container, Typography } from "@components/ui";
import { useTranslation } from "@hooks";
import Image from "next/image";

export const Choise = () => {
  const t = useTranslation();

  return (
    <section className="choise">
      <Container>
        <div className="choise__wrapper stack align-center justify-space-between">
          <div className="choise__content stack column">
            <div className="choise__text stack column">
              <div className="choise__titles">
                <Typography
                  className="choise__title"
                  tag="h2"
                  variant="h4"
                  color="blue"
                  weight="500"
                >
                  {t.title.choise}
                </Typography>
                <Typography
                  className="choise__subtitle"
                  tag="h2"
                  variant="h3"
                  color="black"
                  weight="700"
                >
                  {t.title.promotion}
                </Typography>
              </div>
              <Typography className="choise__description" tag="p" variant="p">
                {t.subtitle.benefits}
              </Typography>
            </div>
            <ul className="choise__list stack column">
              <li className="choise__item card stack align-center">
                <span className="choise__item-icon">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.6625 4.5876C11.8903 4.81541 11.8903 5.18475 11.6625 5.41256L8.16252 8.91256C7.93471 9.14037 7.56537 9.14037 7.33756 8.91256C7.10976 8.68476 7.10976 8.31541 7.33756 8.0876L9.84175 5.58341L0.75004 5.58341C0.427874 5.58341 0.166706 5.32225 0.166706 5.00008C0.166706 4.67792 0.427874 4.41675 0.75004 4.41675L9.84175 4.41675L7.33756 1.91256C7.10976 1.68475 7.10976 1.31541 7.33756 1.0876C7.56537 0.859796 7.93471 0.859796 8.16252 1.0876L11.6625 4.5876Z"
                      fill="#1074D8"
                    />
                  </svg>
                </span>
                <Typography tag="p" weight="600">
                  {t.common.employees}
                </Typography>
              </li>
              <li className="choise__item card stack align-center">
                <span className="choise__item-icon">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.6625 4.5876C11.8903 4.81541 11.8903 5.18475 11.6625 5.41256L8.16252 8.91256C7.93471 9.14037 7.56537 9.14037 7.33756 8.91256C7.10976 8.68476 7.10976 8.31541 7.33756 8.0876L9.84175 5.58341L0.75004 5.58341C0.427874 5.58341 0.166706 5.32225 0.166706 5.00008C0.166706 4.67792 0.427874 4.41675 0.75004 4.41675L9.84175 4.41675L7.33756 1.91256C7.10976 1.68475 7.10976 1.31541 7.33756 1.0876C7.56537 0.859796 7.93471 0.859796 8.16252 1.0876L11.6625 4.5876Z"
                      fill="#1074D8"
                    />
                  </svg>
                </span>
                <Typography tag="p" weight="600">
                  {t.common.employees}
                </Typography>
              </li>
              <li className="choise__item card stack align-center">
                <span className="choise__item-icon">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.6625 4.5876C11.8903 4.81541 11.8903 5.18475 11.6625 5.41256L8.16252 8.91256C7.93471 9.14037 7.56537 9.14037 7.33756 8.91256C7.10976 8.68476 7.10976 8.31541 7.33756 8.0876L9.84175 5.58341L0.75004 5.58341C0.427874 5.58341 0.166706 5.32225 0.166706 5.00008C0.166706 4.67792 0.427874 4.41675 0.75004 4.41675L9.84175 4.41675L7.33756 1.91256C7.10976 1.68475 7.10976 1.31541 7.33756 1.0876C7.56537 0.859796 7.93471 0.859796 8.16252 1.0876L11.6625 4.5876Z"
                      fill="#1074D8"
                    />
                  </svg>
                </span>
                <Typography tag="p" weight="600">
                  {t.common.employees}
                </Typography>
              </li>
              <li className="choise__item card stack align-center">
                <span className="choise__item-icon">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.6625 4.5876C11.8903 4.81541 11.8903 5.18475 11.6625 5.41256L8.16252 8.91256C7.93471 9.14037 7.56537 9.14037 7.33756 8.91256C7.10976 8.68476 7.10976 8.31541 7.33756 8.0876L9.84175 5.58341L0.75004 5.58341C0.427874 5.58341 0.166706 5.32225 0.166706 5.00008C0.166706 4.67792 0.427874 4.41675 0.75004 4.41675L9.84175 4.41675L7.33756 1.91256C7.10976 1.68475 7.10976 1.31541 7.33756 1.0876C7.56537 0.859796 7.93471 0.859796 8.16252 1.0876L11.6625 4.5876Z"
                      fill="#1074D8"
                    />
                  </svg>
                </span>
                <Typography tag="p" weight="600">
                  {t.common.employees}
                </Typography>
              </li>
              <li className="choise__item card stack align-center">
                <span className="choise__item-icon">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.6625 4.5876C11.8903 4.81541 11.8903 5.18475 11.6625 5.41256L8.16252 8.91256C7.93471 9.14037 7.56537 9.14037 7.33756 8.91256C7.10976 8.68476 7.10976 8.31541 7.33756 8.0876L9.84175 5.58341L0.75004 5.58341C0.427874 5.58341 0.166706 5.32225 0.166706 5.00008C0.166706 4.67792 0.427874 4.41675 0.75004 4.41675L9.84175 4.41675L7.33756 1.91256C7.10976 1.68475 7.10976 1.31541 7.33756 1.0876C7.56537 0.859796 7.93471 0.859796 8.16252 1.0876L11.6625 4.5876Z"
                      fill="#1074D8"
                    />
                  </svg>
                </span>
                <Typography tag="p" weight="600">
                  {t.common.employees}
                </Typography>
              </li>
              <li className="choise__item card stack align-center">
                <span className="choise__item-icon">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.6625 4.5876C11.8903 4.81541 11.8903 5.18475 11.6625 5.41256L8.16252 8.91256C7.93471 9.14037 7.56537 9.14037 7.33756 8.91256C7.10976 8.68476 7.10976 8.31541 7.33756 8.0876L9.84175 5.58341L0.75004 5.58341C0.427874 5.58341 0.166706 5.32225 0.166706 5.00008C0.166706 4.67792 0.427874 4.41675 0.75004 4.41675L9.84175 4.41675L7.33756 1.91256C7.10976 1.68475 7.10976 1.31541 7.33756 1.0876C7.56537 0.859796 7.93471 0.859796 8.16252 1.0876L11.6625 4.5876Z"
                      fill="#1074D8"
                    />
                  </svg>
                </span>
                <Typography tag="p" weight="600">
                  {t.common.employees}
                </Typography>
              </li>
            </ul>
          </div>

          <Image
            className="choise__image"
            src="/img/choise/choise.png"
            width="550"
            height="416"
            alt="choise image"
          />
        </div>
      </Container>
    </section>
  );
};
