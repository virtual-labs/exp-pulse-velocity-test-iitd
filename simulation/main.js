var item1 = 0;
var item2 = 0;

function navNext1()

{

        document.getElementById("canvas1").style.visibility="hidden";

        document.getElementById("canvas2").style.visibility="visible";//canvas2,17
        document.getElementById("barrow2").style.visibility="visible";

}


function navNext2()

{

        document.getElementById("canvas2").style.visibility="hidden";

        document.getElementById("canvas3").style.visibility="visible";

      // setTimeout(function()
      //    {
      //       document.getElementById("handarrow2").style.visibility="visible";
      //       document.getElementById("barrow5").style.visibility="visible"; 
      //    },4000);


}



function navNext3()

{

        // document.getElementById("canvas3").style.visibility="hidden";

        
      

if (item2 == "500" && item1 == "image/indirectwall.png")
    {

    document.getElementById("canvas3").style.visibility="hidden";

    document.getElementById("dtw1").style.visibility="visible";
    document.getElementById("dtw1").src="image/wall1.png";
    

    document.getElementById("canvas4").style.visibility="visible";//4
    document.getElementById("barrow6").style.visibility="visible";
document.getElementById("walltype").innerHTML="Dry Wall";
    } 
else if (item2 == "500" && item1 == "image/indirectwallwet.png")
    {

    document.getElementById("canvas3").style.visibility="hidden";

    document.getElementById("dtw1").style.visibility="visible";
    document.getElementById("dtw1").src="image/wall1wet.png";

    document.getElementById("canvas4").style.visibility="visible";//4
    document.getElementById("barrow6").style.visibility="visible";
document.getElementById("walltype").innerHTML="Wet Wall";
    }    
else if (item2 == "700" && item1 == "image/indirectwall.png") 
    {

    document.getElementById("canvas3").style.visibility="hidden";

    document.getElementById("sdt1").style.visibility="visible";
    document.getElementById("sdt1").src="image/wall1.png";

    document.getElementById("canvas13").style.visibility="visible";//13


    document.getElementById("walltype10").innerHTML="Dry Wall";
   

    } 
else if (item2 == "700" && item1 == "image/indirectwallwet.png") 
    {

    document.getElementById("canvas3").style.visibility="hidden";

    document.getElementById("sdt1").style.visibility="visible";
    document.getElementById("sdt1").src="image/wall1wet.png";

    document.getElementById("canvas13").style.visibility="visible";//13

    document.getElementById("walltype10").innerHTML="Wet Wall";


    }
else if (item2 == "900" && item1 == "image/indirectwall.png") 
    {

    document.getElementById("canvas3").style.visibility="hidden";

    document.getElementById("indt").style.visibility="visible";
    document.getElementById("indt").src="image/indirectwall.png";
    
    document.getElementById("canvas22").style.visibility="visible";//22

    document.getElementById("walltype19").innerHTML="Dry Wall";

 
    } 
else if (item2 == "900" && item1 == "image/indirectwallwet.png") 
    {

    document.getElementById("canvas3").style.visibility="hidden";

    document.getElementById("indt").style.visibility="visible";
    document.getElementById("indt").src="image/indirectwallwet.png";
    
    document.getElementById("canvas22").style.visibility="visible";//22

    document.getElementById("walltype19").innerHTML="Wet Wall";

    }
else 
    {
    alert("Item Not Select");
    }
// document.getElementById('selectprocessor').style.visibility="hidden";



        

        // alert(item1);
//  if (item1 == "image/indirectwall.png") 
//     {
//     document.getElementById("dtw1").style.visibility="visible";
//     document.getElementById("dtw1").src="image/wall1.png";
//     } 
// else if (item1 == "image/indirectwallwet.png") 
//     {
//     document.getElementById("dtw1").style.visibility="visible";
//     document.getElementById("dtw1").src="image/wall1wet.png";
//     } 

// else 
//     {
//     alert("Item Not Select");
//     }










}
function navNext4()

{
if (item1 == "image/indirectwall.png") 
{
    document.getElementById("walltype2").innerHTML="Dry Wall";
} 
else 
{
    document.getElementById("walltype2").innerHTML="Wet Wall";
}


        document.getElementById("canvas4").style.visibility="hidden";
        document.getElementById("canvas5").style.visibility="visible";

if (item1 == "image/indirectwall.png") 
    {
    document.getElementById("wallwithpoint1").style.visibility="visible";
    document.getElementById("wallwithpoint1").src="image/wallwithpoint.png";
    } 
else if (item1 == "image/indirectwallwet.png") 
    {
    document.getElementById("wallwithpoint1").style.visibility="visible";
    document.getElementById("wallwithpoint1").src="image/wallwithpointwet.png";
    } 

else 
    {
    alert("Item Not Select");
    }

        document.getElementById("canvas5").style.visibility="visible";
        document.getElementById("barrow10").style.visibility="visible";

}

function navNext5()

{
if (item1 == "image/indirectwall.png") 
{
    document.getElementById("walltype3").innerHTML="Dry Wall";
} 
else 
{
    document.getElementById("walltype3").innerHTML="Wet Wall";
}
  

        document.getElementById("canvas5").style.visibility="hidden";
        document.getElementById("canvas6").style.visibility="visible";
}


function navNext6()

{
if (item1 == "image/indirectwall.png") 
{
    document.getElementById("walltype4").innerHTML="Dry Wall";
} 
else 
{
    document.getElementById("walltype4").innerHTML="Wet Wall";
}
  

        document.getElementById("canvas6").style.visibility="hidden";
        document.getElementById("canvas7").style.visibility="visible"; 
         

}

function navNext7()

{
if (item1 == "image/indirectwall.png") 
{
    document.getElementById("walltype5").innerHTML="Dry Wall";
} 
else 
{
    document.getElementById("walltype5").innerHTML="Wet Wall";
}
  
        document.getElementById("canvas7").style.visibility="hidden";
        document.getElementById("canvas8").style.visibility="visible";
        //document.getElementById("backwalls5").style.visibility="visible";
        //document.getElementById("smachines5").style.visibility="visible";
        //document.getElementById("barrow21").style.visibility="visible";


}

function navNext8()

{
if (item1 == "image/indirectwall.png") 
{
    document.getElementById("walltype6").innerHTML="Dry Wall";
} 
else 
{
    document.getElementById("walltype6").innerHTML="Wet Wall";
}
  
        document.getElementById("canvas8").style.visibility="hidden";
        document.getElementById("canvas9").style.visibility="visible";
        

        }

function navNext9()

{
if (item1 == "image/indirectwall.png") 
{
    document.getElementById("walltype7").innerHTML="Dry Wall";
} 
else 
{
    document.getElementById("walltype7").innerHTML="Wet Wall";
}
  
        document.getElementById("canvas9").style.visibility="hidden";
        document.getElementById("canvas10").style.visibility="visible";
         

       }

function navNext10()

{
if (item1 == "image/indirectwall.png") 
{
    document.getElementById("walltype8").innerHTML="Dry Wall";
} 
else 
{
    document.getElementById("walltype8").innerHTML="Wet Wall";
}
  
        document.getElementById("canvas10").style.visibility="hidden";
        document.getElementById("canvas11").style.visibility="visible";
        

       }

function navNext11()

{
if (item1 == "image/indirectwall.png") 
{
    document.getElementById("walltype9").innerHTML="Dry Wall";
} 
else 
{
    document.getElementById("walltype9").innerHTML="Wet Wall";
}
  
        document.getElementById("canvas11").style.visibility="hidden";
        document.getElementById("canvas12").style.visibility="visible";
        

        }

//semi-direct transmission


function navNext12()

{

  
        location.reload();
        // document.getElementById("canvas12").style.visibility="hidden";
        // document.getElementById("canvas13").style.visibility="visible";
        //document.getElementById("").style.visibility="visible";
}

function navNext13()

{


        document.getElementById("canvas13").style.visibility="hidden";

if (item1 == "image/indirectwall.png") 
    {
    document.getElementById("wallwithpointsemi1").style.visibility="visible";
    document.getElementById("wallwithpointsemi1").src="image/semimarkwall.png";
    document.getElementById("walltype11").innerHTML="Dry Wall";
    } 
else if (item1 == "image/indirectwallwet.png") 
    {
    document.getElementById("wallwithpointsemi1").style.visibility="visible";
    document.getElementById("wallwithpointsemi1").src="image/semimarkwallwet.png";
    document.getElementById("walltype11").innerHTML="Wet Wall";
    } 

else 
    {
    alert("Item Not Select");
    }
        document.getElementById("canvas14").style.visibility="visible";
        document.getElementById("addbtnsemi2").style.visibility="visible";
        document.getElementById("barrowsemi5").style.visibility="visible";

}

function navNext14()

{

        document.getElementById("canvas14").style.visibility="hidden";

if (item1 == "image/indirectwall.png") 
    {
    document.getElementById("semimarkwall2").style.visibility="visible";
    document.getElementById("semimarkwall2").src="image/semimarkwall.png";
    document.getElementById("walltype12").innerHTML="Dry Wall";
    } 
else if (item1 == "image/indirectwallwet.png") 
    {
    document.getElementById("semimarkwall2").style.visibility="visible";
    document.getElementById("semimarkwall2").src="image/semimarkwallwet.png";
    document.getElementById("walltype12").innerHTML="Wet Wall";
    } 

else 
    {
    alert("Item Not Select");
    }

        document.getElementById("canvas15").style.visibility="visible";
}

function navNext15()

{

if (item1 == "image/indirectwall.png") 
{
    document.getElementById("walltype13").innerHTML="Dry Wall";
} 
else 
{
    document.getElementById("walltype13").innerHTML="Wet Wall";
}
        document.getElementById("canvas15").style.visibility="hidden";
        document.getElementById("canvas16").style.visibility="visible";
        

        }

function navNext16()

{

        document.getElementById("canvas16").style.visibility="hidden";

if (item1 == "image/indirectwall.png") 
    {
    document.getElementById("semimarkwall3").style.visibility="visible";
    document.getElementById("semimarkwall3").src="image/semimarkwall.png";
    document.getElementById("walltype14").innerHTML="Dry Wall";
    } 
else if (item1 == "image/indirectwallwet.png") 
    {
    document.getElementById("semimarkwall3").style.visibility="visible";
    document.getElementById("semimarkwall3").src="image/semimarkwallwet.png";
    document.getElementById("walltype14").innerHTML="Wet Wall";
    } 

else 
    {
    alert("Item Not Select");
    }

        document.getElementById("canvas17").style.visibility="visible";
        document.getElementById("semimarkwall3").style.visibility="visible";
        // document.getElementById("smachinesemi2").style.visibility="visible";
        document.getElementById("barrowsemi14").style.visibility="visible";

}

function navNext17()

{

        document.getElementById("canvas17").style.visibility="hidden";
        document.getElementById("canvas18").style.visibility="visible";
if (item1 == "image/indirectwall.png") 
{
    document.getElementById("walltype15").innerHTML="Dry Wall";
} 
else 
{
    document.getElementById("walltype15").innerHTML="Wet Wall";
}        

        }

function navNext18()

{

        document.getElementById("canvas18").style.visibility="hidden";
        document.getElementById("canvas19").style.visibility="visible";
if (item1 == "image/indirectwall.png") 
{
    document.getElementById("walltype16").innerHTML="Dry Wall";
} 
else 
{
    document.getElementById("walltype16").innerHTML="Wet Wall";
}        

        }

function navNext19()

{

        document.getElementById("canvas19").style.visibility="hidden";
        document.getElementById("canvas20").style.visibility="visible";
if (item1 == "image/indirectwall.png") 
{
    document.getElementById("walltype17").innerHTML="Dry Wall";
} 
else 
{
    document.getElementById("walltype17").innerHTML="Wet Wall";
}       

        }

function navNext20()

{

        document.getElementById("canvas20").style.visibility="hidden";
        document.getElementById("canvas21").style.visibility="visible";
if (item1 == "image/indirectwall.png") 
{
    document.getElementById("walltype18").innerHTML="Dry Wall";
} 
else 
{
    document.getElementById("walltype18").innerHTML="Wet Wall";
}        

        }

//indirect transmission



function navNext21()

{

location.reload();
        // document.getElementById("canvas21").style.visibility="hidden";
        // document.getElementById("canvas22").style.visibility="visible";
}

function navNext22()

{

        document.getElementById("canvas22").style.visibility="hidden";

        

if (item1 == "image/indirectwall.png") 
    {
    document.getElementById("indirectwall3").style.visibility="visible";
    document.getElementById("indirectwall3").src="image/indirectwall.png";
    document.getElementById("walltype20").innerHTML="Dry Wall";
    } 
else if (item1 == "image/indirectwallwet.png") 
    {
    document.getElementById("indirectwall3").style.visibility="visible";
    document.getElementById("indirectwall3").src="image/indirectwallwet.png";
    document.getElementById("walltype20").innerHTML="Wet Wall";
    } 

else 
    {
    alert("Item Not Select");
    }


        document.getElementById("canvas23").style.visibility="visible";
}

function navNext23()

{

        document.getElementById("canvas23").style.visibility="hidden";



if (item1 == "image/indirectwall.png") 
    {
    document.getElementById("indirectwall4").style.visibility="visible";
    document.getElementById("indirectwall4").src="image/indirectwall.png";
    document.getElementById("walltype21").innerHTML="Dry Wall";
    } 
else if (item1 == "image/indirectwallwet.png") 
    {
    document.getElementById("indirectwall4").style.visibility="visible";
    document.getElementById("indirectwall4").src="image/indirectwallwet.png";
    document.getElementById("walltype21").innerHTML="Wet Wall";
    } 

else 
    {
    alert("Item Not Select");
    }


        document.getElementById("canvas24").style.visibility="visible";   
 }

 function navNext24()

{

        document.getElementById("canvas24").style.visibility="hidden";
        document.getElementById("canvas25").style.visibility="visible";
if (item1 == "image/indirectwall.png") 
{
    document.getElementById("walltype22").innerHTML="Dry Wall";
} 
else 
{
    document.getElementById("walltype22").innerHTML="Wet Wall";
}        

}


 function navNext25()

{

        document.getElementById("canvas25").style.visibility="hidden";
        document.getElementById("canvas26").style.visibility="visible";
if (item1 == "image/indirectwall.png") 
{
    document.getElementById("walltype23").innerHTML="Dry Wall";
} 
else 
{
    document.getElementById("walltype23").innerHTML="Wet Wall";
}        

}

function navNext26()

{

        document.getElementById("canvas26").style.visibility="hidden";
        document.getElementById("canvas27").style.visibility="visible";
if (item1 == "image/indirectwall.png") 
{
    document.getElementById("walltype24").innerHTML="Dry Wall";
} 
else 
{
    document.getElementById("walltype24").innerHTML="Wet Wall";
}         
       

}

function navNext27()

{

        document.getElementById("canvas27").style.visibility="hidden";
        document.getElementById("canvas28").style.visibility="visible";
if (item1 == "image/indirectwall.png") 
{
    document.getElementById("walltype25").innerHTML="Dry Wall";
} 
else 
{
    document.getElementById("walltype25").innerHTML="Wet Wall";
}         


}

function navNext28()

{

        document.getElementById("canvas28").style.visibility="hidden";
        document.getElementById("canvas29").style.visibility="visible";
if (item1 == "image/indirectwall.png") 
{
    document.getElementById("walltype26").innerHTML="Dry Wall";
} 
else 
{
    document.getElementById("walltype26").innerHTML="Wet Wall";
} 
}


//=====================================================================






function ok1()
{

var eID = document.getElementById("item1");
var colorVal = eID.options[eID.selectedIndex].value;
//var colortxt = eID.options[eID.selectedIndex].text;
document.getElementById('img2').src=colorVal;
// document.getElementById('selectprocessor').style.visibility="hidden";
// document.getElementById('selectram').style.visibility="visible";
}



function ok2()
{

        item1 = document.getElementById("item1").value;
        item2 = document.getElementById("item2").value;


if (item2 == "500" && item1 == "image/indirectwall.png")
    {

    document.getElementById("barrow5").style.visibility="visible";
    document.getElementById("handarrow2").style.visibility="visible";
    document.getElementById("newvalue").style.visibility="hidden";

    } 
else if (item2 == "500" && item1 == "image/indirectwallwet.png")
    {

    document.getElementById("barrow5").style.visibility="visible";
    document.getElementById("handarrow2").style.visibility="visible";
    document.getElementById("newvalue").style.visibility="hidden";
    
    }    
else if (item2 == "700" && item1 == "image/indirectwall.png") 
    {

    document.getElementById("barrow5").style.visibility="visible";
    document.getElementById("handarrow2").style.visibility="visible";
    document.getElementById("newvalue").style.visibility="hidden";

    } 
else if (item2 == "700" && item1 == "image/indirectwallwet.png") 
    {

    document.getElementById("barrow5").style.visibility="visible";
    document.getElementById("handarrow2").style.visibility="visible";
    document.getElementById("newvalue").style.visibility="hidden";

    }
else if (item2 == "900" && item1 == "image/indirectwall.png") 
    {

    document.getElementById("barrow5").style.visibility="visible";
    document.getElementById("handarrow2").style.visibility="visible";
    document.getElementById("newvalue").style.visibility="hidden";

    } 
else if (item2 == "900" && item1 == "image/indirectwallwet.png") 
    {

    document.getElementById("barrow5").style.visibility="visible";
    document.getElementById("handarrow2").style.visibility="visible";
    document.getElementById("newvalue").style.visibility="hidden";

    }
else 
    {
    alert("Please Select Items");
    }

}


function show1()
{

        document.getElementById("trpulse1").style.visibility="visible";
        // document.getElementById("trpulse4").style.visibility="visible";
        document.getElementById("trpulse2").style.visibility="visible";
        document.getElementById("trpulse3").style.visibility="visible";
        document.getElementById("trpulseavg").style.visibility="visible";

        document.getElementById("handarrow6").style.visibility="visible";         
        document.getElementById("barrow19").style.visibility="visible";
}

function showsd1()
{

        document.getElementById("sdpulse1").style.visibility="visible";
        // document.getElementById("sdpulse4").style.visibility="visible";
        document.getElementById("sdpulse2").style.visibility="visible";
        document.getElementById("sdpulse3").style.visibility="visible";
        document.getElementById("sdpulseavg").style.visibility="visible";

        document.getElementById("handarrowsemi6").style.visibility="visible";
        document.getElementById("barrowsemi16").style.visibility="visible";
}


function showid1()
{

        document.getElementById("idpulse1").style.visibility="visible";        
        document.getElementById("idpulse2").style.visibility="visible";
        document.getElementById("idpulse3").style.visibility="visible";
        document.getElementById("idpulse4").style.visibility="visible";
        document.getElementById("idpulse5").style.visibility="visible";        
        document.getElementById("idpulse6").style.visibility="visible";
        document.getElementById("idpulse7").style.visibility="visible";
        document.getElementById("idpulse8").style.visibility="visible";

        document.getElementById("barrowin15").style.visibility="visible";
        document.getElementById("handarrowin4").style.visibility="visible";
}


function show2()
{

        document.getElementById("trpulse11").style.visibility="visible";
        // document.getElementById("trpulse44").style.visibility="visible";
        // document.getElementById("trpulse45").style.visibility="visible";
        document.getElementById("trpulse22").style.visibility="visible";
        document.getElementById("trpulse33").style.visibility="visible";
        document.getElementById("trpulseavg2").style.visibility="visible";

        document.getElementById("handarrow8").style.visibility="visible"; 
        document.getElementById("barrow22").style.visibility="visible";
}

function showsd2()
{

        document.getElementById("sdpulse11").style.visibility="visible";
        // document.getElementById("sdpulse44").style.visibility="visible";
        document.getElementById("sdpulse22").style.visibility="visible";
        document.getElementById("sdpulse33").style.visibility="visible";
        document.getElementById("sdpulseavg2").style.visibility="visible";

        document.getElementById("handarrowsemi4").style.visibility="visible";
        document.getElementById("barrowsemi13").style.visibility="visible"; 
}


function showobs1()
{       
        document.getElementById("obs1").style.visibility="visible";
        document.getElementById("obs2").style.visibility="visible";
        document.getElementById("obs3").style.visibility="visible";
        document.getElementById("obs4").style.visibility="visible";
        document.getElementById("obs5").style.visibility="visible";
        document.getElementById("obs6").style.visibility="visible";
        document.getElementById("obsavg").style.visibility="visible";
        document.getElementById("handarrow9").style.visibility="visible";
        document.getElementById("barrow23").style.visibility="visible";
}


function showsdobs1()
{       
        document.getElementById("sdobs1").style.visibility="visible";
        document.getElementById("sdobs2").style.visibility="visible";
        document.getElementById("sdobs3").style.visibility="visible";
        document.getElementById("sdobs4").style.visibility="visible";
        document.getElementById("sdobs5").style.visibility="visible";
        document.getElementById("sdobs6").style.visibility="visible";
        document.getElementById("sdobsavg").style.visibility="visible";

        document.getElementById("handarrowsemi7").style.visibility="visible";
        document.getElementById("barrowsemi17").style.visibility="visible";
}


function showidobs1()
{       
        document.getElementById("idobs1").style.visibility="visible";
        document.getElementById("idobs2").style.visibility="visible";
        document.getElementById("idobs3").style.visibility="visible";
        document.getElementById("idobs4").style.visibility="visible";
        document.getElementById("idobs5").style.visibility="visible";
        document.getElementById("idobs6").style.visibility="visible";
        document.getElementById("idobs7").style.visibility="visible";
        document.getElementById("idobs8").style.visibility="visible";

         document.getElementById("barrowin16").style.visibility="visible";
        document.getElementById("handarrowin5").style.visibility="visible";

}

function showidslope1()
{       
        document.getElementById("idslope").style.visibility="visible";
        

        document.getElementById("barrowin17").style.visibility="visible";
        document.getElementById("handarrowin6").style.visibility="visible";

}



function showres1()
{       
        document.getElementById("res1").style.visibility="visible";
        document.getElementById("res2").style.visibility="visible";
        document.getElementById("res3").style.visibility="visible";
        document.getElementById("res4").style.visibility="visible";
        // document.getElementById("res5").style.visibility="visible";
        // document.getElementById("res6").style.visibility="visible";
        // document.getElementById("res7").style.visibility="visible";
        // document.getElementById("res8").style.visibility="visible";
        document.getElementById("res9").style.visibility="visible";
        document.getElementById("res10").style.visibility="visible";
        document.getElementById("res11").style.visibility="visible";
		document.getElementById("res12").style.visibility="visible";
        document.getElementById("res13").style.visibility="visible";
		document.getElementById("res14").style.visibility="visible";
        document.getElementById("res15").style.visibility="visible";
		document.getElementById("res16").style.visibility="visible";
        document.getElementById("res17").style.visibility="visible";
        document.getElementById("res18").style.visibility="visible";

        document.getElementById("nextresstep").style.visibility="visible";
        document.getElementById("handarrow10").style.visibility="visible";
        document.getElementById("barrow24").style.visibility="visible";
}



function showsdres1()
{       
        document.getElementById("sdres1").style.visibility="visible";
        document.getElementById("sdres2").style.visibility="visible";
        document.getElementById("sdres3").style.visibility="visible";
        document.getElementById("sdres4").style.visibility="visible";
        // document.getElementById("sdres5").style.visibility="visible";
        // document.getElementById("sdres6").style.visibility="visible";
        // document.getElementById("sdres7").style.visibility="visible";
        // document.getElementById("sdres8").style.visibility="visible";
        document.getElementById("sdres9").style.visibility="visible";
        document.getElementById("sdres10").style.visibility="visible";
        document.getElementById("sdres11").style.visibility="visible";
		document.getElementById("sdres12").style.visibility="visible";
        document.getElementById("sdres13").style.visibility="visible";
		document.getElementById("sdres14").style.visibility="visible";
        document.getElementById("sdres15").style.visibility="visible";
		document.getElementById("sdres16").style.visibility="visible";
        document.getElementById("sdres17").style.visibility="visible";
        document.getElementById("sdres18").style.visibility="visible";

        document.getElementById("nextressdstep").style.visibility="visible";
        document.getElementById("handarrowsemi8").style.visibility="visible";
        document.getElementById("barrowsemi18").style.visibility="visible";
}




function showidres1()
{       
        document.getElementById("idres1").style.visibility="visible";
        document.getElementById("idres2").style.visibility="visible";
        document.getElementById("idres3").style.visibility="visible";
        document.getElementById("idres4").style.visibility="visible";
        // document.getElementById("idres5").style.visibility="visible";
        // document.getElementById("idres6").style.visibility="visible";
        // document.getElementById("idres7").style.visibility="visible";
        // document.getElementById("idres8").style.visibility="visible";
        document.getElementById("idres9").style.visibility="visible";
        document.getElementById("idres10").style.visibility="visible";
        document.getElementById("idres11").style.visibility="visible";
		document.getElementById("idres12").style.visibility="visible";
        document.getElementById("idres13").style.visibility="visible";
		document.getElementById("idres14").style.visibility="visible";
        document.getElementById("idres15").style.visibility="visible";
		document.getElementById("idres16").style.visibility="visible";
        document.getElementById("idres17").style.visibility="visible";
        document.getElementById("idres18").style.visibility="visible";

        document.getElementById("nextresidstep").style.visibility="visible";
        document.getElementById("barrowin18").style.visibility="visible";
        document.getElementById("handarrowin7").style.visibility="visible";
}
// function showreport1()
// {       
//         document.getElementById("obs1").style.visibility="visible";
//         document.getElementById("obs2").style.visibility="visible";
//         document.getElementById("obs3").style.visibility="visible";
//         document.getElementById("obs4").style.visibility="visible";
//         document.getElementById("obs5").style.visibility="visible";
//         document.getElementById("obs6").style.visibility="visible";
        
//         document.getElementById("handarrow9").style.visibility="visible";
//         document.getElementById("barrow23").style.visibility="visible";
// }

function genrep1()
{       
	if (item1 == "image/indirectwall.png")
    {
	
    	document.getElementById("moi1").innerHTML = "Dry";
    
    } 
else if (item1 == "image/indirectwallwet.png")
    {
    	
    	document.getElementById("moi1").innerHTML = "Wet";
    
    } 
    else
    {
    	alert("Please Select Moisture Type");
    }

	
        document.getElementById("generep1").style.visibility="visible";
        document.getElementById("generep2").style.visibility="visible";
        document.getElementById("generep3").style.visibility="visible";
        document.getElementById("generep4").style.visibility="visible";
        document.getElementById("generep5").style.visibility="visible";
        document.getElementById("generep6").style.visibility="visible";
        
        document.getElementById("handarrow11").style.visibility="visible";
        document.getElementById("barrow25").style.visibility="visible";
        // document.getElementById("handarrow9").style.visibility="visible";
        // document.getElementById("barrow23").style.visibility="visible";
}

function gensdrep1()
{       
	if (item1 == "image/indirectwall.png")
    {
	
    	document.getElementById("moi2").innerHTML = "Dry";
    
    } 
else if (item1 == "image/indirectwallwet.png")
    {
    	
    	document.getElementById("moi2").innerHTML = "Wet";
    
    } 
    else
    {
    	alert("Please Select Moisture Type");
    }

	
        document.getElementById("sdgenerep1").style.visibility="visible";
        document.getElementById("sdgenerep2").style.visibility="visible";
        document.getElementById("sdgenerep3").style.visibility="visible";
        document.getElementById("sdgenerep4").style.visibility="visible";
        document.getElementById("sdgenerep5").style.visibility="visible";
        document.getElementById("sdgenerep6").style.visibility="visible";
        
        document.getElementById("handarrowsemi9").style.visibility="visible";
        document.getElementById("barrowsemi19").style.visibility="visible";
}



function genidrep1()
{       
	if (item1 == "image/indirectwall.png")
    {
	
    	document.getElementById("moi3").innerHTML = "Dry";
    
    } 
else if (item1 == "image/indirectwallwet.png")
    {
    	
    	document.getElementById("moi3").innerHTML = "Wet";
    
    } 
    else
    {
    	alert("Please Select Moisture Type");
    }

	
        document.getElementById("ingenerep1").style.visibility="visible";
        document.getElementById("ingenerep2").style.visibility="visible";
        document.getElementById("ingenerep3").style.visibility="visible";
        document.getElementById("ingenerep4").style.visibility="visible";
        document.getElementById("ingenerep5").style.visibility="visible";
        document.getElementById("ingenerep6").style.visibility="visible";

        document.getElementById("barrowin19").style.visibility="visible";
        document.getElementById("handarrowin8").style.visibility="visible";
}



//====================================================================================


function addmachine1(){
    document.getElementById("addbtn1").style.visibility="hidden";

    document.getElementById("addmachine").style.visibility="visible";
    document.getElementById("addmachine").style.animation="addmachine1 2s forwards";
     document.getElementById("barrow2").style.visibility="hidden"; 
    
    setTimeout(function()
     {
         document.getElementById("barrow3").style.visibility="visible";
        document.getElementById("addbtn2").style.visibility="visible";
        document.getElementById("step1a").style.visibility="hidden"; 
        document.getElementById("step1b").style.visibility="visible"; 
         
         },2000);

}

function addsrs1(){

    document.getElementById("addbtn2").style.visibility="hidden";


    document.getElementById("addsrs").style.visibility="visible";
    document.getElementById("addsrs").style.animation="addsrs1 2s forwards"
    document.getElementById("barrow3").style.visibility="hidden";
     setTimeout(function()
     {

        document.getElementById("zoomviewarrow1").style.visibility="visible";
        document.getElementById("zoomtrans1").style.visibility="visible";
        document.getElementById("step1b").style.visibility="hidden";
        document.getElementById("step1c").style.visibility="visible";
         
         },2000);
}

function zoomview1()
{
    document.getElementById("zoomviewarrow1").style.visibility="hidden";
    document.getElementById("zoomtrans1").style.visibility="hidden";

    document.getElementById("zoom1").style.visibility="visible";

    document.getElementById("zoomonarrow1").style.visibility="visible";

    document.getElementById("ontrans1").style.visibility="visible";

    document.getElementById("step1c").style.visibility="hidden";

    document.getElementById("step1d").style.visibility="visible";
    // document.getElementById("handarrow1").style.visibility="visible";
         
    // document.getElementById("barrow4").style.visibility="visible"; 

    // document.getElementById("ttime").style.visibility="visible";
}


function zoom_on1()
{
    document.getElementById("zoomonarrow1").style.visibility="hidden";
    document.getElementById("ontrans1").style.visibility="hidden";
    
    document.getElementById("zoomon1").style.visibility="visible";

    document.getElementById("zoom1").style.visibility="hidden";

    

    setTimeout(function()
            {
                document.getElementById("ttt").style.visibility="visible";
                document.getElementById("ttime").style.visibility="visible";
                document.getElementById("macdisp1").style.visibility="visible";
                document.getElementById("zoomoffarrow1").style.visibility="visible";

                document.getElementById("offtrans1").style.visibility="visible";
                document.getElementById("step1d").style.visibility="hidden";
                document.getElementById("step1e").style.visibility="visible";
            },1000);
    

}

function zoom_off1()
{
    document.getElementById("offtrans1").style.visibility="hidden";
    document.getElementById("macdisp1").style.visibility="hidden";
    document.getElementById("zoomoffarrow1").style.visibility="hidden";

    document.getElementById("zoom1").style.visibility="visible";
    document.getElementById("zoomon1").style.visibility="hidden";

    document.getElementById("handarrow1").style.visibility="visible";
         
    document.getElementById("barrow4").style.visibility="visible"; 
// document.getElementById("step1f").style.visibility="visible";
    
}


function zoomview2()
{
    document.getElementById("zoomviewarrow2").style.visibility="hidden";
    document.getElementById("zoomtrans2").style.visibility="hidden";

    document.getElementById("dtzoom1").style.visibility="visible";

    document.getElementById("dtzoomonarrow1").style.visibility="visible";

    document.getElementById("dtontrans1").style.visibility="visible";
    document.getElementById("step6b").style.visibility="hidden";
    document.getElementById("step6c").style.visibility="visible";
    // document.getElementById("dthandarrow1").style.visibility="visible";
         
    // document.getElementById("dtbarrow4").style.visibility="visible"; 

    // document.getElementById("ttime").style.visibility="visible";

    
}


function zoom_on2()
{
    document.getElementById("dtzoomonarrow1").style.visibility="hidden";
    document.getElementById("dtontrans1").style.visibility="hidden";
    
    document.getElementById("dtzoomon1").style.visibility="visible";

    document.getElementById("dtzoom1").style.visibility="hidden";

    

    setTimeout(function()
            {
                // document.getElementById("ttime").style.visibility="visible";
                document.getElementById("dtmacdisp1").style.visibility="visible";
                document.getElementById("dtzoomoffarrow1").style.visibility="visible";

                document.getElementById("dtofftrans1").style.visibility="visible";
                document.getElementById("step6c").style.visibility="hidden";
                document.getElementById("step6d").style.visibility="visible";
            },1000);
    

}

function zoom_off2()
{
    document.getElementById("dtofftrans1").style.visibility="hidden";
    document.getElementById("dtmacdisp1").style.visibility="hidden";
    document.getElementById("dtzoomoffarrow1").style.visibility="hidden";

    document.getElementById("dtzoom1").style.visibility="visible";
    document.getElementById("dtzoomon1").style.visibility="hidden";

    document.getElementById("barrow18").style.visibility="visible"; 
         document.getElementById("handarrow5").style.visibility="visible";

    
}



function zoomview3()
{
    document.getElementById("zoomviewarrow3").style.visibility="hidden";
    document.getElementById("zoomtrans3").style.visibility="hidden";

    document.getElementById("dt2zoom1").style.visibility="visible";

    document.getElementById("dt2zoomonarrow1").style.visibility="visible";

    document.getElementById("dt2ontrans1").style.visibility="visible";
    document.getElementById("step8b").style.visibility="hidden";
    document.getElementById("step8c").style.visibility="visible";
    // document.getElementById("dthandarrow1").style.visibility="visible";
         
    // document.getElementById("dtbarrow4").style.visibility="visible"; 

    // document.getElementById("ttime").style.visibility="visible";

    
}


function zoom_on3()
{
    document.getElementById("dt2zoomonarrow1").style.visibility="hidden";
    document.getElementById("dt2ontrans1").style.visibility="hidden";
    
    document.getElementById("dt2zoomon1").style.visibility="visible";

    document.getElementById("dt2zoom1").style.visibility="hidden";

    

    setTimeout(function()
            {
                // document.getElementById("ttime").style.visibility="visible";
                document.getElementById("dt2macdisp1").style.visibility="visible";
                document.getElementById("dt2zoomoffarrow1").style.visibility="visible";

                document.getElementById("dt2offtrans1").style.visibility="visible";
                document.getElementById("step8c").style.visibility="hidden";
                document.getElementById("step8d").style.visibility="visible";
            },1000);
    

}

function zoom_off3()
{
    document.getElementById("dt2offtrans1").style.visibility="hidden";
    document.getElementById("dt2macdisp1").style.visibility="hidden";
    document.getElementById("dt2zoomoffarrow1").style.visibility="hidden";

    document.getElementById("dt2zoom1").style.visibility="visible";
    document.getElementById("dt2zoomon1").style.visibility="hidden";

    document.getElementById("barrow20").style.visibility="visible"; 
         document.getElementById("handarrow7").style.visibility="visible";

    
}



function zoomview4()
{
    document.getElementById("zoomtrans4").style.visibility="hidden";
        document.getElementById("smzoomviewarrow1").style.visibility="hidden";
    // document.getElementById("smzoomviewarrow3").style.visibility="hidden";
    // document.getElementById("smzoomtrans3").style.visibility="hidden";

    document.getElementById("smzoom1").style.visibility="visible";

    document.getElementById("smzoomonarrow1").style.visibility="visible";

    document.getElementById("smontrans1").style.visibility="visible";
    document.getElementById("step15b").style.visibility="hidden";
    document.getElementById("step15c").style.visibility="visible";
    // document.getElementById("smhandarrow1").style.visibility="visible";
         
    // document.getElementById("smbarrow4").style.visibility="visible"; 

    // document.getElementById("ttime").style.visibility="visible";

    
}


function zoom_on4()
{
    document.getElementById("smzoomonarrow1").style.visibility="hidden";
    document.getElementById("smontrans1").style.visibility="hidden";
    
    document.getElementById("smzoomon1").style.visibility="visible";

    document.getElementById("smzoom1").style.visibility="hidden";

    

    setTimeout(function()
            {
                // document.getElementById("ttime").style.visibility="visible";
                document.getElementById("smmacdisp1").style.visibility="visible";
                document.getElementById("smzoomoffarrow1").style.visibility="visible";

                document.getElementById("smofftrans1").style.visibility="visible";
                document.getElementById("step15c").style.visibility="hidden";
                document.getElementById("step15d").style.visibility="visible";

            },1000);
    

}

function zoom_off4()
{
    document.getElementById("smofftrans1").style.visibility="hidden";
    document.getElementById("smmacdisp1").style.visibility="hidden";
    document.getElementById("smzoomoffarrow1").style.visibility="hidden";

    document.getElementById("smzoom1").style.visibility="visible";
    document.getElementById("smzoomon1").style.visibility="hidden";

    document.getElementById("barrowsemi12").style.visibility="visible"; 
         document.getElementById("handarrowsemi3").style.visibility="visible"; 

    
}





function zoomview5()
{
    document.getElementById("zoomtrans4").style.visibility="hidden";
        document.getElementById("sm2zoomviewarrow1").style.visibility="hidden";
    // document.getElementById("smzoomviewarrow3").style.visibility="hidden";
    // document.getElementById("smzoomtrans3").style.visibility="hidden";

    document.getElementById("sm2zoom1").style.visibility="visible";

    document.getElementById("sm2zoomonarrow1").style.visibility="visible";

    document.getElementById("sm2ontrans1").style.visibility="visible";
    document.getElementById("step17b").style.visibility="hidden";
    document.getElementById("step17c").style.visibility="visible";
    // document.getElementById("smhandarrow1").style.visibility="visible";
         
    // document.getElementById("smbarrow4").style.visibility="visible"; 

    // document.getElementById("ttime").style.visibility="visible";

    
}


function zoom_on5()
{
    document.getElementById("sm2zoomonarrow1").style.visibility="hidden";
    document.getElementById("sm2ontrans1").style.visibility="hidden";
    
    document.getElementById("sm2zoomon1").style.visibility="visible";

    document.getElementById("sm2zoom1").style.visibility="hidden";

    

    setTimeout(function()
            {
                // document.getElementById("ttime").style.visibility="visible";
                document.getElementById("sm2macdisp1").style.visibility="visible";
                document.getElementById("sm2zoomoffarrow1").style.visibility="visible";

                document.getElementById("sm2offtrans1").style.visibility="visible";
                document.getElementById("step17c").style.visibility="hidden";
                document.getElementById("step17d").style.visibility="visible";

            },1000);
    

}

function zoom_off5()
{
    document.getElementById("sm2offtrans1").style.visibility="hidden";
    document.getElementById("sm2macdisp1").style.visibility="hidden";
    document.getElementById("sm2zoomoffarrow1").style.visibility="hidden";

    document.getElementById("sm2zoom1").style.visibility="visible";
    document.getElementById("sm2zoomon1").style.visibility="hidden";

    // document.getElementById("barrowsemi12").style.visibility="visible"; 
    //      document.getElementById("handarrowsemi3").style.visibility="visible"; 
document.getElementById("barrowsemi15").style.visibility="visible"; 
        document.getElementById("handarrowsemi5").style.visibility="visible";
    
}


function zoomview6()
{
    document.getElementById("inzoomviewarrow1").style.visibility="hidden";
    document.getElementById("inzoomtrans1").style.visibility="hidden";

    document.getElementById("inzoom1").style.visibility="visible";

    document.getElementById("inzoomonarrow1").style.visibility="visible";

    document.getElementById("inontrans1").style.visibility="visible";
    document.getElementById("step24b").style.visibility="hidden";
    document.getElementById("step24c").style.visibility="visible";
    // document.getElementById("handarrow1").style.visibility="visible";
         
    // document.getElementById("barrow4").style.visibility="visible"; 

    // document.getElementById("ttime").style.visibility="visible";
}


function zoom_on6()
{
    document.getElementById("inzoomonarrow1").style.visibility="hidden";
    document.getElementById("inontrans1").style.visibility="hidden";
    
    document.getElementById("inzoomon1").style.visibility="visible";

    document.getElementById("inzoom1").style.visibility="hidden";

    

    setTimeout(function()
            {
                // document.getElementById("ttime").style.visibility="visible";
                document.getElementById("inmacdisp1").style.visibility="visible";
                document.getElementById("inzoomoffarrow1").style.visibility="visible";

                document.getElementById("inofftrans1").style.visibility="visible";
                document.getElementById("step24c").style.visibility="hidden";
                document.getElementById("step24d").style.visibility="visible";

            },1000);
    

}

function zoom_off6()
{
    document.getElementById("inofftrans1").style.visibility="hidden";
    document.getElementById("inmacdisp1").style.visibility="hidden";
    document.getElementById("inzoomoffarrow1").style.visibility="hidden";

    document.getElementById("inzoom1").style.visibility="visible";
    document.getElementById("inzoomon1").style.visibility="hidden";

    // document.getElementById("inhandarrow1").style.visibility="visible";
         
    // document.getElementById("inbarrow4").style.visibility="visible"; 

    document.getElementById("barrowin14").style.visibility="visible";
         document.getElementById("handarrowin3").style.visibility="visible"; 

    
}


function addmarker()
    {
    document.getElementById("addbtnds11").style.visibility="hidden";
    document.getElementById("canvas4").style.cursor="url('image/handsmalls.png'),auto";
    document.getElementById("addmarker1").style.visibility="visible";
    document.getElementById("addmarker1").style.animation="addmarker11 2s forwards";
    document.getElementById("barrow6").style.visibility="hidden";
    setTimeout(function()
     {
         document.getElementById("barrow7").style.visibility="visible";
         document.getElementById("step11a").style.visibility="hidden";
         document.getElementById("step11b").style.visibility="visible";
         
         document.getElementById("mktrans1").style.visibility="visible";
     },2000);

 }



    function rotatemarkerDa() 
        {   
            document.getElementById("mktrans1").style.visibility="hidden";
            document.getElementById("canvas4").style.cursor="none";
            document.getElementById("addmarker1").style.visibility="hidden";
            document.getElementById("handmarker1").style.visibility="visible";
            document.getElementById("handmarker1").style.animation="movehandmarker 2s forwards";
            document.getElementById("barrow7").style.visibility="hidden";

        setTimeout(function()
                {
            document.getElementById("handmarker1").style.animation="rotatehandmarker2 1s forwards";
            
                

         setTimeout(function()
                {
            document.getElementById("point1").style.visibility="visible";
            // document.getElementById("handmarker1").style.animation="movehandmarker2 2s forwards";
            document.getElementById("handmarker1").style.animation="rotatehandmarkerb2 2s forwards";
               

         setTimeout(function()
                {  
                // document.getElementById("canvas4").style.cursor="url('image/handsmalls.png'),auto";
                 // document.getElementById("addmarker2").style.visibility="visible";
                 // document.getElementById("handmarker1").style.visibility="hidden";
                 
                  // document.getElementById("barrow8").style.visibility="visible";
                  // document.getElementById("mktrans2").style.visibility="visible";
                  document.getElementById("point2").style.visibility="visible";
                  document.getElementById("handmarker1").style.animation="movehandmarkerb2 2s forwards";
                    
                    setTimeout(function()
                    {
                        document.getElementById("handmarker1").style.visibility="hidden";
                        document.getElementById("canvas4").style.cursor="auto";
                        document.getElementById("step11b").style.visibility="hidden";
                        document.getElementById("step11c").style.visibility="visible";

                document.getElementById("backwall1").style.visibility="visible";

                document.getElementById("rightarrow1").style.visibility="visible";
                document.getElementById("leftarrowa").style.visibility="visible";
                document.getElementById("leftarrowb").style.visibility="visible";
                document.getElementById("pointa").style.visibility="visible";
                document.getElementById("pointb").style.visibility="visible"
                setTimeout(function()
                    {
                        document.getElementById("scale1").style.visibility="visible"; 
                        document.getElementById("aval1").innerHTML="0.302 m"; 
                    },1500);
                setTimeout(function()
                    {
                        document.getElementById("scale2").style.visibility="visible"; 
                        document.getElementById("aval2").innerHTML="0.295 m";
                        document.getElementById("barrow9").style.visibility="visible";
                        document.getElementById("handarrow3").style.visibility="visible"; 
                    },3000);
                        
                    },1000);

                },2000);
                },1000);
                 },2000);
        }


/*
    function rotatemarkerDb() 
        {
            document.getElementById("mktrans2").style.visibility="hidden";
            document.getElementById("barrow8").style.visibility="hidden";
            document.getElementById("canvas4").style.cursor="none";
            document.getElementById("addmarker2").style.visibility="hidden";
            document.getElementById("handmarker1").style.visibility="visible";
            document.getElementById("handmarker1").style.animation="movehandmarkerb 2s forwards";
            //document.getElementById("barrow7").style.visibility="hidden";

        setTimeout(function()
                {
            document.getElementById("handmarker1").style.animation="rotatehandmarkerb2 1s forwards";
            
                

         setTimeout(function()
                {
            document.getElementById("point2").style.visibility="visible";
            document.getElementById("handmarker1").style.animation="movehandmarkerb2 2s forwards";
               

         setTimeout(function()
                {  
                document.getElementById("backwall1").style.visibility="visible";
                document.getElementById("step11c").style.visibility="hidden";
                document.getElementById("step11d").style.visibility="visible";
                document.getElementById("rightarrow1").style.visibility="visible";
                document.getElementById("leftarrowa").style.visibility="visible";
                document.getElementById("leftarrowb").style.visibility="visible";
                document.getElementById("pointa").style.visibility="visible";
                document.getElementById("pointb").style.visibility="visible";
                document.getElementById("handmarker1").style.visibility="hidden";
                document.getElementById("canvas4").style.cursor="auto";
                document.getElementById("barrow9").style.visibility="visible";
                document.getElementById("handarrow3").style.visibility="visible";
                },2000);
                },1000);
                 },2000);
        }

*/


    

function addstone(){

        
        document.getElementById("stone1").style.animation="stone11 2s forwards";
        document.getElementById("stone1").style.visibility="visible";
        document.getElementById("barrow10").style.visibility="hidden";
        document.getElementById("addbtn21").style.visibility="hidden";
        document.getElementById("canvas5").style.cursor="url('image/handsmalls.png'),auto";

        setTimeout(function()
     {
        document.getElementById("step5a").style.visibility="hidden";
        document.getElementById("step5b").style.visibility="visible";
        document.getElementById("barrow11").style.visibility="visible"; 
        document.getElementById("sttrans1").style.visibility="visible";
         },2000);
   
}



function plasremove()
{       
        document.getElementById("sttrans1").style.visibility="hidden";
        document.getElementById("canvas5").style.cursor="none";
        document.getElementById("barrow11").style.visibility="hidden";
        document.getElementById("stone1").style.visibility="hidden";
        document.getElementById("stonehand1").style.visibility="visible";
        document.getElementById("stonehand1").style.animation="plasremove11 4s forwards";

        setTimeout(function()
     {
        
        
        document.getElementById("canvas5").style.cursor="auto";
        document.getElementById("stonehand1").style.visibility="hidden";
        document.getElementById("step5b").style.visibility="hidden";        
        document.getElementById("step5c").style.visibility="visible";
        document.getElementById("addbtn22").style.visibility="visible"; 
        document.getElementById("barrow12").style.visibility="visible";
        // document.getElementById("rough2").style.visibility="visible";
        
         },4000);
setTimeout(function()
        {  
            document.getElementById("rough1").style.visibility="visible";
        },1000);
setTimeout(function()
        {  
            document.getElementById("rough2").style.visibility="visible";
        },3000);
}

function addgrease(){

        document.getElementById("grease1").style.visibility="visible";
        document.getElementById("brush1").style.visibility="visible";
         document.getElementById("addbtn22").style.visibility="hidden";
          document.getElementById("barrow12").style.visibility="hidden";
          document.getElementById("barrow13").style.visibility="visible";
          document.getElementById("step5c").style.visibility="hidden";
          document.getElementById("step5d").style.visibility="visible";
        

}

function usegrease1(){

         document.getElementById("brush1").style.animation="brush11 3s forwards";
         document.getElementById("barrow13").style.visibility="hidden";

setTimeout(function()
    {

        document.getElementById("brgrease1").style.visibility="visible";
        document.getElementById("brush1").style.animation="brush12 3s forwards";
        setTimeout(function()
            {
                    
                    document.getElementById("brgrease2").style.visibility="visible";
                    
                    document.getElementById("barrow15").style.visibility="visible";
                    document.getElementById("handarrow4").style.visibility="visible";
                     

            },1200);
    },3000);

}

function usegrease2(){

        document.getElementById("barrow14").style.visibility="hidden";

        document.getElementById("brush2").style.animation="brush12 3s forwards";

setTimeout(function()
    {
            document.getElementById("brush2").style.visibility="hidden";
            document.getElementById("brushblank2").style.visibility="visible";
            document.getElementById("brushblank2").style.animation="brush121 1s forwards";
            document.getElementById("brgrease2").style.visibility="visible";

        setTimeout(function()
        {
            document.getElementById("brushblank2").style.visibility="hidden";
            document.getElementById("grease1").style.visibility="hidden";
            document.getElementById("backwall2").style.visibility="visible";
            document.getElementById("barrow15").style.visibility="visible";
            document.getElementById("handarrow4").style.visibility="visible";
        },1000);

    },3000);

}

                 
 /*function addconcretewall(){

        
        document.getElementById("backwalls3").style.animation="addconcretewall1 2s forwards";
        document.getElementById("barrow16").style.visibility="hidden";
         document.getElementById("addbtn31").style.visibility="hidden";

         setTimeout(function()
    {
             

    
    },2000);
}
*/

function addtranspa(){

         document.getElementById("smachine1").style.animation="addtranspa1 2s forwards";
         document.getElementById("barrow17").style.visibility="hidden";

         setTimeout(function()
    {   
        document.getElementById("zoomtrans2").style.visibility="visible";
              
        document.getElementById("zoomviewarrow2").style.visibility="visible";
        document.getElementById("step6a").style.visibility="hidden";
        document.getElementById("step6b").style.visibility="visible";
    },2000);
    
}

function addtranspb(){

         document.getElementById("smachines5").style.animation="addtranspb1 2s forwards";
         document.getElementById("barrow21").style.visibility="hidden";

         setTimeout(function()
    {
        document.getElementById("zoomtrans3").style.visibility="visible";
              
        document.getElementById("zoomviewarrow3").style.visibility="visible";
        document.getElementById("step8a").style.visibility="hidden";
        document.getElementById("step8b").style.visibility="visible";  


    },2000);
}

//semi-direct transmission===============================

function addmarkersemi()
    {
    document.getElementById("addbtnsemi1").style.visibility="hidden";
    document.getElementById("barrowsemi1").style.visibility="hidden";
    document.getElementById("addmarkersemi1").style.visibility="visible";
    document.getElementById("canvas13").style.cursor="url('image/handsmalls.png'),auto";
    document.getElementById("addmarkersemi1").style.animation="addmarkersemi11 2s forwards";
    document.getElementById("barrowsemi1").style.visibility="hidden";
    setTimeout(function()
     {
         document.getElementById("barrowsemi2").style.visibility="visible";
         document.getElementById("stepsemi1a").style.visibility="hidden";
         document.getElementById("stepsemi1b").style.visibility="visible";
     },2000);

 }

 function rotatemarkerSa() 
        {
            document.getElementById("canvas13").style.cursor="none";
            document.getElementById("addmarkersemi1").style.visibility="hidden";
            document.getElementById("handsemimarker").style.visibility="visible";
            document.getElementById("handsemimarker").style.animation="movehandsemimarker 2s forwards";
            document.getElementById("barrowsemi2").style.visibility="hidden";

        setTimeout(function()
                {
            document.getElementById("handsemimarker").style.animation="rotatehandsemimarker2 1s forwards";
            
                

         setTimeout(function()
                {
            document.getElementById("pointsemi1").style.visibility="visible";
            document.getElementById("handsemimarker").style.animation="rotatehandmarkersb2 2s forwards";
               

         setTimeout(function()
                {  
                document.getElementById("pointsemi2").style.visibility="visible";

                document.getElementById("handsemimarker").style.animation="movehandmarkersb2 2s forwards";
                setTimeout(function()
                {
                    document.getElementById("canvas13").style.cursor="auto";
                document.getElementById("handsemimarker").style.visibility="hidden";
                document.getElementById("barrowsemi4").style.visibility="visible";
                document.getElementById("handarrowsemi1").style.visibility="visible";

                if (item1 == "image/indirectwall.png")
                    {
                        document.getElementById("semibackwall1").style.visibility="visible";
                    }
                else if (item1 == "image/indirectwallwet.png") 
                    {
                        document.getElementById("semibackwall2").style.visibility="visible";
                    }
                else
                    {
                        alert("Item Not Select");  
                    }

          
                document.getElementById("rightarrowsemi1").style.visibility="visible";
                document.getElementById("leftarrowsemia").style.visibility="visible";
                document.getElementById("leftarrowsemib").style.visibility="visible";
                document.getElementById("pointsemia").style.visibility="visible";
                document.getElementById("pointsemib").style.visibility="visible";
                },2000);
                
                },2000);
                },1000);
                 },2000);
}

 function rotatemarkerSb() 
        {
            document.getElementById("barrowsemi3").style.visibility="hidden";
            document.getElementById("canvas4").style.cursor="none";
            document.getElementById("addmarkersemi2").style.visibility="hidden";
            document.getElementById("handsemimarker").style.visibility="visible";
            document.getElementById("handsemimarker").style.animation="movehandmarkersb 2s forwards";
            document.getElementById("canvas13").style.cursor="none";
            //document.getElementById("barrow7").style.visibility="hidden";

        setTimeout(function()
                {
            document.getElementById("handsemimarker").style.animation="rotatehandmarkersb2 1s forwards";
            
                

         setTimeout(function()
                {
            document.getElementById("pointsemi2").style.visibility="visible";
            document.getElementById("handsemimarker").style.animation="movehandmarkersb2 2s forwards";

               

         setTimeout(function()
                {  
                document.getElementById("canvas13").style.cursor="auto";
                document.getElementById("handsemimarker").style.visibility="hidden";
                document.getElementById("barrowsemi4").style.visibility="visible";
                document.getElementById("handarrowsemi1").style.visibility="visible";

                if (item1 == "image/indirectwall.png")
                    {
                        document.getElementById("semibackwall1").style.visibility="visible";
                    }
                else if (item1 == "image/indirectwallwet.png") 
                    {
                        document.getElementById("semibackwall2").style.visibility="visible";
                    }
                else
                    {
                        alert("Item Not Select");  
                    }

          
                document.getElementById("rightarrowsemi1").style.visibility="visible";
                document.getElementById("leftarrowsemia").style.visibility="visible";
                document.getElementById("leftarrowsemib").style.visibility="visible";
                document.getElementById("pointsemia").style.visibility="visible";
                document.getElementById("pointsemib").style.visibility="visible";
                
                
                },2000);
                },1000);
                 },2000);
        }



 

function addstonesemi()
{

        document.getElementById("stonesemi1").style.animation="stonesemi11 2s forwards";
        document.getElementById("stonesemi1").style.visibility="visible";
        document.getElementById("addbtnsemi2").style.visibility="hidden";
        document.getElementById("barrowsemi5").style.visibility="hidden";
        document.getElementById("stepsemi2a").style.visibility="hidden";
        document.getElementById("stepsemi2b").style.visibility="visible";

        setTimeout(function()
        {
         document.getElementById("canvas14").style.cursor="url('image/handsmalls.png'),auto";
         document.getElementById("barrowsemi6").style.visibility="visible";
         
           document.getElementById("sttrans2").style.visibility="visible";
        },2000);

}

function plasremovesemi()
{
        document.getElementById("sttrans2").style.visibility="hidden";
        document.getElementById("canvas14").style.cursor="none"
        document.getElementById("barrowsemi6").style.visibility="hidden";
        document.getElementById("stonesemi1").style.visibility="hidden";
        document.getElementById("handstonesemi1").style.visibility="visible";
        document.getElementById("handstonesemi1").style.animation="plasremovesemi11 4s forwards";

        setTimeout(function()
     {  
        document.getElementById("handstonesemi1").style.visibility="hidden";
        document.getElementById("canvas14").style.cursor="auto"
        document.getElementById("stepsemi2b").style.visibility="hidden";
        document.getElementById("stepsemi2c").style.visibility="visible";
         document.getElementById("addbtnsemi3").style.visibility="visible";
         document.getElementById("barrowsemi7").style.visibility="visible";
         
     },4000);
    setTimeout(function()
        {  
            document.getElementById("roughsm1").style.visibility="visible";
        },1000);
    setTimeout(function()
        {  
            document.getElementById("roughsm2").style.visibility="visible";
        },3000);

}

function addgreasesemi(){

        document.getElementById("greasesemi1").style.visibility="visible";
        document.getElementById("brushsemi1").style.visibility="visible";
         document.getElementById("addbtnsemi3").style.visibility="hidden";
          document.getElementById("barrowsemi7").style.visibility="hidden";
          document.getElementById("barrowsemi8").style.visibility="visible";
          document.getElementById("stepsemi2c").style.visibility="hidden";
           document.getElementById("stepsemi2d").style.visibility="visible";
        

}

function usegreasesemi1(){

         document.getElementById("brushsemi1").style.animation="brushsemi11 3s forwards";
         document.getElementById("barrowsemi8").style.visibility="hidden";

         setTimeout(function()
     {
        document.getElementById("brushsemi1").style.animation="brushsemi12 3s forwards";
        document.getElementById("brgreasesm1").style.visibility="visible";
         setTimeout(function()
             {

                document.getElementById("brgreasesm2").style.visibility="visible"; 

            setTimeout(function()
             {
                if (item1 == "image/indirectwall.png")
                            {   
                                document.getElementById("semibackwall11").style.visibility="visible";
                                document.getElementById("eff").style.visibility="visible";
                            }
                        else if (item1 == "image/indirectwallwet.png") 
                            {
                                document.getElementById("semibackwall22").style.visibility="visible";
                                document.getElementById("eff").style.visibility="visible";
                            }
                        else
                            {
                                alert("Item Not Select");  
                            }
            
                document.getElementById("greasesemi1").style.visibility="hidden";
                document.getElementById("brushsemi1").style.visibility="hidden";

                document.getElementById("barrowsemi10").style.visibility="visible";
                document.getElementById("handarrowsemi2").style.visibility="visible";
            },1000); 
            },2000);
    },3000);

}

function usegreasesemi2(){

        document.getElementById("barrowsemi9").style.visibility="hidden";

         document.getElementById("brushsemi2").style.animation="brushsemi12 3s forwards";

         setTimeout(function()
     {

        document.getElementById("brushsemi2").style.visibility="hidden";
        document.getElementById("brushblanksemi2").style.visibility="visible";
        document.getElementById("brushblanksemi2").style.animation="brushblacksemi21 1s forwards";
        document.getElementById("brgreasesm2").style.visibility="visible";

         setTimeout(function()
     {
        if (item1 == "image/indirectwall.png")
                    {   
                        document.getElementById("semibackwall11").style.visibility="visible";
                        document.getElementById("eff").style.visibility="visible";
                    }
                else if (item1 == "image/indirectwallwet.png") 
                    {
                        document.getElementById("semibackwall22").style.visibility="visible";
                        document.getElementById("eff").style.visibility="visible";
                    }
                else
                    {
                        alert("Item Not Select");  
                    }
    
        document.getElementById("greasesemi1").style.visibility="hidden";
        document.getElementById("brushblanksemi2").style.visibility="hidden";

        document.getElementById("barrowsemi10").style.visibility="visible";
        document.getElementById("handarrowsemi2").style.visibility="visible";
        },1000);

         },3000);

}




function addtranssemipa(){

         document.getElementById("smachinesemi1").style.animation="addtranssemipa1 2s forwards";
         document.getElementById("barrowsemi11").style.visibility="hidden";

         setTimeout(function()
    {
         
        document.getElementById("zoomtrans4").style.visibility="visible";
        document.getElementById("smzoomviewarrow1").style.visibility="visible";
        document.getElementById("stepsemi3a").style.visibility="hidden";
        document.getElementById("step15b").style.visibility="visible";

    },2000);
    
}

function addtranssemipb(){

         document.getElementById("smachinesemi2").style.animation="addtranssemipb1 2s forwards";
         document.getElementById("barrowsemi14").style.visibility="hidden";

         setTimeout(function()
    {
              
        document.getElementById("zoomtrans5").style.visibility="visible";
        document.getElementById("sm2zoomviewarrow1").style.visibility="visible";
        document.getElementById("stepsemi5a").style.visibility="hidden";
        document.getElementById("step17b").style.visibility="visible";
    },2000);
    
}

//indirect transmission

function addmarkerin()
{

         document.getElementById("addmarkerind1").style.animation="addmarkerind11 2s forwards";
         document.getElementById("addmarkerind1").style.visibility="visible";
         document.getElementById("addbtnin1").style.visibility="hidden";
         document.getElementById("barrowin1").style.visibility="hidden";
         document.getElementById("canvas22").style.cursor="url('image/handsmalls.png'),auto";
setTimeout(function()
    {   
        document.getElementById("stepindirect1a").style.visibility="hidden";
        document.getElementById("stepindirect1b").style.visibility="visible";
        document.getElementById("barrowin2").style.visibility="visible"; 
        document.getElementById("mktsemi1").style.visibility="visible";        
    },2000);

}


function rotatehandmarkerIna()
{
        document.getElementById("mktsemi1").style.visibility="hidden";
        document.getElementById("barrowin2").style.visibility="hidden";
        document.getElementById("canvas22").style.cursor="none";
         document.getElementById("addmarkerind1").style.visibility="hidden";
          document.getElementById("handindmarker").style.animation="movehandmarkerd 2s forwards";
           document.getElementById("handindmarker").style.visibility="visible";
           


    setTimeout(function()
    {

        document.getElementById("handindmarker").style.animation="rotatehandmarkerIna1 1s forwards";
        // document.getElementById("handindmarker").style.visibility="visible";

        setTimeout(function()
            { 
              document.getElementById("pointina").style.visibility="visible";
            },1000);
    

    setTimeout(function()
    {
        document.getElementById("handindmarker").style.animation="rotatehandmarkerIna21 1s forwards";
        
        setTimeout(function()
        { 
          document.getElementById("pointinb").style.visibility="visible";
        },1000); 

    },2000);

    setTimeout(function()
    {
        document.getElementById("handindmarker").style.animation="rotatehandmarkerIna31 1s forwards";

        setTimeout(function()
        { 
          document.getElementById("pointinc").style.visibility="visible";
        },1000);

    },3100);

    setTimeout(function()
    {
        document.getElementById("handindmarker").style.animation="rotatehandmarkerIna41 1s forwards";

        setTimeout(function()
        { 
          document.getElementById("pointind").style.visibility="visible";
        },1000); 

    },4100);

    setTimeout(function()
    {
        document.getElementById("handindmarker").style.animation="rotatehandmarkerIna51 1s forwards";
    
        setTimeout(function()
        { 
            document.getElementById("pointine").style.visibility="visible";
            document.getElementById("handindmarker").style.animation="movehandmarkerd10 2s forwards";
            document.getElementById("handindmarker").style.visibility="hidden";
            document.getElementById("canvas22").style.cursor="auto";
            document.getElementById("barrowin7").style.visibility="visible";
            document.getElementById("handarrowin1").style.visibility="visible";
        },1000);      

    },5100);

 
},2100);

}
/*
function rotatehandmarkerIna2()
{       
        document.getElementById("barrowin2b").style.visibility="hidden";
        document.getElementById("mktsemi2").style.visibility="hidden";
        document.getElementById("canvas22").style.cursor="none";
         document.getElementById("addmarkerind2").style.visibility="hidden";
          document.getElementById("handindmarker").style.animation="movehandmarkerd3 2s forwards";
           document.getElementById("handindmarker").style.visibility="visible";
           document.getElementById("barrowin2").style.visibility="hidden";


    setTimeout(function()
    {

        document.getElementById("handindmarker").style.animation="rotatehandmarkerIna21 1s forwards";
         document.getElementById("handindmarker").style.visibility="visible";


    setTimeout(function()
    {

     
      document.getElementById("handindmarker").style.visibility="visible";
      document.getElementById("pointinb").style.visibility="visible";

     setTimeout(function()
    {

         document.getElementById("handindmarker").style.visibility="hidden";
         document.getElementById("canvas22").style.cursor="url('image/handsmalls.png'),auto";
         document.getElementById("addmarkerind3").style.visibility="visible";
         document.getElementById("barrowin2c").style.visibility="visible";
        document.getElementById("mktsemi3").style.visibility="visible";
        },2000);
       },1000);
         },2000);

        
}

function rotatehandmarkerIna3()
{       
        document.getElementById("barrowin2c").style.visibility="hidden";
        document.getElementById("mktsemi3").style.visibility="hidden";
        document.getElementById("canvas22").style.cursor="none";
         document.getElementById("addmarkerind3").style.visibility="hidden";
          document.getElementById("handindmarker").style.animation="movehandmarkerd5 2s forwards";
           document.getElementById("handindmarker").style.visibility="visible";
           document.getElementById("barrowin2").style.visibility="hidden";


    setTimeout(function()
    {

        document.getElementById("handindmarker").style.animation="rotatehandmarkerIna31 1s forwards";
         document.getElementById("handindmarker").style.visibility="visible";


    setTimeout(function()
    {

     document.getElementById("handindmarker").style.animation="movehandmarkerd6 2s forwards";
      document.getElementById("handindmarker").style.visibility="visible";
      document.getElementById("pointinc").style.visibility="visible";

     setTimeout(function()
    {

         document.getElementById("handindmarker").style.visibility="hidden";
         document.getElementById("canvas22").style.cursor="url('image/handsmalls.png'),auto";
         document.getElementById("addmarkerind4").style.visibility="visible";
         document.getElementById("barrowin2d").style.visibility="visible";
        document.getElementById("mktsemi4").style.visibility="visible";
        },2000);
       },1000);
         },2000);

        
}

function rotatehandmarkerIna4()
{       
        document.getElementById("barrowin2d").style.visibility="hidden";
        document.getElementById("mktsemi4").style.visibility="hidden";
        document.getElementById("canvas22").style.cursor="none";
         document.getElementById("addmarkerind4").style.visibility="hidden";
          document.getElementById("handindmarker").style.animation="movehandmarkerd7 2s forwards";
           document.getElementById("handindmarker").style.visibility="visible";
           document.getElementById("barrowin2").style.visibility="hidden";


    setTimeout(function()
    {

        document.getElementById("handindmarker").style.animation="rotatehandmarkerIna41 1s forwards";
         document.getElementById("handindmarker").style.visibility="visible";


    setTimeout(function()
    {

     document.getElementById("handindmarker").style.animation="movehandmarkerd8 2s forwards";
      document.getElementById("handindmarker").style.visibility="visible";
      document.getElementById("pointind").style.visibility="visible";

     setTimeout(function()
    {

         document.getElementById("handindmarker").style.visibility="hidden";
         document.getElementById("canvas22").style.cursor="url('image/handsmalls.png'),auto";
         document.getElementById("addmarkerind5").style.visibility="visible";
         document.getElementById("barrowin2e").style.visibility="visible";
        document.getElementById("mktsemi5").style.visibility="visible";
        },2000);
       },1000);
         },2000);

    }

function rotatehandmarkerIna5()
{       
        document.getElementById("barrowin2e").style.visibility="hidden";
        document.getElementById("mktsemi5").style.visibility="hidden";
        document.getElementById("canvas22").style.cursor="none";
         document.getElementById("addmarkerind5").style.visibility="hidden";
          document.getElementById("handindmarker").style.animation="movehandmarkerd9 2s forwards";
           document.getElementById("handindmarker").style.visibility="visible";
           document.getElementById("barrowin2").style.visibility="hidden";


    setTimeout(function()
    {

        document.getElementById("handindmarker").style.animation="rotatehandmarkerIna51 1s forwards";
         document.getElementById("handindmarker").style.visibility="visible";


    setTimeout(function()
    {

     document.getElementById("handindmarker").style.animation="movehandmarkerd10 2s forwards";
      document.getElementById("handindmarker").style.visibility="visible";
      document.getElementById("pointine").style.visibility="visible";

     setTimeout(function()
    {

         document.getElementById("handindmarker").style.visibility="hidden";
         document.getElementById("canvas22").style.cursor="auto";
          document.getElementById("barrowin7").style.visibility="visible";
           document.getElementById("handarrowin1").style.visibility="visible";
         //.getElementById("addmarkerind5").style.visibility="visible";
        },2000);
       },1000);
         },2000);

    }








*/



function addstonein()
{

         document.getElementById("stonein1").style.animation="stonein11 2s forwards";
         document.getElementById("stonein1").style.visibility="visible";
         document.getElementById("addbtnin2").style.visibility="hidden";
         document.getElementById("barrowin8").style.visibility="hidden";

        setTimeout(function()
{
        document.getElementById("stepindirect2a").style.visibility="hidden";
        document.getElementById("stepindirect2b").style.visibility="visible";
        document.getElementById("barrowin9").style.visibility="visible";
        document.getElementById("canvas23").style.cursor="url('image/handsmalls.png'),auto";
        document.getElementById("sttrans3").style.visibility="visible";       

    },2000); 

}

function plasremovein()
{       document.getElementById("sttrans3").style.visibility="hidden";
        document.getElementById("canvas23").style.cursor="none";
         document.getElementById("stonein1").style.visibility="hidden";
         document.getElementById("handstonein1").style.visibility="visible";
         document.getElementById("handstonein1").style.animation="plasremovein11 4s forwards";
         document.getElementById("barrowin9").style.visibility="hidden";
         
         setTimeout(function()
    {
        document.getElementById("canvas23").style.cursor="auto";
        document.getElementById("handstonein1").style.visibility="hidden";
        document.getElementById("stepindirect2b").style.visibility="hidden";
        document.getElementById("stepindirect2c").style.visibility="visible";
         document.getElementById("barrowin10").style.visibility="visible";
         
         document.getElementById("addbtnin3").style.visibility="visible";              

    },4000);
         setTimeout(function()
    {
        document.getElementById("rough5").style.visibility="visible";
    },2500);    
    setTimeout(function()
    {
        document.getElementById("rough6").style.visibility="visible";
    },2600);
    setTimeout(function()
    {
        document.getElementById("rough7").style.visibility="visible";
    },2700);
    setTimeout(function()
    {
        document.getElementById("rough8").style.visibility="visible";
    },2800);
    setTimeout(function()
    {
        document.getElementById("rough9").style.visibility="visible";
    },2900);


}


function addgreasein(){

         document.getElementById("greasein1").style.visibility="visible";
         document.getElementById("brushin1").style.visibility="visible";
         document.getElementById("stepindirect2c").style.visibility="hidden";
         document.getElementById("stepindirect2d").style.visibility="visible";
         document.getElementById("barrowin11").style.visibility="visible";
         document.getElementById("barrowin10").style.visibility="hidden";
         document.getElementById("addbtnin3").style.visibility="hidden"; 

         
}

function addgreasein1(){

        document.getElementById("brushin1").style.animation="brushin11 6s forwards";
        document.getElementById("barrowin11").style.visibility="hidden";

         setTimeout(function()
    {
          document.getElementById("brushblankin1").style.animation="brushin111 2s forwards";
         document.getElementById("brushin1").style.visibility="hidden";     
         document.getElementById("brushblankin1").style.visibility="visible";
            
         setTimeout(function()
    {
        //document.getElementById("brushblankin1").style.visibility="hidden";     
        //document.getElementById("brushin1").style.visibility="visible";
        document.getElementById("barrowin12").style.visibility="visible";
        document.getElementById("handarrowin2").style.visibility="visible";

    },2000);
         
    },6000);
    setTimeout(function()
    {
        document.getElementById("brgreasein1").style.visibility="visible";
    },1400); 
    setTimeout(function()
    {
        document.getElementById("brgreasein2").style.visibility="visible";
    },2200);
    setTimeout(function()
    {
        document.getElementById("brgreasein3").style.visibility="visible";
    },3100); 
    setTimeout(function()
    {
        document.getElementById("brgreasein4").style.visibility="visible";
    },4200);
    setTimeout(function()
    {
        document.getElementById("brgreasein5").style.visibility="visible";
    },5400);   
}  

function placetransreceiver(){

         document.getElementById("smachinein1").style.animation="placetransreceiver11 2s forwards";
         document.getElementById("barrowin13").style.visibility="hidden";

          setTimeout(function()
    {
            document.getElementById("inzoomtrans1").style.visibility="visible";
            document.getElementById("step24a").style.visibility="hidden";
            document.getElementById("step24b").style.visibility="visible";
         document.getElementById("inzoomviewarrow1").style.visibility="visible";
         // document.getElementById("handarrowin3").style.visibility="visible";              

    },2000);
         
}














































//========================================================


/*
function movecube(){

    document.getElementById("cubefromtank1").style.animation="cubeFromCuringTank1 2s forwards";

    //document.getElementById("clothforcube").style.visibility="visible";
    document.getElementById("arrowcube1").style.visibility="hidden";
    
    document.getElementById("arrowcube2").style.visibility="visible";

}

function mcurcube1(){

    document.getElementById("cubefromtank2").style.animation="cubeFromCuringTank2 2s forwards";

    //document.getElementById("clothforcube").style.visibility="visible";
    document.getElementById("arrowcube2").style.visibility="hidden";

    document.getElementById("arrowcube3").style.visibility="visible";

}

function mcurcube2(){

    document.getElementById("cubefromtank3").style.animation="cubeFromCuringTank 2s forwards";

    document.getElementById("arrowcube3").style.visibility="hidden";
    
    document.getElementById("arrowcube4").style.visibility="visible";

    document.getElementById("clothforcube").style.visibility="visible";

    document.getElementById("clothstep").style.visibility="visible";

}


function movecloth(){

   

    document.getElementById("clothforcube").style.animation="wipeOutMoisture 3.20s forwards";

    document.getElementById("arrowcube4").style.visibility="hidden";     

    setTimeout(function()

    {

    document.getElementById("cubefromtank1").src="images/cubeclear.png";
    document.getElementById("cubefromtank2").src="images/cubeclear.png";
    document.getElementById("cubefromtank3").src="images/cubeclear.png";
    document.getElementById("arrowcuringnext").style.visibility="visible";
    document.getElementById("nextButton3").style.visibility="visible";
    
    },1930);

   
}

*/