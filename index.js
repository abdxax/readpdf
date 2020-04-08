const fs=require('fs');
const prs=require('pdf-parse');

//read file
const pdffile=fs.readFileSync('q12015.pdf');
prs(pdffile).then(data=>{
 console.log(data.numpages)
 console.log(data.info)
 return data.text;
}).then(text=>{
    /*

    */
    let arr= ['Carbon','Carbon pricing','carbon tax','Catastrophe','Clean','Climate','climate risk reporting','Coal','cop21 paris agreement','Corporate social responsibility (CSR)','Disaster','Emission','Energy','Energy Efficiency','Environment','Environmental, Social and Governance (ESG)','Greenhouse','Low carbon economy','Methane','Oil','paris accord','paris agreement','paris climate agreement','Renewable','Resiliency','Resilience','Resilient','sasb standards','Sustainability (Sustain)','sustainability accounting','sustainable finance','Task Force on Climate-related Financial Disclosures (TCFD)','tcfd','tcfd framework','tcfd recommendations','tcfd reporting','Weather'];
for(let i=0;i<arr.length;i++){
    if(text.includes(arr[i])){
      let regex=/arr[i]/gmi;
      let times=text.split(regex).length -1;
      console.log(arr[i]+" : "+times);
     
    }
    else{
        console.log( arr[i]+" : "+0);
    }
}

}).catch(error=>{
    console.log('error '+error)
});