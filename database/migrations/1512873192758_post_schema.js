'use strict'

const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.table('posts', (table) => {
      // alter table
    })
  }

  down () {
    this.table('posts', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PostSchema
