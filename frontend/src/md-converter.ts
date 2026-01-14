import { marked } from 'marked';
import DOMPurify from 'dompurify';

const mdConverter = async (markdown: string) => {
  const html = await marked.parse(markdown);  // sync
  const sanitizedHTML = DOMPurify.sanitize(html);
  return sanitizedHTML;  // string, NOT a Promise
};

export default mdConverter