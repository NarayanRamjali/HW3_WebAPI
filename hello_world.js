/**
 * Created by narayanthapa on 3/11/17.
 */
var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

    describe('hello_world', function() {

        describe('GET /hello', function() {

            it('should return a default string', function(done) {

                request(server)
                    .get('/hello')
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function(err, res) {
                        should.not.exist(err);

                        res.body.should.eql('Hello, world!');

                        done();
                    });
            });

            it('should accept a name parameter', function(done) {

                request(server)
                    .get('/hello')
                    .query({ name: 'Narayan'})
                    .set('Accept', 'application/json')
                    .expect('Content-Type', /json/)
                    .expect(200)
                    .end(function(err, res) {
                        should.not.exist(err);

                        res.body.should.eql('Hello, Narayan!');

                        done();
                    });
            });

        });

    });

});
