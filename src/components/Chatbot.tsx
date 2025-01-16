import chatIcon from "assets/chat.svg";
import { declareComponentKeys, useTranslation } from "i18n";

export const Chatbot = () => {
  const { t } = useTranslation("Chatbot");
  return (
    <>
      <df-messenger
        location="europe-west1"
        project-id="insee-allcxagents"
        agent-id="4c3b1ceb-466c-444d-ac67-c24f44da2f98"
        language-code="fr"
        max-query-length="-1"
        intent="default"
      >
        <df-messenger-chat-bubble
          chat-title-icon="https://entreprises.stat-publique.fr/img/favicon.ico"
          chat-title={t("title")}
          chat-icon={chatIcon}
        ></df-messenger-chat-bubble>
      </df-messenger>
      <style>
        {`
          df-messenger {
            z-index: 999;
            position: fixed;
            bottom: 10px;
            right: 10px;
            --df-messenger-chat-border-radius : 0rem;
            --df-messenger-default-border-radius : 0px;
            --df-messenger-chat-window-width : 550px;
            --df-messenger-chat-window-height : 600px;
            --df-messenger-chat-window-box-shadow : 0 6px 10px #00000024,0 1px 18px #0000001f;
            --df-messenger-chat-border : none;
            --df-messenger-chat-overflow : hidden auto;
            --df-messenger-chat-window-offset : 1rem;

            --df-messenger-font-family : 'Marianne',sans-serif;
            --df-messenger-primary-color : #000091;

            --df-messenger-titlebar-background : #F6F6F6;
            --df-messenger-titlebar-font-color : #000091;
            --df-messenger-titlebar-padding: 0 1rem;
            --df-messenger-titlebar-title-font-size: 1rem;
            --df-messenger-titlebar-title-line-height: 1.5rem;
            --df-messenger-titlebar-icon-font-color : #000091;
            --df-messenger-titlebar-title-font-weight: 600;

            --df-messenger-message-internal-border-radius : 0;

            --df-messenger-chat-background : #ffffff;
            --df-messenger-input-background : #ffffff;

            --df-messenger-message-border-radius : 0;
            --df-messenger-default-border-radius : 0;

            --df-messenger-input-border-top : 1px solid #DDDDDD;
            --df-messenger-input-padding : 0;
            
            --df-messenger-input-box-border : none;
            --df-messenger-input-box-border-radius : 0 0 0 1rem;
            --df-messenger-input-box-padding: 0 1rem ;
            --df-messenger-input-gutter : 0;
            
            --df-messenger-input-box-focus-padding : 0 1rem ;
            --df-messenger-input-box-focus-border : 0;

            --df-messenger-message-user-background : #F6F6F6;
            --df-messenger-message-user-font-color: #161616;
            --df-messenger-message-user-border-top-left-radius: 0.5rem;
            --df-messenger-message-user-border-top-right-radius:0.5rem;
            --df-messenger-message-user-border-bottom-left-radius: 0.5rem;
            --df-messenger-message-user-border-bottom-right-radius: 0.5rem;
            --df-messenger-message-user-padding:0.625rem  0.875rem ;

            --df-messenger-message-bot-background : #f2f2f2;
            --df-messenger-message-bot-border-top-left-radius : 1rem;
            --df-messenger-message-bot-border-top-right-radius : 1rem;
            --df-messenger-message-bot-border-bottom-left-radius : 1rem;
            --df-messenger-message-bot-border-bottom-right-radius : 1rem;
            --df-messenger-message-bot-stack-border-bottom-left-radius : 1rem;
            --df-messenger-message-bot-stack-border-bottom-right-radius : 1rem;
            --df-messenger-message-bot-stack-border-top-left-radius : 1rem;
            --df-messenger-message-bot-stack-border-top-right-radius : 1rem;

            --df-messenger-chat-bubble-background : #000091;
            /*--df-messenger-chat-bubble-width : 2.875rem;*/
            --df-messenger-chat-bubble-width : 208px;
            --df-messenger-chat-bubble-icon-color:#ffffff;

            --df-messenger-button-border-radius : 0.5rem;
            --df-messenger-button-text-wrap : nowrap;
          }

          @media (max-width:570px){ 
            df-messenger {
              --df-messenger-chat-window-width : calc(100vw - 20px) !important;
            }
          }
          @media (max-height:700px){
            df-messenger {
              --df-messenger-chat-window-height : calc(100vh - 100px) !important;
            }
          }
        `}
      </style>
    </>
  );
};

const { i18n } = declareComponentKeys<"title">()("Chatbot");

export type I18n = typeof i18n;
