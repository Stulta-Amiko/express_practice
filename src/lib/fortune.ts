const fortunes = [
    "Conquer your fears of they will conquer you.",
    "Rivers need springs",
    "Do not fear what you don't know",
    "You will have a pleasant surprise",
    "Whenever possivle, keep it simple"
]
const getFortune = () => {
    const idx = Math.floor(Math.random()*fortunes.length)
    return fortunes[idx]
}
export {getFortune}