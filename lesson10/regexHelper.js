const regexExamples = [
    {
        description: "Перевірка наявності тексту",
        regex: /.*./,
        examples: ["Hello, world!", "12345", "This is a test"],
    },
    {
        description: "Перевірка на наявність конкретного слова 'word'",
        regex: /\bword\b/,
        examples: ["This is a word", "word", "Words are powerful"],
    },
    {
        description: "Пошук поштової адреси",
        regex: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/,
        examples: ["user@example.com", "info@test.co.uk", "john.doe123@mail.domain"],
    },
    {
        description: "Пошук URL",
        regex: /https?:\/\/(?:[-\w.]|(?:%[\da-fA-F]{2}))+/,
        examples: ["http://example.com", "https://www.test.co.uk", "http://sub.domain.net/page.html"],
    },
    {
        description: "Пошук десяткового числа",
        regex: /\d+/,
        examples: ["123", "45", "789"],
    },
    {
        description: "Пошук літер або цифр",
        regex: /\w+/,
        examples: ["abc123", "hello123", "test_123"],
    },
    {
        description: "Пошук прописних літер",
        regex: /[A-Z]+/,
        examples: ["HELLO", "WORLD", "UPPERCASE"],
    },
    {
        description: "Пошук стрічки, що починається з певного слова",
        regex: /^word.*/,
        examples: ["wording", "wordplay", "wordsmith"],
    },
    {
        description: "Пошук стрічки, що закінчується певним словом",
        regex: /.*word$/,
        examples: ["backward", "forward", "keyword"],
    },
    {
        description: "Пошук числа з плаваючою крапкою",
        regex: /\d+\.\d+/,
        examples: ["3.14", "2.718", "123.456"],
    },
    {
        description: "Пошук дати в форматі MM/DD/YYYY",
        regex: /(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/(19|20)\d\d/,
        examples: ["01/31/2022", "12/25/2023", "09/15/2024"],
    },
    {
        description: "Пошук IP-адреси",
        regex: /\b(?:\d{1,3}\.){3}\d{1,3}\b/,
        examples: ["192.168.1.1", "10.0.0.1", "255.255.255.0"],
    },
    {
        description: "Пошук телефонного номеру в міжнародному форматі",
        regex: /^\+\d{1,3}\s\d{3}\s\d{3}\s\d{2}\s\d{2}$/,
        examples: ["+1 123 456 78 90", "+44 789 123 45 67", "+380 67 123 45 67"],
    },
    {
        description: "Пошук телефонного номеру в форматі США",
        regex: /\b\d{3}-\d{3}-\d{4}\b/,
        examples: ["123-456-7890", "456-789-0123", "789-012-3456"],
    },
    {
        description: "Пошук слова, яке складається лише з букв",
        regex: /\b[A-Za-z]+\b/,
        examples: ["hello", "world", "regex"],
    },
    {
        description: "Пошук слова, яке складається лише з цифр",
        regex: /\b\d+\b/,
        examples: ["123", "456", "7890"],
    },
    {
        description: "Пошук HTML-тегів",
        regex: /<([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>.*?<\/\1>/,
        examples: ["<p>This is a paragraph</p>", "<div class='container'><p>Hello, world!</p></div>", "<h1>Welcome</h1>"],
    },
    {
        description: "Пошук числа в десятковому, шістнадцятковому або вісімковому форматі",
        regex: /0x[0-9a-fA-F]+|\d+/,
        examples: ["10", "0xFF", "077"],
    },
    {
        description: "Пошук стрічки, що містить певні символи",
        regex: /[abc]/,
        examples: ["apple", "banana", "cherry"],
    },
    {
        description: "Пошук стрічки, що не містить певних символів",
        regex: /[^abc]/,
        examples: ["def", "123", "XYZ"],
    },
    {
        description: "Пошук пробілів",
        regex: /\s+/,
        examples: ["Hello world", "Tabs\tSpaces", "New\nline"],
    },
    {
        description: "Пошук не пустих рядків",
        regex: /\S+/,
        examples: ["Hello", "123", "Regex!"],
    },
    {
        description: "Пошук HTML-класу",
        regex: /class="([^"]*)"/,
        examples: ['<div class="container">Content</div>', '<p class="text">Lorem Ipsum</p>', '<a href="#" class="link">Click here</a>'],
    },
    {
        description: "Пошук HTML id",
        regex: /id="([^"]*)"/,
        examples: ['<div id="header">Header</div>', '<section id="main-content">Main Content</section>', '<footer id="footer">Footer</footer>'],
    },
    {
        description: "Пошук слова, яке починається з певної літери",
        regex: /\b[Aa].*/,
        examples: ["Apple", "aardvark", "Alphabet"],
    },
    {
        description: "Пошук слова, яке складається з певної кількості символів",
        regex: /\b\w{5}\b/,
        examples: ["hello", "world", "regex"],
    },
    {
        description: "Пошук збігів у верхньому і нижньому регістрах",
        regex: /word/i,
        examples: ["Word", "word", "wOrD"],
    },
    {
        description: "Пошук слова, яке містить певну кількість букв та цифр",
        regex: /\b\w{3,5}\d{2,4}\b/,
        examples: ["hello123", "regex4567", "abc12"],
    },
    {
        description: "Пошук слова, яке містить певну кількість літер та цифр",
        regex: /\b\w{3,5}\d{2,4}\b/,
        examples: ["hello123", "regex4567", "abc12"],
    },
    {
        description: "Пошук слова, яке містить певну кількість цифр та літер",
        regex: /\b\w{3,5}\d{2,4}\b/,
        examples: ["hello123", "regex4567", "abc12"],
    }
];

// Функція для форматування прикладів
function formatExamples(examples) {
    return examples.map(example => `Example: ${example}`).join("\n");
}

// Виведення опису, регулярного виразу та прикладів в файл
const fs = require("fs");
const fileName = "regex_examples.txt";
let fileContent = "";

regexExamples.forEach(item => {
    fileContent += `Description: ${item.description}\n`;
    fileContent += `Regex: ${item.regex}\n`;
    fileContent += "Examples:\n";
    fileContent += formatExamples(item.examples);
    fileContent += "\n---------------------------\n";
});

fs.writeFile(fileName, fileContent, err => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    console.log(`File ${fileName} has been saved successfully!`);
});
