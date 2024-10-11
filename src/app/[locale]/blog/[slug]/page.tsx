// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Spacing from '@/components/Spacing';
import { marked } from 'marked';
import './styles.scss';

const PostPage = async ({ params }: { params: { slug: string } }) => {
  const filePath = path.join(
    process.cwd(),
    'src/data/posts',
    `${params.slug}.md`
  );

  // Read the markdown file
  let fileContent: string;

  try {
    fileContent = fs.readFileSync(filePath, 'utf-8');
  } catch (err) {
    console.log(err);
    // If the file doesn't exist, trigger a 404 page
    notFound();
  }

  // Split the content into front matter and body
  const [frontMatter, ...bodyParts] = fileContent.split('---').filter(Boolean);
  const body = bodyParts.join('---').trim();

  // Extract title from front matter (basic implementation)
  const titleMatch = frontMatter.match(/title:\s*(.+)/);
  const title = titleMatch ? titleMatch[1].trim() : 'Untitled';

  return (
    <>
      <Header />
      <Spacing height="60px" />
      <div className="container my-5 blog-container">
        <div className="row justify-content-start">
          <div className="col-lg-8">
            <h1 className="title">{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: marked(body) }} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostPage;
