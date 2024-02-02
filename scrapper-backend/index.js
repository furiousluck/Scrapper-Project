const express = require('express');
const app = express();
const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config();
const mongoose = require('mongoose');
const Article = require('./model/data');
const cors = require('cors');
app.use(cors(origin="*"));


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(console.log("DB Connected"));

// Function to format the date and time
const formatDateTime = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    return dateTime.toISOString().replace('T', ' ').slice(0, -5);
};
// Function to extract numeric part of comments count
const extractCount = (commentsString) => {
    const match = commentsString.match(/\d+/);
    return match ? match[0] : 0;
};

const scrapepage = async (url,j) => {
    try{
        const data = await axios.get(url)
        const $ = cheerio.load(data.data);
        const articles = [];
        console.log("Started...")
        $('.athing').each((i,element)=>{
            const rank = j;
            const link  = $(element).find('.title .titleline a').attr('href');
            console.log(link)
            const url = $(element).find('.title .titleline .sitebit .sitestr').text();
            const upvotes = extractCount($(element).next().find('.score').text().trim());
            const time = formatDateTime($(element).next().find('.age').attr('title'));
            const comments = extractCount($(element).next().find('a:contains("comments")').text())
            const article = new Article({
                rank,
                link,
                url,
                upvotes,
                time,
                comments
            });
            articles.push(article);
            // Article.updateOne({ rank }, { $set: article }, { upsert: true }, (err, result) => {
            //     if (err) {
            //         console.error(err);
            //     }
            // });
            j++;
        });
        await Article.insertMany(articles);
        return articles;
    }
    catch(err){
        console.log(err);
    }
}



app.get('/',async(req,res)=>{
    try{
        let articles;
        const scrapeData = async () =>{
            const maxPages = 3;
            articles = [];
            await Article.deleteMany();
            let j=1;
            for(let i=1;i<=maxPages;i++){
                const url = `https://news.ycombinator.com/news?p=${i}`;
                const newArticles = await scrapepage(url,j);
                articles = [...articles,...newArticles];
                console.log(`Scraped and saved data at ${new Date().toISOString()}`);
            }
        }
        await scrapeData();
        setInterval(async() => {
            await scrapeData();
        }, 3600000);
        res.json({articles});
    }
    catch(err){
        console.log(err);
    }
});

app.get('/articles',async(req,res)=>{
    try{
        const articles = await Article.find().sort({rank:1});
        res.json({articles});
    }
    catch(err){
        console.log(err);
    }
});



const PORT = process.env.PORT || 5001;


app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`);
})