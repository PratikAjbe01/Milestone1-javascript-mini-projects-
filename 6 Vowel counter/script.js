const string="jaipur";
let count=0;
for(let i=0;i<string.length;i++){
    if(string[i]=='a'){
        count=count+1;
    }
    else if(string[i]=='e'){
count=count+1;
    }
    else if(string[i]=='i'){
count=count+1;
    }
    else if(string[i]=='o'){
count=count+1;
    }
    else if(string[i]=='u'){
        count=count+1;
    }
}
console.log(count);