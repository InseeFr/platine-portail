import { useForm } from "hooks/useForm";
import { supportSchema } from "types/schemas";
import { SupportForm } from "./SupportForm";
import { Navigate } from "@tanstack/react-router";
import { useContactAssistance } from "gen/aiguillage/assistance";

export const OfflineSupport = ({ surveyId }: { surveyId: string }) => {
  const { register, handleSubmit, errors } = useForm(supportSchema);

  // TODO: check if it still works (old without authentication)
  const { mutateAsync, isSuccess, isError } = useContactAssistance();

  if (isError) {
    return (
      <Navigate to={"/mes-enquetes/$survey/contacter-assistance/erreur"} params={{ survey: surveyId }} />
    );
  }

  const onSubmit = handleSubmit(data =>
    mutateAsync({
      data: {
        auth: false,
        idec: data.idec,
        idue: undefined,
        questioningId: undefined,
        mailaddress: data.mailaddress,
        message: data.message,
        name: `${data.firstName} ${data.lastName}`,
        phonenumber: data.phonenumber,
        survey: surveyId,
        // TODO: remove "any" when schema is corrected
        mailobjet: data.mailObjet as any,
      },
    }),
  );

  return (
    <SupportForm
      surveyId={surveyId}
      isSuccess={isSuccess}
      errors={errors}
      register={register}
      onSubmit={onSubmit}
    />
  );
};
