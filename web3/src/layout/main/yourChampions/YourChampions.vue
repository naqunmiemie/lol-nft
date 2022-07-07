<template>
</template>
<script setup lang='ts'>
import superagent from 'superagent';
import cheerio from 'cheerio';
const url = "https://www.ghostoact.com/arts/models/?cp=1&sk=0"

async function getRawHtml() {
    const result = await superagent.get(url);
    const text = result.text;
    // console.log(text);
    const root = cheerio.load(text);
    const title = root(".mod-title").find("a").html()
    console.log("title"+title);
    const name = root(".mod-name").find("a").html()
    console.log("name"+name);
    const img = root(".sd-btn.splash-btn.menu-box").find("a").attr("href")
    console.log("img:"+"https://www.ghostoact.com"+img);

}

getRawHtml()

</script>
<style lang='scss' scoped>
</style>