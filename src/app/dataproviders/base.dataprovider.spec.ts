import { BaseDataProvider } from './base.dataprovider';

describe('BaseEndpointDataProvider Test: ', function() {
    let dataProvider: BaseDataProvider;

    beforeEach(() => {
        dataProvider = new BaseDataProvider();
    });

    it('Define BaseDataProvider', function() {
        expect(dataProvider).toBeDefined();
    });

});
