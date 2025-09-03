import { NextResponse } from 'next/server';
import { Feed } from 'feed';
import { getPosts } from '@/lib/posts';


export async function GET() {
  try {
    // Get the domain from environment variable or fallback to localhost
    const domain = process.env.RAILWAY_PUBLIC_DOMAIN || 'http://localhost:3000';
    const baseUrl = domain.startsWith('http') ? domain : `https://${domain}`;
    
    // Fetch published posts
    const posts = await getPosts();
    
    // Create feed instance
    const feed = new Feed({
      title: 'My Blog',
      description: 'Latest blog posts and updates',
      id: baseUrl,
      link: baseUrl,
      language: 'en',
      favicon: `${baseUrl}/favicon.ico`,
      copyright: `All rights reserved ${new Date().getFullYear()}`,
      updated: new Date(),
      generator: 'Feed for Node.js',
      feedLinks: {
        rss: `${baseUrl}/rss`,
      },
      author: {
        name: 'Omar White',
      },
    });

    // Add posts to feed
    posts.docs.forEach((post) => {
      feed.addItem({
        title: post.title,
        id: post.id.toString(),
        link: `${baseUrl}/posts/${post.slug}`,
        description: post.description || '',
        content: post.content ? JSON.stringify(post.content) : '',
        author: [
          {
            name: 'Omar White',
          },
        ],
        date: new Date(post.publishedAt),
        image: post.featuredImage && typeof post.featuredImage === 'object' && 'url' in post.featuredImage ? {
          url: post.featuredImage.url || '',
          title: post.title,
        } : undefined,
      });
    });

    // Return RSS feed
    return new NextResponse(feed.rss2(), {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
      },
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);
    return NextResponse.json(
      { error: 'Failed to generate RSS feed' },
      { status: 500 }
    );
  }
} 
