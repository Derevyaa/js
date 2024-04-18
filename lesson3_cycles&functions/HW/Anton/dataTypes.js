/**
 * Код: 'number' + 3 + 3
Очікуваний результат: 'number33'
Опис: Спочатку рядок 'number' конкатенується з числом 3, яке перетворюється на рядок, утворюючи 'number3'. 
Потім, друге число 3 також перетворюється на рядок і конкатенується з 'number3', результатом є 'number33'.

Код: null + 3
Очікуваний результат: 3
Опис: null перетворюється у 0 під час арифметичної операції. Таким чином, null + 3 стає 0 + 3, результатом є 3.

Код: 5 && "qwerty"
Очікуваний результат: "qwerty"
Опис: В логічному виразі, якщо перший операнд (5) є істинним, результатом стає другий операнд ("qwerty").

Код: +'40' + +'2' + "hillel";
Очікуваний результат: '42hillel'
Опис: Унарний плюс перетворює рядки '40' та '2' в числа 40 і 2. Вони додаються, утворюючи 42, яке потім конкатенується з рядком "hillel", формуючи '42hillel'.

Код: '10' - 5 === 6
Очікуваний результат: false
Опис: Рядок '10' конвертується в число 10, і від нього віднімається 5, результатом є 5. Оскільки 5 не дорівнює 6, вираз повертає false.

Код: true + false
Очікуваний результат: 1
Опис: true конвертується в 1, і false в 0. Таким чином, true + false стає 1 + 0, результатом є 1.

Код: '4px' - 3
Очікуваний результат: NaN
Опис: Рядок '4px' не можна перетворити на число для віднімання, тому результатом є NaN.

Код: '4' - 3
Очікуваний результат: 1
Опис: Рядок '4' конвертується в число 4, і від нього віднімається 3, результатом є 1.

Код: '6' + 3 ** 0
Очікуваний результат: '61'
Опис: 3 ** 0 розраховується як 1. Рядок '6' конкатенується з числом 1, результатом є '61'.

Код: 12 / '6'
Очікуваний результат: 2
Опис: Рядок '6' конвертується в число 6, і 12 ділиться на 6, результатом є 2.

Код: '10' + (5 === 6)
Очікуваний результат: '10false'
Опис: Вираз 5 === 6 повертає false. Рядок '10' конкатенується з false, утворюючи '10false'.

Код: null == ''
Очікуваний результат: false
Опис: Згідно з правилами нестрогого порівняння JavaScript, null рівне тільки undefined і не дорівнює порожньому рядку.

Код: 3 ** (9 / 3)
Очікуваний результат: 27
Опис: Вираз 9 / 3 розраховується як 3, тоді 3 ** 3 стає 27.

Код: !!'false' == !!'true'
Очікуваний результат: true
Опис: Оператор !! конвертує будь-який непорожній рядок в true. Обидва рядки конвертуються в true, тому вираз повертає true.

Код: 0 || '0' && 1
Очікуваний результат: 1
Опис: 0 || ('0' && 1) спершу обчислюється '0' && 1, що дає 1, бо '0' істинне. Потім 0 || 1 повертає 1.

Код: (+null == false) < 1
Очікуваний результат: true
Опис: +null стає 0, яке є еквівалентним false. Таким чином, вираз стає true < 1, що повертає true.

Код: false && true || true
Очікуваний результат: true
Опис: false && true дає false, але false || true повертає true.

Код: false && (false || true)
Очікуваний результат: false
Опис: (false || true) повертає true, але false && true в кінцевому підсумку дає false.

Код: (+null == false) < 1 ** 5
Очікуваний результат: true
Опис: Як і в попередньому випадку, (+null == false) є true. 1 ** 5 стає 1. Таким чином, true < 1 повертає true.
 */

/**
 * Formats the result for console output based on its type.
 * This function ensures that numbers and booleans are converted to strings,
 * and strings are wrapped in single quotes for clarity in the console output.
 * @param {any} result - The result of an expression to be formatted.
 * @returns {string} The formatted string representation of the result.
 */
function formatResult(result) {
    if (typeof result === 'number' || typeof result === 'boolean' || result === null || Number.isNaN(result)) {
        return String(result);
    }
    return `'${result}'`;
}

/**
 * Outputs the results of various expressions to the console.
 * This function uses an array of objects where each object contains an expression in string form
 * and its evaluated result. It iterates through this array, and for each element,
 * it logs the expression and its formatted result to the console.
 */
function outputExpressionResults() {
    const expressions = [
        { expr: "'number' + 3 + 3", result: 'number' + 3 + 3 },
        { expr: "null + 3", result: null + 3 },
        { expr: "5 && 'qwerty'", result: 5 && "qwerty" },
        { expr: "+'40' + +'2' + 'hillel'", result: +'40' + +'2' + "hillel" },
        { expr: "'10' - 5 === 6", result: '10' - 5 === 6 },
        { expr: "true + false", result: true + false },
        { expr: "'4px' - 3", result: '4px' - 3 },
        { expr: "'4' - 3", result: '4' - 3 },
        { expr: "'6' + 3 ** 0", result: '6' + 3 ** 0 },
        { expr: "12 / '6'", result: 12 / '6' },
        { expr: "'10' + (5 === 6)", result: '10' + (5 === 6) },
        { expr: "null == ''", result: null == '' },
        { expr: "3 ** (9 / 3)", result: 3 ** (9 / 3) },
        { expr: "!!'false' == !!'true'", result: !!'false' == !!'true' },
        { expr: "0 || '0' && 1", result: 0 || '0' && 1 },
        { expr: "(+null == false) < 1", result: (+null == false) < 1 },
        { expr: "false && true || true", result: false && true || true },
        { expr: "false && (false || true)", result: false && (false || true) },
        { expr: "(+null == false) < 1 ** 5", result: (+null == false) < 1 ** 5 }
    ];

    expressions.forEach(({ expr, result }) => {
        console.log(`${expr} = ${formatResult(result)}`);
    });
}

// Call the function to output the results
outputExpressionResults();
