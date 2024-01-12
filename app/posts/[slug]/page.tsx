import {format, parseISO} from 'date-fns'
import {allPosts} from 'contentlayer/generated'
import {Mdx} from '@/components/mdx-components'
import Link from 'next/link'

export const generateStaticParams = async () =>
  allPosts.map(post => ({slug: post._raw.flattenedPath}))

export const generateMetadata = ({params}) => {
  const post = allPosts.find(post => post._raw.flattenedPath === params.slug)
  return {title: post.title}
}

const PostLayout = ({params}: {params: {slug: string}}) => {
  const post = allPosts.find(post => post._raw.flattenedPath === params.slug)

  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <Link href="/">
          <h1>{post.title}</h1>
        </Link>
      </div>
      <Mdx code={post.body.code} />
    </article>
  )
}

export default PostLayout
