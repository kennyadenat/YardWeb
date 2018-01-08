'use strict'

const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.table('posts', (table) => {
      // alter table
      table.string('switch')
    })
  }

  down () {
    this.table('posts', (table) => {
      // reverse alternations
    })
  }
}

module.exports = PostSchema
