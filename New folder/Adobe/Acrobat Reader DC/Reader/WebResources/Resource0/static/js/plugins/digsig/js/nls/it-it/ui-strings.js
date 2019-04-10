/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2013 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property laws,
* including trade secret and or copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/

define({IDENTITY_LIST_HEADER_TEXT:"Firma con un ID digitale",IDENTITY_LIST_DESCRIPTION:"Scegli l'ID digitale che desideri utilizzare per la firma:",REFRESH_BUTTON_TEXT:"Aggiorna",CANCEL_BUTTON_TEXT:"Annulla",BACK_BUTTON_TEXT:"Indietro",CONTINUE_BUTTON_TEXT:"Continua",SAVE_BUTTON_TEXT:"Salva",CREATE_NEW_BUTTON_TEXT:"Crea nuovo ID digitale",CONFIGURE_NEW_BUTTON_TEXT:"Configura nuovo ID digitale",MANAGE_DIGITAL_ID_BUTTON_TEXT:"Gestisci ID digitale",HELP_BUTTON_TEXT:"?",VIEW_DETAILS_LINK_TEXT:"Visualizza dettagli",NO_IDENTITY_LABEL:"Nessuna identità trovata. Crea una nuova identità.",CONFIGURE_DIALOG_HEADER:"Configura un ID digitale per la firma",CONFIGURE_DIALOG_LEFT_SIDE_DESCIPTION:"È richiesto un ID digitale per creare una firma digitale. Gli ID digitali più sicuri sono rilasciati da autorità di certificazione affidabili e si basano su dispositivi di sicurezza quali smart card o token. Alcuni sono basati su file.",CONFIGURE_DIALOG_LEFT_SIDE_SUB_DESCIPTION:"Puoi anche creare un nuovo ID digitale, ma la garanzia dell'identità sarà di livello inferiore.",CONFIGURE_DIALOG_OPTIONS_INTRO:"Seleziona il tipo di ID digitale:",CONFIG_OPTION_1_HEADING:"Usa un dispositivo per la creazione della firma",CONFIG_OPTION_1_SUB_HEADING:"Configura una smart card o un token collegato al computer",CONFIG_OPTION_2_HEADING:"Usa un ID digitale da un file",CONFIG_OPTION_2_SUB_HEADING:"Importa un ID digitale esistente ottenuto come file",CONFIG_OPTION_3_HEADING:"Crea un nuovo ID digitale",CONFIG_OPTION_3_SUB_HEADING:"Crea il tuo ID digitale autofirmato",SIGNATURE_CREATION_DEVICE_DIALOG_HEADER:"Usa un dispositivo per la creazione della firma",SIGNATURE_CREATION_DEVICE_DIALOG_LEFT_SIDE_DESCIPTION:"Gli ID digitali da dispositivi hardware per la creazione della firma come smart card e token USB dovrebbero essere automaticamente disponibili e pronti all'uso, purché il dispositivo sia stato connesso correttamente.",SIGNATURE_CREATION_DEVICE_DIALOG_LEFT_SIDE_SUB_DESCIPTION:"Segui questi passaggi oppure, se è necessaria una specifica configurazione, rivolgiti al produttore del dispositivo.",SIGNATURE_CREATION_OPTION_1_HEADING:"Ordina un dispositivo per la firma da un partner",SIGNATURE_CREATION_OPTION_1_SUB_HEADING:"Se non hai un dispositivo per la firma, puoi ordinarne uno dai nostri partner. ",SIGNATURE_CREATION_OPTION_2_HEADING:"Scarica e installa driver",SIGNATURE_CREATION_OPTION_2_SUB_HEADING:"Assicurati di aver scaricato e installato tutti i driver necessari. Per assistenza, visita il sito Web del produttore del dispositivo.",SIGNATURE_CREATION_OPTION_3_HEADING:"Collega il dispositivo per la firma",SIGNATURE_CREATION_OPTION_3_SUB_HEADING:"Assicurati che il dispositivo per la firma sia correttamente collegato al computer. Una smart card potrebbe richiedere un apposito lettore.",CONNECTED_HARDWARE_HEADING:"Hardware collegato",CONNECTED_HARDWARE_SUB_HEADING:"Assicurati che il dispositivo sia collegato al computer tramite la porta USB",CONNECTED_DEVICE_DRIVER_HEADING:"Scarica e installa driver",CONNECTED_DEVICE_DRIVER_SUB_HEADING:"Assicurati di avere scaricato  e installato tutti i driver necessari. Per assistenza, visita il sito Web del produttore del dispositivo.",CONNECTED_DEVICE_ORDER_HEADING:"Ordina un dispositivo da un partner",CONNECTED_DEVICE_ORDER_SUBHEADING:"se non hai un dispositivo collegato, puoi ordinarlo da uno dei nostri partner.",FIND_DIGITAL_ID_HEADER:"Trova un file degli ID digitali",FIND_DIGITAL_ID_BROWSE_HEADING:"Sfoglia un file degli ID digitali. I file degli ID digitali sono protetti da password. Non puoi accedere all'ID digitale se non conosci la sua password.",FIND_DIGITAL_ID_PASSWORD_HEADING:"Immetti la password dell'ID digitale",BROWSE_BUTTON:"Sfoglia",FIND_DIGITAL_ID_LEFT_PANE_DESCIPTION:"I file degli ID digitali generalmente hanno un'estensione PFX o P12 e contengono il file della chiave pubblica (certificato) e il relativo file della chiave privata.",FIND_DIGITAL_ID_LEFT_PANE_SUB_DESCIPTION:"Per firmare con un ID digitale disponibile come file, segui le istruzioni visualizzate per selezionare il file e digita la password di protezione della chiave privata.",CREATE_LOCAL_CERTIFICATE_HEADER:"Crea un ID digitale autofirmato",ADD_DIGITAL_ID_FILE_HEADER:"Aggiungi ID digitali da un file",ADD_DIGITAL_ID_SIGNATURE_DEVICE_HEADER:"Aggiungi ID digitali da un dispositivo per la creazione di una firma",ADD_DIGITAL_ID_DESC:"I seguenti ID digitali saranno aggiunti all'elenco di ID digitali che è possibile utilizzare per la firma digitale:",SAVE_DIGITAL_ID_HEADER:"Salva l'ID digitale autofirmato su un file",SAVE_DIGITAL_ID_BROWSE_HEADING:"L'ID digitale verrà salvato nel seguente percorso:",SAVE_DIGITAL_ID_PASSWORD:"Applica una password per proteggere l'ID digitale:",SAVE_DIGITAL_ID_CONFIRM_PASSWORD:"Conferma la password:",CREATE_OPTIONS_HEADER:"Seleziona la destinazione del nuovo ID digitale",CREATE_OPTIONS_LEFT_PANE_DESCRIPTION:"Gli ID digitali sono solitamente rilasciati da fornitori affidabili che garantiscono la validità dell'identità.<br> Gli ID digitali autofirmati potrebbero non fornire lo stesso livello di garanzia e in alcuni casi potrebbero non essere accettati.",CREATE_OPTIONS_LEFT_PANE_SUB_DESCRIPTION:"Chiedi ai destinatari se è un modulo di autenticazione accettabile.",CREATE_FORM_LEFT_PANE_DESCRIPTION:"Immetti le informazioni sull'identità da utilizzare per creare un ID digitale autofirmato.",CREATE_FORM_LEFT_PANE_SUB_DESCRIPTION:"Gli ID digitali autofirmati dai singoli utenti non offrono garanzia circa la validità delle informazioni sull'identità. Pertanto in alcuni casi potrebbero non essere accettati.",SAVE_DIALOG_LEFT_PANE_DESCRIPTION:"Aggiungi una password per proteggere la chiave privata dell'ID digitale. La stessa password ti verrà richiesta per firmare con l'ID digitale.",SAVE_DIALOG_LEFT_PANE_SUB_DESCRIPTION:"Salva il file degli ID digitali in un percorso conosciuto per poterlo copiare ed eseguirne il backup.",SAVE_TO_APPLE_KEYCHAIN_HEADER:"Salva in Apple Keychain",SAVE_TO_APPLE_KEYCHAIN_DESC:"Salva l'ID digitale in Apple Keychain per condividerlo con altre applicazioni",SAVE_TO_FILE_HEADER:"Salva su file",SAVE_TO_FILE_DESC:"Salva l'ID digitale su un file del computer",SAVE_TO_WIN_HEADER:"Salva nell'archivio certificati di Windows",SAVE_TO_WIN_DESC:"Salva l'ID digitale nell'archivio certificati di Windows per condividerlo con altre applicazioni",EXPIRE_TEXT:"Scadenza",FILE_PASSWORD_ERROR:"Password errata. Immettila nuovamente.",SAVE_FILE_PASSWORD_MISMATCH:"Le password non corrispondono",ISSUED_BY_TEXT:"Emesso da:",LEARN_MORE_TEXT:"Ulteriori informazioni",NAME_LABEL_TEXT:"Nome",ORG_UNIT_LABEL_TEXT:"Unità organizzativa",ORG_NAME_LABEL_TEXT:"Nome organizzazione",EMAIL_ADDRESS_LABEL_TEXT:"Indirizzo e-mail",COUNTRY_LABEL_TEXT:"Paese/Regione",KEY_ALGO_LABEL_TEXT:"Algoritmo chiave",KEY_USAGE_LABEL_TEXT:"Usa ID digitale per",NAME_PLACEHOLDER_TEXT:"Immetti nome...",ORG_UNIT_PLACEHOLDER_TEXT:"Immetti unità organizzativa...",ORG_NAME_PLACEHOLDER_TEXT:"Immetti nome organizzazione...",EMAIL_ADDRESS_PLACEHOLDER_TEXT:"Immetti e-mail...",SIGN_AS_TEXT:"Firma come ",APPEARANCE_LABEL_TEXT:"Aspetto",EDIT_BUTTON_TEXT:"Modifica",CREATE_BUTTON_TEXT:"Crea",VIEW_CERTIFICATE_DETAILS_LABEL_TEXT:"Visualizza dettagli certificato",LOCK_DOCUMENT_AFTER_SIGNING_LABEL_TEXT:"Blocca documento dopo la firma",REASON_LABEL_TEXT:"Motivo",LOCATION_LABEL_TEXT:"Posizione",CONTACT_INFO_LABEL_TEXT:"Informazioni di contatto",PERMITTED_ACTION_AFTER_SIGNING_LABEL_TEXT:"Azioni permesse dopo la certificazione",REVIEW_DOCUMENT_CONTENT_LABEL_TEXT:"Rivedi il contenuto del documento che potrebbe influire sulla firma",DOCUMENT_HAS_BEEN_REVIEWED_LABEL_TEXT:"Gli avvisi del documento sono stati revisionati",REVIEW_BUTTON_TEXT:"Rivedi",SIGNING_DIALOG_PASSWORD_PLACEHOLDER_TEXT:"Immetti il PIN o la password dell'ID digitale...",SIGN_BUTTON_TEXT:"Firma",CUTOMIZE_DIALOG_TITLE_TEXT:"Personalizza l'aspetto della firma",TEXT_BUTTON_TEXT:"Testo",IMAGE_BUTTON_TEXT:"Immagine",DRAW_BUTTON_TEXT:"Disegna",NONE_BUTTON_TEXT:"Nessuno",INCLUDE_TEXT_LABEL_TEXT:"Includi testo",NAME_CHECKBOX_LABEL_TEXT:"Nome",DATE_CHECKBOX_LABEL_TEXT:"Data",LOCATION_CHECKBOX_LABEL_TEXT:"Posizione",REASON_CHECKBOX_LABEL_TEXT:"Motivo",DN_CHECKBOX_LABEL_TEXT:"Nome distintivo",VERSION_CHECKBOX_LABEL_TEXT:"Versione di Adobe Acrobat",LOGO_CHECKBOX_LABEL_TEXT:"Logo",LABEL_CHECKBOX_LABEL_TEXT:"Etichette",DIGITS_FORMAT_LABEL_TEXT:"Formato cifre",DIGITS_LABEL_TEXT:"Cifre",TEXT_DIRECTION_LABEL_TEXT:"Orientamento testo",AUTO_LABEL_TEXT:"Auto",CLEAR_LABEL_TEXT:"Cancella",PRESET_NAME_TEXT:"Nome predefinito",OK_BUTTON_TEXT:"OK",CLICK_TO_DRAW_TEXT:"Fai clic qui per disegnare",APPLY_BUTTON_TEXT:"Applica",INVALID_EMAIL_ADDRESS:"Indirizzo e-mail non valido",PASSWORD_LENGTH_ERROR:"Password errata. La password deve contenere almeno sei caratteri"});