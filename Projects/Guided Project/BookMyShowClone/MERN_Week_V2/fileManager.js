// Writing & reading bookings and its logs
const fs = require("fs");
const path = require("path")

const dataDir = path.join(__dirname,"data");
const logsDir = path.join(dataDir,"logs");
const bookingFile = path.join(dataDir,"bookings.json");
const logFile = path.join(logsDir,"booking.log");
const archivedLogFile = path.join(logsDir,"booking-archived.log");

function ensureDirectories() {
    // Create data directory if not exists
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir);
    }

    // Create logs directory if not exists
    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
    }
}

function listDataFilesSync() {
    ensureDirectories();
    return fs.readdirSync(dataDir);
}

 function removeLogsDirectorySync(){
    if(fs.existsSync(logDir)) {
        fs.rmdirSync(logDir,{recursive:true});
    }
 }

 //Read/write bookings
 function initializeBookingFileSync(){
    ensureDirectories();

    if(!fs.existsSync(bookingsFile)) {
        fs.writeFileSync(bookingFile,JSON.stringify([],null,2),"utf-8");
    }
 }

 function readBookingSync(){
    initializeBookingFileSync();

    //Read synchnously using buffer first,then covert to string 
    const bufferData = fs.readFileSync(bookingFile);
    const content = bufferData.toString("utf-8");

    return JSON.parse(content || "[]");
 }

 function readBookingAsync() {
    initializeBookingFileSync();

    return new Promise((resolve, reject) => {
        fs.readFile(bookingsFile, (err, bufferData) => {
            if (err) {
                return reject(err);
            }

            try {
                const content = bufferData.toString("utf-8");
                const parsed = JSON.parse(content || "[]");
                resolve(parsed);
            } catch (error) {
                reject(error);
            }
        });
    });
}
   function writeBookingAsync(bookings) {
    initializeBookingFileSync();

    return new Promise((resolve, reject) => {
        const jsonString = JSON.stringify(bookings, null, 2);
        const buffer = Buffer.from(jsonString, "utf-8");

        fs.writeFile(bookingsFile, buffer, (err) => {
            if (err) {
                return reject(err);
            }
            resolve(true);
        });
    });
}

async function appendBookingAsync(booking){
    const booking = await readBookingAsync ();
    bookings.push(booking);
    await writeBookingAsync (booking);
    return booking;
}

function appendLogAsync (message) {
    ensureDirectories();
    return new Promise((resolve,reject) =>{
        const timeStamp = new Date().toISOString();
        const finalMessage = `[${timeStamp}]${message}\n`;

        fs.appendFile(logFile,finalMessage,"utf-8",(err)=>{
            if (err) {
                return reject(err);
            }
            resolve("Log appended successfully.")
        });
    });
}

function renameLogFileSync(){
    ensureDirectories();
       
    if(fs.existsSync(logfile)) {
        fs.renameSync(logFile,archivedLogFile);
        return true;
    }
    return false;
}

function deleteArchivedLogSync(){
       
    if(fs.existsSync(archivedLogFile)) {
        fs.unlinkSync(archivedLogFile);
        return true;
    }
    return false;
}

module.exports = {
    dataDir,
    logsDir,
    bookingFile,
    logFile,
    archivedLogFile,
    ensureDirectories,
    listDataFilesSync,
    removeLogsDirectorySync,
    initializeBookingFileSync,
    readBookingAsync,
    readBookingSync,
    writeBookingAsync,
    writeBookingAsync,
    appendBookingAsync,
    renameLogFileSync,
    deleteArchivedLogSync,
    appendLogAsync,
};