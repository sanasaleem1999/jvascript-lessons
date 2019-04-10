/*************************************************************************
*
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2012 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and may be covered by U.S. and Foreign Patents,
* patents in process, and are protected by trade secret or copyright law.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/

define({ACTIONS:"Dejanja",ACTIONS_UC:"DEJANJA",ADDED:"Dodano",ADD_ACCOUNT:"Dodajanje računa",BACK:"Nazaj",CLOSE:"Zapri",CONTINUE:"Nadaljuj",EXTENSION:"(.<%- ext %>)",FILES:"Datoteke",FILE_NAME:"Ime datoteke",FOLDER_NAME:"Ime mape",LOCATION:"Lokacija",MODIFIED:"Spremenjeno",NAME:"Ime",OR:"ali",PROPERTIES:"Lastnosti",PROPERTIES_UC:"LASTNOSTI",REMOVE:"Odstrani",SELECT_FILES:"Izberite datoteke",SELECT_FILE:"Izberite datoteko",SIZE:"Velikost",SELECT_ALL:"Izberi vse",TOTAL_FILES:"Skupno število datotek",N_ITEMS_CLICK_TO_VIEW:"Št. elementov: <%= num %>. Kliknite, če si jih želite ogledati.",CREATED_DATE:"Dodan datum",MODIFIED_DATE:"Datum spremembe",VIEWED_DATE:"Datum ogleda",DATE_HH_MM_AMPM:"<%= hour %><%= sep %><%= minute %> <%= amPm %>",DATE_YESTERDAY:"Včeraj",DATE_MM_DD_YYYY:"<%= day %>.<%= month %> <%= year %>",DATE_AND_TIME:"<%= dateStr %>, <%= timeStr %>",YYYY:"LLLL",AM:"AM",PM:"PM",HH:"H",HH_MM_SEPARATOR:":",MM:"M",DD:"D",ANIMATION:"Animacija",AUDIO:"Zvok",CALENDAR:"  Koledar",CASCADING_STYLE_SHEET:"Kaskadni seznam slogov",CERTIFICATE:"Certifikat",FONT:"Pisava",IMAGE:"Slika",PLAIN_TEXT:"Golo besedilo",PRESENTATION:"Predstavitev",RICH_TEXT:"Obogateno besedilo",SPREADSHEET:"Preglednica",STYLE_SHEET:"Datoteka s slogi",TEXT:"Besedilo",UNKNOWN:"Neznano",VIDEO:"Video",KB:"<%= num %> KB",MB:"<%= num %> MB",GB:"<%= num %> GB",DECIMAL_SEPARATOR:".",THOUSANDS_SEPARATOR:",",FILE_NAME_CONTAINS:"Ime datoteke vsebuje",FILE_TYPE_IS:"Vrsta datoteke je",FILE_CONTENT:"Datoteka vsebuje",DATE_LAST_MODIFIED:"Datum zadnje spremembe",DATE_LAST_VIEWED:"Datum zadnjega ogleda",DATE_ADDED:"Dodano na datum",FILE_ADDED_BY:"Datoteko je dodala oseba",MIN_SIZE:"Najmanjša velikost",MAX_SIZE:"Največja velikost",FILTER_DISPLAY_VALUE:"<%= field %>: <%= value %>",CREATE_PDF:"Ustvari PDF",EXPORT_PDF:"Izvozi PDF",COMBINE_PDF:"Združi PDF-je",FILL_SIGN:"Izpolni in podpiši",ADOBE_ACROBAT:"Adobe Acrobat",ADOBE_READER_MOBILE:"Adobe Reader Mobile",ADOBE_READER:"Adobe Reader",ADOBE_SCAN:"Adobe Scan",TODAY:"Danes",YESTERDAY:"Včeraj",WITHIN_LAST_WEEK:"V zadnjem tednu",WITHIN_LAST_MONTH:"V zadnjem mesecu",ONE_TO_TWO_MONTHS_AGO:"Pred 1 ali 2 mesecema",TWO_TO_THREE_MONTHS_AGO:"Pred 2-3 meseci",THREE_TO_FOUR_MONTHS_AGO:"Pred 3-4 meseci",FOUR_TO_FIVE_MONTHS_AGO:"Pred 4 ali 5 meseci",FIVE_TO_SIX_MONTHS_AGO:"Pred 5 ali 6 meseci",SIX_TO_TWELVE_MONTHS_AGO:"Pred 6-12 meseci",MORE_THAN_ONE_YEAR_AGO:"Pred več kot 1 letom",OK:"V redu",CANCEL:"Prekliči",CONFIRM_DELETE_TITLE:"Izbriši",CONFIRM_DELETE_MSG_ONE_ITEM:"Ste prepričani, da želite izbrisati ta element?",CONFIRM_DELETE_MSG_N_ITEMS:"Ali ste prepričani, da želite izbrisati več predmetov: <%= numItems %>?",DOWNLOAD:"Prenos",DOWNLOAD_FILE:"Prenos datoteke",DOWNLOAD_FILES:"Prenos datotek",DOWNLOAD_FOLDER:"Prenos mape",RENAME:"Preimenuj",RENAME_ELLIPSIS:"Preimenuj ...",RENAME_FILE:"Preimenuj datoteko",RENAME_FOLDER:"Preimenuj mapo",MOVE_FILE:"Premakni datoteko",MOVE_FILES:"Premakni datoteke",MOVE_FOLDER:"Premakni mapo",MOVE_FOLDERS:"Premakni mape",MOVE_FILE_AND_FOLDER:"Premakni datoteko in mapo",MOVE_FILES_AND_FOLDER:"Premakni datoteke in mapo",MOVE_FILE_AND_FOLDERS:"Premakni datoteko in mape",MOVE_FILES_AND_FOLDERS:"Premakni datoteke in mape",SHARE:"Skupna raba",SHARE_ELLIPSIS:"Skupna raba ...",SHARE_FILE:"Skupna raba datoteke",SHARE_FILES:"Skupna raba datotek",SEND_FILE:"Pošiljanje in sledenje datoteke",SEND_FILES:"Pošiljanje in sledenje datotek",DELETE:"Izbriši",HOME:"Domov",ENTER_KEYWORD:"Išči",SEARCH:"Išči",SHARED:"V skupni rabi",PREVIEW_NOT_AVAILABLE:"Ni mogoč predogled vrste datoteke",PREVIEW_NOT_AVAILABLE_DESC:"<a class='preview-download' href='javascript:void(0)'>Prenesite</a> datoteko, ki si jo želite ogledati.",RENAME_NAME_IN_USE:'<%= existingType %>, imenovan "<%= name %>", že obstaja na tej lokaciji. Izberite drugo ime za <%= renamedType %>.',RENAME_ILLEGAL_NAME:"Ime vsebuje neveljavne znake ali ima preveč znakov. Izberite drugo ime <%= renamedType %>.",MOVE:"Premakni",MOVE_FILE_TO:"Premakni datoteko v ...",MOVE_FILES_TO:"Premakni datoteke v ...",MOVE_FOLDER_TO:"Premakni mapo v ...",MOVE_FOLDERS_TO:"Premakni mape v ...",MOVE_FILE_AND_FOLDER_TO:"Premakni datoteko in mapo v ...",MOVE_FILES_AND_FOLDER_TO:"Premakni datoteke in mapo v ...",MOVE_FILE_AND_FOLDERS_TO:"Premakni datoteko in mape v ...",MOVE_FILES_AND_FOLDERS_TO:"Premakni datoteke in mape v ...",DUPLICATE_NAME_TITLE:"Podvojite ime <%= type %>",DUPLICATE_NAME_PROMPT:'<%= type %>, imenovana "<%- name %>", že obstaja na tej lokaciji. Kaj želite storiti?',DUPLICATE_NAME_REPLACE_EXISTING:"Zamenjajte obstoječo <%= type %>",DUPLICATE_NAME_RENAME_UPLOADED:"Preimenujte preneseno <%= type %>",DUPLICATE_NAME_DELETE_MOVED:"Izbriši premaknjeno <%= type %>",DUPLICATE_NAME_RENAME_MOVED:"Preimenujte premaknjeno <%= type %>",FILE_INITIAL_CAP:"Datoteka",FILE:"datoteka",FOLDER_INITIAL_CAP:"Mapa",FOLDER:"mapa",REPORT_ABUSE:"Prijavi zlorabo",REPORT_ABUSE_TITLE:"Prijavi zlorabo",REPORT_ABUSE_CONTENT_LABEL:"Vsebina",REPORT_ABUSE_TITLE_LABEL:"Naslov",REPORT_ABUSE_DEFAMATION_LABEL:"Oškodovanje ugleda",REPORT_ABUSE_OFFENSIVE_LABEL:"Žaljiva vsebina",REPORT_ABUSE_EXPLICIT_LABEL:"Nazoren prikaz seksualne vsebine",REPORT_ABUSE_TRADEMARK_LABEL:"Kršitev pravic do blagovne znamke",REPORT_ABUSE_RACIST_LABEL:"Rasizem ali druge oblike sovražnega govora",REPORT_ABUSE_OTHER_LABEL:"Drugo",REPORT_ABUSE_BLURB:"Če mislite, da ta vsebina krši Adobejeve <a class='abuse-dialog-link' href='http://www.adobe.com/go/gfooter_terms_of_use_si' target='_blank'>pogoje uporabe</a>, izpolnite ta hitri obrazec, da jo prijavite.",REPORT_ABUSE_EMAIL_PROMPT:"Vaš e-poštni naslov",REPORT_ABUSE_NAME_PROMPT:"Vaše ime",REPORT_ABUSE_TARGET_TYPE_PROMPT:"Kaj prijavljate?",REPORT_ABUSE_REASON_PROMPT:"Zakaj prijavljate to vsebino?",REPORT_ABUSE_DESCRIPTION_PROMPT:"Opišite svojo zaskrbljenost.",REPORT_ABUSE_COPYRIGHT_REPORT:"Če želite prijaviti kršitev avtorskih pravic, upoštevajte 17. odstavek <a class='abuse-dialog-link' href='http://www.adobe.com/go/gfooter_terms_of_use_si' target='_blank'>pogojev uporabe</a>.",REPORT_ABUSE_REPORT_BUTTON:"Prijavi zlorabo",REPORT_ABUSE_EMAIL_ERROR:"Vnesti morate veljaven e-poštni naslov.",LANGUAGE_CHANGE:"<%= lang %> (spremeni)",CHOOSE_LANGUAGE:"Izberite jezik",QUOTA_WARNING_DLG_TITLE_RUNNING_OUT:"Zmanjkuje prostora za shranjevanje",QUOTA_WARNING_DLG_MSG_RUNNING_OUT:"Trenutno uporabljate <%= using %> od dodeljenega prostora <%= allotment %>, zato bo kmalu zmanjkalo prostora za shranjevanje.",QUOTA_WARNING_DLG_TITLE_EXCEEDED:"Presežena omejitev prostora za shranjevanje",QUOTA_WARNING_DLG_MSG_LOGIN_EXCEEDED:"Skupni prostor za shranjevanje <%= using %> presega največjo dovoljeno mejo <%= allotment %>, ki jo omogoča vaša nova naročnina.",QUOTA_WARNING_DLG_MSG_UPLOAD_EXCEEDED:"Prenesene datoteke ni mogoče shraniti, ker bi presegla dodeljeno količinsko omejitev <%= allotment %>.",QUOTA_WARNING_DLG_MSG_YOU_MAY_VIEW:"Lahko si ogledate in prenesete vse obstoječe datoteke, vendar morate nadgraditi račun, če želite shraniti dodatne datoteke.",QUOTA_WARNING_DLG_MSG_YOU_WILL_NEED:"Morali boste izbrisati nekaj datotek, da sprostite dodatni prostor.",QUOTA_WARNING_DLG_MSG_UPGRADE:"Nadgradite svoj račun, če želite več prostora za shranjevanje in dodatne funkcije.",LEARN_MORE:"Več informacij",UPGRADE:"Nadgradnja",ERROR:"Napaka",MISC_ERROR_ACROBAT_FILE_OPEN_MAX_TITLE:"Preseženo je največje dovoljeno število odprtih datotek",MISC_ERROR_ACROBAT_FILE_OPEN_MAX_MSG:"Odprete lahko največ 50 datotek naenkrat.",HTTP_STATUS_DEFAULT_TITLE:"Zahteve ni bilo mogoče dokončati",HTTP_STATUS_DEFAULT_MSG:"Med izvajanjem zahteve je prišlo do napake, zato je ni mogoče dokončati.",HTTP_STATUS_DEFAULT_MSG_CEF:"Prišlo je do napake med vzpostavljanjem povezave s storitvijo. Poskusite znova pozneje.",HTTP_STATUS_400_TITLE:"Zahteve ni bilo mogoče dokončati (400)",HTTP_STATUS_400_TITLE_CEF:"Zahteve ni bilo mogoče dokončati",HTTP_STATUS_400_MSG:"Med izvajanjem zahteve je prišlo do napake, zato je ni mogoče dokončati.",HTTP_STATUS_401_TITLE:"Odjavljeni ste (401)",HTTP_STATUS_401_TITLE_CEF:"Odjavljeni ste",HTTP_STATUS_401_MSG:'Vaša seja je potekla in ste odjavljeni zaradi nedejavnosti. Če se želite znova prijaviti, kliknite "Prijava".',HTTP_STATUS_401_MSG_CEF:"Prišlo je do napake. Poskusite se odjaviti in nato znova prijaviti.",HTTP_STATUS_403_QUOTA_TITLE:"Omejitev prostora za shranjevanje je presežena (403)",HTTP_STATUS_403_QUOTA_TITLE_CEF:"Omejitev prostora za shranjevanje je presežena",HTTP_STATUS_403_QUOTA_MSG:"Datoteke ni bilo mogoče prenesti, saj ste presegli omejitev prostora za shranjevanje. Če želite pridobiti prostor, morate izbrisati nekaj obstoječih datotek.",HTTP_STATUS_403_DEL_FOLDER_TITLE:"Ni mogoče izbrisati mape z vsebino (403)",HTTP_STATUS_403_DEL_FOLDER_TITLE_CEF:"Ni mogoče izbrisati mape z vsebino",HTTP_STATUS_403_DEL_FOLDER_MSG:"Brišete lahko samo prazne mape. Izbrišite vsebino mape, preden jo izbrišete.",HTTP_STATUS_403_NO_SHARING_TITLE:"Skupna raba ni dovoljena (403)",HTTP_STATUS_403_NO_SHARING_TITLE_CEF:"Skupna raba ni dovoljena",HTTP_STATUS_403_NO_SHARING_MSG:"Datoteke ni bilo mogoče dati v skupno rabo, ker je zvočna datoteka ali videodatoteka.",HTTP_STATUS_403_VIRUS_TITLE:"Zaznan je virus (403)",HTTP_STATUS_403_VIRUS_TITLE_CEF:"Zaznan je virus",HTTP_STATUS_403_VIRUS_MSG:"Datoteke ni bilo mogoče prenesti, ker vsebuje virus.",HTTP_STATUS_403_ENCRYPTION_TITLE:"Dešifriranje ni uspelo (403)",HTTP_STATUS_403_ENCRYPTION_TITLE_CEF:"Dešifriranje ni uspelo",HTTP_STATUS_403_ENCRYPTION_MSG:"Pri dostopu do vsebine je prišlo do napake. Dešifriranje ni uspelo. Obrnite se na skrbnika informacijske tehnologije.",HTTP_STATUS_403_TITLE:"Prepovedano (403)",HTTP_STATUS_403_TITLE_CEF:"Prepovedano",HTTP_STATUS_403_MSG:"Operacije ni bilo mogoče dokončati. Poskusite znova pozneje.",HTTP_STATUS_404_TITLE:"Datoteke ni bilo mogoče najti (404)",HTTP_STATUS_404_TITLE_CEF:"Datoteke ni bilo mogoče najti",HTTP_STATUS_404_MSG:"Poskusili ste dobiti dostop do datoteke, ki je ni mogoče najti. Datoteko ste mogoče izbrisali ali premaknili v drugi seji.",HTTP_STATUS_405_TITLE:"Metoda ni dovoljena (405)",HTTP_STATUS_405_TITLE_CEF:"Metoda ni dovoljena",HTTP_STATUS_405_MSG:"Zahteve ni bilo mogoče dokončati, ker metoda ni dovoljena.",HTTP_STATUS_406_TITLE:"Nezdružljiv brskalnik",HTTP_STATUS_406_TITLE_CEF:"Vrsta ni podprta",HTTP_STATUS_406_MSG:"Brskalnik ne more komunicirati s tem spletnim mestom. Poskusite z drugim brskalnikom (napaka 406: vrsta ni podprta).",HTTP_STATUS_415_TITLE:"Vrsta medija ni podprta (415)",HTTP_STATUS_415_TITLE_CEF:"Vrsta medija ni podprta",HTTP_STATUS_415_MSG:"Zahteve ni mogoče dokončati, saj določena vrsta medija ni podprta.",HTTP_STATUS_500_TITLE:"Notranja napaka strežnika (500)",HTTP_STATUS_500_TITLE_CEF:"Notranja napaka strežnika",HTTP_STATUS_500_MSG:"Zahteve ni mogoče dokončati zaradi notranje napake strežnika.",HTTP_STATUS_501_TITLE:"Zahteva ni uvedena (501)",HTTP_STATUS_501_TITLE_CEF:"Zahteva ni uvedena",HTTP_STATUS_501_MSG:"Vaša zahteva še vedno ni uvedena v sistem",HTTP_STATUS_503_TITLE:"Strežnik trenutno ni na voljo (503)",HTTP_STATUS_503_TITLE_CEF:"Strežnik trenutno ni na voljo",HTTP_STATUS_503_MSG:"Povezave s strežnikom ni mogoče vzpostaviti; strežnik morda ne deluje. Poskusite znova pozneje.",DOWNLOAD_FORM_TITLE:"Datoteka z obrazcem",DOWNLOAD_FORM_MESSAGE:"Datoteko z obrazcem morate pretvoriti v zapis PDF, če jo želite prenesti.",DOWNLOAD_FORMS_EXCLUDED_MESSAGE:"Razdelek vključuje datoteke z obrazci, ki niso na voljo za prenos. Te datoteke bodo izločene. Različice PDF lahko prenesete tako, da izberete posamezno datoteko obrazca za prenos.",DOWNLOAD_FORMS_MESSAGE:"Datoteke obrazcev niso na voljo za prenos. Različice PDF lahko prenesete tako, da izberete posamezno datoteko obrazca za prenos.",SETTINGS:"Nastavitve",DONE:"Dokončano",FILE_LISTS:"Seznami datotek",STORAGE:"Shramba",EDIT_ACCOUNTS:"Urejanje računov",DOCUMENT_CLOUD_FILES:"Document Cloud",REMOVE_ACCOUNT:"Odstrani račun",ACROBAT_DOT_COM_FILES:"Document Cloud",DOWNLOAD_ALL:"Prenesi vse",NOTIFICATION_UPLOADING:"Prenašanje ...",NOTIFICATION_CONVERTING:"Pretvarjanje ...",NOTIFICATION_CONVERSION_FAILURE:"Neuspešna pretvorba",NOTIFICATION_DOWNLOAD_FAILURE:"Napaka pri prenosu",READY:"Pripravljeno",NOTIFICATION_WAITING:"Čakajoče...",NOTIFICATION_DOWNLOADING:"Prenašanje ...",NOTIFICATION_PROCESSING:"Obdelava ...",NOTIFICATION_DOWNLOAD_ERROR:"Pri prenosu datoteke je prišlo do napake.",NOTIFICATION_RETRY:"Poskusite znova",YES:"Da",NO:"Ne",REPLACE_EXISTING_FILE_TITLE:"Zamenjaj obstoječo datoteko",REPLACE_EXISTING_FILE_MSG:"Datoteka s tem imenom že obstaja. Jo želite zamenjati?",REPLACE_EXISTING_FILE_ARIA_LABEL:"Zamenjaj obstoječo datoteko. Da",OPEN:"Odpri",OPEN_FILE:"Odpri datoteko",OPEN_FILES:"Odpri datoteke",OPEN_FOLDER:"Odpri mapo",SAVE_AS:"Shrani kot",SAVE_AS_FILE:"Shrani kot datoteko",SAVE_AS_FILES:"Shrani kot datoteko ZIP",SAVED:"Shranjeno",SHOW_IN_FOLDER:"Prikaži v mapi",SEND:"Pošlji",CONVERT_TO_PDF:"Pretvarjanje v PDF-je",COMBINE:"Združi",BROWSE_FOLDER:"Prebrskaj ...",CHOOSE_DIFFERENT_FOLDER:"Izberite drugo mapo ...",ATTACH_TO_EMAIL:"Priloži e-pošti",SEND_AND_TRACK:"Pošlji in sledi",PRINT:"Natisni",PUBLIC_ICON_TOOLTIP:"Datoteka je bila deljena s storitvijo Adobe Send & Track",RNA_VERSION_DIALOG_TITLE:"Prišlo je do napake",RNA_VERSION_DIALOG_CONTENT:'Funkcije v tem območju vzpostavljajo povezavo z oblakom Adobe Document Cloud in jih je treba posodabljati, da ostanejo združljive s to storitvijo. Če želite program nadgraditi na najnovejšo različico, v meniju "Pomoč" izberite "Preveri, ali so na voljo posodobitve" ali kliknite spodnjo povezavo, da delo nadaljujete v spletnem brskalniku.',RNA_VERSION_DIALOG_LINK_TITLE:"Pojdi v Document Cloud",EXPORTPDF_RHP_GOURL:"http://www.adobe.com/go/epdfrhprdr6_12_0_0_si",EXPORTPDF_GOURL:"http://www.adobe.com/go/epdfrdr6_12_0_0_si",CREATEPDF_RHP_GOURL:"http://www.adobe.com/go/cpdfrhprdr6_12_0_0_si",CREATEPDF_GOURL:"http://www.adobe.com/go/cpdfrdr2_12_0_0_si",MY_FILES_GOURL:"http://www.adobe.com/go/doccloudfilesrdr_12_0_0_si",FILLSIGN_GOURL:"http://www.adobe.com/go/fsrdr1_12_0_0_si",SEND_GOURL:"http://www.adobe.com/go/sendpluginrdr2_12_0_0_si",SENTFILES_GOURL:"http://www.adobe.com/go/sendpluginrdr3_12_0_0_si",MY_FILES_GOURL_ACRO:"http://www.adobe.com/go/doccloudfilesacro_12_0_0_si",FILLSIGN_GOURL_ACRO:"http://www.adobe.com/go/fsacro1_12_0_0_si",SEND_GOURL_ACRO:"http://www.adobe.com/go/sendpluginacro2_12_0_0_si",SENTFILES_GOURL_ACRO:"http://www.adobe.com/go/sendpluginacro3_12_0_0_si",SERVER_OUTAGE_DIALOG_TITLE:"Prišlo je do napake",SERVER_OUTAGE_DIALOG_CONTENT:"Storitev, do katere poskušate dostopati, začasno ni na voljo. Poskusite znova pozneje."});