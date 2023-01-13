const robot = require("robotjs")

App()

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

    setTimeout(() => {
        getScreenShot()
    }, 2000)

    const treeColourArr = [
        "324621",
        "0d0f05",
        "5e5e55",
        "6f6f64",
        "66665d",
        "3e451e",
    ]
    const getScreenShot = () => {
        const size = 10
        const screenImg = robot.screen.capture()
        const multi = screenImg.width / size
        const colour = screenImg.colorAt(
            robot.getMousePos().x,
            robot.getMousePos().y
        )
        console.log(colour)
        randomScreenPosition()
    }

    const randomScreenPosition = () => {
        const screenSize = robot.getScreenSize()
        const randX = Math.floor(Math.random() * screenSize.width - 50)
        const randY = Math.floor(Math.random() * screenSize.height - 50)

        robot.moveMouse(randX, randY)
    }
}
