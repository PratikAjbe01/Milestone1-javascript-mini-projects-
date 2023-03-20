const marks=[23,66,97,44,55];
let highest=marks[0];
for(let i=1;i<marks.length;i++){
    if(marks[i]>highest){
        highest=marks[i];
    }
}
console.log(highest);