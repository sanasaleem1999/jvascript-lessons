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

define({SHOW:"显示",OPEN_SELECTED:"打开选定项目",SAVE:"保存",NEW_FOLDER:"新建文件夹",UPLOAD_FILE:"上载文件",CANCEL_UPLOAD:"取消上载",SORT:"排序",NO_FILES_IN_ROOT:"当前 Document Cloud 中没有文件。",NO_FILES_IN_CONNECTOR:"<%= connector %> 中当前没有文件。",NO_FILES_IN_FOLDER:"此文件夹为空。",UPLOAD_TO_ACCESS:"上载您的文件以便随时随地访问它们。",UNSUPPORTED_CONNECTOR_MSG:"<%= connectorLabel %> 中存储的文件当前不支持 <%= actionName %>。",NO_SEARCH_RESULTS:"无搜索结果。",TRY_DIFFERENT_SEARCH:"请尝试其他搜索。",NO_SEARCH_RESULTS_FOLDER:"此文件夹中没有适用的文件。",TOO_MANY_SEARCH_TERMS_HEADER:"超出最大搜索查询数量。",TOO_MANY_SEARCH_TERMS_MESSAGE:"请删除一些搜索查询以查看其搜索结果。",NEW_FOLDER_TITLE:"新建文件夹",NEW_FOLDER_NAME_PLACEHOLDER:"编辑新文件夹名称",CREATE_FOLDER:"创建文件夹",SORT_BY:"排序依据：",SORT_BY_FILE_NAME:"文件名",SORT_BY_FILE_TYPE:"文件类型",SORT_BY_SIZE:"大小",SORT_BY_DATE_ADDED:"添加日期",SORT_BY_DATE_MODIFIED:"修改日期",SORT_BY_DATE_VIEWED:"查看日期",ASCENDING:"升序",DESCENDING:"降序",DISPLAY:"排序",VIEW_BY:"查看依据：",LIST:"列表",THUMBNAIL:"缩略图",SORT_BY_FILE_SIZE:"文件大小",FILTER:"过滤器",FILTER_BY:"过滤依据...",TAGS_TITLE:"标签：即将推出...",TAGS:"标签",SEARCH_TITLE:"搜索文件",CLEAR_SEARCH_TITLE:"清除搜索",SEARCH_RESULTS:"搜索结果...",SEARCH_RESULTS_COUNT:"搜索结果（<%= count %> 个）",SEARCH_RESULTS_UNAVAILABLE:"搜索结果不可用",ADD_FILTER:"添加过滤器",REMOVE_FILTER:"删除过滤器",SELECT_ATTRIBUTE:"选择属性",SELECT_VALUE:"选择值",SELECT_FORMAT:"选择格式",SELECT_DATES:"选择日期",SELECT_TOOL:"选择工具",ENTER_VALUE:"输入值",EXPORT_FROM_PDF:"导出 PDF",CONVERT_TO_PDF:"创建 PDF",COMBINE_TO_PDF:"合并文件",FILL_SIGN:"填写并签名",ADOBE_ACROBAT:"Adobe Acrobat",ADOBE_READER_MOBILE:"Adobe Reader Mobile",ADOBE_READER:"Adobe Reader",MARK_AS_FAVORITE:"标记为收藏",FILE_INFO:"文件信息",TYPE:"类型",ADDED:"已添加",MODIFIED:"已修改",PAGES:"页面",SIZE:"大小",SHARING_LINK:"共享链接",UNSHARE:"取消共享",MARK_AS_FAVORITE_COMING_SOON:"标记为收藏：即将推出...",COMING_SOON:"即将推出...",PREV_PAGE_TITLE:"上一页",NEXT_PAGE_TITLE:"下一页",PAGE_NUM_TITLE:"页码",PAGE_NUM_SEPARATOR:"/",PAGE_COUNT_TITLE:"页数",ZOOM_OUT_TITLE:"缩小",ZOOM_IN_TITLE:"放大",SCROLL_PAGES_TITLE:"滚动页面",FIT_PAGE_WIDTH_TITLE:"适合页面宽度",FIT_FULL_PAGE_TITLE:"适合整个页面",SHOW_RHP:"显示右面板",HIDE_RHP:"隐藏右面板",SHOW_FILE_INFO:"显示文件信息",HIDE_FILE_INFO:"隐藏文件信息",SHOW_IMAGE_PREVIEW:"显示经典式预览",SHOW_NGDOC_PREVIEW:"显示增强式预览",UNDOCK:"取消固定",DOCK_TO_BOTTOM:"固定到底部",ZERO_ITEMS:"0 个项目",ONE_FILE:"1 个文件",N_FILES:"<%= numFiles %> 个文件",ONE_FOLDER:"1 个文件夹",N_FOLDERS:"<%= numFolders %> 个文件夹",ONE_FOLDER_ONE_FILE:"1 个文件夹，1 个文件",ONE_FOLDER_N_FILES:"1 个文件夹，<%= numFiles %> 个文件",N_FOLDERS_ONE_FILE:"<%= numFolders %> 个文件夹，1 个文件",N_FOLDERS_N_FILES:"<%= numFolders %> 个文件夹，<%= numFiles %> 个文件",UPLOADING:"正在上载...",PROCESSING:"正在处理...",SHARED:"已共享",MAKE_PUBLIC:"设为公共",MAKE_PRIVATE:"设为私人",PRIVATE:"私人",PUBLIC:"公共",SHARE_FILES_PRIVATE_TEXT:"选定的文件为私人文件，仅可供您查看。",SHARE_FILE_PRIVATE_TEXT:"选定的文件为私人文件，仅可供您查看。",SHARE_FILES_PUBLIC_TEXT:"选定的文件为公共文件，具有以下链接的任何人员均可查看这些文件。",SHARE_FILE_PUBLIC_TEXT:"选定的文件为公共文件，具有以下链接的任何人员均可查看该文件。",SHARE_FILES_MIXED_TEXT:"选定的文件同时包括公共和私人文件。单击下面其中的一个按钮可共享或取消共享所有文件。",EMAIL_BUTTON_SINGLE:"通过电子邮件发送链接",EMAIL_BUTTON_MULTI:"通过电子邮件发送链接",EMAIL_LINK:"发送电子邮件",SAVE_BUTTON:"关闭",SHARE_FILES_ERROR:"更改文件的共享状态时出现错误：<%= error %>",SHARE_FILES_SESSION_TIMEOUT:"您的会话已过期。单击下面的“关闭”可返回到“登录”页面。",SHARE_FILE_EMAIL_BODY:"要查看该文件，请单击下面的链接：",SHARE_FILES_EMAIL_BODY:"要查看这些文件，请单击下面的链接：",SHARE_FILE_EMAIL_SUBJECT:"<%= lastName %> <%= firstName %> 与您共享了一个文件。",SHARE_FILES_EMAIL_SUBJECT:"<%= lastName %> <%= firstName %> 与您共享了文件。",SHARE_FILES_AV_DISALLOWED:"共享文件“<%= filename %>”失败，因为不允许共享音频和视频文件。",SHARE_FILES_SHARING_DISALLOWED:"共享文件“<%= filename %>”失败，因为不允许共享该文件。",FOLDER_UPLOAD_NOT_SUPPORTED_TITLE:"不可上载文件夹",FOLDER_UPLOAD_NOT_SUPPORTED_MSG:"我们无法完成您的上载请求。当前不支持文件夹上载。",FILE_UPLOAD_FAILED_TITLE:"文件上载失败",FILE_UPLOAD_FAILED_MSG:"我们无法完成您的上载请求。您可能曾经尝试上载过大的文件或上载文件夹。",FILE_OFFLINE_TITLE:"无 Internet 连接",FILE_OFFLINE_CONTENT:"连接到 Internet 以联机查看您存储的文件。",FILE_OFFLINE_OK_LABEL:"确定",FILE_OFFLINE_ARIA_LABEL:"无 Internet 连接。确定",FILENAME_TEXT:"文件名",RESTRICT_EDITING:"限制编辑",REDUCE_FILE_SIZE:"减少文件大小",EXPORT_FILE_FORMAT:"文件格式",EXPORT_SETTINGS:"设置",EXPORT_VIEW_RESULT:"导出后打开文件",FILES_SIGN_OUT_TITLE:"Adobe Document Cloud",FILES_SIGN_OUT_CONTENT:"登录以访问文件",FILES_SIGN_IN_LABEL:"立即登录",CCLOUD_SIGN_OUT_TITLE:"Creative Cloud",CCLOUD_SIGN_OUT_CONTENT:"登录以访问文件",FILES_NO_ACCESS_TITLE:"无权访问服务",FILES_NO_ACCESS_MESSAGE:"您不具备此服务的访问权限。请联系您的 IT 管理员以获取访问权限，或者尝试",FILES_NO_ACCESS_SIGN_IN_LINK:"使用您的 Adobe ID 登录。",MANAGE_DOCUMENTS_SENT_FOR_SIGNATURE:"管理发送以供签名的文档",ENCRYPTION_KEY_DISABLED_TITLE:"由于企业限制，此内容不可用",ENCRYPTION_KEY_DISABLED_MESSAGE:"已吊销密钥，此内容不再可用。请联系您的管理员以重新启用该密钥，然后再试一次。"});