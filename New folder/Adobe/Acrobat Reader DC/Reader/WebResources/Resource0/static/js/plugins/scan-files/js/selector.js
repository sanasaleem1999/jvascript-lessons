/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2017 Adobe Systems Incorporated
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

define("acplugins/scan-files/js/ac-scan-files",["plugins-common/ac-plugins"],function(e){var s=e.ScanFiles;return s||(s=e.ScanFiles={}),s.PLUGIN_ID||(s.PLUGIN_ID="scan_files"),s}),define("acplugins/scan-files/js/nls/ui-strings",{root:!0,"xx-xx":!0,"ar-ae":!0,"ca-es":!0,"cs-cz":!0,"da-dk":!0,"de-de":!0,"en-ae":!0,"en-gb":!0,"en-il":!0,"es-es":!0,"eu-es":!0,"fi-fi":!0,"fr-fr":!0,"fr-ma":!0,"he-il":!0,"hr-hr":!0,"hu-hu":!0,"it-it":!0,"ja-jp":!0,"ko-kr":!0,"nb-no":!0,"nl-nl":!0,"pl-pl":!0,"pt-br":!0,"ro-ro":!0,"ru-ru":!0,"sk-sk":!0,"sl-si":!0,"sl-sl":!0,"sv-se":!0,"tr-tr":!0,"uk-ua":!0,"zh-cn":!0,"zh-tw":!0,"bg-bg":!0}),define("acplugins/scan-files/js/nls/root/ui-strings",{SELECTOR_LABEL:"SCAN_FILES",ADOBE_SCAN:"Adobe Scan",SCAN_FILES_TITLE:"Try the new Adobe Scan app.",SCAN_FILES_READER_CONTENT:"Download the free mobile app to quickly turn anything — forms, receipts, notes, and more — into PDFs.",SCAN_FILES_SIGN_IN_CONTENT:"Already an Adobe Scan user? Sign in to Adobe Document Cloud to access your scans.",SCAN_FILES_CONTENT:"Scan anything to PDF — receipts, notes, forms — using your phone. And use Acrobat to annotate, edit text, fill forms, and convert PDFs to other formats."}),define("acplugins/scan-files/js/views/selector-view",["core/ac-core-init","acplugins/scan-files/js/ac-scan-files","i18n!acplugins/scan-files/js/nls/ui-strings","core/views/plugin-selector-view"],function(e,s,n){return s.SelectorView=e.PluginSelectorView.extend({getSelectorLabel:function(){return n.SELECTOR_LABEL}}),s.SelectorView}),define("acplugins/scan-files/js/selector",["acplugins/scan-files/js/ac-scan-files","acplugins/scan-files/js/views/selector-view"],function(){});