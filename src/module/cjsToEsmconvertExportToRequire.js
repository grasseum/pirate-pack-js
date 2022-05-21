const structkit = require("structkit"); 
const {script} = require("pack-extract");

module.exports =  (configMain)=>{
    
    return {
        name:"cjsToEsmconvertExportToRequire",
         
            transform : async (config)=>{
                return null;
            },
            transformFirstFile : async (config)=>{
                return null;
            },
            transformLastFile : async (config)=>{
                //return null;
                //console.log("tests_s",config)
                return null;
            }
            
        
    }
}