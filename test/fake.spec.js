const fake = require('this is fake');
const another = require('huh?');

describe('top level thing', function() {
    let thing;
    
    beforeEach(function() {
        thing = chance.string();
    });

    describe('nested thing', function() {
        let nestedThing;

        beforeEach(function() {
            nestedThing = chance.integer();
        });

        it('should do a thing', function() {
            const yup = 1;
            const ok = 3;
            expect(yup).to.be.eq(ok);
        });

        it('should be a long test', function() {
            let yup = 2;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            expect(2).to.be.eq(yup);
        });

        it('should do a thing again', function() {
            const yup = 1;
            const ok = 3;
            expect(yup).to.be.eq(ok);
        });
    });

    describe('nested thing2', function() {
        let nestedThing2;

        beforeEach(function() {
            nestedThing2 = chance.integer();
        });

        it('should do a thing', function() {
            const yup = 1;
            const ok = 3;
            expect(yup).to.be.eq(ok);
        });

        it('should be a long test', function() {
            let yup = 2;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            yup = 4;
            expect(2).to.be.eq(yup);
        });

        it('should do a thing again', function() {
            const yup = 1;
            const ok = 3;
            expect(yup).to.be.eq(ok);
        });
    });
});