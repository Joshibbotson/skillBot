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
    // console.log(robot.getMousePos())
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    // console.log(robot.getMousePos)
    // robot.moveMouse(1612, 1122)

    const treeColourArr = [
        "11120a",
        "212813",
        "11120a",
        "2f3614",
        "12130a",
        "222214",
        "3c480c",
        "434f0a",
        "434f0a",
        "495513",
        "31380c",
        "2b370a",
        "31380c",
        "454f1f",
        "546125",
        "48531f",
        "38460b",
        "373f0d",
        "40471f",
        "586526",
        "1a2511",
        "1a2511",
        "1a2511",
        "586627",
        "1a2511",
        "1a2511",
        "1a2511",
        "5b6928",
        "536125",
        "3c4419",
        "4c5222",
        "5a632a",
        "5c6a28",
        "1d2713",
        "1d2713",
        "1d2713",
        "1f2b14",
        "1f2b14",
        "5f6e2a",
        "6c7b32",
        "444d0f",
        "434c19",
        "7d854b",
        "41490e",
        "4c5721",
        "283017",
        "27300d",
        "141600",
        "171f0c",
        "33381f",
    ]

    const logPositionArr = [
        { x: 1624, y: 1079 },
        { x: 1629, y: 1077 },
        { x: 1630, y: 1080 },
        { x: 1624, y: 1082 },
        { x: 1625, y: 1073 },
        { x: 1620, y: 1074 },
        { x: 1620, y: 1072 },
        { x: 1623, y: 1072 },
        { x: 1627, y: 1070 },
        { x: 1631, y: 1080 },
        { x: 1631, y: 1080 },
        { x: 1624, y: 1082 },
        { x: 1620, y: 1085 },
        { x: 1622, y: 1080 },
        { x: 1615, y: 1081 },
        { x: 1613, y: 1081 },
        { x: 1616, y: 1076 },
        { x: 1616, y: 1074 },
        { x: 1616, y: 1074 },
        { x: 1625, y: 1071 },
        { x: 1625, y: 1076 },
        { x: 1626, y: 1076 },
        { x: 1629, y: 1077 },
        { x: 1633, y: 1077 },
        { x: 1629, y: 1071 },
        { x: 1627, y: 1073 },
        { x: 1622, y: 1081 },
        { x: 1617, y: 1081 },
        { x: 1616, y: 1081 },
        { x: 1615, y: 1074 },
        { x: 1620, y: 1073 },
        { x: 1626, y: 1071 },
        { x: 1624, y: 1076 },
        { x: 1628, y: 1076 },
        { x: 1630, y: 1076 },
        { x: 1627, y: 1078 },
        { x: 1622, y: 1080 },
        { x: 1617, y: 1079 },
        { x: 1615, y: 1076 },
        { x: 1615, y: 1076 },
        { x: 1626, y: 1070 },
        { x: 1626, y: 1070 },
        { x: 1624, y: 1072 },
        { x: 1625, y: 1076 },
        { x: 1625, y: 1077 },
        { x: 1621, y: 1081 },
        { x: 1614, y: 1081 },
        { x: 1623, y: 1072 },
        { x: 1629, y: 1079 },
        { x: 1630, y: 1076 },
    ]

    const dropLogPositionArr = [
        { x: 1591, y: 1119 },
        { x: 1583, y: 1117 },
        { x: 1580, y: 1116 },
        { x: 1585, y: 1119 },
        { x: 1586, y: 1119 },
        { x: 1596, y: 1118 },
        { x: 1599, y: 1117 },
        { x: 1613, y: 1117 },
        { x: 1620, y: 1117 },
        { x: 1629, y: 1117 },
        { x: 1606, y: 1120 },
        { x: 1602, y: 1117 },
        { x: 1599, y: 1117 },
        { x: 1597, y: 1118 },
        { x: 1589, y: 1118 },
        { x: 1589, y: 1117 },
        { x: 1585, y: 1115 },
        { x: 1585, y: 1115 },
        { x: 1607, y: 1117 },
        { x: 1628, y: 1117 },
        { x: 1629, y: 1117 },
        { x: 1637, y: 1118 },
        { x: 1639, y: 1117 },
        { x: 1639, y: 1118 },
        { x: 1631, y: 1121 },
        { x: 1615, y: 1119 },
        { x: 1612, y: 1118 },
        { x: 1611, y: 1119 },
        { x: 1604, y: 1117 },
        { x: 1603, y: 1117 },
        { x: 1600, y: 1120 },
        { x: 1598, y: 1118 },
        { x: 1593, y: 1119 },
        { x: 1587, y: 1118 },
        { x: 1587, y: 1118 },
        { x: 1585, y: 1118 },
        { x: 1585, y: 1117 },
        { x: 1582, y: 1117 },
        { x: 1596, y: 1119 },
        { x: 1599, y: 1119 },
        { x: 1600, y: 1117 },
        { x: 1602, y: 1116 },
        { x: 1606, y: 1119 },
        { x: 1615, y: 1117 },
        { x: 1622, y: 1118 },
        { x: 1634, y: 1118 },
        { x: 1618, y: 1120 },
        { x: 1618, y: 1120 },
        { x: 1607, y: 1120 },
        { x: 1588, y: 1117 },
    ]

    let i = 0
    loop()
    function loop() {
        setTimeout(() => {
            getScreenShot()
            i++
            if (i < 50) {
                loop()
            }
        }, Math.random() * 500)
    }

    function getScreenShot() {
        const screenImg = robot.screen.capture()
        const colour = screenImg.colorAt(
            robot.getMousePos().x,
            robot.getMousePos().y
        )
        treeColourArr.includes(colour)
            ? (cutWood(), console.log("got one!"))
            : randomScreenPosition()
        console.log(colour)
    }

    function randomScreenPosition() {
        const screenSize = robot.getScreenSize()
        const randX = getRandomInt(0, screenSize.width - 300)
        const randY = getRandomInt(200, 820)

        robot.moveMouseSmooth(randX, randY)
    }
    function cutWood() {
        robot.mouseClick()
        sleepTime(Math.random() * 3000)
        console.log(robot.getMousePos())
        return (i = 50), dumpWood()
    }

    function dumpWood() {
        const logPosIndex = Math.floor(Math.random() * logPositionArr.length)
        const dropPosIndex = Math.floor(
            Math.random() * dropLogPositionArr.length
        )

        robot.moveMouseSmooth(
            logPositionArr[logPosIndex].x,
            logPositionArr[logPosIndex].y
        )

        robot.mouseClick("right")
        robot.moveMouseSmooth(
            dropLogPositionArr[dropPosIndex].x,
            dropLogPositionArr[dropPosIndex].y
        )
        robot.mouseClick()

        return (i = 0), loop()
    }
}
