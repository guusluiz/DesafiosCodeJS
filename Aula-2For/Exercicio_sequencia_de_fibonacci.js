pn = 0
sn = 1
console.log(pn)
console.log(sn)
for (let contador = 3; contador <= 10; contador++){
    tn = pn + sn
    pn = sn
    sn = tn
    console.log(tn)
}