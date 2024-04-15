//https://form.jotform.com/241013014291338
/**
 * Sets values to HTML elements with a specified delay. The function iterates over an array of element configurations,
 * each containing an XPath to locate the element and a value to set. It supports input, textarea, and select elements.
 * For input and textarea, an 'input' event is dispatched to simulate user typing. For select, a 'change' event is dispatched
 * to simulate a selection change.
 *
 * @param {number} delay - The delay in milliseconds before setting the values.
 * @param {Object[]} elementsConfig - An array of objects, each containing the configuration for an element.
 * @param {string} elementsConfig[].xpath - The XPath to locate the element in the DOM.
 * @param {string|number} elementsConfig[].value - The value to set for the element.
 */
function setValuesWithDelay(delay, elementsConfig) {
    setTimeout(() => {
        elementsConfig.forEach(({ xpath, value }) => {
            const xpathResult = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            if (xpathResult.singleNodeValue) {
                const element = xpathResult.singleNodeValue;
                if (['input', 'textarea'].includes(element.tagName.toLowerCase())) {
                    element.value = value;
                    element.dispatchEvent(new Event('input', { bubbles: true }));
                } else if (element.tagName.toLowerCase() === 'select') {
                    element.value = value;
                    element.dispatchEvent(new Event('change', { bubbles: true }));
                }
            } else {
                console.warn(`Element not found for XPath: ${xpath}`);
            }
        });
    }, delay);
}

/**
 * Example configuration for setting values to HTML elements. Each object in the array specifies an element's XPath
 * and the value to set for that element. This configuration is used as an argument for `setValuesWithDelay` function.
 */
const elementsToSet = [
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

// Call the function with a 2000 millisecond delay and the example configuration.
setValuesWithDelay(2000, elementsToSet);