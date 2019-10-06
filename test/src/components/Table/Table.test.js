import React from 'react';
import { shallow } from 'enzyme';
import Table from '../../../../src/components/Table/Table';

const setUp =(props={}) => {
    const component = shallow(<Table {...props} />)
    return component;
}

describe('Table component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('Компонент отображается без ошибок', () => {
        const wrapper = component.find(`[data-test="TableComponent"]`);
        expect(wrapper.length).toBe(1);
    });
});
