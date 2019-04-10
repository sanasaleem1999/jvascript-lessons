// __JS interface to configuration of API end points in various environments.__

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

// `JSLint` directives.
/*global define, window, LOG */
/*jslint devel: true, browser: true */

(function () {
    var Ac = window.Ac, config;

    // Create `config` within `Ac` if necessary.
    config = Ac.config;
    if (!config) {
        config = Ac.config = {};
    }

    // Creates dict of query parameter values indexed by name.
    var queryParams = (function (params) {
        var dict = {}, i, param;

        if (params !== "") {
            for (i = 0; i < params.length; i += 1) {
                param = params[i].split('=');
                if (param.length === 2) {
                    dict[param[0]] = decodeURIComponent(param[1].replace(/\+/g, " "));
                }
            }
        }
        return dict;
    }(document.location.search.substr(1).split('&')));

    // Sets the queryParams.env with the environment passed
    config.setEnvironment = function(env) {
      queryParams.env = env;
    }

    // Gets current environment
    //
    config.getEnvironment = function () {
        var env = queryParams.env;
        if(!env) {
            env = "prod";
        }
        
        return env;
    };
        

    // Gets base_uri value.
    //
    config.getBaseUri = function (base_uri) {
        var env = config.getEnvironment();

        return config.baseUris[env][base_uri];
    };


    //Gets site_catalyst_uri value.
    //
    config.getSiteCatalystUri = function() {
      var env = config.getEnvironment();

      return config.siteCatalystUris[env];
    }

    // Base uris for various envionments.
    config.baseUris = {
                          'prod': {
                              'cloud_base_uri': 'https://cloud.acrobat.com/',
                              'files_base_uri': 'https://files.acrobat.com/',
                              'aic_base_uri': 'https://createpdf.acrobat.com/',
                              'fss_base_uri': 'https://fillsign.acrobat.com',
                              'comment_base_uri': 'https://comments.acrobat.com/',
                              'gomobile_base_uri': 'https://ans.oobesaas.adobe.com/ans/v1/sms',
                              'review_base_uri' : 'https://reviews.adobe.io'  
                             
                          },
                          'stage': {
                              'cloud_base_uri': 'https://cloud.stage.acrobat.com/',
                              'files_base_uri': 'https://files.stage.acrobat.com/',
                              'aic_base_uri': 'https://createpdf.stage.acrobat.com/',
                              'fss_base_uri': 'https://fillsign.stage.acrobat.com',
                              'comment_base_uri': 'https://comments.stage.acrobat.com/',
                              'gomobile_base_uri': 'https://stg-ans.oobesaas.adobe.com/ans/v1/sms',
                              'review_base_uri' : 'https://reviews-stage.adobe.io'    

                          },
                     };

    config.siteCatalystUris = {
                                'prod': 'https://cloud.acrobat.com/appmeasurement.js',
                                'stage': 'https://cloud.stage.acrobat.com/appmeasurement.js'
                              }; 

}());
