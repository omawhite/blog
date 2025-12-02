import fs from "node:fs";
import path from "node:path";

/**
 * Represents the metadata for a blog post.
 */
type PostMetadata = {
  title: string;
  publishedAt: string;
  lastUpdatedAt?: string;
  summary: string;
  image?: string;
};

/**
 * Parses YAML frontmatter from markdown content.
 * @param fileContent - The raw file content including frontmatter
 * @returns An object containing parsed metadata and content
 */
function parseFrontmatter(fileContent: string): { metadata: PostMetadata; content: string } {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<PostMetadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof PostMetadata] = value;
  });

  return { metadata: metadata as PostMetadata, content };
}

/**
 * Gets all MDX files in a directory.
 * @param dir - The directory path to search
 * @returns Array of MDX filenames
 */
function getMDXFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

/**
 * Reads and parses an MDX file.
 * @param filePath - The path to the MDX file
 * @returns An object containing parsed metadata and content
 */
function readMDXFile(filePath: string): { metadata: PostMetadata; content: string } {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

/**
 * Gets all MDX blog posts from a directory with their metadata and slugs.
 * @param dir - The directory path containing MDX files
 * @returns Array of blog post objects with metadata, slug, and content
 */
function getMDXData(dir: string): Array<{ metadata: PostMetadata; slug: string; content: string }> {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts(): Array<{ metadata: PostMetadata; slug: string; content: string }> {
  return getMDXData(path.join(process.cwd(), "app", "blog", "posts"));
}

/**
 * Formats a date string into a human-readable format.
 * @param date - The date string (YYYY-MM-DD or ISO format)
 * @param includeRelative - Whether to include relative time (default: false)
 * @returns Formatted date string, optionally with relative time
 */
export function formatDate(date: string, includeRelative = false): string {
  const currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
