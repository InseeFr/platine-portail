import React from 'react';
import ReactMarkdown from 'react-markdown';
import { getImportantInfo } from 'utils/read-content';

const ImportantInfo = () => {
  const { message, state } = getImportantInfo();

  return (
    <>
      {state && (
        <div className="important-info">
          <h3 className="heading">{message.title}</h3>
          <ReactMarkdown className="body" source={message.body} />
        </div>
      )}
    </>
  );
};

export default ImportantInfo;
