function auditReport(reportJSON) {

    // Convert JSON string to object
    const report = JSON.parse(reportJSON);
  
    let okCount = 0;
    let failCount = 0;
  
    // Scan modules
    for (let key in report) {
  
      if (key === "app") continue;
  
      if (report[key] === "OK") {
        okCount++;
      }
  
      if (report[key] === "FAIL") {
        failCount++;
        break; // stop scanning if FAIL found
      }
    }
  
    const summary = {
      okCount: okCount,
      failCount: failCount
    };  
    return {
      summary: summary,
      summaryJSON: JSON.stringify(summary)
    };
  }  
  
  // Example
  const reportJSON = `{
   "app":"Portal",
   "status":"OK",
   "modules":"OK",
   "auth":"OK",
   "payments":"OK",
   "results":"FAIL",
   "profile":"OK"
  }`;
  
  console.log(auditReport(reportJSON));