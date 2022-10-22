export default function showDate(){
    let atualDate = new Date();

    let atualDay = atualDate.getDay()
    let atualMonth = atualDate.getMonth()
    let hours = atualDate.getHours()
    let minutes = atualDate.getMinutes()
    let seconds = atualDate.getSeconds()

    return `Hoje é ${atualDay} de ${atualMonth + 1}, ${hours}:${minutes}:${seconds}`
}
