import { useForm } from "hooks/useForm";
import { supportSchema } from "types/schemas";
import { SupportForm } from "./SupportForm";
import { useFetchMutationWithoutAuth } from "hooks/useFetchQuery";
import { Navigate } from "@tanstack/react-router";

export const OfflineSupport = ({ surveyId }: { surveyId: string }) => {
  const { register, handleSubmit, errors } = useForm(supportSchema);

  const { mutateAsync, isSuccess, isError } = useFetchMutationWithoutAuth("/e-mail", "post");

  if (isError) {
    return <Navigate to={"/$survey/contacter-assistance/erreur"} params={{ survey: surveyId }} />;
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
        survey: surveyId,
        mailobjet: data.mailObjet,
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
