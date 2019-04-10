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

define({SELECTOR_LABEL:"Elküldött fájlok",SELECTOR_LABEL_WEB:"Elküldve",TOOL_LABEL:"Küldés",SEND_TRACK_LABEL:"Küldés és követés",TYPE:"Típus",ADDED_DATE:"Hozzáadott",MODIFIED_DATE:"Módosítva",PAGES:"Oldalak",SIZE:"Méret",SENDER_NAME:"Feladó",SENT_DATE:"Küldés dátuma",REPORT_ABUSE:"Visszaélés jelentése",UNKNOWN:"Ismeretlen",EXTENSION:"(.<%- ext %>)",DOWNLOAD:"Letöltés",DOWNLOAD_ALL:"Összes letöltése",REPLY:"Válasz",FORWARD:"Továbbítás",NOTIFY_ME_WHEN_VIEWED:"Figyelmeztessen, amikor a címzett látta",UNSHARE:"Megosztás visszavonása",VIEWED_BY:"Megnézte:",VIEW_FULL_ACTIVITY:"Összes tevékenység megtekintése",EMAIL_REPLY_FORMAT:"Re: <%= emailSubject %>",OPEN:"Megnyitás",SAVEAS:"Mentés másként",TRACK:"Online követés",OPEN_LINK:"(Hivatkozás megtekintése)",MESSAGE_HEADING:"Üzenet",REMOVE:"Eltávolítás",SHARED_FILES:"Elküldött fájlok",SUBJECT:"Alany",SENT_TO:"Elküldve",DATE_SENT:"Küldés dátuma",VIEWS:"Nézetek",PARCEL_PUBLIC_SHARING:"Névtelen",EXPAND:"Kibontás",COLLAPSE:"Összecsukás",SELECT_ALL:"Összes kijelölése",NUMBER_OF_VIEWS:"Megtekintések száma",GO_TO_ADOBE_SEND_WEBSITE:"Lépés az Adobe Send weblapra",GO_TO_ADOBE_S_T_WEBSITE:"Aláírásra küldött dokumentumok kezelése",DATE_VIEWED:"Megtekintve",CONFIRM_UNSHARE_TITLE:"Megosztás visszavonása",CONFIRM_UNSHARE_MSG_ONE_ITEM:"A fájlokat többé nem láthatják a címzettek. Biztos, hogy a megosztást vissza akarja vonni?",CONFIRM_UNSHARE_MSG_N_ITEMS:"A fájlokat többé nem láthatják a címzettek. Biztos, hogy a megosztást vissza akarja vonni?",CONFIRM_REMOVE_TITLE:"Eltávolítás",CONFIRM_REMOVE_MSG_ONE_ITEM:"Biztosan el akarja távolítani ezeket a fájlokat az elküldöttek listájából? Ha eltávolítja a fájlokat, akkor megszünteti azok megosztását és eltávolítja őket a listából, a könyvtárból azonban nem törli őket.",CONFIRM_REMOVE_MSG_N_ITEMS:"Biztosan el akarja távolítani ezeket a fájlokat az elküldöttek listájából? Ha eltávolítja a fájlokat, akkor megszünteti azok megosztását és eltávolítja őket a listából, a könyvtárból azonban nem törli őket.",NO_FILES_TITLE:"Nincsenek fájlok",NO_FILES_MESSAGE:"Nincsenek letölthető fájlok. Lehet, hogy a fájlok törölve lettek.",SHARE_TITLE:"Fájl küldése",SHARE_WELCOME:"Nagy fájlok online küldése és nyomon követése.",SHARE_WELCOME_DESKTOP:"A leggyorsabb és legkönnyebb mód fájlok megosztására és felügyeletére.",SHARE_SELECT_FILES:"Küldendő fájlok kiválasztása",SHARE_VIEW_SHARED_FILES:"Összes elküldött fájl megtekintése",READER_FILESELECT_WINDOW_TITLE:"Fájlok kijelölése",READER_FILESELECT_CONTINUE_BUTTON:"Folytatás",ALL_SUPPORTED_FILES:"Minden támogatott fájl",CHOOSE_FILES:"Fájlválasztás",ALL_SUPPORTED_FILES:"Minden támogatott fájl",FILE:"fájl",FILES:"fájl",UPLOADING_TO_SEND:"Feltöltés az Adobe Document Cloud szolgáltatásba...",SELECTED_FILES:"Kijelölt fájlok",ADD_MORE_FILES:"Fájlok hozzáadása",SHARE_WITH_HEADING:"Címzett",SHARE_ADDRESS_BOOK:"Címjegyzék",SHARE_CHOICE_WORLD:"Névetelen hivatkozás készítése",SHARE_CHIOCE_WORLD_EXPLAIN:"(alapvető használati információval)",SHARE_CHOICE_INDIVIDUAL:"Személyre szabott meghívók küldése",SHARE_CHOICE_INDIVIDUAL_EXPLAIN:"(részletes követéssel)",SHARE_CHOICE_ALLOW_COMMENTS:"Megjegyzések engedélyezése",SHARE_CHOICE_CUSTOMIZE_RECIPIENT_PAGE:"Logó és szín hozzáadása",SHARE_CHOICE_CUSTOMIZE_RECIPIENT_PAGE_EDIT:"Szerkesztés",SHARE_ADDRESS_HEADING:"Címzett e-mail címei",SHARE_ADDRESS_PROMPT:"Adja meg a címzett e-mail címeit",SHARE_SUBJECT_MSG_HEADING:"Tárgy és üzenet",SHARE_INITIAL_SUBJECT:"Megosztott fájlok",SHARE_AV_ERROR:"Audio-/videofájlok nem támogatottak küldéshez, és kimaradnak a kijelöltekből.",SHARE_AV_UPGRADE_MESSAGE:" Frissítsen audio-/videofájlok küldéséhez.",SHARE_FORMS_ERROR:"Az űrlapfájlok nem támogatottak küldésnél. Lépjen a Kitöltés és aláírás elemre az űrlap megkereséséhez és letöltéséhez.",SHARE_FORMS_ERROR_DESKTOP:"Ez a fájltípus jelenleg nem támogatott és a kiválasztásból ki lett hagyva.",SHARE_AV_FORMS_ERROR:"Audio-/video- és űrlapfájlok nem támogatottak küldéshez, és kimaradnak a kijelöltekből.",SHARE_OVER_LIMIT_APPEND_ERROR:"<br/><br/>Továbbá több, mint <%- limit %> fájlt választott ki. A határértéken túli fájlok kimaradnak.",SHARE_OVER_LIMIT_ERROR:"Több, mint <%- limit %> fájlt választott ki. A határértéken túli fájlok kimaradnak.",SHARE_OVER_LIMIT_TITLE:"Túl sok fájl",SHARE_NON_NATIVE_APPEND_ERROR:"<br/><br/>Kiválasztott fájljai között néhány olyan tárolóhelyen van, ami nem támogatott, így ki lesz hagyva.",SHARE_NON_NATIVE_ERROR:"A Küldés és követés jelenleg nem támogatott <%= connectorLabel %> helyen tárolt fájlokhoz. Ahhoz, hogy <%= connectorLabel %> helyről fájlt küldhessen, először mentse őket számítógépére.",SHARE_NON_NATIVE_ERROR_DEFAULT:"Kiválasztott fájljai között néhány olyan tárolóhelyen van, ami nem támogatott, így ki lesz hagyva.",SHARE_NON_NATIVE_ERROR_HEADING:"Nem támogatott fájltárolás",SHARE_MESSAGE_HEADING:"Üzenet",SHARE_MESSAGE_PROMPT:"Megosztottam néhány fájlt önnel. Kattintson a hivatkozásra megtekintésükhöz és letöltésükhöz.",SHARE_BUTTON:"Küldés",SHARE_BUTTON_LINK:"Hivatkozás létrehozása",SHARE_CANCEL:"Mégse",SHARE_EMAIL_INVALID_PLURAL:"A következő e-mail címek érvénytelenek:",SHARE_EMAIL_INVALID_SINGULAR:"A következő e-mail cím érvénytelen:",SHARE_ERROR_SEND_LIMIT_EXCEEDED_TITLE:"Nincs elküldve",SHARE_ERROR_SEND_LIMIT_EXCEEDED:"A kiválasztott címzettek száma eléri a legutóbbi határt. Csökkentse a címzettek számát, vagy várjon és később próbálja meg újra.",SHARE_ERROR_UNSUPPORTED_SHARING_MIME_TYPE:"Audio-/videofájlok nem támogatottak.",SHARE_ERROR_RECIPIENTS_NOT_ALLOWED:"Kérjük, frissítse egyéneknek küldéshez",SHARE_ERROR_CANNOT_CONVERT_FORM:"A fájlokat nem lehetett elküldeni, mert az űrlapfájl nem konvertálható PDF formátumba",SHARE_ERROR_CANNOT_CONVERT_FORM_RESTRICTION:"A fájlokat nem lehetett elküldeni, mert az űrlapfájl nem konvertálható PDF formátumba",SHARE_ERROR_CANNOT_CONVERT_FORM_TIMEOUT:"A fájlokat nem lehetett elküldeni, mert az űrlapfájl PDF-fé konvertálása túllépte a megadott időt.",SHARE_INDIVIDUAL_HELP_WEB:"Megjegyzés: a megszemélyesített hivatkozások egyediek minden címzettnek, de bárki a címzettek közül megoszthatja ezeket a hivatkozásokat a dokumentumokhoz hozzáféréssel együtt.",SHARE_INDIVIDUAL_HELP:"Megjegyzés: a megszemélyesített meghívók egyediek minden címzettnek, de bárki a címzettek közül megoszthatja ezeket a meghívásokat a dokumentumokhoz hozzáféréssel együtt.",SHARE_UPLOAD_ERROR_TITLE:"Hiba a fájlok feltöltése közben",SHARE_UPLOAD_ERROR_MSG:"Egy vagy több fájlt nem lehet feltölteni. Próbálja meg újból.",SHARE_NO_FILES_SELECTED:"Jelenleg nincsenek fájlok kiválasztva.",SHARE_CLICK_TO_ADD_FILES:"Kattintson a Fájlok hozzáadása gombra a kezdéshez.",SHARE_RECIPIENT_PAGE_HEADLINE:"Címzett oldala",SHARE_CHOICE_INCLUDE_MESSAGE:"Üzenetszöveggel együtt",SHARE_CHOICE_RESPOND_BACK:"Válaszcímmel együtt",SHARE_REMOVE:"Eltávolítás",ADD_FILES_REJECTED_TITLE:"Érvénytelen fájlnévformátum",ADD_FILES_REJECTED_MESSAGE:"A küldendő fájloknak kiterjesztéssel kell rendelkezniük, vagy ismert fájltípusúnak kell lenniük. Győződjön meg arról, hogy a fájlnévnek érvényes fájlkiterjesztése van.",SHARE_PUBLIC_LINK_HEADING_DESKTOP:"Névtelen hivatkozás szétosztása:",SHARE_COPY_LINK_BUTTON:"Hivatkozás másolása",SHARE_SUCCESS_SENT_LINK:"Ugrás az elküldött fájlokra",SHARE_SUCCESS_SENT_LINK_FOOTER:"az összes korábban elküldött fájl megtekintéséhez ",READER_GO_URL:"http://www.adobe.com/go/sendpluginrdr_12_0_0_hu",ACROBAT_GO_URL:"http://www.adobe.com/go/sendpluginacro_12_0_0_hu",SEND_UPSELL_HEADLINE:"Frissítés erre:",SEND_UPSELL_HEADLINE_OLD:"Frissítés erre:",SEND_UPSELL_POINT_1:"• Nagy fájlok küldése, beleértve dokumentumok és videók",SEND_UPSELL_POINT_2:"• E-mal kézbesítése fájlok megtekintésekor",SEND_UPSELL_POINT_3:"• Letöltések követése online irányítópulton",SEND_UPSELL_LATER:"Később",SEND_UPSELL_NOW:"Azonnali bővítés",SEND_UPSELL_LEARN_MORE:"További információ",SEND_UPSELL_UPGRADE_REQUIRED:"Nem támogatott fájlok",SHARE_TOO_MANY_DLG_TITLE:"Túl sok e-mail cím",SHARE_TOO_MANU_DLG_MESSAGE:"Ön <%=numRecipients%> e-mail címet adott meg, de egy időben csak <%=maxRecipients%> címzettnek küldhet. Töröljön néhány címet és próbálja meg újból.",SHARE_SUCCESS_DLG_TITLE:"Megosztott fájlok",SHARE_PUBLIC_LINK_HEADING:"Névetelen hivatkozás generálva",SHARE_EMAIL_LINK_BUTTON:"E-mail hivatkozás",SHARE_PUBLIC_LINK_MESSAGE:"A hivatkozás birtokában bárki elérheti a fájlokat névtelenül.",SHARE_PUBLIC_LINK_NO_COPY_OR_EMAIL_WARNING:"Még nem másolta vagy küldte el e-mailben a hivatkozást. Biztosan folytatni szeretné?",SHARE_PUBLIC_LINK_INSTRUCTIONS:"Másolja az alábbi hivatkozást e-mailbe vagy ossza meg másokkal. Bárki a hivatkozás használatával elérheti a fájlokat.",SHARE_INVITATIONS_HEADING:"Elküldött meghívók",SHARE_INVITATIONS_MESSAGE:"Minden címzett e-mailen keresztül egy hivatkozást kap, és ön értesítve lesz, amikor a hivatkozást követik.",SHARE_SUCCESS_CLOSE:"Bezárás",SHARE_SUCCESS_CONTINUE:"Folytatás",SHARE_FILE_EMAIL_BODY:"Adobe Send programot használok. Fájlomat az alábbi hivatkozásra kattintva nézheti meg:",SHARE_FILES_EMAIL_BODY:"Adobe Send programot használok. Fájljaimat az alábbi hivatkozásra kattintva nézheti meg:",S_T_FILE_EMAIL_BODY:"Az Adobe Send & Track szolgáltatást használom. A lenti hivatkozásra kattintva megnézheti fájlomat az Adobe Document Cloud szolgáltatásban:",S_T_FILES_EMAIL_BODY:"Az Adobe Send & Track szolgáltatást használom. A lenti hivatkozásra kattintva megnézheti fájljaimat az Adobe Document Cloud szolgáltatásban:",SHARE_CLIPBOARD_MESSAGE:"Tipp: másoláshoz használja a Ctrl + C billentyűket",SHARE_CLIPBOARD_MESSAGE_MAC:"Tipp: másoláshoz használja a Cmd + C billentyűket",SHARE_CLIPBOARD_COPIED:"a hivatkozás a vágólapra lett másolva",PARCEL_ACTIVITY_DOWNLOADED:"letöltve",PARCEL_ACTIVITY_PREVIEWED:"előnézeti megtekintés",PARCEL_ACTIVITY_PUBLIC_VISITOR:"nyilvános hivatkozás látogatója",PARCEL_ACTIVITY_ALL_FILES:"Minden fájl",PARCEL_ACTIVITY_ALL_FILES_PREVIEW:"Összes fájl előnézeti oldala",PARCEL_ACTIVITY_HEADING:'"<%= emailSubject %>" tevékenysége',PARCEL_ACTIVITY_RECIPIENT:"Címzett",PARCEL_ACTIVITY_ACTIVITY:"Tevékenység",PARCEL_ACTIVITY_ITEM:"Elem",PARCEL_ACTIVITY_DATE_VIEWED:"Megtekintve",PARCEL_ACTIVITY_CLOSE:"Bezárás",CURRENTLY_SHARED_IN:"Elküldve",SHARE_THIS_FILE:"Fájl elküldése",SHARE_THIS_FILE_AGAIN:"Fájl ismételt elküldése",SENT_FILES_HEADER_SEARCH_CONTROLS:"Keresés vezérlői",SENT_FILES_HEADER_REFRESH:"Frissítés",SENT_FILES_NUM_FILES:"<%= numFiles %> fájlok",NO_PARCELS_SEND_PROMPT:"Nincsenek elküldött fájlok",NO_PARCELS_SEND_SUBPROMPT:"A fájlok továbbításához lépjen ide: <%= sendBtn %>",NO_PARCELS_SEND_BTN:"Adobe Send programmal",NO_PARCELS_S_T_BTN:"Küldés és követés",ON_SIGN_OUT_PROMPT:"A Küldés és követés segítségével megtekintett fájlok",ON_SIGN_OUT_SUBPROMPT:"Tudja meg, ki tekintette meg fájljait.",SIGN_IN_BUTTON:"Bejelentkezés most",COULD_NOT_SEND:"Küldés sikertelen",ENTERPRISE_USERS_ACCESS_ERROR:"Nincs hozzáférése ehhez a szolgáltatáshoz. Forduljon a rendszer-adminisztrátorhoz segítségért vagy próbáljon meg bejelentkezni Adobe ID azonosítójával.",CUSTOMIZE_RECIPIENT_PAGE_DIALOG_NOT_AVAILABLE:"Folytatás az Adobe Document Cloud szolgáltatásban",CUSTOMIZE_RECIPIENT_PAGE_DIALOG_USE_WEB_MSG:'Logó és szín szerkesztése, ami csak az Adobe Send oldal alatt érhető el online. Kattintson a "<%= buttonName %>" gombra, hogy odalépjen',S_T_CUSTOMIZE_RECIPIENT_PAGE_DIALOG_USE_WEB_MSG:'Logó és szín szerkesztése, ami csak az Adobe Document Cloud alatt érhető el. Kattintson a "<%= buttonName %>" gombra, hogy odalépjen.',CUSTOMIZE_RECIPIENT_PAGE_DIALOG_USE_WEB_OK:"Folytatás",CUSTOMIZE_RECIPIENT_PAGE_DIALOG_TITLE:"Logó és szín hozzáadása",CUSTOMIZE_RECIPIENT_PAGE_DIALOG_DESCRIPTION:"Adja hozzá logóját, és válasszon ki egy színt, amivel az e-mailek a címzett oldalán megjelennek.",CUSTOMIZE_RECIPIENT_PAGE_ADD_LOGO:"Logó hozzáadása",CUSTOMIZE_RECIPIENT_PAGE_REMOVE_LOGO:"Logó eltávolítása",CUSTOMIZE_RECIPIENT_PAGE_CHOOSE_COLOR:"Szín választása",CUSTOMIZE_RECIPIENT_PAGE_SAVE:"Mentés",CUSTOMIZE_RECIPIENT_PAGE_CLOSE:"Mégse",CUSTOMIZE_RECIPIENT_PAGE_FILE_FILTERING_LABEL:"A fájltípus egy kép",CUSTOMIZE_RECIPIENT_PAGE_UNSUPPORTED_LOGO_TITLE:"Hiba",CUSTOMIZE_RECIPIENT_PAGE_UNSUPPORTED_LOGO_FORMAT:"A kiválasztott fájl nem használható logóként. Válaszon másik fájlt. ",CUSTOMIZE_RECIPIENT_PAGE_UNSUPPORTED_COLOR_FORMAT:"A megadott szín érvénytelen. Adjon meg hexa értéket, mint az #FFFFFF vagy #FFF.",SURVEY_TITLE:"Bennünket érdekel a visszajelzése",SURVEY_LINK:"Mondja el nekünk, mit gondol",SURVEY_QUESTION_ONE:"Miért használja ma a Send & Track szolgáltatást?",SURVEY_QUESTION_TWO:"Önnek megfelelően működik?",SURVEY_QUESTION_THREE:"Hiányzik valami, amit akart?",SURVEY_SEND:"Küldés",SURVEY_CLOSE:"Nem, köszönöm",SURVEY_TEXTAREA_LIMITATION_LABEL:"fennmaradó karakterek",INVALID_PARAMETER_SURVEY_MESSAGE:"Választípus nem engedélyezett",INVALID_PARAMETER_SURVEY_TITLE:"Érvénytelen paraméter",SEND_RHP_TITLE:"Elküldve",GENERIC_ARIA_LABEL_STRING:"<%= prefix %>. <%= suffix %>",ENTERPRISE_RESTRICTIONS_ENFORCED:"Vállalati megosztáskorlátozás engedélyezve",ENTERPRISE_USERS_SHARING_ACCESS:"Ez a funkció nem elérhető, mert szervezete korlátozta a megosztást. "});