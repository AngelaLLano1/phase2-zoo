   
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
  var ticketAdult  =  parseInt(document. getElementById ('adult').value, 10)||0,  ticketChild  =  parseInt(document. getElementById ('child').value, 10)||0,  ticketSenior = parseInt(document. getElementById ('senior').value, 10)||0,  ticketChild2 = parseInt(document. getElementById ('child2').value,10)||0;  
      
      console.log(ticketAdult,ticketChild,ticketSenior,ticketChild2);
      
      var totalQty = ticketAdult + ticketChild +ticketSenior+ ticketChild2,
      estimate;
       
       estimate=(36.95*ticketAdult)+ (26.95*ticketChild)+(31.95*ticketSenior)+(0.00*ticketChild2);
      document.getElementById('totalEstimate').value=estimate.toFixed(2);
      
}

 })();
 
    
    
    