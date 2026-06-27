    //CRUD operation in fs
const fs = require('fs');

//write data from file
    console.log(process.argv[2]);

    const operation = process.argv[2];
    if(operation=='write'){
        const name = process.argv[3];
        const content = process.argv[4];
        const fullName = "files/"+name+".txt"

        fs.writeFileSync(fullName,content)
        
    }
   // read data from file
    else if(operation == 'read'){
        const name = process.argv[3];
        // const content = process.argv[4];
        const fullName= "files/"+name+".txt";

        let data = fs.readFileSync(fullName,"utf-8");
        console.log(data);
        
    }
    
    //update data file
    else if(operation == 'update'){
        const name = process.argv[3];
        const content = process.argv[4];
        const fullName = "files/"+name+".txt";

        let data = fs.appendFileSync(fullName,content);
        console.log(data);
        
    }

    //delete data from file

    else if(operation == 'delete'){
        const name = process.argv[3];
        const content = process.argv[4];
        const fullName = "files/"+name+".txt";

        let data = fs.unlinkSync(fullName,content);
        console.log(data);
        
    }