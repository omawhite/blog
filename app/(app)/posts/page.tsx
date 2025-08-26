import Link from 'next/link'
import React from 'react'
import { PostSnippet } from '@/components/PostSnippet/PostSnippet'
import type { Metadata } from 'next'

import { getPosts } from '@/lib/posts'

// TODO: Add this back in later
// export const revalidate = 3600 // Revalidate every hour

export const metadata: Metadata = {
  title: 'Blog Posts',
  description: 'Browse all blog posts and articles.',
}

export default async function PostsPage() {
  // biome-ignore lint/suspicious/noImplicitAnyLet: just let it go for now
  let posts
  try {
    posts = await getPosts()
  } catch (error) {
    console.error('Error fetching posts:', error)
    posts = { docs: [] }
  }
  console.log('Fetched posts:', posts)

  return (
    <div className="posts-page">
      <div className="content">
        <h1>Blog Posts</h1>
        {posts.docs.length === 0 ? (
          <p>No posts published yet.</p>
        ) : (
          <div className="posts-list space-y-6">
            {posts.docs.map((post) => (
              <PostSnippet
                key={post.id}
                title={post.title}
                description={post.description || undefined}
                publishedAt={post.publishedAt || undefined}
                href={`/posts/${post.slug}`}
                renderLink={({ href, children }) => <Link href={href}>{children}</Link>}
              />
            ))}
          </div>
        )}
        <div className="navigation">
          <Link href="/">← Back to Home</Link>
        </div>
      </div>
    </div>
  )
}