/**
 * Created by root on 7/17/17.
 */
'use strict';

describe('test', function () {

    it('1234-1234', function() {
        var answer='4,A,0,B';
        var random = [1,2,3,4];
        var user = [1,2,3,4];
        var result = Compare(random,user);
        expect(result).toEqual(answer);
    });

    it('1234-1243', function() {
        var random = [1,2,3,4];
        var user = [1,2,4,3];
        var answer='4,A,2,B';
        var result = Compare(random,user);
        expect(result).toEqual(answer);
    });

    it('1234-5678', function() {
        var random = [1,2,3,4];
        var user = [5,6,7,8];
        var answer='0,A,0,B';
        var result = Compare(random,user);
        expect(result).toEqual(answer);
    });
    it("length",function () {
        var result = suijishu();
        expect(result.length).toEqual(4);
    });
    it("kind",function () {
       var number = suijishu();
       var kind = typeof number;
       expect(kind).toEqual("number");
    });


});