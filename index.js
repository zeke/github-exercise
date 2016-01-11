#!/usr/bin/env node

const git = require('gitty')

const sortBy = require('lodash.sortby')

const logger = module.exports = function logger(repoPath, callback) {
  var authors = {}

  git(repoPath).log(function (err, log) {
    if (err) return callback(err)

    log.forEach(function (commit) {
      var name = commit.author
      var author = authors[name] || {}
      author.name = name
      author.commitCount = author.commitCount ? author.commitCount + 1 : 1
      authors[name] = author
    })

    var result = sortBy(authors, 'commitCount')
      .reverse()
      .map(author => `${author.commitCount} ${author.name}`)
      .join('\n')

    return callback(null, result)
  })
}

if (!process.parent) {
  // logger(process.argv.slice(2)[0])
}
