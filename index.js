const robot = require("robotjs")

setTimeout(() => {
    App()
}, 3000)

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function sleepTime(ms) {
    await sleep(ms)
}

function App() {
    // robot.moveMouse(0, 0)
    // await sleep(2000)
    console.log(robot.getMousePos())

    const treeColourArr = [
        "324621",
        "0d0f05",
        "5e5e55",
        "6f6f64",
        "66665d",
        "3e451e",
    ]

    let i = 0
    loop()
    function loop() {
        setTimeout(() => {
            getScreenShot()
            i++
            if (i < 10) {
                loop()
            }
        }, Math.floor(Math.random() * 2000))
    }

    function getScreenShot() {
        const screenImg = robot.screen.capture()
        const colour = screenImg.colorAt(
            robot.getMousePos().x,
            robot.getMousePos().y
        )
        treeColourArr.includes(colour)
            ? (robot.mouseClick(), console.log("got one!"))
            : randomScreenPosition()
        console.log(colour)
    }

    function randomScreenPosition() {
        const screenSize = robot.getScreenSize()
        const randX = Math.floor(Math.random() * screenSize.width - 50)
        const randY = Math.floor(Math.random() * screenSize.height - 50)

        robot.moveMouse(randX, randY)
    }
}
