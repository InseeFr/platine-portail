import { useTranslation } from "i18n/i18n";
import { declareComponentKeys } from "i18nifty";
import content from "resources/content.json";
import { ForgotPasswordForm } from "./ForgotPasswordForm";
import { useState } from "react";
import { useFetchMutationWithoutAuth } from "hooks/useFetchQuery";
import { useForm } from "hooks/useForm";
import { forgotPasswordForm } from "types/schemas";
import { TechnicalError } from "components/errorPages/TechnicalError";
import { ForgotPasswordValidated } from "./ForgotPasswordValidated";
import { PageWithCardContainer } from "components/commons/PageWithCardContainer";

export const ForgotPassword = ({ surveyId }: { surveyId: string }) => {
  const { t } = useTranslation("ForgotPassword");
  const titleShort = content.specifique.find(s => s.id === surveyId)?.titleShort;

  const { mutateAsync, isError } = useFetchMutationWithoutAuth("/reinit-password", "post");

  const [isSuccessPage, setIsSuccessPage] = useState(false);
  const { register, errors, handleSubmit } = useForm(forgotPasswordForm);

  const onSubmit = handleSubmit(data => {
    mutateAsync({ query: { idec: data.idec } });
    setIsSuccessPage(true);
  });

  if (isError) {
    return <TechnicalError surveyId={surveyId} />;
  }

  return (
    <PageWithCardContainer
      currentPageLabel={t("pageTitleForgotPassword")}
      surveyId={surveyId}
      titleShort={titleShort}
    >
      <h4>{t("sectionTitle")}</h4>
      {isSuccessPage ? (
        <ForgotPasswordValidated surveyId={surveyId} onClickToGoBack={() => setIsSuccessPage(false)} />
      ) : (
        <ForgotPasswordForm
          surveyId={surveyId}
          register={register}
          onSubmit={onSubmit}
          errors={errors}
        />
      )}
    </PageWithCardContainer>
  );
};

const { i18n } = declareComponentKeys<
  | "pageTitleForgotPassword"
  | "sectionTitle"
  | "information"
  | "idecHintText"
  | "submitButton"
  | "forgotPasswordHelpTitle"
  | "contactSupport"
  | "forgotPasswordHelp"
  | "alertText"
  | "alertTextEEC"
  | "goBackToConnexion"
  | "modifyIdentifier"
>()("ForgotPassword");

export type I18n = typeof i18n;
