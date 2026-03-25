document.getElementById("compare-btn").addEventListener("click", function(){
    let expected = document.getElementById("expected").value;
    let actual = document.getElementById("actual").value;
    let result = document.getElementById("result");

     //let ClearBtn = document.getElementById("clear-btn");
    //let compareBtn = document.getElementById("compare-btn");

    result.innerHTML = "";

    // if(expected === ""  && actual === "")
    if(expected === "" || actual === ""){
        let li = document.createElement("li");
        li.textContent ="Please enter text in both areas"
        result.appendChild(li);
        return;
    }

        let expectedLines = expected.split("\n");
        let actualLines = actual.split("\n");

        let differences = [];

        let max = expectedLines.length;
        if(actualLines.length> max){
            max = actualLines.length
        }

        
        for(let i = 0; i< expectedLines.length;i++){
            if(expectedLines[i] !== actualLines[i]){
                differences.push(`Line ${i + 1}: expected message "${expectedLines[i]}", actual message "${actualLines[i]}"`)
            }
        }

        let ol = document.createElement("ol")
        ol.id= "diffrences";
       
        if(expectedLines.length !== actualLines.length){
            let li  = document.createElement("li")
            li.textContent = `number of lines are diffrent. expected message ${expectedLines.length}, actual message ${actualLines.length}`;
            ol.appendChild(li);
        }

        if(differences.length>0){
            ol.classList.add("change");

            let msg = document.createElement("p");
            msg.textContent ="THe texts are diffrent";
            result.appendChild(msg)

            differences.forEach(diff =>{
                let li = document.createElement("li");
                li.textContent = diff;
                ol.appendChild(li);
            });

        }else{
            ol.classList.add("nochanges");

            let li = document.createElement("li");
            li.textContent="there whas no diffrence found"
            ol.appendChild(li)
        }
        result.appendChild(ol);

        
      
}); 
    
document.getElementById("clear-btn").addEventListener("click", function () {
    document.getElementById("expected").value = "";
    document.getElementById("actual").value = "";
    document.getElementById("result").innerHTML = "";
    });

