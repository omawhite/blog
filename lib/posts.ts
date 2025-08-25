import { getPayload } from 'payload'
import config from '@/payload.config'

export async function getPost(slug: string) {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const posts = await payload.find({
    collection: 'posts',
    where: {
      and: [
        {
          slug: {
            equals: slug,
          },
        },
        {
          status: {
            equals: 'published',
          },
        },
      ],
    },
    limit: 1,
    depth: 2, // Populate related fields like featuredImage
  })

  return posts.docs[0] || null
}

export async function getPosts() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  return await payload.find({
    collection: 'posts',
    where: {
      status: {
        equals: 'published',
      },
    },
    sort: '-publishedAt',
  })
}

export async function getAllPostSlugs() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const posts = await payload.find({
    collection: 'posts',
    where: {
      status: {
        equals: 'published',
      },
    },
    select: {
      slug: true,
    },
  })

  return posts.docs.map((post) => post.slug)
}