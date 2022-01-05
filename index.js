let puppeteer=require("puppeteer")

let browser=puppeteer.launch({
    headless:false,
    defaultViewport:null,
    args:["--start-maximized"]
})
browser.then(launch=>{
    let newTab=launch.newPage();
    newTab.then(pageopened=>{
        let goto=pageopened.goto("https://www.google.com");
        goto.then(pageGoogle=>{
            let typeChar=pageopened.type("input","amazon",{delay:100})
            typeChar.then(typed=>{
            let input=pageopened.click("input.gNO89b")
            input.then(googlesubmit=>{

                    }).catch(err=>{           
                console.log(err);
                })
            }).catch(err=>{
                console.log(err);
                })
        }).catch(err=>{node 
            console.log(err);
        })
    }).catch(err=>{
        console.log(err);
    })
}).catch(err=>{
    console.log(err);
})





