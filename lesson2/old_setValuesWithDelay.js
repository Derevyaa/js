//https://form.jotform.com/241013014291338
function setValuesAfterDelay(delay, values) {
    setTimeout(function() {
        values.forEach(function(item) {
            var xpathResult = document.evaluate(item.xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            if (xpathResult.snapshotLength > 0) {
                var element = xpathResult.snapshotItem(0);
                if (element.tagName.toLowerCase() === 'input') {
                    element.click(); // Optional, only if you need to simulate a click
                    element.value = item.value;
                } else if (element.tagName.toLowerCase() === 'select') {
                    element.value = item.value; 
                    // Optionally, dispatch a change event if needed to trigger any attached event listeners
                    var event = new Event('change', { bubbles: true });
                    element.dispatchEvent(event);
                }
            }
        });
    }, delay);
}

var elementsToSet = [
    { xpath: "//input[@id='first_9']", value: "Anton" },
    { xpath: "//input[@id='last_9']", value: "LastName" },
    { xpath: "//input[@id='input_10']", value: "10" },
    { xpath: "//input[@id='input_3']", value: "test" },
    { xpath: "//select[@id='input_4_day']", value: "15" },
    { xpath: "//select[@id='input_4_month']", value: "April" },
    { xpath: "//select[@id='input_4_year']", value: "2021" },
    { xpath: "//select[@id='input_5_day']", value: "1" },
    { xpath: "//select[@id='input_5_month']", value: "January" },
    { xpath: "//select[@id='input_5_year']", value: "2022" }
];

setValuesAfterDelay(2000, elementsToSet);

