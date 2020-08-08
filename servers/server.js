const express = require("express");
const cors = require("cors");
const cheerio = require("cheerio");
const axios = require("axios");
const PORT = 4000;
const app = express();

app.use(cors());

const getHtml = async () => {
  try {
    const url= 'https://www.mule.co.kr/bbs/market/sell';
    return await axios.get(url);
    
  } catch (error) {
    console.error(error);
  }
};

app.get("/", (req, res) => {
    getHtml()
      .then((html) => {
        const $ = cheerio.load(html.data);
        //let parentTag = $("div.liveNum ul.liveNum li");
        const parentTag = $("div.board-list-wrapper table tbody tr");
        // 크롤링할 태그 찾기
  
        let resultArr = [];
        parentTag.each(function (i, elem) {
            var itemObj = {
                no: $(this).find("td.no").text().replace("프리미엄","").trim(),
                region: $(this).find("td.region").text(),
                title: $(this).find("td.title a").text().replace(/(\r\n\t|\n|\r\t)/gm,"").trim(),
                price: $(this).find("td.price").text(),
                regdt: $(this).find("td.regdt").text(),
                view: $(this).find("td.view").text(),
            };

            resultArr.push(itemObj);
        });
  
        resultArr.forEach((elem) => {
          console.log(`가격: ${elem._price}`);
        });
        return resultArr;
      })
      .then((data) => res.send(data));
  }
);
  

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);