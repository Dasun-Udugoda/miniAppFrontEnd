import {PostTitle, PostContent, PostList} from './components/post'

export default function page(){
    return (
        
<div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Blog Posts</h2>
      <p className="mt-2 text-lg/8 text-gray-600">All your posts.</p>
    </div>
    <PostList/>
  </div>
</div>



)
}