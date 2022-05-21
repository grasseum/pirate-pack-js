const structkit = require("structkit"); 
const {script} = require("pack-extract");
const cleanup = require("packcore-support/src/support/cleanup")
module.exports =  (configMain)=>{
    
    return {
        name:"cjsToEsmFileNameOnly",
         
            transform : async (config)=>{
                const data = script(config.content)
                let content = "";
                if(data['cjs'].export.length >0){
                    const exportDefault = data['cjs'].export[0]
                    content = "import {default as "+cleanup.cleanExportImportVariable(exportDefault.source)+"_module} from './"+config.currentPath+"';\n";
                    content += "export const "+cleanup.cleanExportImportVariable(exportDefault.source)+"="+cleanup.cleanExportImportVariable(exportDefault.source)+"_module;\n";
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