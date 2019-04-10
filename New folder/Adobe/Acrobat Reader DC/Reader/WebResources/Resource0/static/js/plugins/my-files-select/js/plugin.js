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

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2015 Adobe Systems Incorporated
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

define("acplugins/my-files/js/ac-my-files",["plugins-common/ac-plugins"],function(e){var i=e.MyFiles;return i||(i=e.MyFiles={}),i}),define("acplugins/my-files-select/js/ac-my-files-select",["plugins-common/ac-plugins"],function(e){var i=e.MyFilesSelect;return i||(i=e.MyFilesSelect={}),i}),define("acplugins/my-files/js/ops/plugin/initializing-plugin-op",["core/ac-core","files/ac-files","plugins-common/ac-plugins","acplugins/my-files/js/ac-my-files","core/ops/op"],function(e,i,n,t){return t.InitializingPluginOp=e.Op.extend({run:function(){var t,o,s,l,r=this.options,c=r.appApi,a=c.pluginsApi;return t=e.modelFactory,o=e.uiModelFactory,s=i.uiModelFactory,_.extend(r,{fileUploadModel:t.create("FileUploadModel"),folderModel:t.create("FolderModel"),notificationModel:t.create("NotificationModel"),searchModel:t.create("SearchModel",{},this.options),sessionModel:t.create("SessionModel"),collectionsUiModel:o.create("CollectionsUiModel"),dialogsUiModel:o.create("DialogsUiModel"),errorUiModel:o.create("ErrorUiModel"),fileUploadUiModel:o.create("FileUploadUiModel"),folderUiModel:o.create("FolderUiModel"),hoverPreviewUiModel:o.create("HoverPreviewUiModel"),rhpPreviewUiModel:o.create("RhpPreviewUiModel"),selectionActionsPluginsUiModel:o.create("PluginsUiModel"),keyUiModel:o.create("KeyUiModel"),menusUiModel:o.create("MenusUiModel"),searchUiModel:o.create("SearchUiModel"),selectionUiModel:o.create("SelectionUiModel"),sortUiModel:o.create("SortUiModel"),filesUiModel:s.create("FilesUiModel"),sharingUiModel:s.create("SharingUiModel")}),r.noFullPreviewImpl||_.extend(r,{fullPreviewUiModel:o.create("FullPreviewUiModel"),fullPreviewOverlaysUiModel:o.create("PluginsUiModel"),fullPreviewPluginsUiModel:o.create("PluginsUiModel"),fullPreviewRhpPluginsUiModel:o.create("PluginsUiModel")}),r.noSelectionActions||(l=a.getPluginTypeConfig("file_selection_actions"),_.extend(r,{actualPluginIds:[]}),_.each(l.plugin_ids,function(e){var i=a.getPluginGroupId(e);e=e+"-"+r.pluginId,r.actualPluginIds.push(e),a.registerPluginsUiModel(e,r.selectionActionsPluginsUiModel),a.addPluginsConfig(e,n.types.file_selection_actions),a.setPluginGroupId(e,i)}),a.registerPluginsUiModel(a.getPluginTypeConfig("file_selection_actions"),r.selectionActionsPluginsUiModel)),this._getResolvedPromise()}}),t.InitializingPluginOp}),define("acplugins/my-files/js/ops/plugin/running-plugin-op",["core/ac-core","files/ac-files","acplugins/my-files/js/ac-my-files","core/ops/op"],function(e,i,n){n.RunningPluginOp=e.Op.extend({run:function(){var e,n,t,o,s,l,r,c=this.options;return e=i.opFactory,n=e.create("ListeningForSelectionChangeOp",c),t=e.create("ListeningForViewEventsOp",c),s=e.create("ListeningForSearchInvalidationOp",c),o=e.create("ListeningForSearchQueriesChangeOp",c),l=c.noNotifications?this._getResolvedPromise():e.create("ListeningForCurrentFolderNotificationsOp",c).run(),r=c.noNotifications?this._getResolvedPromise():e.create("ListeningForDupErrorsOp",c).run(),$.when(n.run(),t.run(),s.run(),o.run(),l,r)}})}),define("acplugins/my-files/js/ops/plugin/starting-plugin-op",["core/ac-core","files/ac-files","acplugins/my-files/js/ac-my-files","core/utils/util","core/ops/op"],function(e,i,n,t){n.StartingPluginOp=e.Op.extend({run:function(){var o,s,l=this.options,r=l.appApi,c=i.opFactory,a=$.Deferred();return t.isCEF()||c.create("RestoringFilesPrefsOp",l).run(),c.create("InitializingAcrobatOp",l).run(),n.opFactory.create("RunningPluginOp",l).run(),l.noSelectionActions||e.opFactory.create("LoadingSelectionActionsOp",l).run(),o=l.pluginId,s=r.pluginsApi.getDefaultPluginId("file_selection_dlg"),!r.saveAsApi.isRunningInFileSaveAs()||s!==o||"root-select"!==o&&"ccloud-select"!==o?this._getResolvedPromise():(l.readerContextModel.done(_.bind(function(e){var i=e.get("rna"),n=i.get("viewData").get("fileSelectData");n.invoke("getFileAncestors",[]).done(_.bind(function(e){_.isUndefined(e)||0===e.length||(r.folderApi.setCurrentFolderId(o,e),r.saveAsApi.setCurrentFolderId(e)),a.resolve()},this))},this)),a.promise())}})}),define("acplugins/my-files/js/ops/op-factory",["core/ac-core","acplugins/my-files/js/ac-my-files","acplugins/my-files/js/ops/plugin/initializing-plugin-op","acplugins/my-files/js/ops/plugin/running-plugin-op","acplugins/my-files/js/ops/plugin/starting-plugin-op"],function(e,i){i.OpFactory=e.Op.extend({create:function(e,n){var t=i[e];return t?new t(n):void LOG(0,"AcMyFiles.OpFactory.create: Unrecognized class: "+e)}})}),define("acplugins/ac-bh",[],function(){var e=Ac.Bh;return e||(e=Ac.Bh={}),e}),define("acplugins/build-num",{pluginBuildNumber:"000001"}),define("acplugins/my-files/js/nls/ui-strings",{root:!0,"xx-xx":!0,"de-de":!0,"en-gb":!0,"es-es":!0,"fr-fr":!0,"it-it":!0,"ja-jp":!0,"da-dk":!0,"fi-fi":!0,"nb-no":!0,"nl-nl":!0,"pt-br":!0,"sv-se":!0,"zh-cn":!0,"zh-tw":!0,"ko-kr":!0,"cs-cz":!0,"hu-hu":!0,"pl-pl":!0,"ru-ru":!0,"uk-ua":!0,"tr-tr":!0,"sk-sk":!0,"sl-si":!0,"bg-bg":!0}),define("acplugins/my-files/js/nls/root/ui-strings",{FOOTER_ANCHOR:"Go to Adobe Document Cloud Website",NOTIFICATION_HEADING:"Adobe <%= cloudName %> Files",UNSUPPORTED_CONNECTOR_MSG:"<%= actionName %> is currently not supported for files stored in <%= connectorLabel %>."}),define("acplugins/bh-plugin-view",["core/ac-core","acplugins/ac-bh","core/views/plugin-content-view"],function(e,i){return i.PluginView=e.PluginContentView.extend({getAppApiVersion:function(){return Ac.Plugins.groups.blue_heron.FRAMEWORK_VERSION}}),i.PluginView}),define("acplugins/my-files/js/views/plugin-view",["core/ac-core","files/ac-files","plugins-common/ac-plugins","acplugins/ac-bh","acplugins/my-files/js/ac-my-files","core/utils/sc-analytics","acplugins/build-num","core/utils/router-util","core/utils/action-ids","i18n!files/nls/ui-strings","core/utils/file-types","core/utils/util","core/utils/string-util","i18n!acplugins/my-files/js/nls/ui-strings","acplugins/bh-plugin-view","files/views/files-container-view"],function(e,i,n,t,o,s,l,r,c,a,u,d,p,g){return o.PluginView=t.PluginView.extend({initialize:function(){t.PluginView.prototype.initialize.call(this),d.isCEF()&&_.extend(this.options,{noUpload:!0,noHoverPreview:!0,noNewFolder:!1,folderDeletionDisabled:!1,noDownload:!0,noShare:!1,noShareButton:!1,footerAnchorText:g.FOOTER_ANCHOR})},render:function(){var e=this.options;e.appApi.displayApi.applyUIThemeStyles(this.$el).then(_.bind(function(){t.PluginView.prototype.render.call(this),this._renderChildViews(),this._isListeningForFileUploadEvents||(i.opFactory.create("ListeningForFileUploadEventsOp",e).run(),this._isListeningForFileUploadEvents=!0)},this)),!e.appApi.selectionApi.isRunningInFileSelection()||"root-select"!==e.pluginId&&"ccloud-select"!==e.pluginId||e.appApi.rnaApi.done(function(e){e.logAnayticsCustomOpenSave("Time_To_Show_Dialog_View_Connector_File_List")})},events:function(){return d.isCEF()?_.extend({},e.View.prototype.events,{changeNetworkStateFromFeat:"_onNetworkStateChangeFromFeat"}):void 0},initPlugin:function(){return this._initPlugin()},selectPlugin:function(n){var t,o,s,l,r,u=this.options,p=u.fullPreviewUiModel,h=u.appApi.routerApi,f=u.appApi.connectorsApi,C=u.appApi.pluginsApi,m=u.appApi.folderApi,v=u.appApi.sessionApi,F=u.appApi.networkConnectivityApi,A=u.appApi.displayApi,S=this.options.rnaRecentFilesSelect,y=d.isCEF();if(y){if(this._pluginOptions=n,F.removeNetworkOnlineChangeCallback(this._onOnlineChanged),F.addNetworkOnlineChangeCallback(this._onOnlineChanged),u.appApi.rnaApi.done(_.bind(function(e){e.isFeatRunning()&&e.isASTestAllowInstantiation()&&F.addNetworkConnectivtyChangeCallback(this._onOnlineChanged)},this)),!F.isOnline()&&!S)return v.removeSignedInChangeCallback(this._onSignedInChange),v.addSignedInChangeCallback(this._onSignedInChange),this._isSelected=!0,this.render(),this._getResolvedPromise();if(!v.isSignedInReader()&&!S)return v.removeSignedInChangeCallback(this._onSignedInChange),v.addSignedInChangeCallback(this._onSignedInChange),this._isSelected=!0,this.render(),this._getResolvedPromise()}if(n=n||this.getPluginOptions(),n&&(this._setParentScContext(n.scContext),t=n.routeFolderId,o=n.routeViewType,s=n.routeFilesFilters,l=n.routeFileId),t)u.folderUiModel.set("route_folder_id",t),u.searchUiModel.removeAllFieldQueries();else if(s)u.searchUiModel.removeAllFieldQueries(),u.searchUiModel.setFieldQueriesPath(s),u.sortUiModel.setSortFromQueryParams(h.getQueryParams());else if(y&&this._isSelected)return S||(v.removeSignedInChangeCallback(this._onSignedInChange),v.addSignedInChangeCallback(this._onSignedInChange)),this.render(),this._getResolvedPromise();return this._isSelected=!0,y&&A.showSpinner(!0),this._startPlugin().then(function(){return S?$.Deferred().resolve().promise():v.ensureSignedIn()}).then(_.bind(function(){var t,s=n&&n.singleFileSelection,d=u.pluginId,F=C.getPluginUiModel(d),P=F.get("connector_name"),I=n&&n.selectedToolPlugin||C.getSelectedPluginId("tools"),M=c.toolIdsToActionIds[I],w=c.toolIdsToActionNames[I],U=f.getConnectorPluginLabel(d);return y&&(i.opFactory.create("RestoringFilesPrefsOp",u).run(),S||(v.removeSignedInChangeCallback(this._onSignedInChange),v.addSignedInChangeCallback(this._onSignedInChange)),"root"===P?f.setConnectorPluginRoot(d,m.getRootFolderId(d)):(this.options.footerAnchorText=void 0,this.options.noShare=!0,this.options.noShareButton=!0)),u.selectionUiModel.set("multiple_selection",!s),u.collectionsUiModel.set("checkbox",!s),o&&u.collectionsUiModel.set("view",o),(y||e.Features.isFeatureEnabled("no_collection_item_checkbox")&&h.hasQueryParam("no_collection_item_checkbox","1"))&&u.collectionsUiModel.set("checkbox",!1),this._initFilter(n),this._configureActions(P),this.render(),u.fileUploadUiModel.startListening(),l?(p.isFileOpen(l)||(p.close({silent:!0}),i.opFactory.create("OpeningFullPreviewOp",_.extend({},u,{id:l})).run()),void(y&&A.showSpinner(!1))):f.isConnectorPlugin(d)&&!f.getConnectorPluginRoot(d)?(h.navigate(P),y&&A.showSpinner(!1),this._getResolvedPromise()):u.noUrlUpdate&&f.isActionRestricted(P,M)?(w&&U&&(t=C.getSelectorApi(I),t&&t.getSelectorLabel&&(w=t.getSelectorLabel(),w&&""!==w||(w=c.toolIdsToActionNames[I])),r=_.template(y?g.UNSUPPORTED_CONNECTOR_MSG:a.UNSUPPORTED_CONNECTOR_MSG,{actionName:w,connectorLabel:U}),u.collectionsUiModel.set("force_empty_msg",r)),u.collectionsUiModel.set("force_empty",!0),u.sortUiModel.set("is_locked",!0),u.searchUiModel.set("is_locked",!0),y&&A.showSpinner(!1),this._getResolvedPromise()):(n&&(u=_.extend({},u,_.pick(n,"noHistoryEffect"))),this._runSearchOp(u))},this),_.bind(function(e){if(y){if(A.showSpinner(!1),e&&"NoAccessToPdfServices"===e.errorString)return v.removeSignedInChangeCallback(this._onSignedInChange),v.addSignedInChangeCallback(this._onSignedInChange),this._isSelected=!0,this.render(),this._getResolvedPromise();0===this.$el.children().length&&C.handleServerOutageFailure()}},this))},deselectPlugin:function(){var i=this.options,n=i.appApi.networkConnectivityApi;d.isCEF()&&n.removeNetworkOnlineChangeCallback(this._onOnlineChanged),e.PluginContentView.prototype.deselectPlugin.call(this),this._isSelected=!1},remove:function(){this.deselectPlugin(),e.PluginContentView.prototype.remove.call(this)},releasePlugin:function(){var e=this.options,i=this.options.appApi.folderApi;t.PluginView.prototype.releasePlugin.call(this),d.isCEF()&&(this._unsetPluginRoot(),i.setCurrentFolderId(e.pluginId,void 0),e.folderModel.unset("name"),this._pluginOptions=_.omit(this._pluginOptions,"routeFolderId","routeFilesFilters","routeFileId")),e.folderModel.unset("id"),e.searchUiModel.removeAllFieldQueries()},getSelectionUiModel:function(){return this.options.selectionUiModel},getPluginVersionList:function(){var e=[l.pluginBuildNumber],i=this.options.appApi.baseFilesUrisApi.getServerVersion();return i&&e.push(i),$.Deferred().resolve().promise(e)},getFilesFooterUrl:function(){var i=this.options,n=i.appApi.folderApi;return"root"===i.pluginId?e.opFactory.create("GettingSsoUriOp",i).run("folder/"+encodeURIComponent(n.getRootFolderId())):void 0},clickedOutsideAiCview:function(){return d.isCEF()&&(this._triggerViewEvent(e.ViewEvents.CLEAR_SELECTION),$(document.body).click()),this._getResolvedPromise()},getSiteCatalystName:function(){var e=this.options,i=e.appApi,n=e.pluginId;return i&&i.connectorsApi.isConnectorPlugin(n)?i.connectorsApi.getConnectorPluginScName(n):s.DOCUMENT_CLOUD},doesFileExists:function(e){var i,n,t,o,s,l=this.options,r=l.filesUiModel;return r.isFolderView()?i=l.folderModel.get("items"):l.filesUiModel.isSearchResultsView()&&(i=l.searchModel.get("items")),e&&i&&(e=e.toLowerCase(),s=p.getNormalizedString(e,"NFC"),_.isUndefined(s)||(e=s),t=i.models,n=_.find(t,function(i){return"file"===i.get("object_type")?(o=i.get("name").toLowerCase(),s=p.getNormalizedString(o,"NFC"),_.isUndefined(s)||(o=s),o===e):!1})),n},_runSearchOp:function(e){return i.opFactory.create("SearchingIfAskedOp",e).run().done(_.bind(function(){e.noInitialViewCounts||this._seenInitialView||(this._seenInitialView=!0,this._logInitialViewCounts()),d.isCEF()&&this.options.appApi.displayApi.showSpinner(!1)},this)).fail(_.bind(function(){d.isCEF()&&this.options.appApi.displayApi.showSpinner(!1)},this))},_onViewEvent:function(i,n){var t=this.options;return t.inFileSelectionDlg&&i===e.ViewEvents.SELECTION_COMMIT?void t.selectionUiModel.commitSelection():void this.trigger(i,n)},_renderChildViews:function(){this._renderChildView("_filesContainerView",i.FilesContainerView,this.$el)},_initPlugin:function(){var e,i,n=this._initingPluginPromise,t=this.options,s=t.pluginId,l=t.appApi.connectorsApi,r=s,c="Document Cloud";return i=l.getConnectorUIName(s),i&&(c=i),e=_.template(g.NOTIFICATION_HEADING,{cloudName:c}),_.extend(this.options,{notificationHeading:e,notificatonCategory:r}),n||(n=this._initingPluginPromise=o.opFactory.create("InitializingPluginOp",this.options).run()),n},_startPlugin:function(){var e=this._startingPluginPromise,i=!1,n=!1;return e||(e=this._startingPluginPromise=o.opFactory.create("StartingPluginOp",this.options).run().then(_.bind(function(){this.options.noAcrobat||this._addAppApiCallbacks(),i=this.options.showFoldersInSearch===!0,n=i&&this.options.showNavigationAtRoot===!0,this.options.searchUiModel.set({should_show_folders:i,should_show_navigate_root:n},{silent:!0})},this))),e},_configureAction:function(e,i,n){var t=this.options,o=t.appApi.connectorsApi,s=o.isActionRestricted(e,i);return s&&(t[n]=!0),s},_configureActions:function(e){var i=this.options,n=i.pluginId,t=i.appApi.connectorsApi;t.isConnectorPlugin(n)&&(this._configureAction(e,c.NEWFOLDER,"noNewFolder"),this._configureAction(e,c.UPLOAD,"noUpload"),this._configureAction(e,c.FILTER,"noFilter"),this._configureAction(e,c.SORT,"noSort")&&i.sortUiModel.set("is_locked",!0),this._configureAction(e,c.SEND,"noShare"),this._configureAction(e,c.SEND,"noShareButton"),this._configureAction(e,c.DOWNLOAD,"noDownload"),this._configureAction(e,c.DELETE,"noDelete"),this._configureAction(e,c.MOVE,"noMove"),this._configureAction(e,c.RENAME,"noRename"))},_initFilter:function(i){var n,t,o,s,l,r=e.SearchUiModel,c=this.options.searchUiModel,a=this._getResolvedPromise();return d.isCEF()&&(a=this.options.readerContextModel),a.then(_.bind(function(){return i?(n=i.filter,n&&(t=n.mimeTypes,o=n.extensions,t&&t.length>0?c.addFieldQuery({field:r.FIELD_FILE_TYPE,value:t.join(),commitQueryBox:!0,queryBoxVisible:!this.options.noVisibleFieldQueries,queryLabel:n.queryLabel,removable:!1},{silent:!0}):d.isCEF()&&o&&o.length>0&&this.options.collectionsUiModel.set("filter_by_extension",o,{silent:!0}),s=n.minSize,s&&c.addFieldQuery({field:r.FIELD_FILE_MIN_SIZE,value:s,commitQueryBox:!1,queryBoxVisible:!this.options.noVisibleFieldQueries,removable:!1},{silent:!0}),l=n.maxSize,l&&c.addFieldQuery({field:r.FIELD_FILE_MAX_SIZE,value:l,commitQueryBox:!1,queryBoxVisible:!this.options.noVisibleFieldQueries,removable:!1},{silent:!0})),n):void 0},this))},_getSiteCatalystContext:function(){var e=this.options,i=e.appApi,n=e.pluginId;return i&&i.connectorsApi.isConnectorPlugin(n)?e.selectFilesScContext?i.connectorsApi.getConnectorPluginScName(n):s.FILE_LIST:e.selectFilesScContext?s.DOCUMENT_CLOUD:s.FILE_LIST},_logInitialViewCounts:function(){var e=this.options,i=e.appApi.siteCatalystApi,n=e.folderModel,t=[this._getSiteCatalystContext(),s.INITIAL_VIEW];i.logScEvent(t.concat([s.NUM_FILES_SHOWN,s.getCountCode(n.getChildFilesCount())])),i.logScEvent(t.concat([s.NUM_FOLDERS_SHOWN,s.getCountCode(n.getChildFoldersCount())]))},_addAppApiCallbacks:function(){var e=this.options.appApi;d.isCEF()||e.sessionApi.addSignedInChangeCallback(this._onSignedInChange),e.acrobatApi.addSelectedFilterIndexChangeCallback(this._onSelectedFilterIndexChange)},_onSignedInChange:function(e,i){var n=this.options;d.isCEF()?this._isSelected?i?(this.deselectPlugin(),this.selectPlugin(this._pluginOptions)):(n.dialogsUiModel.closeAll(),n.selectionUiModel.clearSelection(!1),this.releasePlugin(),delete this._startingPluginPromise,this.render()):i||(n.selectionUiModel.clearSelection(!1),this.releasePlugin(),delete this._startingPluginPromise):i||delete this._startingPluginPromise},_onSelectedFilterIndexChange:function(e,i){var n=this.options;n.collectionsUiModel.set("filter_by_extension",n.appApi.acrobatApi.getFilterFileExtensions(i))},_onOnlineChanged:function(e,i){i?(this.deselectPlugin(),this.selectPlugin(this._pluginOptions)):(this.options.appApi.saveAsApi.setCanSave(!1),this.render())},_unsetPluginRoot:function(){var e=this.options,i=e.appApi.connectorsApi;"root"===i.getConnectorPluginName(e.pluginId)&&i.setConnectorPluginRoot(e.pluginId,void 0)},getFolderAncestorIds:function(){var e,i=[];return e=this.options.folderUiModel.get("path"),_.each(e,function(e){i.push(e.id)}),i},_onNetworkStateChangeFromFeat:function(e,i){var n=(this.options,this.options.appApi);n.rnaApi.done(_.bind(function(e){e.isFeatRunning()&&e.isASTestAllowInstantiation()&&(n.options.networkConnectivityModel.set({is_connected:i?i.state:!1}),n.networkConnectivityApi.removeNetworkConnectivtyChangeCallback(this._onOnlineChanged))},this))}}),o.PluginView}),define("acplugins/my-files/js/my-files",["acplugins/my-files/js/ac-my-files","acplugins/my-files/js/ops/op-factory","acplugins/my-files/js/views/plugin-view"],function(e){_.extend(e,{init:function(){e.opFactory=new e.OpFactory}})}),define("acplugins/my-files-select/js/views/plugin-view",["acplugins/my-files/js/ac-my-files","acplugins/my-files-select/js/ac-my-files-select","core/utils/util","acplugins/my-files/js/views/plugin-view"],function(e,i,n){return i.PluginView=e.PluginView.extend({initialize:function(){e.PluginView.prototype.initialize.call(this),_.extend(this.options,{inFileSelectionDlg:!0,noSelectionActions:!0,noUpload:!0,noNewFolder:!0,noUrlUpdate:!0,noNotifications:!0,noPreferences:!0,noAcrobat:!0,noFolderSelection:!0,noHoverPreview:!0,noFullPreview:!0,noShareButton:!0,selectFilesScContext:!0,noInitialViewCounts:!0,noVisibleFieldQueries:!0,showFoldersInSearch:!0,showNavigationAtRoot:!1,footerAnchorText:void 0})},selectPlugin:function(i){var t=this.options;return n.isCEF()&&(t.appApi.saveAsApi.isRunningInFileSaveAs()&&_.extend(t,{showNavigationAtRoot:!0,noFilesHeader:!0,showNewFolderInNavigation:!0}),$(".file-selection-dlg-continue-btn").show()),e.PluginView.prototype.selectPlugin.call(this,i)}}),i.PluginView}),define("acplugins/my-files-select/js/my-files-select",["acplugins/my-files/js/ac-my-files","acplugins/my-files-select/js/ac-my-files-select","acplugins/my-files/js/ops/op-factory","acplugins/my-files-select/js/views/plugin-view"],function(e,i){_.extend(i,{init:function(){e.init()}})}),define("acplugins/my-files-select/js/plugin",["core/ac-core-init","files/ac-files-init","acplugins/my-files/js/ac-my-files","acplugins/my-files-select/js/ac-my-files-select","acplugins/my-files/js/my-files","acplugins/my-files-select/js/my-files-select"],function(e,i,n,t){t.init()});