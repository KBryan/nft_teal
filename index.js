async function start() {

    const responseImage = await fetch('https://thatcopy.pw/catapi/rest/')
    const dataImage = await responseImage.json()
    const responseText = await fetch('https://cat-fact.herokuapp.com/facts')
    const dataText = await responseText.json()
    var randomNumber = Math.floor(Math.random() * 5);

    console.log(dataImage)
    console.log(dataText)
    yaGetBanner(dataImage.url,dataText[randomNumber].text);


}

start()

function yaGetBanner(image,catText)
{
    var el = document.getElementById("yabanner");

    el.innerHTML=`
        <div class="product-card">
            <h2 id="cat_header">Cat Facts!!!</h2>
            <img id="cat_img" src="${image}"/>
            <p id="cattext">${catText}</p>
              <button class="button">Mint Cat Fact</button>
        </div>
    `;
}
