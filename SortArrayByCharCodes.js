var sortByCharCodeAt = function(array){
    //to emphasize the process
    let newArray= array.map((entry)=>{return entry.charCodeAt(0)})
    newArray.sort()
    newArray= newArray.map((entry)=>{return String.fromCharCode(entry)})
    
    console.log(newArray);
    
    //simplified version
     console.log(array.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)))
  }
  
  sortByCharCodeAt(["h", "e", "l", "l", "o"]);