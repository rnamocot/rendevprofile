import Head from 'next/head';

export const blogPost = {
  id: 20,
  title: 'Laravel Livewire vs Inertia.js: Building Modern Interactive Applications',
  slug: 'laravel-livewire-vs-inertia-modern-interactive-applications',
  excerpt: 'Master the art of building modern, interactive web applications with Laravel Livewire and Inertia.js. Complete comparison, implementation guides, and real-world examples to help you choose the right approach.',
  author: 'Renie Namocot',
  publishDate: '2025-09-04',
  lastModified: '2025-09-04',
  category: 'laravel',
  tags: ['Laravel', 'Livewire', 'Inertia.js', 'Vue.js', 'React', 'Interactive Applications', 'SPA'],
  featured: true,
  readTime: '22 min read',
  image: '/blog_placeholder.jpg',
  featuredImageUrl: '/blog_placeholder.jpg'
};

export default function LaravelLivewireInertia() {
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
          <h2>Introduction</h2>
          <p>Modern web development demands rich, interactive user experiences that rival desktop applications. Laravel developers have two powerful tools at their disposal: Laravel Livewire and Inertia.js. Both solutions bridge the gap between traditional server-side rendering and modern client-side interactivity, but they take fundamentally different approaches to achieve similar goals.</p>

          <p>This comprehensive guide explores both technologies in depth, providing practical implementations, performance comparisons, and decision-making frameworks to help you choose the right approach for your Laravel applications.</p>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg my-6">
            <h3 className="text-blue-900 font-semibold mb-3">🎯 What You'll Master:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Laravel Livewire</h4>
                <ul className="text-blue-700 text-sm">
                  <li>✅ Component-based architecture</li>
                  <li>✅ Real-time updates and reactivity</li>
                  <li>✅ Advanced state management</li>
                  <li>✅ File uploads and validation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">Inertia.js</h4>
                <ul className="text-purple-700 text-sm">
                  <li>✅ SPA-like experience</li>
                  <li>✅ Vue.js/React integration</li>
                  <li>✅ Shared data and props</li>
                  <li>✅ Client-side routing</li>
                </ul>
              </div>
            </div>
          </div>

          <h2>Laravel Livewire: Full-Stack Reactive Components</h2>

          <h3>Understanding Livewire Architecture</h3>
          <p>Laravel Livewire enables you to build interactive components using PHP instead of JavaScript. It provides a reactive programming model where your PHP component classes can respond to user interactions without page refreshes.</p>

          <h4>Core Livewire Concepts</h4>
          <pre><code>{`<?php

namespace App\\Livewire;

use Livewire\\Component;
use Livewire\\WithFileUploads;
use Livewire\\WithPagination;
use App\\Models\\Post;

class PostManager extends Component
{
    use WithFileUploads, WithPagination;
    
    // Public properties are automatically tracked
    public $title = '';
    public $content = '';
    public $featured_image;
    public $search = '';
    public $sortBy = 'created_at';
    public $sortDirection = 'desc';
    
    // Protected properties for internal state
    protected $posts;
    protected $selectedPosts = [];
    
    // Validation rules
    protected $rules = [
        'title' => 'required|min:3|max:255',
        'content' => 'required|min:10',
        'featured_image' => 'nullable|image|max:2048'
    ];
    
    // Real-time validation
    protected $validationAttributes = [
        'title' => 'post title',
        'content' => 'post content',
        'featured_image' => 'featured image'
    ];
    
    // Lifecycle hooks
    public function mount()
    {
        // Initialize component
        $this->posts = collect();
    }
    
    public function updated($propertyName)
    {
        // Real-time validation on property updates
        $this->validateOnly($propertyName);
        
        // Reset pagination when searching
        if ($propertyName === 'search') {
            $this->resetPage();
        }
    }
    
    // Public methods can be called from frontend
    public function createPost()
    {
        $this->validate();
        
        $imagePath = null;
        if ($this->featured_image) {
            $imagePath = $this->featured_image->store('posts', 'public');
        }
        
        Post::create([
            'title' => $this->title,
            'content' => $this->content,
            'featured_image' => $imagePath,
            'user_id' => auth()->id()
        ]);
        
        // Reset form
        $this->reset(['title', 'content', 'featured_image']);
        
        // Emit event for other components
        $this->dispatch('post-created');
        
        // Show success message
        session()->flash('message', 'Post created successfully!');
    }
    
    public function deletePost($postId)
    {
        $post = Post::findOrFail($postId);
        
        // Authorization check
        $this->authorize('delete', $post);
        
        $post->delete();
        
        $this->dispatch('post-deleted', $postId);
    }
    
    public function togglePostSelection($postId)
    {
        if (in_array($postId, $this->selectedPosts)) {
            $this->selectedPosts = array_diff($this->selectedPosts, [$postId]);
        } else {
            $this->selectedPosts[] = $postId;
        }
    }
    
    public function bulkDelete()
    {
        Post::whereIn('id', $this->selectedPosts)->delete();
        $this->selectedPosts = [];
        $this->dispatch('posts-bulk-deleted');
    }
    
    public function sortBy($field)
    {
        if ($this->sortBy === $field) {
            $this->sortDirection = $this->sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            $this->sortBy = $field;
            $this->sortDirection = 'asc';
        }
    }
    
    // Computed property for posts query
    public function getPostsProperty()
    {
        return Post::query()
            ->when($this->search, function ($query) {
                $query->where('title', 'like', '%' . $this->search . '%')
                      ->orWhere('content', 'like', '%' . $this->search . '%');
            })
            ->orderBy($this->sortBy, $this->sortDirection)
            ->paginate(10);
    }
    
    public function render()
    {
        return view('livewire.post-manager');
    }
}`}</code></pre>

          <h4>Livewire Blade Template</h4>
          <pre><code>{`{{-- resources/views/livewire/post-manager.blade.php --}}
<div class="post-manager">
    {{-- Success Message --}}
    @if (session()->has('message'))
        <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {'{{ session(\'message\') }}'}
        </div>
    @endif
    
    {{-- Create Post Form --}}
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 class="text-xl font-bold mb-4">Create New Post</h2>
        
        <form wire:submit.prevent="createPost">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                    Title
                </label>
                <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline @error('title') border-red-500 @enderror"
                    id="title" 
                    type="text" 
                    wire:model.blur="title"
                    placeholder="Enter post title..."
                >
                @error('title') 
                    <p class="text-red-500 text-xs italic">{'{{ $message }}'}</p> 
                @enderror
            </div>
            
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="content">
                    Content
                </label>
                <textarea 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline @error('content') border-red-500 @enderror"
                    id="content" 
                    wire:model.blur="content"
                    rows="4"
                    placeholder="Write your post content..."
                ></textarea>
                @error('content') 
                    <p class="text-red-500 text-xs italic">{'{{ $message }}'}</p> 
                @enderror
            </div>
            
            <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="featured_image">
                    Featured Image
                </label>
                <input 
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="featured_image" 
                    type="file" 
                    wire:model="featured_image"
                    accept="image/*"
                >
                @error('featured_image') 
                    <p class="text-red-500 text-xs italic">{'{{ $message }}'}</p> 
                @enderror
                
                {{-- Image preview --}}
                @if ($featured_image)
                    <div class="mt-2">
                        <img src="{'{{ $featured_image->temporaryUrl() }}'}" class="h-20 w-20 object-cover rounded">
                    </div>
                @endif
            </div>
            
            <div class="flex items-center justify-between">
                <button 
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    wire:loading.attr="disabled"
                >
                    <span wire:loading.remove>Create Post</span>
                    <span wire:loading>Creating...</span>
                </button>
            </div>
        </form>
    </div>
    
    {{-- Posts List --}}
    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl font-bold">Posts</h2>
            
            {{-- Search --}}
            <div class="flex items-center space-x-2">
                <input 
                    type="text" 
                    wire:model.live.debounce.300ms="search"
                    placeholder="Search posts..."
                    class="border rounded px-3 py-1"
                >
                
                {{-- Bulk Actions --}}
                @if (count($selectedPosts) > 0)
                    <button 
                        wire:click="bulkDelete"
                        wire:confirm="Are you sure you want to delete the selected posts?"
                        class="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                    >
                        Delete Selected ({'{{ count($selectedPosts) }}'}
                    </button>
                @endif
            </div>
        </div>
        
        {{-- Posts Table --}}
        <div class="overflow-x-auto">
            <table class="w-full table-auto">
                <thead>
                    <tr class="bg-gray-50">
                        <th class="px-4 py-2">
                            <input 
                                type="checkbox" 
                                wire:model.live="selectAll"
                                class="rounded"
                            >
                        </th>
                        <th class="px-4 py-2 text-left">
                            <button wire:click="sortBy('title')" class="flex items-center">
                                Title
                                @if ($sortBy === 'title')
                                    <span class="ml-1">
                                        {'{{ $sortDirection === \'asc\' ? \'↑\' : \'↓\' }}'}
                                    </span>
                                @endif
                            </button>
                        </th>
                        <th class="px-4 py-2 text-left">Content</th>
                        <th class="px-4 py-2 text-left">
                            <button wire:click="sortBy('created_at')" class="flex items-center">
                                Created
                                @if ($sortBy === 'created_at')
                                    <span class="ml-1">
                                        {'{{ $sortDirection === \'asc\' ? \'↑\' : \'↓\' }}'}
                                    </span>
                                @endif
                            </button>
                        </th>
                        <th class="px-4 py-2 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse ($posts as $post)
                        <tr class="border-t hover:bg-gray-50">
                            <td class="px-4 py-2">
                                <input 
                                    type="checkbox" 
                                    value="{'{{ $post->id }}'}"
                                    wire:model.live="selectedPosts"
                                    class="rounded"
                                >
                            </td>
                            <td class="px-4 py-2 font-medium">{'{{ $post->title }}'}</td>
                            <td class="px-4 py-2">
                                {'{{ Str::limit($post->content, 50) }}'}
                            </td>
                            <td class="px-4 py-2 text-sm text-gray-600">
                                {'{{ $post->created_at->diffForHumans() }}'}
                            </td>
                            <td class="px-4 py-2 text-center">
                                <button 
                                    wire:click="deletePost('{{ $post->id }}')"
                                    wire:confirm="Are you sure you want to delete this post?"
                                    class="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded text-xs"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="5" class="px-4 py-8 text-center text-gray-500">
                                No posts found.
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
        
        {{-- Pagination --}}
        <div class="mt-4">
            {'{{ $posts->links() }}'}
        </div>
    </div>
    
    {{-- Loading State --}}
    <div wire:loading.flex class="fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50">
        <div class="bg-white rounded-lg p-6">
            <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
            <p class="mt-2 text-gray-600">Loading...</p>
        </div>
    </div>
</div>`}</code></pre>

          <h3>Advanced Livewire Features</h3>

          <h4>Real-Time Communication</h4>
          <pre><code>{`<?php
// Real-time chat component
namespace App\\Livewire;

use Livewire\\Component;
use Livewire\\Attributes\\On;
use App\\Models\\Message;
use App\\Events\\MessageSent;

class ChatRoom extends Component 
{
    public $roomId;
    public $newMessage = '';
    public $messages;
    
    public function mount($roomId) 
    {
        $this->roomId = $roomId;
        $this->loadMessages();
    }
    
    public function sendMessage() 
    {
        $this->validate(['newMessage' => 'required|max:500']);
        
        $message = Message::create([
            'room_id' => $this->roomId,
            'user_id' => auth()->id(),
            'content' => $this->newMessage
        ]);
        
        // Broadcast to other users
        broadcast(new MessageSent($message))->toOthers();
        
        $this->newMessage = '';
        $this->loadMessages();
        
        // Scroll to bottom
        $this->dispatch('scroll-to-bottom');
    }
    
    #[On('echo:room.{'{'}roomId{'}'}, MessageSent')]
    public function messageReceived($data) 
    {
        $this->loadMessages();
        $this->dispatch('scroll-to-bottom');
    }
    
    #[On('user-typing')]
    public function handleUserTyping($userId) 
    {
        $this->dispatch('show-typing-indicator', userId: $userId);
    }
    
    public function updatedNewMessage() 
    {
        // Broadcast typing indicator
        $this->dispatch('typing-started')->to('chat-room');
    }
    
    private function loadMessages() 
    {
        $this->messages = Message::where('room_id', $this->roomId)
            ->with('user')
            ->latest()
            ->take(50)
            ->get()
            ->reverse();
    }
    
    public function render() 
    {
        return view('livewire.chat-room');
    }
}

// Event class
<?php
namespace App\\Events;

use Illuminate\\Broadcasting\\Channel;
use Illuminate\\Broadcasting\\InteractsWithSockets;
use Illuminate\\Broadcasting\\PresenceChannel;
use Illuminate\\Contracts\\Broadcasting\\ShouldBroadcast;
use Illuminate\\Foundation\\Events\\Dispatchable;
use Illuminate\\Queue\\SerializesModels;
use App\\Models\\Message;

class MessageSent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    
    public $message;
    
    public function __construct(Message $message)
    {
        $this->message = $message->load('user');
    }
    
    public function broadcastOn()
    {
        return new Channel('room.' . $this->message->room_id);
    }
}`}</code></pre>

          <h4>Complex State Management</h4>
          <pre><code>{`<?php
// Shopping cart component with complex state
namespace App\\Livewire;

use Livewire\\Component;
use Livewire\\Attributes\\Computed;
use App\\Models\\Product;
use App\\Services\\CartService;
use App\\Services\\CouponService;

class ShoppingCart extends Component 
{
    public $items = [];
    public $couponCode = '';
    public $appliedCoupon = null;
    public $shippingMethod = 'standard';
    public $showMiniCart = false;
    
    protected $cartService;
    protected $couponService;
    
    public function boot(CartService $cartService, CouponService $couponService) 
    {
        $this->cartService = $cartService;
        $this->couponService = $couponService;
    }
    
    public function mount() 
    {
        $this->loadCartItems();
    }
    
    public function addToCart($productId, $quantity = 1, $options = []) 
    {
        $product = Product::findOrFail($productId);
        
        $cartItem = [
            'id' => $productId,
            'name' => $product->name,
            'price' => $product->price,
            'quantity' => $quantity,
            'options' => $options,
            'image' => $product->image_url
        ];
        
        $existingKey = $this->findExistingItem($productId, $options);
        
        if ($existingKey !== null) {
            $this->items[$existingKey]['quantity'] += $quantity;
        } else {
            $this->items[] = $cartItem;
        }
        
        $this->cartService->save($this->items);
        $this->showMiniCart = true;
        $this->dispatch('item-added-to-cart', $cartItem);
        
        // Auto-hide mini cart
        $this->dispatch('hide-mini-cart')->delay(3000);
    }
    
    public function removeFromCart($index) 
    {
        $item = $this->items[$index] ?? null;
        
        if ($item) {
            unset($this->items[$index]);
            $this->items = array_values($this->items); // Re-index
            $this->cartService->save($this->items);
            $this->dispatch('item-removed-from-cart', $item);
        }
    }
    
    public function updateQuantity($index, $quantity) 
    {
        if ($quantity <= 0) {
            $this->removeFromCart($index);
            return;
        }
        
        if (isset($this->items[$index])) {
            $this->items[$index]['quantity'] = $quantity;
            $this->cartService->save($this->items);
            $this->dispatch('cart-updated');
        }
    }
    
    public function applyCoupon() 
    {
        $this->validate(['couponCode' => 'required']);
        
        try {
            $this->appliedCoupon = $this->couponService->apply(
                $this->couponCode, 
                $this->subtotal
            );
            
            session()->flash('coupon_message', 'Coupon applied successfully!');
        } catch (\\Exception $e) {
            $this->addError('couponCode', $e->getMessage());
        }
    }
    
    public function removeCoupon() 
    {
        $this->appliedCoupon = null;
        $this->couponCode = '';
        session()->flash('coupon_message', 'Coupon removed.');
    }
    
    public function clearCart() 
    {
        $this->items = [];
        $this->appliedCoupon = null;
        $this->cartService->clear();
        $this->dispatch('cart-cleared');
    }
    
    #[Computed]
    public function subtotal() 
    {
        return collect($this->items)->sum(function ($item) {
            return $item['price'] * $item['quantity'];
        });
    }
    
    #[Computed]
    public function discount() 
    {
        if (!$this->appliedCoupon) {
            return 0;
        }
        
        return $this->couponService->calculateDiscount(
            $this->appliedCoupon, 
            $this->subtotal
        );
    }
    
    #[Computed]
    public function shipping() 
    {
        return match ($this->shippingMethod) {
            'standard' => $this->subtotal > 100 ? 0 : 10,
            'express' => 20,
            'overnight' => 35,
            default => 0
        };
    }
    
    #[Computed]
    public function tax() 
    {
        $taxableAmount = $this->subtotal - $this->discount;
        return $taxableAmount * 0.08; // 8% tax rate
    }
    
    #[Computed]
    public function total() 
    {
        return $this->subtotal - $this->discount + $this->shipping + $this->tax;
    }
    
    #[Computed]
    public function itemCount() 
    {
        return collect($this->items)->sum('quantity');
    }
    
    private function findExistingItem($productId, $options = []) 
    {
        foreach ($this->items as $index => $item) {
            if ($item['id'] == $productId && $item['options'] == $options) {
                return $index;
            }
        }
        return null;
    }
    
    private function loadCartItems() 
    {
        $this->items = $this->cartService->getItems();
    }
    
    public function render() 
    {
        return view('livewire.shopping-cart');
    }
}`}</code></pre>

          <h2>Inertia.js: The Modern Monolith</h2>

          <h3>Understanding Inertia Architecture</h3>
          <p>Inertia.js allows you to build single-page applications using classic server-side routing and controllers, while leveraging the power of modern JavaScript frameworks like Vue.js or React for the frontend.</p>

          <h4>Inertia Setup and Configuration</h4>
          <pre><code>{`// Laravel Controller
<?php

namespace App\\Http\\Controllers;

use App\\Http\\Controllers\\Controller;
use App\\Models\\Post;
use Illuminate\\Http\\Request;
use Inertia\\Inertia;
use Inertia\\Response;

class PostController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('Posts/Index', [
            'posts' => Post::query()
                ->when($request->search, function ($query, $search) {
                    $query->where('title', 'like', "%{$search}%")
                          ->orWhere('content', 'like', "%{$search}%");
                })
                ->when($request->sort, function ($query, $sort) {
                    $query->orderBy($sort, $request->direction ?? 'asc');
                })
                ->with('user')
                ->paginate(12)
                ->withQueryString(),
            
            'filters' => $request->only(['search', 'sort', 'direction']),
            
            // Shared data across all pages
            'flash' => [
                'success' => session('success'),
                'error' => session('error')
            ]
        ]);
    }
    
    public function create(): Response
    {
        return Inertia::render('Posts/Create', [
            'categories' => Category::all(['id', 'name']),
            'tags' => Tag::all(['id', 'name'])
        ]);
    }
    
    public function store(Request $request): \\Illuminate\\Http\\RedirectResponse
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'content' => 'required',
            'category_id' => 'required|exists:categories,id',
            'tags' => 'array',
            'tags.*' => 'exists:tags,id',
            'featured_image' => 'nullable|image|max:2048'
        ]);
        
        $imagePath = null;
        if ($request->hasFile('featured_image')) {
            $imagePath = $request->file('featured_image')->store('posts', 'public');
        }
        
        $post = Post::create([
            ...$validated,
            'featured_image' => $imagePath,
            'user_id' => auth()->id()
        ]);
        
        if (!empty($validated['tags'])) {
            $post->tags()->sync($validated['tags']);
        }
        
        return redirect()
            ->route('posts.index')
            ->with('success', 'Post created successfully!');
    }
    
    public function show(Post $post): Response
    {
        return Inertia::render('Posts/Show', [
            'post' => $post->load(['user', 'tags', 'comments.user']),
            'relatedPosts' => Post::where('category_id', $post->category_id)
                ->where('id', '!=', $post->id)
                ->limit(3)
                ->get(['id', 'title', 'featured_image', 'created_at'])
        ]);
    }
    
    public function edit(Post $post): Response
    {
        $this->authorize('update', $post);
        
        return Inertia::render('Posts/Edit', [
            'post' => $post->load('tags'),
            'categories' => Category::all(['id', 'name']),
            'tags' => Tag::all(['id', 'name'])
        ]);
    }
    
    public function update(Request $request, Post $post): \\Illuminate\\Http\\RedirectResponse
    {
        $this->authorize('update', $post);
        
        $validated = $request->validate([
            'title' => 'required|max:255',
            'content' => 'required',
            'category_id' => 'required|exists:categories,id',
            'tags' => 'array',
            'tags.*' => 'exists:tags,id',
            'featured_image' => 'nullable|image|max:2048'
        ]);
        
        if ($request->hasFile('featured_image')) {
            // Delete old image
            if ($post->featured_image) {
                \\Storage::disk('public')->delete($post->featured_image);
            }
            $validated['featured_image'] = $request->file('featured_image')->store('posts', 'public');
        }
        
        $post->update($validated);
        
        if (array_key_exists('tags', $validated)) {
            $post->tags()->sync($validated['tags'] ?? []);
        }
        
        return redirect()
            ->route('posts.show', $post)
            ->with('success', 'Post updated successfully!');
    }
    
    public function destroy(Post $post): \\Illuminate\\Http\\RedirectResponse
    {
        $this->authorize('delete', $post);
        
        if ($post->featured_image) {
            \\Storage::disk('public')->delete($post->featured_image);
        }
        
        $post->delete();
        
        return redirect()
            ->route('posts.index')
            ->with('success', 'Post deleted successfully!');
    }
}`}</code></pre>

          <h4>Vue.js Frontend with Inertia</h4>
          <pre><code>{`<!-- Posts/Index.vue -->
<template>
  <AppLayout>
    <Head title="Posts" />
    
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="md:flex md:items-center md:justify-between mb-6">
        <div class="flex-1 min-w-0">
          <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Posts
          </h2>
        </div>
        <div class="mt-4 flex md:mt-0 md:ml-4">
          <Link
            :href="route('posts.create')"
            class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Create Post
          </Link>
        </div>
      </div>
      
      <!-- Search and Filters -->
      <div class="bg-white shadow rounded-lg mb-6">
        <div class="px-4 py-5 sm:p-6">
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
              <label for="search" class="block text-sm font-medium text-gray-700">
                Search
              </label>
              <input
                id="search"
                v-model="searchForm.search"
                type="text"
                placeholder="Search posts..."
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                @input="debounceSearch"
              />
            </div>
            
            <div>
              <label for="sort" class="block text-sm font-medium text-gray-700">
                Sort by
              </label>
              <select
                id="sort"
                v-model="searchForm.sort"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                @change="search"
              >
                <option value="created_at">Created Date</option>
                <option value="title">Title</option>
                <option value="updated_at">Updated Date</option>
              </select>
            </div>
            
            <div>
              <label for="direction" class="block text-sm font-medium text-gray-700">
                Direction
              </label>
              <select
                id="direction"
                v-model="searchForm.direction"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                @change="search"
              >
                <option value="desc">Descending</option>
                <option value="asc">Ascending</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Posts Grid -->
      <div class="bg-white shadow rounded-lg">
        <div class="px-4 py-5 sm:p-6">
          <div v-if="posts.data.length === 0" class="text-center py-12">
            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900">No posts</h3>
            <p class="mt-1 text-sm text-gray-500">Get started by creating a new post.</p>
          </div>
          
          <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="post in posts.data"
              :key="post.id"
              class="group relative bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div class="aspect-w-16 aspect-h-9">
                <img
                  :src="post.featured_image ? '/storage/' + post.featured_image : '/images/placeholder.jpg'"
                  :alt="post.title"
                  class="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              
              <div class="p-4">
                <h3 class="text-lg font-medium text-gray-900 group-hover:text-indigo-600">
                  <Link :href="route('posts.show', post.id)">
                    <span class="absolute inset-0"></span>
                    {'{{ post.title }}'}
                  </Link>
                </h3>
                
                <p class="mt-2 text-sm text-gray-500 line-clamp-3">
                  {'{{ post.excerpt || post.content.substring(0, 150) + \'...\' }}'}
                </p>
                
                <div class="mt-4 flex items-center justify-between">
                  <div class="flex items-center text-sm text-gray-500">
                    <span>{'{{ post.user.name }}'}</span>
                    <span class="mx-1">•</span>
                    <time :datetime="post.created_at">
                      {'{{ formatDate(post.created_at) }}'}
                    </time>
                  </div>
                  
                  <div class="flex items-center space-x-2">
                    <Link
                      v-if="canEdit(post)"
                      :href="route('posts.edit', post.id)"
                      class="text-indigo-600 hover:text-indigo-500 text-sm font-medium"
                    >
                      Edit
                    </Link>
                    
                    <button
                      v-if="canDelete(post)"
                      @click="deletePost(post)"
                      class="text-red-600 hover:text-red-500 text-sm font-medium"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Pagination -->
          <div v-if="posts.links.length > 3" class="mt-6">
            <nav class="flex items-center justify-between">
              <div class="flex-1 flex justify-between sm:hidden">
                <Link
                  v-if="posts.prev_page_url"
                  :href="posts.prev_page_url"
                  class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Previous
                </Link>
                <Link
                  v-if="posts.next_page_url"
                  :href="posts.next_page_url"
                  class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Next
                </Link>
              </div>
              
              <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p class="text-sm text-gray-700">
                    Showing
                    <span class="font-medium">{'{{ posts.from }}'}</span>
                    to
                    <span class="font-medium">{'{{ posts.to }}'}</span>
                    of
                    <span class="font-medium">{'{{ posts.total }}'}</span>
                    results
                  </p>
                </div>
                
                <div>
                  <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                    <template v-for="link in posts.links" :key="link.label">
                      <Link
                        v-if="link.url"
                        :href="link.url"
                        class="relative inline-flex items-center px-2 py-2 border text-sm font-medium"
                        :class="{
                          'bg-indigo-50 border-indigo-500 text-indigo-600': link.active,
                          'bg-white border-gray-300 text-gray-500 hover:bg-gray-50': !link.active
                        }"
                        v-html="link.label"
                      />
                      <span
                        v-else
                        class="relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-300"
                        v-html="link.label"
                      />
                    </template>
                  </nav>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { Head, Link, router } from '@inertiajs/vue3'
import AppLayout from '@/Layouts/AppLayout.vue'
import { debounce } from 'lodash'

const props = defineProps({
  posts: Object,
  filters: Object,
  auth: Object
})

const searchForm = reactive({
  search: props.filters.search || '',
  sort: props.filters.sort || 'created_at',
  direction: props.filters.direction || 'desc'
})

const search = () => {
  router.get(route('posts.index'), {
    search: searchForm.search,
    sort: searchForm.sort,
    direction: searchForm.direction
  }, {
    preserveState: true,
    replace: true
  })
}

const debounceSearch = debounce(search, 300)

const canEdit = (post) => {
  return props.auth.user && (props.auth.user.id === post.user_id || props.auth.user.role === 'admin')
}

const canDelete = (post) => {
  return props.auth.user && (props.auth.user.id === post.user_id || props.auth.user.role === 'admin')
}

const deletePost = (post) => {
  if (confirm('Are you sure you want to delete this post?')) {
    router.delete(route('posts.destroy', post.id))
  }
}

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>`}</code></pre>

          <h3>Advanced Inertia Features</h3>

          <h4>Form Handling and Validation</h4>
          <pre><code>{`<!-- Posts/Create.vue -->
<template>
  <AppLayout>
    <Head title="Create Post" />
    
    <div class="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
      <div class="md:flex md:items-center md:justify-between mb-6">
        <div class="flex-1 min-w-0">
          <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Create New Post
          </h2>
        </div>
        <div class="mt-4 flex md:mt-0 md:ml-4">
          <Link
            :href="route('posts.index')"
            class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </Link>
        </div>
      </div>
      
      <div class="bg-white shadow rounded-lg">
        <form @submit.prevent="submit" class="px-4 py-5 sm:p-6">
          <div class="grid grid-cols-1 gap-6">
            <!-- Title -->
            <div>
              <label for="title" class="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                id="title"
                v-model="form.title"
                type="text"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                :class="{ 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500': form.errors.title }"
                placeholder="Enter post title..."
              />
              <p v-if="form.errors.title" class="mt-2 text-sm text-red-600">
                {'{{ form.errors.title }}'}
              </p>
            </div>
            
            <!-- Category -->
            <div>
              <label for="category_id" class="block text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                id="category_id"
                v-model="form.category_id"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                :class="{ 'border-red-300': form.errors.category_id }"
              >
                <option value="">Select a category</option>
                <option v-for="category in categories" :key="category.id" :value="category.id">
                  {'{{ category.name }}'}
                </option>
              </select>
              <p v-if="form.errors.category_id" class="mt-2 text-sm text-red-600">
                {'{{ form.errors.category_id }}'}
              </p>
            </div>
            
            <!-- Tags -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">
                Tags
              </label>
              <div class="space-y-2">
                <div
                  v-for="tag in tags"
                  :key="tag.id"
                  class="flex items-center"
                >
                  <input
                    :id="\`tag-\${tag.id}\`"
                    v-model="form.tags"
                    :value="tag.id"
                    type="checkbox"
                    class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <label :for="\`tag-\${tag.id}\`" class="ml-2 text-sm text-gray-700">
                    {'{{ tag.name }}'}
                  </label>
                </div>
              </div>
              <p v-if="form.errors.tags" class="mt-2 text-sm text-red-600">
                {'{{ form.errors.tags }}'}
              </p>
            </div>
            
            <!-- Content -->
            <div>
              <label for="content" class="block text-sm font-medium text-gray-700">
                Content
              </label>
              <textarea
                id="content"
                v-model="form.content"
                rows="12"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                :class="{ 'border-red-300': form.errors.content }"
                placeholder="Write your post content..."
              />
              <p v-if="form.errors.content" class="mt-2 text-sm text-red-600">
                {'{{ form.errors.content }}'}
              </p>
            </div>
            
            <!-- Featured Image -->
            <div>
              <label for="featured_image" class="block text-sm font-medium text-gray-700">
                Featured Image
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <div v-if="imagePreview">
                    <img :src="imagePreview" alt="Preview" class="mx-auto h-32 w-32 object-cover rounded-lg" />
                    <button
                      @click="removeImage"
                      type="button"
                      class="mt-2 text-sm text-red-600 hover:text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                  <div v-else>
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="flex text-sm text-gray-600">
                      <label for="featured_image" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none">
                        <span>Upload a file</span>
                        <input
                          id="featured_image"
                          ref="fileInput"
                          type="file"
                          class="sr-only"
                          accept="image/*"
                          @change="handleFileUpload"
                        />
                      </label>
                      <p class="pl-1">or drag and drop</p>
                    </div>
                    <p class="text-xs text-gray-500">PNG, JPG, GIF up to 2MB</p>
                  </div>
                </div>
              </div>
              <p v-if="form.errors.featured_image" class="mt-2 text-sm text-red-600">
                {'{{ form.errors.featured_image }}'}
              </p>
            </div>
          </div>
          
          <div class="pt-5">
            <div class="flex justify-end space-x-3">
              <Link
                :href="route('posts.index')"
                class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </Link>
              <button
                type="submit"
                :disabled="form.processing"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                <svg v-if="form.processing" class="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {'{{ form.processing ? \'Creating...\' : \'Create Post\' }}'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </AppLayout>
</template>

<script setup>
import { ref } from 'vue'
import { Head, Link, useForm } from '@inertiajs/vue3'
import AppLayout from '@/Layouts/AppLayout.vue'

const props = defineProps({
  categories: Array,
  tags: Array
})

const fileInput = ref(null)
const imagePreview = ref(null)

const form = useForm({
  title: '',
  content: '',
  category_id: '',
  tags: [],
  featured_image: null
})

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    form.featured_image = file
    
    const reader = new FileReader()
    reader.onload = (e) => {
      imagePreview.value = e.target.result
    }
    reader.readAsDataURL(file)
  }
}

const removeImage = () => {
  form.featured_image = null
  imagePreview.value = null
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

const submit = () => {
  form.post(route('posts.store'), {
    onSuccess: () => {
      form.reset()
      imagePreview.value = null
    }
  })
}
</script>`}</code></pre>

          <h2>Performance Comparison: Livewire vs Inertia</h2>

          <div className="bg-gray-50 p-6 rounded-lg my-6">
            <h3 className="text-gray-900 font-semibold mb-4">📊 Performance Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-blue-800 mb-3">Laravel Livewire</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>Initial Load:</strong> ~200ms (server-rendered)</li>
                  <li><strong>Interactions:</strong> ~150-300ms per request</li>
                  <li><strong>Memory Usage:</strong> Higher on server</li>
                  <li><strong>Bundle Size:</strong> ~50KB (Alpine.js)</li>
                  <li><strong>Network:</strong> More requests, smaller payloads</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold text-purple-800 mb-3">Inertia.js</h4>
                <ul className="space-y-2 text-sm">
                  <li><strong>Initial Load:</strong> ~300-500ms (with hydration)</li>
                  <li><strong>Interactions:</strong> ~50-150ms (client-side)</li>
                  <li><strong>Memory Usage:</strong> Higher on client</li>
                  <li><strong>Bundle Size:</strong> ~200-500KB (React/Vue)</li>
                  <li><strong>Network:</strong> Fewer requests, larger payloads</li>
                </ul>
              </div>
            </div>
          </div>

          <h3>When to Choose Each Approach</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-blue-900 font-semibold mb-3">Choose Livewire When:</h4>
              <ul className="text-blue-800 space-y-2">
                <li>✅ Team has strong PHP skills</li>
                <li>✅ Rapid prototyping is priority</li>
                <li>✅ Simple to moderate interactivity</li>
                <li>✅ Server resources are abundant</li>
                <li>✅ Real-time features are crucial</li>
                <li>✅ Form-heavy applications</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h4 className="text-purple-900 font-semibold mb-3">Choose Inertia When:</h4>
              <ul className="text-purple-800 space-y-2">
                <li>✅ Complex user interactions</li>
                <li>✅ Mobile responsiveness is critical</li>
                <li>✅ Offline functionality needed</li>
                <li>✅ Rich data visualizations</li>
                <li>✅ Large-scale applications</li>
                <li>✅ Frontend team has JS expertise</li>
              </ul>
            </div>
          </div>

          <h2>Hybrid Approach: Using Both Together</h2>

          <h3>Strategic Integration</h3>
          <p>You don't have to choose just one! Many applications benefit from using both Livewire and Inertia strategically for different parts of the application.</p>

          <pre><code>{`<?php
// routes/web.php - Strategic routing

// Admin panel with Livewire for rapid development
Route::middleware(['auth', 'admin'])->prefix('admin')->group(function () {
    Route::get('/dashboard', AdminDashboard::class)->name('admin.dashboard');
    Route::get('/users', UserManagement::class)->name('admin.users');
    Route::get('/settings', SystemSettings::class)->name('admin.settings');
});

// Public-facing pages with Inertia for rich UX
Route::middleware('web')->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::get('/products', [ProductController::class, 'index'])->name('products.index');
    Route::get('/products/{product}', [ProductController::class, 'show'])->name('products.show');
    
    // Shopping cart with Inertia for smooth interactions
    Route::middleware('auth')->group(function () {
        Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
        Route::get('/checkout', [CheckoutController::class, 'index'])->name('checkout.index');
    });
    
    // Blog with Livewire for content management
    Route::prefix('blog')->group(function () {
        Route::get('/', BlogIndex::class)->name('blog.index');
        Route::get('/{slug}', BlogShow::class)->name('blog.show');
    });
});

// API routes for mobile app
Route::prefix('api')->middleware('api')->group(function () {
    Route::apiResource('posts', PostApiController::class);
    Route::apiResource('users', UserApiController::class);
});`}</code></pre>

          <h3>Shared Components and Services</h3>
          <pre><code>{`<?php
// app/Services/NotificationService.php
// Shared service used by both Livewire and Inertia

class NotificationService 
{
    public function notify(User $user, string $type, string $message, array $data = []): void 
    {
        // Store notification in database
        $notification = $user->notifications()->create([
            'type' => $type,
            'message' => $message,
            'data' => $data,
            'read_at' => null
        ]);
        
        // Real-time notification via broadcasting
        broadcast(new NotificationSent($notification))->toOthers();
        
        // Push notification if enabled
        if ($user->push_notifications_enabled) {
            $this->sendPushNotification($user, $message);
        }
        
        // Email notification for critical alerts
        if ($type === 'critical') {
            $this->sendEmailNotification($user, $message);
        }
    }
    
    public function markAsRead(User $user, $notificationId): void 
    {
        $user->notifications()
            ->where('id', $notificationId)
            ->whereNull('read_at')
            ->update(['read_at' => now()]);
    }
    
    public function getUnreadCount(User $user): int 
    {
        return $user->notifications()
            ->whereNull('read_at')
            ->count();
    }
    
    private function sendPushNotification(User $user, string $message): void 
    {
        // Implementation for push notifications
    }
    
    private function sendEmailNotification(User $user, string $message): void 
    {
        // Implementation for email notifications
    }
}

// Usage in Livewire component
class AdminNotifications extends Component 
{
    public $notifications;
    public $unreadCount;
    
    protected $notificationService;
    
    public function boot(NotificationService $notificationService) 
    {
        $this->notificationService = $notificationService;
    }
    
    public function mount() 
    {
        $this->loadNotifications();
    }
    
    public function markAsRead($notificationId) 
    {
        $this->notificationService->markAsRead(auth()->user(), $notificationId);
        $this->loadNotifications();
    }
    
    private function loadNotifications() 
    {
        $user = auth()->user();
        $this->notifications = $user->notifications()->latest()->limit(10)->get();
        $this->unreadCount = $this->notificationService->getUnreadCount($user);
    }
}

// Usage in Inertia controller
class NotificationController extends Controller 
{
    public function index(NotificationService $notificationService): Response 
    {
        $user = auth()->user();
        
        return Inertia::render('Notifications/Index', [
            'notifications' => $user->notifications()
                ->latest()
                ->paginate(20),
            'unreadCount' => $notificationService->getUnreadCount($user)
        ]);
    }
    
    public function markAsRead(Request $request, NotificationService $notificationService): \\Illuminate\\Http\\RedirectResponse 
    {
        $notificationService->markAsRead(auth()->user(), $request->notification_id);
        
        return redirect()->back()->with('success', 'Notification marked as read');
    }
}`}</code></pre>

          <h2>Testing Strategies</h2>

          <h3>Testing Livewire Components</h3>
          <pre><code>{`<?php
// tests/Feature/PostManagerTest.php

use App\\Livewire\\PostManager;
use App\\Models\\Post;
use App\\Models\\User;
use Illuminate\\Http\\UploadedFile;
use Illuminate\\Support\\Facades\\Storage;
use Livewire\\Livewire;
use Tests\\TestCase;

class PostManagerTest extends TestCase
{
    public function test_can_create_post()
    {
        Storage::fake('public');
        
        $user = User::factory()->create();
        $this->actingAs($user);
        
        $image = UploadedFile::fake()->image('test.jpg', 800, 600);
        
        Livewire::test(PostManager::class)
            ->set('title', 'Test Post')
            ->set('content', 'This is test content for the post.')
            ->set('featured_image', $image)
            ->call('createPost')
            ->assertHasNoErrors()
            ->assertSet('title', '')
            ->assertSet('content', '')
            ->assertDispatched('post-created');
        
        $this->assertDatabaseHas('posts', [
            'title' => 'Test Post',
            'content' => 'This is test content for the post.',
            'user_id' => $user->id
        ]);
        
        Storage::disk('public')->assertExists('posts/' . $image->hashName());
    }
    
    public function test_validates_required_fields()
    {
        $user = User::factory()->create();
        $this->actingAs($user);
        
        Livewire::test(PostManager::class)
            ->set('title', '')
            ->set('content', '')
            ->call('createPost')
            ->assertHasErrors(['title', 'content']);
    }
    
    public function test_can_search_posts()
    {
        $user = User::factory()->create();
        $this->actingAs($user);
        
        $posts = Post::factory()->count(3)->create([
            'user_id' => $user->id
        ]);
        
        $searchPost = $posts->first();
        
        Livewire::test(PostManager::class)
            ->set('search', $searchPost->title)
            ->assertSee($searchPost->title)
            ->assertDontSee($posts->last()->title);
    }
    
    public function test_can_delete_post()
    {
        $user = User::factory()->create();
        $this->actingAs($user);
        
        $post = Post::factory()->create(['user_id' => $user->id]);
        
        Livewire::test(PostManager::class)
            ->call('deletePost', $post->id)
            ->assertDispatched('post-deleted', $post->id);
        
        $this->assertDatabaseMissing('posts', ['id' => $post->id]);
    }
    
    public function test_real_time_validation()
    {
        $user = User::factory()->create();
        $this->actingAs($user);
        
        Livewire::test(PostManager::class)
            ->set('title', 'ab') // Too short
            ->assertHasErrors('title')
            ->set('title', 'Valid Title')
            ->assertHasNoErrors('title');
    }
}`}</code></pre>

          <h3>Testing Inertia Pages</h3>
          <pre><code>{`<?php
// tests/Feature/PostControllerTest.php

use App\\Models\\Post;
use App\\Models\\User;
use App\\Models\\Category;
use Illuminate\\Http\\UploadedFile;
use Illuminate\\Support\\Facades\\Storage;
use Inertia\\Testing\\AssertableInertia as Assert;
use Tests\\TestCase;

class PostControllerTest extends TestCase
{
    public function test_index_displays_posts()
    {
        $user = User::factory()->create();
        $posts = Post::factory()->count(3)->create(['user_id' => $user->id]);
        
        $response = $this->actingAs($user)
            ->get(route('posts.index'));
        
        $response->assertStatus(200)
            ->assertInertia(fn (Assert $page) => 
                $page->component('Posts/Index')
                    ->has('posts.data', 3)
                    ->has('posts.data.0', fn (Assert $post) =>
                        $post->where('id', $posts->first()->id)
                            ->where('title', $posts->first()->title)
                            ->etc()
                    )
            );
    }
    
    public function test_can_search_posts()
    {
        $user = User::factory()->create();
        $searchablePost = Post::factory()->create([
            'title' => 'Searchable Post',
            'user_id' => $user->id
        ]);
        $otherPost = Post::factory()->create([
            'title' => 'Other Post',
            'user_id' => $user->id
        ]);
        
        $response = $this->actingAs($user)
            ->get(route('posts.index', ['search' => 'Searchable']));
        
        $response->assertInertia(fn (Assert $page) =>
            $page->component('Posts/Index')
                ->has('posts.data', 1)
                ->where('posts.data.0.title', 'Searchable Post')
        );
    }
    
    public function test_can_create_post()
    {
        Storage::fake('public');
        
        $user = User::factory()->create();
        $category = Category::factory()->create();
        $image = UploadedFile::fake()->image('test.jpg');
        
        $postData = [
            'title' => 'Test Post',
            'content' => 'This is test content.',
            'category_id' => $category->id,
            'featured_image' => $image
        ];
        
        $response = $this->actingAs($user)
            ->post(route('posts.store'), $postData);
        
        $response->assertRedirect(route('posts.index'))
            ->assertSessionHas('success', 'Post created successfully!');
        
        $this->assertDatabaseHas('posts', [
            'title' => 'Test Post',
            'content' => 'This is test content.',
            'category_id' => $category->id,
            'user_id' => $user->id
        ]);
        
        Storage::disk('public')->assertExists('posts/' . $image->hashName());
    }
    
    public function test_validation_errors_returned_to_form()
    {
        $user = User::factory()->create();
        
        $response = $this->actingAs($user)
            ->post(route('posts.store'), [
                'title' => '',
                'content' => '',
                'category_id' => ''
            ]);
        
        $response->assertStatus(302)
            ->assertSessionHasErrors(['title', 'content', 'category_id']);
    }
    
    public function test_unauthorized_user_cannot_edit_post()
    {
        $owner = User::factory()->create();
        $otherUser = User::factory()->create();
        $post = Post::factory()->create(['user_id' => $owner->id]);
        
        $response = $this->actingAs($otherUser)
            ->get(route('posts.edit', $post));
        
        $response->assertStatus(403);
    }
}

// tests/Browser/PostCreationTest.php (Dusk test)
use Laravel\\Dusk\\Browser;
use Tests\\DuskTestCase;

class PostCreationTest extends DuskTestCase
{
    public function test_user_can_create_post_with_image()
    {
        $user = User::factory()->create();
        
        $this->browse(function (Browser $browser) use ($user) {
            $browser->loginAs($user)
                ->visit('/posts/create')
                ->waitFor('@post-form')
                ->type('title', 'My New Post')
                ->select('category_id', 1)
                ->type('content', 'This is the content of my new post.')
                ->attach('featured_image', storage_path('app/testing/test-image.jpg'))
                ->click('@submit-button')
                ->waitForRoute('posts.index')
                ->assertSee('Post created successfully!')
                ->assertSee('My New Post');
        });
        
        $this->assertDatabaseHas('posts', [
            'title' => 'My New Post',
            'user_id' => $user->id
        ]);
    }
}`}</code></pre>

          <h2>Production Deployment and Optimization</h2>

          <h3>Optimization Strategies</h3>
          <pre><code>{`// config/livewire.php - Production optimizations
<?php

return [
    'class_namespace' => 'App\\Livewire',
    'view_path' => resource_path('views/livewire'),
    
    // Asset optimization
    'asset_url' => null,
    'app_url' => env('APP_URL'),
    
    // Performance settings
    'lazy_loading_placeholder' => null,
    'temporary_file_upload' => [
        'disk' => null,
        'rules' => null,
        'directory' => null,
    ],
    
    // Production caching
    'manifest_path' => null,
    'back_button_cache' => false,
    
    // Security settings
    'inject_assets' => true,
    'navigate' => [
        'show_progress_bar' => true,
        'progress_bar_color' => '#2299dd',
    ],
];

// config/inertia.php - Production optimizations
<?php

return [
    'testing' => [
        'ensure_pages_exist' => true,
        'page_paths' => [
            resource_path('js/Pages'),
        ],
    ],
    
    // SSR configuration for production
    'ssr' => [
        'enabled' => env('INERTIA_SSR_ENABLED', false),
        'url' => env('INERTIA_SSR_URL', 'http://127.0.0.1:13714'),
    ],
];

// webpack.mix.js - Asset optimization
const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
   .vue({ version: 3 })
   .postCss('resources/css/app.css', 'public/css', [
       require('postcss-import'),
       require('tailwindcss'),
       require('autoprefixer'),
   ])
   .options({
       processCssUrls: false
   });

if (mix.inProduction()) {
    mix.version();
    
    // Code splitting for better caching
    mix.extract(['vue', '@inertiajs/vue3', 'axios'])
       .options({
           terser: {
               terserOptions: {
                   compress: {
                       drop_console: true,
                   },
               },
           },
       });
}

// Enable hot reload in development
if (!mix.inProduction()) {
    mix.sourceMaps();
    mix.webpackConfig({
        devtool: 'eval-source-map'
    });
}`}</code></pre>

          <h3>Monitoring and Performance</h3>
          <pre><code>{`<?php
// app/Http/Middleware/PerformanceMonitoring.php

class PerformanceMonitoring
{
    public function handle(Request $request, Closure $next): Response
    {
        $startTime = microtime(true);
        $startMemory = memory_get_usage(true);
        
        $response = $next($request);
        
        $executionTime = microtime(true) - $startTime;
        $memoryUsage = memory_get_usage(true) - $startMemory;
        $peakMemory = memory_get_peak_usage(true);
        
        // Log performance metrics
        Log::info('Performance Metrics', [
            'url' => $request->fullUrl(),
            'method' => $request->method(),
            'execution_time' => round($executionTime * 1000, 2) . 'ms',
            'memory_usage' => $this->formatBytes($memoryUsage),
            'peak_memory' => $this->formatBytes($peakMemory),
            'component_type' => $this->getComponentType($request),
            'user_id' => auth()->id()
        ]);
        
        // Add performance headers for debugging
        if (app()->environment('local')) {
            $response->headers->set('X-Execution-Time', round($executionTime * 1000, 2));
            $response->headers->set('X-Memory-Usage', $this->formatBytes($memoryUsage));
            $response->headers->set('X-Peak-Memory', $this->formatBytes($peakMemory));
        }
        
        return $response;
    }
    
    private function getComponentType(Request $request): string
    {
        if ($request->header('X-Livewire')) {
            return 'livewire';
        }
        
        if ($request->header('X-Inertia')) {
            return 'inertia';
        }
        
        return 'blade';
    }
    
    private function formatBytes(int $bytes): string
    {
        $units = ['B', 'KB', 'MB', 'GB'];
        $bytes = max($bytes, 0);
        $pow = floor(($bytes ? log($bytes) : 0) / log(1024));
        $pow = min($pow, count($units) - 1);
        
        return round($bytes / (1024 ** $pow), 2) . ' ' . $units[$pow];
    }
}`}</code></pre>

          <h2>Conclusion</h2>
          <p>Both Laravel Livewire and Inertia.js represent powerful approaches to modern web development, each with distinct advantages and use cases. The choice between them—or the decision to use both—depends on your specific project requirements, team expertise, and long-term goals.</p>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg my-6">
            <h3 className="text-gray-900 font-semibold mb-3">🎯 Key Decision Factors:</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-semibold text-green-800 mb-2">Team Skills</h4>
                <ul className="text-green-700 text-sm">
                  <li>• PHP expertise → Livewire</li>
                  <li>• JavaScript proficiency → Inertia</li>
                  <li>• Full-stack team → Both</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Application Type</h4>
                <ul className="text-blue-700 text-sm">
                  <li>• Admin panels → Livewire</li>
                  <li>• Public interfaces → Inertia</li>
                  <li>• Complex SPAs → Inertia</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-2">Performance Needs</h4>
                <ul className="text-purple-700 text-sm">
                  <li>• Real-time features → Livewire</li>
                  <li>• Rich interactions → Inertia</li>
                  <li>• Mobile-first → Inertia</li>
                </ul>
              </div>
            </div>
          </div>

          <p>Livewire excels in rapid development scenarios where server-side logic dominates, while Inertia shines in applications requiring rich client-side interactions and complex user interfaces. The hybrid approach allows you to leverage the strengths of both technologies within the same application.</p>

          <p>As Laravel continues to evolve, both Livewire and Inertia.js will undoubtedly advance, offering even more powerful features and better performance. The key is to choose the right tool for each specific part of your application, always keeping user experience and developer productivity in mind.</p>

          <div className="bg-blue-50 p-6 rounded-lg my-6">
            <h4 className="text-blue-900 font-semibold mb-2">🚀 Next Steps:</h4>
            <ul className="text-blue-800">
              <li>Evaluate your current projects and identify areas where each approach would excel</li>
              <li>Set up development environments for both Livewire and Inertia</li>
              <li>Build small proof-of-concept applications to gain hands-on experience</li>
              <li>Consider implementing a hybrid approach for maximum flexibility</li>
              <li>Stay updated with the latest features and best practices from both communities</li>
              <li>Measure and monitor performance in production environments</li>
            </ul>
          </div>

          <p>The future of Laravel web development is bright with these powerful tools at your disposal. Whether you choose Livewire, Inertia, or both, you're well-equipped to build modern, interactive web applications that delight users and maintain developer joy! 🎉</p>
        </div>
      </article>
    </>
  );
}