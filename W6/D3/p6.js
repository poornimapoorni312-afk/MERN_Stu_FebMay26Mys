// Directory(folder) operations: mkdir, readdir, rmdir/rm

const fs=require("fs");
const path=require("path");

const demoDir=path.join(__dirname,"demo-folder");
//create folder
fs.mkdirSync(demoDir,{recursive:true});

fs.writeFileSync(path.join(demoDir,"File1.txt"),"File1 content");
fs.writeFileSync(path.join(demoDir,"File2.txt"),"File2 content");

//to check folder contents
const entries=fs.readdirSync(demoDir);
console.log("Directory contents:",entries);

//delete the folder
fs.rmSync(demoDir,{recursive:true, force:true});
console.log("Directory exists?",fs.existsSync(demoDir));