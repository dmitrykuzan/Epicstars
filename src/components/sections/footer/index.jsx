import { Button, Container, Input, Typography } from "@components/ui";
import { useTranslation } from "@hooks";
import Image from "next/image";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";

export const Footer = () => {
  const t = useTranslation();

  //**Local state для помилок і успішної заявки
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  //**react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    shouldFocusError: false,
  });

  //**onSubmit
  const onSubmit = async (data) => {
    try {
      setIsError(false);

      const resp = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
        }),
      });

      if (resp.status !== 200) {
        throw resp;
      }

      setIsSuccess(true);
      reset();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
      setIsError(true);
    }
  };

  //Переклади для сповіщень і помилок
  const required = t.common.required;
  const minlength = t.common.minlength;
  const minlength10 = t.common.minlength10;
  const maxlength12 = t.common.maxlength12;

  const validationRules = {
    name: {
      required: required,
      minLength: {
        value: 2,
        message: minlength,
      },
    },
    tel: {
      required: required,
      minLength: {
        value: 10,
        message: minlength10,
      },
      maxLength: {
        value: 12,
        message: maxlength12,
      },
    },
  };

  return (
    <footer className="footer">
      <div className="footer__bg">
        <img src="img/footer/bg.svg" width="1440" height="764" alt="bg" />
      </div>
      <Container>
        <div className="footer__wrapper stack column">
          <div className="footer__content stack align-center justify-space-between">
            <Image
              className="footer__image"
              src="/img/footer/teamwork.png"
              width="463"
              height="539"
              alt="Team Work"
            />
            <div className="footer__contact stack column">
              <div className="footer__text stack column">
                <Typography tag="h2" variant="p" color="light">
                  {t.title.contact}
                </Typography>
                <Typography tag="h3" variant="h3" color="light">
                  {t.title.callback}
                </Typography>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="footer__form">
                <ul className="footer__list stack column">
                  <li className="footer__item">
                    <Input
                      register={register}
                      validationRules={validationRules.name}
                      placeholder={t.actions.name}
                      name="name"
                    />
                    {errors.name && (
                      <span className="error-message">
                        {errors.name.message}
                      </span>
                    )}
                  </li>
                  <li className="footer__item">
                    <Input
                      register={register}
                      validationRules={validationRules.tel}
                      placeholder={t.actions.phone}
                      name="tel"
                    />
                    {errors.tel && (
                      <span className="error-message">
                        {errors.tel.message}
                      </span>
                    )}
                  </li>
                  <li className="footer__item">
                    <ReCAPTCHA
                      sitekey={"6LfZ_OYpAAAAABPgKKY8rxH6QgCg_gGMw8YQ8AmJ"}
                    />
                  </li>
                  <li className="footer__item">
                    <Button
                      disabled={formState.isSubmitting ? true : false}
                      type="submit"
                      variant="blue"
                      text={
                        formState.isSubmitting
                          ? t.actions.sending
                          : t.actions.send
                      }
                    />
                  </li>
                </ul>
                {isError && <p className="error-message">{t.common.failure}</p>}
                {isSuccess && (
                  <p className="success-message">{t.common.success}</p>
                )}
              </form>
            </div>
          </div>
          <div className="footer__policy stack center">
            <Typography tag="p" variant="p" color="light" center>
              {t.common.policy}
            </Typography>
          </div>
        </div>
      </Container>
    </footer>
  );
};
