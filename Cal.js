let exp = '';
const output = document.getElementById('input');
const input = document.getElementById('exp');
document.getElementById('block0').addEventListener("click", function() {
    if(exp != '0') {
        exp += 0;
        input.textContent = exp;
    }
});

document.getElementById("block1").addEventListener("click", function() {
    exp += 1;
    input.textContent = exp;
});

document.getElementById("block2").addEventListener("click", function() {
    exp += 2;
    input.textContent = exp;
});

document.getElementById("block3").addEventListener("click", function() {
    exp += 3;
    input.textContent = exp;
});

document.getElementById("block4").addEventListener("click", function() {
    exp += 4;
    input.textContent = exp;
});

document.getElementById("block5").addEventListener("click", function() {
    exp += 5;
    input.textContent = exp;
});

document.getElementById("block6").addEventListener("click", function() {
    exp += 6;
    input.textContent = exp;
});

document.getElementById("block7").addEventListener("click", function() {
    exp += 7;
    input.textContent = exp;
});

document.getElementById("block8").addEventListener("click", function() {
    exp += 8;
    input.textContent = exp;
});

document.getElementById("block9").addEventListener("click", function() {
    exp += 9;
    input.textContent = exp;
});

document.getElementById("plus").addEventListener("click", function() {
    if(isValidOperation() && exp != '') {
        exp += ' + ';
        input.textContent = exp;
    }
});

document.getElementById("minus").addEventListener("click", function() {
    if(isValidOperation()) {
        exp += ' - ';
        input.textContent = exp;
    }
});

document.getElementById("divide").addEventListener("click", function() {
    if(isValidOperation() && exp != '') {
        exp += ' / ';
        input.textContent = exp;
    }
});

document.getElementById("multiply").addEventListener("click", function() {
    if(isValidOperation() && exp != '') {
        exp += ' * ';
        input.textContent = exp;
    }
});

document.getElementById("dot").addEventListener("click", function() {
    exp += '.';
    input.textContent = exp;
});

function isValidOperation() {
    if(exp.endsWith(' + ') || exp.endsWith(' - ') || exp.endsWith(' * ') || exp.endsWith(' / ')) {
        return false;
    }
    return true;
}

document.getElementById("clr").addEventListener("click", () => {
    exp = '';
    input.textContent = '0';
});

document.getElementById('ans').addEventListener('click', function() {
    const ansTop = document.getElementById("ansTop");

    ansTop.textContent = exp + ' = ';
    exp = eval(exp) + '';
    output.value = exp;
    input.textContent = exp;
    
});