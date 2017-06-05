import sha256 from '../src/helpers/crypto';

describe('crypto helper', () => {
  it('should sha256 hash correctly', (done) => {
    const expectedHash = '2C26B46B68FFC68FF99B453C1D30413413422D706483BFA0F98A5E886266E7AE'.toLowerCase();

    sha256('foo').then((actualHash) => {
      expect(actualHash).toEqual(expectedHash);
      done();
    });
  });
});

describe('A suite', function () {
  it('contains spec with an expectation', function (done) {
    expect(true).toBe(true);
    done();
  });
});