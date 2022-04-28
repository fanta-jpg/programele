const puppeteer = require('puppeteer');
const fs = require('fs');

async function tvark(username, password) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://dienynas.tamo.lt/Prisijungimas/Login');

    await page.type('[name=UserName]', username);

    await page.type('[name=Password]', password);

    await page.click('[class="c_btn submit"]');

    await page.waitFor(5000);

    await page.goto('https://dienynas.tamo.lt/?clickMode=True');



    const [end] = await page.$x('/html/body/div[5]/div[1]/div/div/ul/li[7]/ol/li[4]/a');
    const href = await end.getProperty('href');
    const link = await href.jsonValue();

    page.goto(link);

    const [epnd] = await page.$x('/html/body/div[5]/div[2]/div[2]/div[2]/div[1]/div[1]');
    const text = await epnd.innerText;

    fs.appendFileSync("UneedND.json", JSON.stringify({text},null,2), "UTF-8",{'flags': 'a+'});

    browser.close();
}

nick = '';
pass = '';

tvark(nick, pass);