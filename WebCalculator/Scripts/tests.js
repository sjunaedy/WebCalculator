module('Calculator Test Suite', { setup: function () { initialize();}})

test("Button Click Test", function () {
    var buttonQuantity = 10;
    expect(buttonQuantity * 2);

    for (var i = 0; i < buttonQuantity; i++)
    {
        var btn = document.getElementById('btn' + i);
        QUnit.triggerEvent(btn, "click");
        var result = txtInput.value[txtInput.value.length - 1];
        var expected = String(i);
        equal(result, expected, 'Exepected value: ' + expected + ' Actual value: ' + result);

        var expectedlength = i < 2 ? 1: i;
        equal(txtInput.value.length, expectedlength +
            ' Actual value: ' + txtInput.value.length);
    }
})