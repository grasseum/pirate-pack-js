const structkit = require("structkit"); 
const {script} = require("pack-extract");
const cleanup = require("packcore-support/src/support/cleanup")
var path = require('path');

module.exports =  (configMain)=>{
    
    return {
        name:"esmFileNameOnlyImportOnly",
         
            transform : async (config)=>{
                
               const data = script(config.content)
                let content = "";

              if(data['esm'].export.length >0){
                  const exportDefault = data['esm'].export[0]

                content+="import {default as "+cleanup.cleanExportImportVariable(exportDefault.source)+"_module} from './"+cleanup.cleanExportImportVariable(config.currentPath)+"';\n\n";
                content+="export const "+cleanup.cleanExportImportVariable(exportDefault.source)+"="+cleanup.cleanExportImportVariable(exportDefault.source)+"_module;\n\n";
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
