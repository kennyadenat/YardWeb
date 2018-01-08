'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/guides/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/post', 'PostController.index')
Route.get('/post/add', 'PostController.add')
Route.get('/post/delete', 'PostController.delete')
Route.get('/post/edit/:id', 'PostController.edit')
Route.get('/post/:id', 'PostController.details')
Route.post('/post', 'PostController.store')
Route.put('/post/:id', 'PostController.update')
Route.delete('/post/:id', 'PostController.destroy')


Route.get('/text/:id', async({ params }) => {

    return params.id;
})
