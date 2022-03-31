const puppeteer = require('puppeteer');
const fs = require('fs');
//const { BoolifiedDeprecatedTextStylePropTypes } = require('react-native/Libraries/Components/View/ReactNativeStyleAttributes');

async function scrapeInfo(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    //let t=0;
    //let mas = []

    for (let y=2; y<139; y++) {
        for (let x=1; x<4; x++) { 
            if (y==5 && x==3); 
            else if ( y==6 );
            else if (y==25);
            else if (y==40);
            else {
                const [el] = await page.$x('/html/body/font/center[2]/font/center/b/table/tbody/tr[' + y + ']/td[' + x + ']/a');
                const href = await el.getProperty('href');
                const link = await href.jsonValue();

                const [el2] = await page.$x('/html/body/font/center[2]/font/center/b/table/tbody/tr[' + y + ']/td[' + x + ']/a');
                const txt = await el2.getProperty('textContent');
                const title = await txt.jsonValue();

                console.log({link, title});

                /*try {
                    mas.push(JSON.stringify({link, title},null,2)[t]["name"])
                } catch (err) {
                    console.log(err)
                }*/

                //t=t+1;

                /*fs.writeFile('./Duomenys.json', JSON.stringify({link, title},null,2), err => { //JSON.stringify({link, title},null,2)
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('Pavyko');
                    }
                })*/
            }
        }
    }

    browser.close();
}

async function scrapeSchedule(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    for (let m=2; m<=6; m++) {
            for (let n=2; n<=10; n++) {
                try {
                    if (n==2) {
                    const [eld] = await page.$x('/html/body/font/center[2]/table/tbody/tr[' + n + ']/td[' + m + ']/font/b/a');
                    const txt1 = await eld.getProperty('textContent');
                    const day = await txt1.jsonValue();
                    }

                    const [elp] = await page.$x('/html/body/font/center[2]/table/tbody/tr[' + n + ']/td[' + m + ']/font/b/a');
                    const txt2 = await elp.getProperty('textContent');
                    const lesson = await txt2.jsonValue();

                    console.log({lesson});
                }  catch(e) {
                    console.log(' ');
                }
            } 
    }
        


    browser.close();
}


//scrapeInfo ('http://www.azuolynogimnazija.lt/uploads/tvark/tvark2022_2/index.htm');
scrapeSchedule ('http://www.azuolynogimnazija.lt/uploads/tvark/tvark2022_2/x300122e_korr.htm');