//Allocating buffers

const emptyBuffer=Buffer.alloc(8);
console.log("Contents of emprtBuffer:",emptyBuffer);
console.log("Allocated buffer bytes:",[...emptyBuffer]);

const textBuffer=Buffer.from([65,66,67]);
console.log("Buffer from byte array: ",textBuffer);

//Buffer.write() writes text into buffer
const buffer=Buffer.alloc(20);
const bytesWritten=buffer.write("HelloWorld");
console.log("Bytes written: ",bytesWritten);

//Subarray
const firstSlice=buffer.subarray(3,6);
console.log("First slice as byte: ",[...firstSlice]);

//decode the bytes into text: toString()
console.log("Decode firstslice of buffer:",buffer.subarray(3,6).toString("utf-8"));