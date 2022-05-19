const puppeteer = require('puppeteer');
const fs = require('fs');

const alink = 'http://www.azuolynogimnazija.lt/uploads/tvark/tvark2022_2/index.htm';

async function scrapeInfo(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    fs.appendFileSync('Duomenys.json', '[', "UTF-8",{'flags': 'a+'});

    var pirmas = new Boolean(true);

    let key = 0;

    for (let y=2; y<140; y++) { 
        for (let x=1; x<4; x++) {
            try {
                const [el] = await page.$x('/html/body/font/center[2]/font/center/b/table/tbody/tr[' + y + ']/td[' + x + ']/a');
                const href = await el.getProperty('href');
                const link = await href.jsonValue();

                const [el2] = await page.$x('/html/body/font/center[2]/font/center/b/table/tbody/tr[' + y + ']/td[' + x + ']/a');
                const txt = await el2.getProperty('textContent');
                const title = await txt.jsonValue();


                if (pirmas == false) fs.appendFileSync('Duomenys.json', ',', "UTF-8",{'flags': 'a+'});
                pirmas = false;

                await page.goto(link);

                for (let m=2; m<=6; m++) {

                    let schedule = [];

                    for (let n=3; n<=10; n++) {
                        try {

                            if (m>2) {

                                let nk=n-1;

                                try {

                                    let dvigubusk = 0;

                                    for (let mkf=m; mkf>=2; mkf--) {

                                        try {

                                            const [ela] = await page.$x('/html/body/font/center[2]/table/tbody/tr[' + nk + ']/td[' + mkf + ']');
                                            const buvoc = await ela.getProperty('rowSpan');
                                            const buvo = await buvoc.jsonValue();
    
                                            var buvonr = Number(buvo)
    
                                            if (buvonr == 2) {
                                                dvigubusk = dvigubusk + 1;
                                            }
                                            
                                        } catch (e) {}

                                    }
                                    
                                    let mk = m - (1 * dvigubusk);

                                    const [elp] = await page.$x('/html/body/font/center[2]/table/tbody/tr[' + n + ']/td[' + mk + ']/font/b/a');
                                    const txt2 = await elp.getProperty('textContent');
                                    const lesson = await txt2.jsonValue();
                                    
                                    schedule.push(lesson);

                                    try {
                                        const [eld] = await page.$x('/html/body/font/center[2]/table/tbody/tr[' + n + ']/td[' + mk + ']');
                                        const predub = await eld.getProperty('rowSpan');
                                        const dub = await predub.jsonValue();

                                        var dviguba = Number(dub) // Jei sujungtos lenteleje 2 eilutes, tai numeris bus 2

                                        if (dviguba==2) {
                                            schedule.push(lesson);
                                            n=n+1;

                                        }

                                    } catch (e) {}

                                } catch (e) {
                                    schedule.push(' ');
                                }

                            } else {
                                try {
                                const [elp] = await page.$x('/html/body/font/center[2]/table/tbody/tr[' + n + ']/td[' + m + ']/font/b/a');
                                const txt2 = await elp.getProperty('textContent');
                                const lesson = await txt2.jsonValue();
                                
                                schedule.push(lesson);

                                    const [eld] = await page.$x('/html/body/font/center[2]/table/tbody/tr[' + n + ']/td[' + m + ']');
                                    const predub = await eld.getProperty('rowSpan');
                                    const dub = await predub.jsonValue();

                                    var dviguba = Number(dub) // Jei sujungtos lenteleje 2 eilutes, tai numeris bus 2

                                    if (dviguba==2) {
                                        schedule.push(lesson);
                                        n=n+1;

                                    }

                                } catch (e) {
                                    schedule.push(' ');
                                }
                            }

                        } catch (e) {
                            
                        }
                    }
                    switch (m) {
                        case 2: 
                            pirmadienis = [];
                            pirmadienis = schedule;
                            break;
                        case 3: 
                            antradienis = [];
                            antradienis = schedule;
                            break;
                        case 4:
                            treciadienis = [];
                            treciadienis = schedule;
                            break;
                        case 5:
                            ketvirtadienis = [];
                            ketvirtadienis = schedule;
                            break;
                        case 6:
                            penktadienis = [];
                            penktadienis = schedule;
                            break;
                    }

                }

                fs.appendFileSync("Duomenys.json", JSON.stringify({key, title, pirmadienis, antradienis, treciadienis, ketvirtadienis, penktadienis},null,2), "UTF-8",{'flags': 'a+'});

                key = key + 1;

                await page.goto(alink);
                
            } catch (e) {}
        }
    }
    
    fs.appendFileSync("Duomenys.json", ']', "UTF-8",{'flags': 'a+'});

    browser.close();
}

scrapeInfo (alink);
