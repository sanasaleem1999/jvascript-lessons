/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2014 Adobe Systems Incorporated
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

define("aictools/plugins/selection-action-plugins/cpdf/ac-selection-action-cpdf",["plugins-common/ac-plugins"],function(i){var e=i.SelectionActionCPDF;return e||(e=i.SelectionActionCPDF={}),e}),define("aictools/plugins/selection-action-plugins/cpdf/views/plugin-view",["core/ac-core","aictools/plugins/selection-action-plugins/cpdf/ac-selection-action-cpdf","core/utils/util","core/views/plugin-content-view"],function(i,e,n){return e.PluginView=i.PluginContentView.extend({initialize:function(e){i.PluginContentView.prototype.initialize.call(this,e)},selectPlugin:function(){var i=this.options.appApi.selectionApi.getSelectedItemModels(),e=[],t=[],o={};if(i){if(_.each(i,function(i){i.isFolder()||(_.isEmpty(i.id)?t.push(i._proxy):e.push(i.id))}),e.length>0)return this.options.appApi.rnaApi.done(_.bind(function(i){return n.isAcrobat()?(o.selectedAssetId=e[0],o.appName="CreatePDFApp",i.invokeMethod({methodName:"launchNativeConversionApp",methodArgs:o})):(o.selectedAssetIds=e,o.appName="CPDFAppFull",i.servicesApi({methodName:"launchServicesApp",methodArgs:o}))},this));if(t.length>0)return this.options.appApi.rnaApi.done(_.bind(function(i){return n.isAcrobat()?(o.selectedItemModel=t[0],o.appName="CreatePDFApp",i.invokeMethod({methodName:"launchNativeConversionApp",methodArgs:o})):(o.selectedItemModels=t,o.appName="CPDFAppFull",i.servicesApi({methodName:"launchServicesApp",methodArgs:o}))},this))}},getSiteCatalystName:function(){return"SelectionActionCPDF"},_initWrappers:function(){return void 0},_renderChildViews:function(){return void 0}}),e.PluginView}),define("aictools/plugins/selection-action-plugins/cpdf/selection-action-cpdf",["aictools/plugins/selection-action-plugins/cpdf/ac-selection-action-cpdf","aictools/plugins/selection-action-plugins/cpdf/views/plugin-view"],function(i){_.extend(i,{init:function(){return void 0}})}),define("aictools/plugins/selection-action-plugins/cpdf/plugin",["aictools/plugins/selection-action-plugins/cpdf/ac-selection-action-cpdf","aictools/plugins/selection-action-plugins/cpdf/selection-action-cpdf"],function(i){i.init()});