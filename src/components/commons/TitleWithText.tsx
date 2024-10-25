type Props = {
  title?: string;
  text?: string;
};

export const TitleWithText = ({ title = "", text = "" }: Props) => {
  return (
    <div aria-label={title}>
      <h3 className="fr-mb-2w">{title}</h3>
      <p>{text}</p>
    </div>
  );
};
