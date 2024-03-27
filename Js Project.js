

var di=document.getElementById("di11")

            document.forms[0].addEventListener("submit",(e)=>{
               di.innerHTML=""
              e.preventDefault()
             
         fetch(`https://indian-zipcodes.p.rapidapi.com/api/data?pincode=${e.target[0].value}`,
          { 
              methode:"GET",
                headers:{
              'X-RapidAPI-Key': '85c39f570bmsh6021967c3278783p1143c2jsnae41703e9b6f',
		      'X-RapidAPI-Host': 'indian-zipcodes.p.rapidapi.com'
         }
     })
     .then((zip)=>{
         return zip.json()  
      })
       .then((zip)=>{
         console.log(zip)
         e.target[0].value=""
          localStorage.setItem("ZIPcodes",JSON.stringify(zip))
      
        var zip=JSON.parse(localStorage.getItem("ZIPcodes"))

        var con=document.createElement("div")
        con.setAttribute("id","tdiv")
        di.appendChild(con)
        var tab=document.createElement("table")
        tab.setAttribute("id","tabl")
        con.appendChild(tab)
        var tr1=document.createElement("tr")
        tab.appendChild(tr1)
        tr1.setAttribute("id","tr11")
        var td1=document.createElement("td")
        td1.innerText="S.NO"
        var td2=document.createElement("td")
        td2.innerText="District"
        var td3=document.createElement("td")
        td3.innerText="Pincode"
        var td4=document.createElement("td")
        td4.innerText="Taluka"
        var td5=document.createElement("td")
        td5.innerText="State"

        tr1.appendChild(td1)
        tr1.appendChild(td2)
        tr1.appendChild(td3)
        tr1.appendChild(td4)
        tr1.appendChild(td5)

      for(i=0;i<=zip.length;i++){
        var tr2=document.createElement("tr")
        tab.appendChild(tr2)
        
        var td11=document.createElement("td")
        td11.innerText=[i+1]
        var td12=document.createElement("td")
        td12.innerText=zip[i].district
        var td13=document.createElement("td")
        td13.innerText=zip[i].pincode
        var td14=document.createElement("td")
        td14.innerText=zip[i].taluka
        var td15=document.createElement("td")
        td15.innerText=zip[i].state

        tr2.appendChild(td11)
        tr2.appendChild(td12)
        tr2.appendChild(td13)
        tr2.appendChild(td14)
        tr2.appendChild(td15)
     }
    })   
    
  })