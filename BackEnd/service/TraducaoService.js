module.exports = {

    execute(codigo) {
        // codigo é a string com todos números
        const codigo_num = codigo.split('0');
        var palavra = '';
        codigo_num.forEach(function (lista) {
            switch (lista[0]) {
                case '2':
                    palavra += ['a', 'b', 'c'][lista.length - 1]
                    break;
                case '3':
                    palavra += ['d', 'e', 'f'][lista.length - 1]
                    break;
                case '4':
                    palavra += ['g', 'h', 'i'][lista.length - 1]
                    break;
                case '5':
                    palavra += ['j', 'k', 'l'][lista.length - 1]
                    break;
                case '6':
                    palavra += ['m', 'n', 'o'][lista.length - 1]
                    break;
                case '7':
                    palavra += ['p', 'q', 'r', 's'][lista.length - 1]
                    break;
                case '8':
                    palavra += ['t', 'u', 'v'][lista.length - 1]
                    break;
                case '9':
                    palavra += ['w', 'x', 'y', 'z'][lista.length - 1]
                    break;
                default:
                    //invalido
                    break;
            }
        })

        return palavra;
    }
}

