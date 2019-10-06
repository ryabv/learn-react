const assert = require('assert');

describe('Страница файла', () => {
    it('должна появится при переходе по ссылке', function() {
        return this.browser
            .url('/filepage/file.txt')
            .isExisting('.File')
            .then((exists) => {
                assert.ok(exists, 'Файл не появился');
            })
    })
});