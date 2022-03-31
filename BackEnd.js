const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapeInfo(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    fs.appendFileSync('Duomenys.json', '[', "UTF-8",{'flags': 'a+'});

    var pirmas = new Boolean(true);

    for (let y=2; y<139; y++) {
        for (let x=1; x<4; x++) {
            try {
                const [el] = await page.$x('/html/body/font/center[2]/font/center/b/table/tbody/tr[' + y + ']/td[' + x + ']/a');
                const href = await el.getProperty('href');
                const link = await href.jsonValue();

                const [el2] = await page.$x('/html/body/font/center[2]/font/center/b/table/tbody/tr[' + y + ']/td[' + x + ']/a');
                const txt = await el2.getProperty('textContent');
                const title = await txt.jsonValue();

                //console.log({link, title});

                if (pirmas == false) fs.appendFileSync('Duomenys.json', ',', "UTF-8",{'flags': 'a+'});
                fs.appendFileSync("Duomenys.json", JSON.stringify({link, title},null,2), "UTF-8",{'flags': 'a+'});
                var pirmas = false;
                
            } catch (e) {}
        }
    }
    fs.appendFileSync('Duomenys.json', ']', "UTF-8",{'flags': 'a+'});

    browser.close();
}

async function scrapeSchedule(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    for (let m=2; m<=6; m++) {
        for (let n=3; n<=10; n++) {
            try {
                const [elp] = await page.$x('/html/body/font/center[2]/table/tbody/tr[' + n + ']/td[' + m + ']/font/b/a');
                const txt2 = await elp.getProperty('textContent');
                const lesson = await txt2.jsonValue();

                console.log({lesson});
            } catch (e) {
                console.log('');
            }
        }
    }

    browser.close();
}


//scrapeInfo ('http://www.azuolynogimnazija.lt/uploads/tvark/tvark2022_2/index.htm');

scrapeSchedule ('http://www.azuolynogimnazija.lt/uploads/tvark/tvark2022_2/x300123c_sapd.htm');