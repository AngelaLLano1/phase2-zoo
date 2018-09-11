   
 (function(){   
document.getElementById('check').addEventListener('submit',estimateTotal)   
function estimateTotal(event){
    event.preventDefault();
    /*console.log('You submitted the form.')*/
    
    var ticketType=document.getElementById('adult');
    
    if (ticketType.value===''){
        alert('Please select tickets.');
        ticketType.focus();
    }
  var ticketAdult=document.getElementById ('adult').value;
      ticketChild=document. getElementById ('child').value;
      ticketSenior=document. getElementById ('senior').value;
      ticketChild2=document. getElementById ('child2').value;  
      
      console.log(ticketAdult,ticketChild,ticketSenior,ticketChild2);
      
      var totalQty = ticketAdult + ticketChild +ticketSenior+ ticketChild2,
      estimate;
       
       estimate=(36.95*ticketAdult)+ (26.95*ticketChild)+(31.95*ticketSenior)+(0.00*ticketChild2);
      document.getElementById('totalEstimate').value=estimate.toFixed(2);
      
}

 })();
 
    
    
    