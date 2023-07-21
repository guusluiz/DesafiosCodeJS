export function exercicioSequenciaDeFibonacci() {
    let pn = 0
    let sn = 1
    console.log(pn)
    console.log(sn)
    for (let contador = 3; contador <= 10; contador++) {
        let tn = pn + sn
        pn = sn
        sn = tn
        console.log(tn)
    }
}