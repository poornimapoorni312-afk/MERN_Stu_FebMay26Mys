function parseConfig(text) {
    try{
        let config = JSON.parse(text);
        return config;
    }
    catch(err){
        console.log("Error parsing config: ",err.message);
        return null;
    }
    finally {
        console.log("Finally block executed.");

    }
}
parseConfig('{"theme":"dark"}');
parseConfig('{"theme"}');