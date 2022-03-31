const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapeInfo(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    fs.appendFileSync('Duomenys.json', '[', "UTF-8",{'flags': 'a+'});

    var pirmas = new Boolean(true);

    for (let y=117; y<118; y++) {
        for (let x=1; x<3; x++) {
            try {
                const [el] = await page.$x('/html/body/font/center[2]/font/center/b/table/tbody/tr[' + y + ']/td[' + x + ']/a');
                const href = await el.getProperty('href');
                const link = await href.jsonValue();

                const [el2] = await page.$x('/html/body/font/center[2]/font/center/b/table/tbody/tr[' + y + ']/td[' + x + ']/a');
                const txt = await el2.getProperty('textContent');
                const title = await txt.jsonValue();

                //console.log({link, title});


                if (pirmas == false) fs.appendFileSync('Duomenys.json', ',', "UTF-8",{'flags': 'a+'});
                pirmas = false;

                // No. 1
                //fs.appendFileSync("Duomenys.json", JSON.stringify({title},null,2), "UTF-8",{'flags': 'a+'});
                //scrapeSchedule(link);

                let schedule = [title];


                await page.goto(link);

                for (let m=2; m<=6; m++) {
                    switch (m) {
                    case 2: 
                        schedule.push('Pirmadienis:');
                        // fs.appendFileSync("Duomenys.json", 'Pirmadienis:', "UTF-8",{'flags': 'a+'});
                        break;
                    case 3: 
                        schedule.push('Antradienis:');
                        // fs.appendFileSync("Duomenys.json", 'Antradienis:', "UTF-8",{'flags': 'a+'});
                        break;
                    case 4:
                        schedule.push('Trečiadienis:');
                        // fs.appendFileSync("Duomenys.json", 'Trečiadienis:', "UTF-8",{'flags': 'a+'});
                        break;
                    case 5:
                        schedule.push('Ketvirtadienis:');
                        // fs.appendFileSync("Duomenys.json", 'Ketvirtadienis:', "UTF-8",{'flags': 'a+'});
                        break;
                    case 6:
                        schedule.push('Penktadienis:');
                        // fs.appendFileSync("Duomenys.json", 'Penktadienis:', "UTF-8",{'flags': 'a+'});
                        break;
                    }

                    
                    for (let n=3; n<=10; n++) {
                        try {
                            const [elp] = await page.$x('/html/body/font/center[2]/table/tbody/tr[' + n + ']/td[' + m + ']/font/b/a');
                            const txt2 = await elp.getProperty('textContent');
                            const lesson = await txt2.jsonValue();
                            
                            schedule.push(lesson);

                           // fs.appendFileSync("Duomenys.json", JSON.stringify(lesson,null,2), "UTF-8",{'flags': 'a+'});
                        } catch (e) {}
                    }
                }

                fs.appendFileSync("Duomenys.json", JSON.stringify({schedule},null,2), "UTF-8",{'flags': 'a+'});

                //fs.appendFileSync("Duomenys.json", '\n', "UTF-8",{'flags': 'a+'});
                //var pirmas = false;

                await page.goto('http://www.azuolynogimnazija.lt/uploads/tvark/tvark2022_2/index.htm');
                
            } catch (e) {}
        }
    }
    
    fs.appendFileSync('Duomenys.json', ']', "UTF-8",{'flags': 'a+'});

    browser.close();
}

async function scrapeSchedule(url) {
    //const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    for (let m=2; m<=6; m++) {
        switch (m) {
        case 2: 
            fs.appendFileSync("Duomenys.json", 'Pirmadienis:', "UTF-8",{'flags': 'a+'});
            break;
        case 3: 
            fs.appendFileSync("Duomenys.json", 'Antradienis:', "UTF-8",{'flags': 'a+'});
            break;
        case 4:
            fs.appendFileSync("Duomenys.json", 'Trečiadienis:', "UTF-8",{'flags': 'a+'});
            break;
        case 5:
            fs.appendFileSync("Duomenys.json", 'Ketvirtadienis:', "UTF-8",{'flags': 'a+'});
            break;
        case 6:
            fs.appendFileSync("Duomenys.json", 'Penktadienis:', "UTF-8",{'flags': 'a+'});
            break;
        }
        
        for (let n=3; n<=10; n++) {
            try {
                const [elp] = await page.$x('/html/body/font/center[2]/table/tbody/tr[' + n + ']/td[' + m + ']/font/b/a');
                const txt2 = await elp.getProperty('textContent');
                const lesson = await txt2.jsonValue();

                // if (m==2) {
                //     fs.appendFileSync("Duomenys.json", 'Pirmadienis:', "UTF-8",{'flags': 'a+'});
                // }
                // if (m==3) {
                //     fs.appendFileSync("Duomenys.json", 'Antradienis:', "UTF-8",{'flags': 'a+'});
                // }
                // if (m==4) {
                //     fs.appendFileSync("Duomenys.json", 'Trečiadienis:', "UTF-8",{'flags': 'a+'});
                // }
                // if (m==5) {
                //     fs.appendFileSync("Duomenys.json", 'Ketvirtadienis:', "UTF-8",{'flags': 'a+'});
                // }
                // if (m==6) {
                //     fs.appendFileSync("Duomenys.json", 'Penktadienis:', "UTF-8",{'flags': 'a+'});
                // }

                fs.appendFileSync("Duomenys.json", JSON.stringify({lesson},null,2), "UTF-8",{'flags': 'a+'});
                //return Promise.resolve(lesson);

            } catch (e) {
                //console.log('');
            }
        }
    }

    browser.close();
}


scrapeInfo ('http://www.azuolynogimnazija.lt/uploads/tvark/tvark2022_2/index.htm');



// No. 1
                // await page.goto(link);

                // for (let m=2; m<=6; m++) {
                //     switch (m) {
                //     case 2: 
                //         fs.appendFileSync("Duomenys.json", 'Pirmadienis:', "UTF-8",{'flags': 'a+'});
                //         break;
                //     case 3: 
                //         fs.appendFileSync("Duomenys.json", 'Antradienis:', "UTF-8",{'flags': 'a+'});
                //         break;
                //     case 4:
                //         fs.appendFileSync("Duomenys.json", 'Trečiadienis:', "UTF-8",{'flags': 'a+'});
                //         break;
                //     case 5:
                //         fs.appendFileSync("Duomenys.json", 'Ketvirtadienis:', "UTF-8",{'flags': 'a+'});
                //         break;
                //     case 6:
                //         fs.appendFileSync("Duomenys.json", 'Penktadienis:', "UTF-8",{'flags': 'a+'});
                //         break;
                //     }

                //     for (let n=3; n<=10; n++) {
                //         try {
                //             const [elp] = await page.$x('/html/body/font/center[2]/table/tbody/tr[' + n + ']/td[' + m + ']/font/b/a');
                //             const txt2 = await elp.getProperty('textContent');
                //             const lesson = await txt2.jsonValue();
                //         } catch (e) {}
                //     }
                // }