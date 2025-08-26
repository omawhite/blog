import { getPayload } from 'payload'
import Link from 'next/link'
import type { Metadata } from 'next'

import config from '@/payload.config'

import { PostSnippet } from '@/components/PostSnippet/PostSnippet'
import { BioSection } from '@/components/BioSection'

async function getHomePageData() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  try {
    const homePage = await payload.findGlobal({
      slug: 'home-page',
    })
    return homePage
  } catch (error) {
    console.error('Error fetching home page data:', error)
    return null
  }
}

async function getRecentPosts() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  try {
    const posts = await payload.find({
      collection: 'posts',
      where: {
        status: {
          equals: 'published',
        },
      },
      sort: '-publishedAt',
      limit: 3,
    })
    return posts.docs
  } catch (error) {
    console.error('Error fetching recent posts:', error)
    return []
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const homePageData = await getHomePageData()

  if (!homePageData) {
    return {
      title: 'Home',
      description: 'Welcome to my blog',
    }
  }
  //break cache
  const metadata: Metadata = {
    title: homePageData.title || homePageData.pageTitle || 'Home',
    description: homePageData.description,
  }

  if (homePageData.keywords) {
    metadata.keywords = homePageData.keywords
  }

  if (homePageData.canonicalUrl) {
    metadata.alternates = {
      canonical: homePageData.canonicalUrl,
    }
  }

  if (homePageData.ogImage) {
    const ogImageUrl =
      typeof homePageData.ogImage === 'object' && homePageData.ogImage?.url
        ? homePageData.ogImage.url
        : typeof homePageData.ogImage === 'string'
          ? homePageData.ogImage
          : undefined

    if (ogImageUrl) {
      metadata.openGraph = {
        title: metadata.title as string,
        description: metadata.description || '',
        images: [
          {
            url: ogImageUrl,
          },
        ],
      }
      metadata.twitter = {
        card: 'summary_large_image',
        title: metadata.title as string,
        description: metadata.description || '',
        images: [ogImageUrl],
      }
    }
  }

  return metadata
}

export default async function HomePage() {
  const homePageData = await getHomePageData()
  const recentPosts = await getRecentPosts()

  console.log('Home page data:', homePageData)
  console.log('Recent posts:', recentPosts)

  return (
    <div className="home">
      <div className="content">
        <h1 style={{ textAlign: 'center' }}>{homePageData?.pageTitle || 'Home'}</h1>
        <BioSection bioData={homePageData?.bio} />

        {recentPosts.length > 0 && (
          <section className="recent-posts" style={{ marginTop: '3rem' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1.5rem',
              }}
            >
              <h2>Recent Posts</h2>
              <Link
                href="/posts"
                style={{ textDecoration: 'none', color: 'inherit', fontSize: '0.875rem' }}
              >
                View all posts →
              </Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {recentPosts.map((post) => (
                <PostSnippet
                  key={post.id}
                  title={post.title}
                  description={post.description || undefined}
                  publishedAt={post.publishedAt || undefined}
                  href={`/posts/${post.slug}`}
                  size="sm"
                  renderLink={({ href, children }) => <Link href={href}>{children}</Link>}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}