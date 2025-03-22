// Video data
const videos = [
    {
        id: 1,
        thumbnail: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=500&auto=format&fit=crop&q=60",
        title: "Building Modern Web Applications",
        channel: "Tech Academy",
        views: "120K views",
        timestamp: "2 days ago",
        avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&auto=format&fit=crop&q=60"
    },
    {
        id: 2,
        thumbnail: "https://images.unsplash.com/photo-1707845690193-ec178cf78041?w=500&auto=format&fit=crop&q=60",
        title: "Learn JavaScript in 2024 - Complete Guide",
        channel: "CodeMaster",
        views: "89K views",
        timestamp: "1 week ago",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60"
    },
    {
        id: 3,
        thumbnail: "https://images.unsplash.com/photo-1707833558984-3293e794031c?w=500&auto=format&fit=crop&q=60",
        title: "The Future of AI Development",
        channel: "Future Tech",
        views: "250K views",
        timestamp: "3 days ago",
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&auto=format&fit=crop&q=60"
    },
    {
        id: 4,
        thumbnail: "https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=500&auto=format&fit=crop&q=60",
        title: "Web Design Trends 2024",
        channel: "Design Masters",
        views: "75K views",
        timestamp: "5 days ago",
        avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&auto=format&fit=crop&q=60"
    },
    {
        id: 5,
        thumbnail: "https://images.unsplash.com/photo-1707845690193-ec178cf78041?w=500&auto=format&fit=crop&q=60",
        title: "Building a Startup from Scratch",
        channel: "Startup Guide",
        views: "180K views",
        timestamp: "1 week ago",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60"
    },
    {
        id: 6,
        thumbnail: "https://images.unsplash.com/photo-1707833558984-3293e794031c?w=500&auto=format&fit=crop&q=60",
        title: "Machine Learning Basics",
        channel: "AI Academy",
        views: "95K views",
        timestamp: "4 days ago",
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&auto=format&fit=crop&q=60"
    }
];

// DOM Elements
const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.sidebar');
const videoGrid = document.getElementById('videoGrid');

// Toggle sidebar
menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});

// Create video cards
function createVideoCard(video) {
    const videoCard = document.createElement('div');
    videoCard.className = 'video-card';
    
    videoCard.innerHTML = `
        <div class="thumbnail-container">
            <img src="${video.thumbnail}" alt="${video.title}" class="thumbnail">
        </div>
        <div class="video-info">
            <img src="${video.avatar}" alt="${video.channel}" class="channel-avatar">
            <div class="video-details">
                <h3 class="video-title">${video.title}</h3>
                <p class="channel-name">${video.channel}</p>
                <p class="video-meta">${video.views} • ${video.timestamp}</p>
            </div>
        </div>
    `;
    
    return videoCard;
}

// Render videos
function renderVideos() {
    videoGrid.innerHTML = '';
    videos.forEach(video => {
        videoGrid.appendChild(createVideoCard(video));
    });
}

// Initial render
renderVideos();

// Search functionality
const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();
    
    const filteredVideos = videos.filter(video => 
        video.title.toLowerCase().includes(searchTerm) ||
        video.channel.toLowerCase().includes(searchTerm)
    );
    
    videoGrid.innerHTML = '';
    filteredVideos.forEach(video => {
        videoGrid.appendChild(createVideoCard(video));
    });
});