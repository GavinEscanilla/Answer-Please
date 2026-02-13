let noAnswer = ['https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUya3U0bnVkajU5eHF4M2R4cm9iZjFpYWVid3QzdmQxeXh6Z2hidmppZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lpGlVAwxisYKPhWkLJ/source.gif', 'https://media1.giphy.com/media/v1.Y2lkPTZjMDliOTUyb3Vja2xhNzNneGRtazhvbDc5bHd2cGFqdDY3d2F3OXl6ZHphNzdrciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7fpSWngcDq0oLS4yvx/source.gif','https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUycWcxb21vaDI2MzlweGpsOHd4MXNjcWRxcnd1Z2U5Z296NHRscHRxaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/cE1bFWZkm9bVxNTf7J/200w.gif', 'https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUycWcxb21vaDI2MzlweGpsOHd4MXNjcWRxcnd1Z2U5Z296NHRscHRxaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/7yNblRfoEho5BhON1s/giphy.gif ']
let yesAnswer = 'https://media.tenor.com/En4BFk4ihwgAAAAM/yay-yeah.gif'

const gif = document.getElementById('gif')
const yes = document.getElementById('yes')
const no = document.getElementById('no')


no.addEventListener('click', () => {
    gif.src = noAnswer[Math.floor(Math.random() * noAnswer.length)]
})
yes.addEventListener('click', () => {
    gif.src = yesAnswer
})