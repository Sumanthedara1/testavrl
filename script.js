

function chk()
{

    var table = document.getElementById("tbl");

    for (let i in table.rows) {
   let row = table.rows[i]
   
//    for (let j in row.cells) {
     let col = row.cells[0]
    //  console.log(col);

    let df=document.getElementById("inbox").value;

    if(col.innerText===df)
    {

        // let th=i+;
        
        let roe=document.getElementById("r"+i);
        roe.style.background="yellow";
        
        setTimeout(function(){ roe.style.background="white"
       },3000);
    }
     //iterate through columns
     //columns would be accessed using the "col" variable assigned in the for loop
//    }  
}

}

let msg=null;
function getd( char)
{
    var xh = new XMLHttpRequest();


    xh.open("get", "https://python3-dot-parul-arena-2.uc.r.appspot.com/test?cityname="+char, false);
  xh.onload = function() {

     msg = JSON.parse(xh.response);

    }

    xh.send();
}


let it=1;
async function adddata(d)
{
    await getd(d);
    let tb=document.getElementById("tbl");
    let tr=document.createElement("tr");


    tr.setAttribute("id","r"+it);
    

    // it++;
    let th=document.createElement("th");


    th.innerText=d;
    tr.appendChild(th);

    // console.log("io");
    
    for(i in msg)
    {

        let th=document.createElement("th");

        console.log(i);
        // console.log(msg[0].i);
        th.innerText=msg[i];
        tr.appendChild(th);


        // i++;

    }

    let but=document.createElement("button");

    let term=it;
    but.setAttribute("id",term);
  
    but.setAttribute("onclick","del(this.id)")
    // but.setAttribute("id",term);
    but.innerText="del";
    it++;
    tr.appendChild(but);

    tb.appendChild(tr);

} 



function del(s)
{
    let tbl=document.getElementById("tbl");

    tbl.deleteRow(s);
  
}
let cityid=null;
async function highlight()
{

    for(let ind=1;ind<=4;ind++)
    {


        async function te()
        {


           cityid=document.getElementById("ct"+ind);

            cityid.style.borderColor = "green"
            cityid.style.border = "thick solid green"


        //    console.log(cityid.innerText);
            await  adddata(cityid.innerText);


        }

        
         await setTimeout(te,2000)

          function re()
         {
             console.log("ok");
          cityid=document.getElementById("ct"+ind);

         cityid.style.border = " 1px solid black";

         }

         await setTimeout(re,2000);
      


    }





}
