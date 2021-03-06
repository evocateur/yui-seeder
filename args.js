/*jshint node:true */
"use strict";

module.exports = {
    module : {
        position : 0,
        help     : "YUI alias/module to use for module merging",
        required : true
    },

    config : {
        string  : "-c CONFIG --config=CONFIG",
        help    : "Glob filter used to locate the YUI module config",
        default : "**/_config.js"
    },

    output : {
        string  : "-o FILE   --output=FILE",
        help    : "File to write the merged modules to",
        default : "stdout"
    },

    append : {
        string  : "-a,       --append",
        help    : "Append merged modules instead of overwriting",
        flag    : true
    }
};
