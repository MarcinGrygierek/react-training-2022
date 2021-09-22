import renderer from 'react-test-renderer';
import { Alert } from '.';

describe('Alert', () => {
    test('error renders correctly', () => {
        const tree = renderer.create(<Alert type='error' text='Lorem ipsum' />).toJSON();
        expect(tree).toMatchSnapshot();
    })
    test('success renders correctly', () => {
        const tree = renderer.create(<Alert type='success' text='Lorem ipsum' />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})
