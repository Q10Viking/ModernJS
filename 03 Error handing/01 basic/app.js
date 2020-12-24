try{
    throw SyntaxError('Some syntax error')  
}catch(e){
    console.log(e); // I want to make some error
}finally{
    console.log('Finally run reguardless result...');
}