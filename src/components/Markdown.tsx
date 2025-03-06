import ReactMarkdown from "react-markdown";

export const Markdown = ({ content, className }: { content: string; className?: string }) => {
  return (
    <ReactMarkdown
      className={className}
      components={{
        a: ({ ...props }) => (
          <a
            {...props}
            className={`fr-link ${props.className || ""}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.children}
          </a>
        ),
        p: ({ ...props }) => (
          <p {...props} className={className}>
            {props.children}
          </p>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};
