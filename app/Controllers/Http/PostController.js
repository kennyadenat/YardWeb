'use strict'

//import model into the code
const Post = use('App/Models/Post')

//Bring in the Validator
const { validate } = use('Validator')


class PostController {

  async index({ view }){

    const postList = await Post.all()

      return view.render('post.index', {

        title:"Latest Post",
        posts:postList.toJSON()

      })
  }


  async delete(){
      return 'Delete Post';
  }

  async details ({ params, view}) {

    const postDetail = await Post.find(params.id)

    return view.render('post.detail', {

      post:postDetail
    })
  }

  async add ( { view } ){

    return view.render('post.add')
  }

  async store ( { request, response, session } )
  {

    const validation = await validate(request.all(), {
        title: 'required|min:3|max:25',
        body: 'required|min:3|max:253',

    })

    if (validation.fails()){
        session.withErrors(validation.messages()).flashAll()

        return response.redirect('back')
    }

        const post = new Post()

        post.title = request.input('title')
        post.body = request.input('body')

        await post.save();

        session.flash({ notification: 'Post Added!.'})

        return response.redirect('/post')
      }

      async edit( { params, view }){

        const postDetail = await Post.find(params.id)

        return view.render('post.edit', {

          post:postDetail

        })
      }

      async update({ params, request, response, session }) {

        const validation = await validate(request.all(), {
          title: 'required|min:3|max:25',
          body: 'required|min:3|max:253',

      })

      if (validation.fails()){
          session.withErrors(validation.messages()).flashAll()

          return response.redirect('back')
      }

      const post = await Post.find(params.id)

      post.title = request.input('title')
      post.body = request.input('body')

      await post.save();

      session.flash({ notification: 'Post Updated!' })

      return response.redirect('/post')
      }

      async destroy ({ params, session, response }) {

        const post = await Post.find(params.id)

        await post.delete()

        session.flash({ notification: 'Post Deleted' })

        return response.redirect('/post')

      }
}

module.exports = PostController
