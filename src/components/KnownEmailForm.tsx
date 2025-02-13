import Button from "@codegouvfr/react-dsfr/Button";
import { useNavigate } from "@tanstack/react-router";
import { useFetchMutationPortail } from "hooks/useFetchQuery";
import { useForm } from "hooks/useForm";
import { useTranslation } from "i18n/i18n";
import { useEffect } from "react";
import { knownEmailForm } from "types/schemas";
import { EmailInput } from "./UnknownEmailForm";
import { TechnicalError } from "./errorPages/TechnicalError";

export const KnownEmailForm = ({
  questioningUrl,
  surveyId,
  email,
}: {
  questioningUrl?: string;
  surveyId: string;
  email: string;
}) => {
  const { t } = useTranslation("EmailForm");
  const { register, errors, handleSubmit } = useForm(knownEmailForm, {
    defaultValues: { mailaddress: email },
  });
  const navigate = useNavigate();

  const { mutateAsync, isSuccess, isError } = useFetchMutationPortail("/repondant/mail", "put");

  useEffect(() => {
    if (isSuccess && questioningUrl) {
      window.location.href = questioningUrl;
    }
    if (isSuccess && !questioningUrl) {
      navigate({ to: "/" });
    }
  }, [isSuccess]);

  const onSubmit = handleSubmit(data => {
    if (email !== data.mailaddress) {
      mutateAsync({
        body: data.mailaddress,
      });
    } else {
      questioningUrl ? (window.location.href = questioningUrl) : navigate({ to: "/" });
    }
  });

  if (isError) {
    return <TechnicalError surveyId={surveyId} />;
  }

  return (
    <div>
      <h4>{t("knownEmailFormtitle")}</h4>
      <form action="#" onSubmit={onSubmit}>
        <EmailInput register={register} errors={errors} />

        <Button style={{ width: "100%" }} className="fr-grid-row fr-grid-row--center" type="submit">
          {t("submitKnownEmailForm")}
        </Button>
      </form>
    </div>
  );
};
