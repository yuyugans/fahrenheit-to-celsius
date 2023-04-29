const cel = document.querySelector(".celsius")
const fah = document.querySelector(".fahrenheit")

cel.addEventListener("input", ()=>{
    const result = (parseFloat(cel.value) * 9/5) + 32
    fah.value = parseFloat(result.toFixed(2))
})

fah.addEventListener("input", ()=>{
    const result = (parseFloat(fah.value)-32) * 5/9
    cel.value = parseFloat(result.toFixed(2))
})