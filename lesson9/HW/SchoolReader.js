const fs = require('fs');

// Функція для зчитування даних з файлу
function readSchoolData(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, jsonString) => {
        if (err) {
            callback(err, null);
            return;
        }

        try {
            const data = JSON.parse(jsonString);
            callback(null, data);
        } catch (err) {
            callback(err, null);
        }
    });
}

module.exports = {
    readSchoolData
};
