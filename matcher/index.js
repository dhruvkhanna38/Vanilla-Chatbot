'use strict';
const patterns = require("../patterns/index");
const XRegExp = require("xregexp");

const createEntities = (str, pattern)=>{
    return XRegExp.exec(str, XRegExp(pattern, "i"));
}


const matchPattern = (str, cb)=>{
    const getResult = patterns.find((item)=>{
        if(XRegExp.test(str, XRegExp(item.pattern, "i"))){
            return true;
        }
    });
    if(getResult){
        return cb({
            intent : getResult.intent,
            entities: createEntities(str, getResult.pattern)
        });
    }
    else{
        return cb({});
    }
}


module.exports = {matchPattern};