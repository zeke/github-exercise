#!/usr/bin/env node

const git = require('gitty')

const logger = module.exports = function logger(repoPath, callback) {
  var authors = {}

  git(repoPath).log(function (err, log) {
    if (err) return callback(err)

    log.forEach(function (commit) {
      var name = commit.author
      var count = authors[name] || 0
      authors[name] = count + 1
    })

    var result = Object.keys(authors)
      .sort((author1,author2) => authors[author2] - authors[author1] )
      .map(name => `${authors[name]} ${name}`)
      .join('\n')

    return callback(null, result)
  })
}

if (!process.parent) {
  // logger(process.argv.slice(2)[0])
}
