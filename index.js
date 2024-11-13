function fibonacci () {
    let fibSeq = [0, 1];
    for (let i = 2; i < 100; i++) {
        fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
    }
    return fibSeq;
}

function verificar(){
    const fibSeq = fibonacci()
    const num = parseInt(document.getElementById('number').value)
    const result = document.getElementById('res')

    if (fibSeq.includes(num)) {
        result.innerHTML = `${num} pertence a sequencia fibonacci!`
    } else {
        result.innerHTML = `${num} não pertence a sequencia fibonacci!`
    }
}


