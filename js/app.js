const getColor = () => {
    // hex code     like #fff or #000 etc
    const randomNumber =Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;           //  change background color
    document.getElementById("color-code").innerText = randomCode;       // display hex code of color

    navigator.clipboard.writeText(randomCode);      //  auto copy the displaying color, we need to only paste it anywhere.
}

// event call
document.getElementById("btn").addEventListener(
    "click", getColor )


// init call
getColor();