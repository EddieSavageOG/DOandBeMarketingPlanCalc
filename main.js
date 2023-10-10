window.addEventListener('load', (event) => {
      totalLeadsGoal();
})

 // New Total Leads goal is total sales goal / total leads goal CR
 function totalLeadsGoal(){
      //LeadVolume
      let TotalSalesHolder = Number(document.querySelector("#TotalSales").value)
      let TotalLeadsHolder  = Number((document.querySelector("#tlCR").value)/100)
      //Appointments
      let ApptsHolder = Number(document.querySelector("#salesCR").value);
      let ApptsCalc = (TotalSalesHolder/ApptsHolder)*100;

      document.querySelector("#apptcalc").innerText = (Math.round(ApptsCalc)); //E17
      
      let LeadVolumeCalc = (ApptsCalc/TotalLeadsHolder);

      document.querySelector("#ntlcalc").innerText = (Math.round(LeadVolumeCalc));

      // Web traffice goals
      // New Total Leads Goal var1 and result of function totalleadsgoal / Conversion rate var2
      let LeadVolumeHolder = Number(document.querySelector("#ntlcalc").innerText)
      let WebConvHolder = Number(document.querySelector("#wbCR").value/100)
      let WebTrafficHolder = (LeadVolumeCalc/WebConvHolder)

      document.querySelector("#wtrcalc").innerText = Math.round(WebTrafficHolder);
}



   
