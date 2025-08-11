
import Head from 'next/head'

export default function SEO(props) {
  const { post, siteInfo } = props
  
  return (
    <Head>
      <title>{post?.title || siteInfo?.title}</title>
      <meta name="description" content={post?.summary || siteInfo?.description} />
    </Head>
  )
}
