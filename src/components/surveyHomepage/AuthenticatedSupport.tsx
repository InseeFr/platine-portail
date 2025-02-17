import { useFetchMutationWithoutAuth, useFetchQueryPortail } from "hooks/useFetchQuery";
import { useForm } from "hooks/useForm";
import { supportSchema } from "types/schemas";
import { Loading } from "./Loading";
import { SupportForm } from "./SupportForm";
import { Navigate } from "@tanstack/react-router";

export const AuthenticatedSupport = ({
  surveyId,
  questioningId,
}: {
  surveyId: string;
  questioningId?: string;
}) => {
  const { register, handleSubmit, errors } = useForm(supportSchema);

  const { data: questioningUrlData, isLoading } = useFetchQueryPortail("/questionnaires-url");

  const { mutateAsync, isSuccess, isError } = useFetchMutationWithoutAuth("/e-mail", "post");

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
      body: {
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
