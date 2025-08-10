'use client';

export default function SocialShare({ title, slug, className = "" }) {
  const shareUrl = `https://renienamocot.com/blogs/${slug}`;
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    // You could add a toast notification here
  };

  return (
    <div className={className}>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors text-sm font-medium"
      >
        Share on Twitter
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors text-sm font-medium"
      >
        Share on LinkedIn
      </a>
      <button
        onClick={handleCopyLink}
        className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors text-sm font-medium"
      >
        Copy Link
      </button>
    </div>
  );
}