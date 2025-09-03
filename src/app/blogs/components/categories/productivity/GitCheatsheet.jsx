import Head from 'next/head';

export const blogPost = {
  id: 17,
  title: 'Essential Git Cheatsheet: Commands Every Developer Should Master',
  slug: 'essential-git-cheatsheet-commands-every-developer-should-master',
  excerpt: 'Master Git with this comprehensive cheatsheet covering essential commands, advanced techniques, and best practices for modern development workflows.',
  author: 'Renie Namocot',
  publishDate: '2025-09-03',
  lastModified: '2025-09-03',
  category: 'productivity',
  tags: ['Git', 'Version Control', 'Developer Tools', 'Productivity', 'Cheatsheet'],
  featured: true,
  readTime: '12 min read',
  image: '/blog_placeholder.jpg',
  featuredImageUrl: '/blog_placeholder.jpg'
};

export default function GitCheatsheet() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blogPost.title,
    "description": blogPost.excerpt,
    "image": blogPost.featuredImageUrl,
    "author": {
      "@type": "Person",
      "name": blogPost.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Renie Namocot - Full Stack Developer",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo.png"
      }
    },
    "datePublished": blogPost.publishDate,
    "dateModified": blogPost.lastModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://renienamocot.com/blogs/${blogPost.slug}`
    }
  };

  return (
    <>
      <Head>
        <title>{blogPost.title} | Renie Namocot</title>
        <meta name="description" content={blogPost.excerpt} />
        <meta name="keywords" content={blogPost.tags.join(', ')} />
        <meta property="og:title" content={blogPost.title} />
        <meta property="og:description" content={blogPost.excerpt} />
        <meta property="og:image" content={blogPost.featuredImageUrl} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content={blogPost.author} />
        <meta property="article:published_time" content={blogPost.publishDate} />
        <meta property="article:modified_time" content={blogPost.lastModified} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogPost.title} />
        <meta name="twitter:description" content={blogPost.excerpt} />
        <meta name="twitter:image" content={blogPost.featuredImageUrl} />
        <link rel="canonical" href={`https://renienamocot.com/blogs/${blogPost.slug}`} />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {blogPost.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600 mb-4">
            <span>By {blogPost.author}</span>
            <span>•</span>
            <time dateTime={blogPost.publishDate}>
              {new Date(blogPost.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span>•</span>
            <span>{blogPost.readTime}</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {blogPost.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <img 
            src={blogPost.featuredImageUrl} 
            alt={blogPost.title}
            className="w-full h-64 object-cover rounded-lg"
          />
        </header>

        <div className="prose prose-lg max-w-none">
          <h2>Git Fundamentals</h2>
          <p>Git is the backbone of modern software development. Whether you're working solo or with a team, mastering Git commands is essential for efficient version control and collaboration.</p>
          
          <h3>Getting Started</h3>
          <h4>Initial Configuration</h4>
          <pre><code>{`# Set your identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set default branch name
git config --global init.defaultBranch main

# Set default editor
git config --global core.editor "code --wait"

# View all configurations
git config --list`}</code></pre>
          
          <h4>Creating and Cloning Repositories</h4>
          <pre><code>{`# Initialize a new repository
git init

# Clone an existing repository
git clone <repository-url>

# Clone to specific folder
git clone <repository-url> <folder-name>`}</code></pre>
          
          <h3>Basic Git Workflow</h3>
          <h4>Checking Status and Adding Files</h4>
          <pre><code>{`# Check repository status
git status

# Add specific files
git add <file-name>
git add <file1> <file2>

# Add all files
git add .
git add -A

# Add all files in current directory
git add *

# Interactive adding
git add -i`}</code></pre>
          
          <h4>Committing Changes</h4>
          <pre><code>{`# Commit with message
git commit -m "Your commit message"

# Commit all tracked files (skip git add)
git commit -am "Your commit message"

# Amend the last commit
git commit --amend

# Amend without changing message
git commit --amend --no-edit`}</code></pre>
          
          <h3>Viewing History and Differences</h3>
          <h4>Log Commands</h4>
          <pre><code>{`# View commit history
git log

# Compact log view
git log --oneline

# Graph view
git log --graph --oneline --all

# Show commits by author
git log --author="Your Name"

# Show commits in date range
git log --since="2 weeks ago"
git log --until="2024-01-01"`}</code></pre>
          
          <h4>Viewing Differences</h4>
          <pre><code>{`# Show unstaged changes
git diff

# Show staged changes
git diff --staged
git diff --cached

# Compare two commits
git diff <commit1> <commit2>

# Compare branches
git diff branch1..branch2`}</code></pre>
          
          <h3>Branch Management</h3>
          <h4>Creating and Switching Branches</h4>
          <pre><code>{`# List branches
git branch
git branch -a  # Include remote branches

# Create new branch
git branch <branch-name>

# Switch to branch
git checkout <branch-name>

# Create and switch in one command
git checkout -b <branch-name>

# Create branch from specific commit
git checkout -b <branch-name> <commit-hash>`}</code></pre>
          
          <h4>Merging and Deleting Branches</h4>
          <pre><code>{`# Merge branch into current branch
git merge <branch-name>

# Delete branch (safe)
git branch -d <branch-name>

# Delete branch (force)
git branch -D <branch-name>

# Delete remote branch
git push origin --delete <branch-name>`}</code></pre>
          
          <h3>Remote Repository Operations</h3>
          <h4>Managing Remotes</h4>
          <pre><code>{`# View remotes
git remote
git remote -v

# Add remote
git remote add origin <repository-url>

# Remove remote
git remote remove <remote-name>

# Rename remote
git remote rename <old-name> <new-name>`}</code></pre>
          
          <h4>Pushing and Pulling</h4>
          <pre><code>{`# Push to remote
git push origin <branch-name>

# Push and set upstream
git push -u origin <branch-name>

# Pull from remote
git pull origin <branch-name>

# Fetch without merging
git fetch origin

# Pull with rebase
git pull --rebase origin <branch-name>`}</code></pre>
          
          <h3>Undoing Changes</h3>
          <h4>Unstaging and Resetting</h4>
          <pre><code>{`# Unstage file
git reset HEAD <file-name>

# Discard unstaged changes
git checkout -- <file-name>

# Reset to specific commit (keep changes)
git reset --soft <commit-hash>

# Reset to specific commit (discard changes)
git reset --hard <commit-hash>

# Reset last commit but keep changes
git reset --soft HEAD~1`}</code></pre>
          
          <h4>Reverting Commits</h4>
          <pre><code>{`# Revert a commit (creates new commit)
git revert <commit-hash>

# Revert without committing
git revert --no-commit <commit-hash>

# Revert merge commit
git revert -m 1 <merge-commit-hash>`}</code></pre>
          
          <h3>Advanced Git Commands</h3>
          <h4>Stashing Changes</h4>
          <pre><code>{`# Stash current changes
git stash

# Stash with message
git stash save "Work in progress"

# List stashes
git stash list

# Apply last stash
git stash apply

# Apply and remove stash
git stash pop

# Drop stash
git stash drop stash@{0}`}</code></pre>
          
          <h4>Cherry Picking</h4>
          <pre><code>{`# Apply specific commit to current branch
git cherry-pick <commit-hash>

# Cherry pick without committing
git cherry-pick --no-commit <commit-hash>

# Cherry pick range of commits
git cherry-pick <start-commit>..<end-commit>`}</code></pre>
          
          <h4>Interactive Rebase</h4>
          <pre><code>{`# Rebase last 3 commits
git rebase -i HEAD~3

# Rebase from specific commit
git rebase -i <commit-hash>

# During rebase:
# pick = use commit as-is
# edit = pause to make changes
# squash = combine with previous commit
# drop = remove commit`}</code></pre>
          
          <h3>Git Aliases for Productivity</h3>
          <p>Add these aliases to your <code>~/.gitconfig</code> for faster Git operations:</p>
          <pre><code>{`[alias]
    # Status and info
    st = status
    br = branch
    co = checkout
    ci = commit
    
    # Logging
    lg = log --oneline --graph --all --decorate
    last = log -1 HEAD
    unstage = reset HEAD --
    
    # Advanced
    visual = !gitk
    amend = commit --amend --no-edit
    undo = reset --soft HEAD~1
    
    # Shortcuts
    aa = add --all
    cm = commit -m
    acm = !git add -A && git commit -m
    
    # Branch operations
    brd = branch -d
    brD = branch -D
    merged = branch --merged
    
    # Remote operations
    pom = push origin main
    plo = pull origin
    fet = fetch --all --prune`}</code></pre>
          
          <h3>Git Hooks and Automation</h3>
          <h4>Common Hooks</h4>
          <pre><code>{`# Pre-commit hook example (.git/hooks/pre-commit)
#!/bin/sh
npm run lint
npm run test

# Pre-push hook example (.git/hooks/pre-push)
#!/bin/sh
npm run build`}</code></pre>
          
          <h3>Git Best Practices</h3>
          <h4>Commit Message Guidelines</h4>
          <ul>
            <li><strong>Use imperative mood:</strong> "Fix bug" not "Fixed bug"</li>
            <li><strong>Keep first line under 50 characters</strong></li>
            <li><strong>Use conventional commits:</strong> feat:, fix:, docs:, style:, refactor:, test:, chore:</li>
            <li><strong>Be descriptive but concise</strong></li>
          </ul>
          
          <h4>Branching Strategies</h4>
          <ul>
            <li><strong>Feature branches:</strong> Create separate branches for new features</li>
            <li><strong>Hotfix branches:</strong> Quick fixes for production issues</li>
            <li><strong>Release branches:</strong> Prepare releases without blocking development</li>
            <li><strong>Regular merging:</strong> Keep branches up to date with main</li>
          </ul>
          
          <h3>Troubleshooting Common Issues</h3>
          <h4>Merge Conflicts</h4>
          <pre><code>{`# When merge conflict occurs:
# 1. Open conflicted files
# 2. Look for conflict markers:
#    <<<<<<< HEAD
#    Your changes
#    =======
#    Their changes
#    >>>>>>> branch-name
# 3. Resolve conflicts manually
# 4. Add resolved files
git add <resolved-file>
# 5. Complete the merge
git commit`}</code></pre>
          
          <h4>Common Recovery Commands</h4>
          <pre><code>{`# Restore deleted file
git checkout HEAD -- <file-name>

# Recover deleted branch
git checkout -b <branch-name> <commit-where-branch-existed>

# Find lost commits
git reflog

# Restore from reflog
git checkout <commit-from-reflog>`}</code></pre>
          
          <h3>Git Performance Tips</h3>
          <ul>
            <li><strong>Use .gitignore:</strong> Exclude unnecessary files</li>
            <li><strong>Regular garbage collection:</strong> <code>git gc</code></li>
            <li><strong>Shallow clones for large repos:</strong> <code>git clone --depth 1</code></li>
            <li><strong>Use git LFS for large files</strong></li>
          </ul>
          
          <h3>Essential .gitignore Patterns</h3>
          <pre><code>{`# Dependencies
node_modules/
vendor/

# Build outputs
dist/
build/
*.min.js

# Environment files
.env
.env.local
.env.*.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Logs
*.log
logs/

# Temporary files
*.tmp
*.temp`}</code></pre>
          
          <h3>Conclusion</h3>
          <p>Mastering Git is crucial for any developer. This cheatsheet covers the essential commands and best practices you'll use daily. Keep it handy, practice regularly, and gradually incorporate more advanced features into your workflow. Remember, Git is a powerful tool that becomes more valuable as you understand its concepts and capabilities.</p>
          
          <p>Pro tip: Create your own personalized cheatsheet by adding the commands you use most frequently and customizing aliases that match your workflow.</p>
        </div>
      </article>
    </>
  );
}