var calcularTabuada = function () {

    var tabuada = document.querySelector('#tabuada tbody');
    var valorA = parseInt(document.querySelector('#valorA').value);

    tabuada.innerHTML = '';

    for (let i = 0; i <= 10; i++) {
        var result = valorA * i;

        let template = `
<tr> 
<td>${valorA}</td>
<td>x</td>
<td>${i}</td>
<td>=</td>
<td>${result}</td>
</tr>
`

        let tr = document.createElement('tr');

        tr.innerHTML = template;

        tabuada.append(tr);

    }

}

document.querySelector('#valorA').addEventListener('change', calcularTabuada)