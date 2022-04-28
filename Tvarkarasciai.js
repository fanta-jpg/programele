const puppeteer = require('puppeteer');
const fs = require('fs');

const alink = 'http://www.azuolynogimnazija.lt/uploads/tvark/tvark2022_2/index.htm';

async function scrapeInfo(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // fs.appendFileSync('Duomenys.json', '[', "UTF-8",{'flags': 'a+'}); !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    var pirmas = new Boolean(true);

    for (let y=2; y<140; y++) { //140    3
        for (let x=1; x<4; x++) { //4     2
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

                // let schedule = [title];


                await page.goto(link);

                for (let m=2; m<=6; m++) {

                    let schedule = [];

                    let jungimas = false;
                    let pmk = 0;

                    for (let n=3; n<=10; n++) {
                        try {
                            // if (m!=2) {
                            //     try {
                            //     let g=m-1;
                            //     const [elk] = await page.$x('/html/body/font/center[2]/table/tbody/tr[' + n + ']/td[' + g + ']');
                            //     const kl = await elk.getProperty('rowSpan');
                            //     const k = await kl.jsonValue();

                            //     var z = Number(k) // Jei sujungtos lenteleje 2 eilutes, tai numeris bus 2
                                
                            //     if (z==2) {
                            //         // m=g;
                            //         jungimas = true;
                            //     }
                            //     } catch (e) {
                            //         throw (err);
                            //     }
                            // }
                         


                            // if (jungimas==true) {
                            //     // m=m-1;
                            //     if (n==pmk) {
                            //         console.log('IEINA');
                            //     }
                            // }

                            if (m>2) {
                                // let mk=m-1;
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
                                            // jungimas = true;
                                        }
                                        // m=m+1;

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
                                        // jungimas = true;
                                    }
                                    // m=m+1;
                                } catch (e) {
                                    schedule.push(' ');
                                }
                            }

                            

/*
                            const [elp] = await page.$x('/html/body/font/center[2]/table/tbody/tr[' + n + ']/td[' + m + ']/font/b/a');
                            const txt2 = await elp.getProperty('textContent');
                            const lesson = await txt2.jsonValue();
                            
                            schedule.push(lesson);
                            try {
                                const [eld] = await page.$x('/html/body/font/center[2]/table/tbody/tr[' + n + ']/td[' + m + ']');
                                const predub = await eld.getProperty('rowSpan');
                                const dub = await predub.jsonValue();

                                var dviguba = Number(dub) // Jei sujungtos lenteleje 2 eilutes, tai numeris bus 2

                                if (dviguba==2) {
                                    schedule.push(lesson);
                                    n=n+1;
                                    // jungimas = true;
                                }
                                // m=m+1;
                            } catch (e) {}

*/


                            // if (dub=='2') {
                            //     console.log('EINA');
                            //     schedule.push(lesson);
                            // }

                            // const list = await page.evaluateHandle(() => {
                            //     return Array.from(document.getElementsByTagName('td')).map(td => td.rowSpan);
                            //   });
                            // console.log(await list.jsonValue());
                            

                            // const [z] = await page.$x('/html/body/font/center[2]/table/tbody/tr[' + n + ']/td[' + m + ']/font');
                            // const reik = await z.getProperty('size');
                            // const ats = await reik.jsonValue();
                            
                           // fs.appendFileSync("Duomenys.json", JSON.stringify(lesson,null,2), "UTF-8",{'flags': 'a+'});
                        } catch (e) {
                            // schedule.push('');    Paziureti ant galo, jei nera problemu su tuo, kad kai nera pamokos pushina "nieka", tai galima istrinti
                        }
                    }
                    switch (m) {
                        case 2: 
                            pirmadienis = [];
                            pirmadienis = schedule;
                            // fs.appendFileSync("Duomenys.json", JSON.stringify({title, pirmadienis},null,2), "UTF-8",{'flags': 'a+'});
                            // schedule.push('Pirmadienis:');
                            // fs.appendFileSync("Duomenys.json", 'Pirmadienis:', "UTF-8",{'flags': 'a+'});
                            break;
                        case 3: 
                            antradienis = [];
                            antradienis = schedule;
                            // fs.appendFileSync("Duomenys.json", JSON.stringify({antradienis},null,2), "UTF-8",{'flags': 'a+'});
                            // schedule.push('Antradienis:');
                            // fs.appendFileSync("Duomenys.json", 'Antradienis:', "UTF-8",{'flags': 'a+'});
                            break;
                        case 4:
                            treciadienis = [];
                            treciadienis = schedule;
                            // fs.appendFileSync("Duomenys.json", JSON.stringify({treciadienis},null,2), "UTF-8",{'flags': 'a+'});
                            // schedule.push('Trečiadienis:');
                            // fs.appendFileSync("Duomenys.json", 'Trečiadienis:', "UTF-8",{'flags': 'a+'});
                            break;
                        case 5:
                            ketvirtadienis = [];
                            ketvirtadienis = schedule;
                            // fs.appendFileSync("Duomenys.json", JSON.stringify({ketvirtadienis},null,2), "UTF-8",{'flags': 'a+'});
                            // schedule.push('Ketvirtadienis:');
                            // fs.appendFileSync("Duomenys.json", 'Ketvirtadienis:', "UTF-8",{'flags': 'a+'});
                            break;
                        case 6:
                            penktadienis = [];
                            penktadienis = schedule;
                            // fs.appendFileSync("Duomenys.json", JSON.stringify({penktadienis},null,2), "UTF-8",{'flags': 'a+'});
                            // schedule.push('Penktadienis:');
                            // fs.appendFileSync("Duomenys.json", 'Penktadienis:', "UTF-8",{'flags': 'a+'});
                            break;
                    }
                   
                }
                   
                fs.appendFileSync("Duomenys.json", JSON.stringify({title, pirmadienis, antradienis, treciadienis, ketvirtadienis, penktadienis},null,2), "UTF-8",{'flags': 'a+'});

                // fs.appendFileSync("Duomenys.json", JSON.stringify({schedule},null,2), "UTF-8",{'flags': 'a+'});

                await page.goto(alink);
                
            } catch (e) {}
        }
    }
    
    // fs.appendFileSync('Duomenys.json', ']', "UTF-8",{'flags': 'a+'}); !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

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


scrapeInfo (alink);



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