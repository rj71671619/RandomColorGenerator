const getColor = () => {
    const Random = Math.floor(Math.random() * 16777215);

    console.log(Random);
    const Randomcode = "#" + Random.toString(16);
    document.body.style.backgroundColor = Randomcode;

}
document.getElementById("btn").addEventListener(
    "click",
    getColor
)