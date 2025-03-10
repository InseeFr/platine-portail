import { useForm } from "hooks/useForm";
import { supportSchema } from "types/schemas";
import { Loading } from "./Loading";
import { SupportForm } from "./SupportForm";
import { Navigate } from "@tanstack/react-router";
import { useGetUrlRedirection } from "gen/aiguillage/access";
import { useContactAssistance } from "gen/aiguillage/assistance";

export const AuthenticatedSupport = ({
  surveyId,
  questioningId,
}: {
  surveyId: string;
  questioningId?: string;
}) => {
  const { register, handleSubmit, errors } = useForm(supportSchema);

  const { data: questioningUrlData, isLoading } = useGetUrlRedirection();

  // TODO: check if it still works (old without authentication)
  const { mutateAsync, isSuccess, isError } = useContactAssistance();

  if (!questioningUrlData || isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <Navigate to={"/mes-enquetes/$survey/contacter-assistance/erreur"} params={{ survey: surveyId }} />
    );
  }

  const onSubmit = handleSubmit(data =>
    mutateAsync({
      data: {
        auth: true,
        idec: data.idec,
        idue: questioningUrlData[0].idUE,
        questioningId: questioningId ? parseInt(questioningId) : undefined,
        mailaddress: data.mailaddress,
        message: data.message,
        name: `${data.firstName} ${data.lastName}`,
        phonenumber: data.phonenumber,
        survey: surveyId,
        mailobjet: data.mailObjet,
      },
    }),
  );

  return (
    <SupportForm
      surveyId={surveyId}
      errors={errors}
      register={register}
      onSubmit={onSubmit}
      isSuccess={isSuccess}
    />
  );
};
