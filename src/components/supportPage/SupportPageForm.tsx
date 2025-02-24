import { fr } from "@codegouvfr/react-dsfr";
import Button from "@codegouvfr/react-dsfr/Button";
import { Select } from "@codegouvfr/react-dsfr/SelectNext";
import { Navigate, useSearch } from "@tanstack/react-router";
import { DSFRHide } from "components/commons/DSFRHide";
import { SupportFormPart } from "components/commons/SupportFormPart";
import { useFetchMutationWithoutAuth } from "hooks/useFetchQuery";
import { useForm } from "hooks/useForm";
import { useTranslation } from "i18n";
import { useEffect, useRef } from "react";
import type { APISchemas } from "types/apiPortail";
import { MailObjectEnum } from "types/mailObjectEnum";
import { extendedSupportSchema } from "types/schemas";

type Props = {
  sources?: APISchemas["SourceOngoingDto"][];
};

export const SupportPageForm = ({ sources }: Props) => {
  const { t } = useTranslation("Support");
  const { t: supportFormTranslation } = useTranslation("SupportForm");

  const searchParams: Record<string, unknown> = useSearch({ from: "/assistance" });
  const defaultValues = searchParams?.["mot-de-passe-oublie"] ? { mailObjet: MailObjectEnum[1] } : {};
  const { register, handleSubmit, errors } = useForm(extendedSupportSchema, {
    defaultValues: defaultValues,
  });
  const { mutateAsync, isSuccess, isError } = useFetchMutationWithoutAuth("/e-mail", "post");

  const containerRef = useRef<HTMLDivElement>(null);

  const sourcesOptions =
    sources?.map(source => {
      return {
        value: source.id ?? "",
        label: source.label ?? "",
      };
    }) ?? [];

  useEffect(() => {
    containerRef.current?.scrollIntoView({
      block: "start",
    });
  }, [isSuccess]);

  if (isError) {
    return <Navigate to={"/erreur"} />;
  }

  if (isSuccess) {
    return (
      <div ref={containerRef} className={fr.cx("fr-col")}>
        <h3 className={fr.cx("fr-mb-1v")}>{t("FAQ form title")}</h3>
        <h3>{t("contact us")}</h3>
        <div className={fr.cx("fr-alert", "fr-alert--success", "fr-mb-5w", "fr-mb-md-0")}>
          <p>{supportFormTranslation("successAlert")}</p>
        </div>
      </div>
    );
  }

  const onSubmit = handleSubmit(data =>
    mutateAsync({
      body: {
        auth: false,
        idec: data.idec,
        idue: undefined,
        questioningId: undefined,
        mailaddress: data.mailaddress,
        message: data.message,
        name: `${data.firstName} ${data.lastName}`,
        phonenumber: data.phonenumber,
        survey: data.survey,
        mailobjet: data.mailObjet,
      },
    }),
  );

  return (
    <div className={fr.cx("fr-col")} ref={containerRef}>
      <h3 className={fr.cx("fr-mb-1v")}>{t("FAQ form title")}</h3>
      <h3>{t("contact us")}</h3>
      <p className={fr.cx("fr-text--sm")}>{supportFormTranslation("mandatory fields")}</p>
      <form action="#" onSubmit={onSubmit}>
        <Select
          label={t("survey")}
          nativeSelectProps={{
            ...register("survey"),
            id: "survey",
            ...(errors.survey ? { "aria-invalid": true, "aria-errormessage": `survey-desc` } : {}),
          }}
          options={sourcesOptions}
          placeholder={supportFormTranslation("objectPlaceholder")}
          state={errors.survey ? "error" : "default"}
          stateRelatedMessage={
            errors.survey?.message && supportFormTranslation(errors.survey?.message as keyof typeof t)
          }
        />
        {!errors.survey && (
          <DSFRHide hidden>
            <p id={"survey-desc"} />
          </DSFRHide>
        )}
        <SupportFormPart
          errors={errors}
          register={register}
          objectOptions={MailObjectEnum.filter(val =>
            ["perteIdentifiant", "perteMotDePasse", "autre"].includes(val),
          )}
        />
        <DSFRHide hidden unhidden unhiddenScreenSize="md">
          <Button type="submit">{supportFormTranslation("submit")}</Button>
        </DSFRHide>

        <DSFRHide hidden unhidden hiddenScreenSize="md">
          <Button className={fr.cx("fr-grid-row--center")} style={{ width: "100%" }} type="submit">
            {supportFormTranslation("submit")}
          </Button>
        </DSFRHide>
      </form>
    </div>
  );
};
