const addItem = async (item) => {
    await randomDelay()
    let div = document.createElement('div')
    div.innerHTML = item
    document.body.append(div)
}
const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random()
        setTimeout(() => {
            resolve()
        }, timeout * 500)
    })
}
async function main() {

    let t = setInterval(() => {
        let last = document.body.getElementsByTagName("div")
        last = last[last.length - 1]
        if (last.innerHTML.endsWith(".....")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3)
        } else {
            last.innerHTML = last.innerHTML + "."
        }
    }, 100)

    let text = [
        ">>> Initializing Hacking ",
        ">>> Your Phone Hacking Process Start ",
        ">>> Reading Your Files ",
        ">>> Reading Your Gallery ",
        ">>> Reading Your Facebook Password ",
        ">>> Reading Your Instagram Password ",
        ">>> Reading Your Phone Password ",
        ">>> Password Files Detected ",
        ">>> Sending all Password and Personal Files to Server ",
        ">>> Cleaning Up Your Phone ",
        ">>> Hacked Your Phone ",
        "Done",
    ]
    for (const item of text) {
        await addItem(item)
    }
    await randomDelay()
    clearInterval(t)
} main()