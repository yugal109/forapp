
const insert=(table,{first_name,last_name,username,email,password})=>{
    const statement=`INSERT INTO ${table} (first_name,last_name,username,email,password) VALUES('${first_name}','${last_name}','${username}','${email}','${password}')`
    console.log(statement)
    return statement;
}

module.exports=insert