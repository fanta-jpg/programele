// Reikia fs module, nes jame yra writeFile funkcija

const fs = require('fs')

// Per videka sitas buvo functions foldery ir index.js faile
const puppeteer = require("puppeteer");

const scrapeInfo = async (username) => {
    const browser = await puppeteer.launch( { headless: true });
    const page = await browser.newPage();

    await page.goto('http://www.azuolynogimnazija.lt/uploads/tvark/tvark2022_2/index.htm');

    await page.screenshot({path: '1.png'});

    const data = await page.evaluate( () => {
        const text = document.querySelectorAll('a');

        const urls = Array.from(text).map(v => v.scr);

        return urls
    });

    await browser.close();

    console.log(data)

    fs.writeFile('Output.txt', data, (err) => {

        // jei erroras, throw err
        if (err) throw err
    })

    return data;

}