const assert = require('assert');

describe('Страница списка файлов и папок', () => {
    it('должна появится при переходе по ссылке', function() {
        return this.browser
            .url('/folderpage/testFolder')
            .isExisting('#filesList')
            .then((exists) => {
                assert.ok(exists, 'Страница списка файлов и папок не появилась');
            })
    })
});