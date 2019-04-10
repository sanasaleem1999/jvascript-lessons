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

define({SHOW:"顯示",OPEN_SELECTED:"開啟選定的項目",SAVE:"儲存",NEW_FOLDER:"新建資料夾",UPLOAD_FILE:"上傳檔案",CANCEL_UPLOAD:"取消上傳",SORT:"排序",NO_FILES_IN_ROOT:"Document Cloud 目前沒有任何檔案。",NO_FILES_IN_CONNECTOR:"<%= connector %> 中目前沒有檔案。",NO_FILES_IN_FOLDER:"此資料夾是空的。",UPLOAD_TO_ACCESS:"上傳您的檔案，即可於任何位置存取。",UNSUPPORTED_CONNECTOR_MSG:"儲存在 <%= connectorLabel %> 的檔案目前不支援 <%= actionName %>。",NO_SEARCH_RESULTS:"無搜尋結果。",TRY_DIFFERENT_SEARCH:"請嘗試其它的搜尋字詞。",NO_SEARCH_RESULTS_FOLDER:"此資料夾中沒有適用的檔案。",TOO_MANY_SEARCH_TERMS_HEADER:"已超過搜尋查詢上限。",TOO_MANY_SEARCH_TERMS_MESSAGE:"請刪除部分搜尋查詢，以查看其搜尋結果。",NEW_FOLDER_TITLE:"新建資料夾",NEW_FOLDER_NAME_PLACEHOLDER:"編輯新資料夾名稱",CREATE_FOLDER:"建立資料夾",SORT_BY:"排序依據︰",SORT_BY_FILE_NAME:"檔案名稱",SORT_BY_FILE_TYPE:"檔案類型",SORT_BY_SIZE:"大小",SORT_BY_DATE_ADDED:"新增日期",SORT_BY_DATE_MODIFIED:"修改日期",SORT_BY_DATE_VIEWED:"檢視日期",ASCENDING:"升序",DESCENDING:"降序",DISPLAY:"排序",VIEW_BY:"檢視方式：",LIST:"清單",THUMBNAIL:"縮圖",SORT_BY_FILE_SIZE:"檔案大小",FILTER:"篩選",FILTER_BY:"篩選依據...",TAGS_TITLE:"標籤：即將推出...",TAGS:"標籤",SEARCH_TITLE:"搜尋檔案",CLEAR_SEARCH_TITLE:"清除搜尋",SEARCH_RESULTS:"搜尋結果...",SEARCH_RESULTS_COUNT:"搜尋結果 (<%= count %> 個)",SEARCH_RESULTS_UNAVAILABLE:"無法提供搜尋結果",ADD_FILTER:"新增篩選",REMOVE_FILTER:"移除篩選",SELECT_ATTRIBUTE:"選擇屬性",SELECT_VALUE:"選擇值",SELECT_FORMAT:"選擇格式",SELECT_DATES:"選擇日期",SELECT_TOOL:"選擇工具",ENTER_VALUE:"輸入值",EXPORT_FROM_PDF:"轉存 PDF",CONVERT_TO_PDF:"建立 PDF",COMBINE_TO_PDF:"合併檔案",FILL_SIGN:"填寫和簽署",ADOBE_ACROBAT:"Adobe Acrobat",ADOBE_READER_MOBILE:"Adobe Reader Mobile",ADOBE_READER:"Adobe Reader",MARK_AS_FAVORITE:"標記為我的最愛",FILE_INFO:"檔案資訊",TYPE:"類型",ADDED:"已新增",MODIFIED:"修改日期",PAGES:"頁面",SIZE:"大小",SHARING_LINK:"共用連結",UNSHARE:"取消共用",MARK_AS_FAVORITE_COMING_SOON:"標記為我的最愛：即將推出...",COMING_SOON:"即將推出...",PREV_PAGE_TITLE:"上一頁",NEXT_PAGE_TITLE:"下一頁",PAGE_NUM_TITLE:"頁碼",PAGE_NUM_SEPARATOR:"/",PAGE_COUNT_TITLE:"頁數",ZOOM_OUT_TITLE:"縮小",ZOOM_IN_TITLE:"放大",SCROLL_PAGES_TITLE:"捲動頁面",FIT_PAGE_WIDTH_TITLE:"符合頁面寬度",FIT_FULL_PAGE_TITLE:"符合整頁",SHOW_RHP:"顯示右側面板",HIDE_RHP:"隱藏右側面板",SHOW_FILE_INFO:"顯示檔案資訊",HIDE_FILE_INFO:"隱藏檔案資訊",SHOW_IMAGE_PREVIEW:"顯示傳統預覽",SHOW_NGDOC_PREVIEW:"顯示增強預覽",UNDOCK:"取消固定",DOCK_TO_BOTTOM:"固定於最下方",ZERO_ITEMS:"0 個項目",ONE_FILE:"1 個檔案",N_FILES:"<%= numFiles %> 個檔案",ONE_FOLDER:"1 個資料夾",N_FOLDERS:"<%= numFolders %> 個資料夾",ONE_FOLDER_ONE_FILE:"1 個資料夾、1 個檔案",ONE_FOLDER_N_FILES:"1 個資料夾、<%= numFiles %> 個檔案",N_FOLDERS_ONE_FILE:"<%= numFolders %> 個資料夾、1 個檔案",N_FOLDERS_N_FILES:"<%= numFolders %> 個資料夾、<%= numFiles %> 個檔案",UPLOADING:"正在上傳...",PROCESSING:"正在處理...",SHARED:"已共用",MAKE_PUBLIC:"設為公開",MAKE_PRIVATE:"設為私人",PRIVATE:"私人",PUBLIC:"公開",SHARE_FILES_PRIVATE_TEXT:"選定的檔案為私人檔案，僅可供您本人檢視。",SHARE_FILE_PRIVATE_TEXT:"選定的檔案為私人檔案，僅可供您本人檢視。",SHARE_FILES_PUBLIC_TEXT:"選定的檔案為公開檔案，擁有下列連結的任何人都能檢視檔案。",SHARE_FILE_PUBLIC_TEXT:"選定的檔案為公開檔案，擁有下列連結的任何人都能檢視檔案。",SHARE_FILES_MIXED_TEXT:"選定的檔案包含公開與私人檔案。請按下方其中一個按鈕以共用或取消共用所有檔案。",EMAIL_BUTTON_SINGLE:"電子郵件連結",EMAIL_BUTTON_MULTI:"電子郵件連結",EMAIL_LINK:"電子郵件",SAVE_BUTTON:"關閉",SHARE_FILES_ERROR:"變更檔案的共用狀態時發生錯誤：<%= error %>",SHARE_FILES_SESSION_TIMEOUT:"您的作業階段已逾期。請按下方的「關閉」返回「登入」頁面。",SHARE_FILE_EMAIL_BODY:"若要檢視檔案，請按下方連結：",SHARE_FILES_EMAIL_BODY:"若要檢視檔案，請按下方連結：",SHARE_FILE_EMAIL_SUBJECT:"<%= firstName %> <%= lastName %> 已經與您共用檔案。",SHARE_FILES_EMAIL_SUBJECT:"<%= firstName %> <%= lastName %> 已經與您共用檔案。",SHARE_FILES_AV_DISALLOWED:"無法共用檔案「<%= filename %>」，因為禁止共用音訊及視訊檔案。",SHARE_FILES_SHARING_DISALLOWED:"無法共用檔案「<%= filename %>」，因為禁止共用該檔案。",FOLDER_UPLOAD_NOT_SUPPORTED_TITLE:"資料夾上傳無法使用",FOLDER_UPLOAD_NOT_SUPPORTED_MSG:"我們無法完成您的上傳請求，目前不支援資料夾上傳。",FILE_UPLOAD_FAILED_TITLE:"檔案上傳失敗",FILE_UPLOAD_FAILED_MSG:"我們無法完成您的上傳請求。您嘗試上傳的檔案可能過大或上傳的是資料夾。",FILE_OFFLINE_TITLE:"無網際網路連線",FILE_OFFLINE_CONTENT:"連線至網際網路，以檢視線上儲存的檔案。",FILE_OFFLINE_OK_LABEL:"確定",FILE_OFFLINE_ARIA_LABEL:"無網際網路連線。確定",FILENAME_TEXT:"檔案名稱",RESTRICT_EDITING:"限制編輯",REDUCE_FILE_SIZE:"縮小檔案大小",EXPORT_FILE_FORMAT:"檔案格式",EXPORT_SETTINGS:"設定",EXPORT_VIEW_RESULT:"轉存後開啟檔案",FILES_SIGN_OUT_TITLE:"Adobe Document Cloud",FILES_SIGN_OUT_CONTENT:"登入以存取檔案",FILES_SIGN_IN_LABEL:"立即登入",CCLOUD_SIGN_OUT_TITLE:"Creative Cloud",CCLOUD_SIGN_OUT_CONTENT:"登入以存取檔案",FILES_NO_ACCESS_TITLE:"無法存取服務",FILES_NO_ACCESS_MESSAGE:"您沒有此服務的存取權限。請連絡您的 IT 管理員以取得存取權限，或嘗試",FILES_NO_ACCESS_SIGN_IN_LINK:"以您的 Adobe ID 登入。",MANAGE_DOCUMENTS_SENT_FOR_SIGNATURE:"管理已傳送供簽署的文件",ENCRYPTION_KEY_DISABLED_TITLE:"因為企業限制，此內容不可用",ENCRYPTION_KEY_DISABLED_MESSAGE:"加密密鑰已被廢止且此內容不再可用。請連絡您的管理員以重新啟用加密密鑰，然後再試一次。"});