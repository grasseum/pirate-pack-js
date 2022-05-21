const structkit = require("structkit"); 
const {script} = require("pack-extract");
const cleanup = require("packcore-support/src/support/cleanup")
var path = require('path');

module.exports =  (configMain)=>{
    
    return {
        name:"cjsFileNameOnlyImportOnly",
         
            transform : async (config)=>{
                
               const data = script(config.content)
                let content = "";

              if(data['cjs'].export.length >0){
                  const exportDefault = data['cjs'].export[0]
                content+="const "+cleanup.cleanExportImportVariable(exportDefault.source)+"=require('./"+cleanup.cleanExportImportVariable(config.currentPath)+"');\n\n";
                content+="exports."+cleanup.cleanExportImportVariable(exportDefault.source)+" ="+cleanup.cleanExportImportVariable(exportDefault.source)+";\n\n";
              }
              return content;
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