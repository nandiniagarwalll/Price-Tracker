import axios from "axios";
import * as cheerio from 'cheerio';
import { extractPrice } from "../utils";

export async function scarpeAmazonProduct(url:string){
    if(!url) return;


    // curl --proxy brd.superproxy.io:22225 --proxy-user brd-customer-hl_57464dc8-zone-pricetracker:w78ye7lkzfq1 -k "http://geo.brdtest.com/mygeo.json"

    const username=String(process.env.BRIGHT_DATA_USERNAME);
    const password=String(process.env.BRIGHT_DATA_PASSWORD);
    const port=22225;
    const session_id=(1000000 * Math.random()) | 0;
    const options={
        auth: {
            username:'${username}-session-${session_id}',
            password,
        },
        host: 'brd.superproxy.io',
        port,
        rejectUnauthorized:false,
    }
    try{
        const response=await axios.get(url,options);
        const $=cheerio.load(response.data);

        const title=$('title').text().trim();
        const currentPrice=$('span.a-offscreen').first().text().trim();
        const availableDiscount=$('span.a-size-large.a-color-price.savingPriceOverride.aok-align-center.reinventPriceSavingsPercentageMargin.savingsPercentage').first().text().trim();

        console.log({ title, currentPrice, availableDiscount });
        return({title , currentPrice , availableDiscount});

    }catch(error:any){
        throw new Error('Failed to scrape product:${error.message}')
    }
}
