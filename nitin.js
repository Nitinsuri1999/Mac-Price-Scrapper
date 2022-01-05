const puppeteer = require('puppeteer');

let browser;
let page;
puppeteer.launch({ 
    headless: false,
    defaultViewport:null,
 }).then(br=>{
     browser = br;
     return br.newPage();
 }).then(newp=>{
     page = newp;
     return page.goto("https://www.google.com");
 }).then(res=>{
     return page.type("input:nth-child(3)","amazon",{
         delay: '300'
     }).then(r=>{
         return page.click("input:nth-child(1)");
     }).then(c=>{
         return page.waitForSelector(".x2VHCd.OSrXXb.qzEoUe");
     }).then(c=>{
         return page.click(".x2VHCd.OSrXXb.qzEoUe");
     }).then(()=>{
         return page.waitForSelector("input[type='text']");
     }).then(()=>{
         return page.type("input[type='text']","macbookpro");
     }).then(()=>{
         return page.click("#nav-search-submit-button");
     }).then(res=> {
         return page.evaluate( 

         )
     })
         
     

 })

 .catch( err => {
     console.log(err);

 })