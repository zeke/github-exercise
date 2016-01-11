/* globals describe, it */

const expect = require('chai').expect
const logger = require('..')

const repoPath = '../../forks/jquery-pjax'

describe('logger', function() {

  it('is a function', function() {
    expect(logger).to.be.a('function')
  })

  describe('behavior', function(){
    var authors

    before(function(done){
      logger(repoPath, function(err, result) {
        expect(err).to.be.a('null')
        authors = result.split('\n')
        done()
      })
    })

    it('lists the top author first', function() {
      expect(authors[0]).to.include('josh@joshpeek.com')
      expect(authors[0]).to.include('212')
    })

    it('has a bunch of authors', function() {
      expect(authors.length).to.equal(75)
    })

  })


})
