// Blog content data structure
const blogContent = {
    articles: {
        1: {
            id: 1,
            title: "Revamp Your Online Shopping Experience with Nivas EORS: Exceptional Features for a Delightful Journey",
            mainImage: "assets/Article/Shopping.png",
            articleImage: "assets/Article/Article.png",
            date: "Jan 15, 2025",
            author: "Nivas",
            content: [
                "Experience the Spectacular 18th Edition of EORS: Over 20 lakh fashion, beauty, and lifestyle products from 6000+ esteemed domestic, international, and D2C brands await you. Nivas is committed to providing an unparalleled shopping journey during Nivas EORS 18, fulfilling every fashionista's ultimate desires while maximizing their value.",
                "Here are the 5 cool features that customers must definitely check out and use to shop during EORS.",
                "Size and Style Exchange – Introduced to enhance the end-to-end shopping journey of the shopper, Nivas open-ended feature, Size, and Style Exchange, allows you to exchange the size of the existing product or choose a completely new product from the app, giving shoppers a hassle-free return and exchange experience..."
            ]
        },
        2: {
            id: 2,
            title: "Sustainable Fashion: Making a Difference with Every Purchase",
            mainImage: "assets/Article/Shopping.png",
            articleImage: "assets/Article/Article.png",
            date: "Jan 12, 2025",
            author: "Nivas",
            content: [
                "Get ready for an unparalleled shopping spree as Nivas EORS 18 brings you a collection of over 20 lakh fashion, beauty, and lifestyle products from 6000+ premium brands, including top domestic, international, and D2C labels. This season, Nivas is dedicated to redefining your shopping experience, ensuring effortless transactions, unmatched value, and the latest trends—all at your fingertips!",
                "Here are 5 must-try features that will enhance your shopping journey during EORS.",
                "Personalized Recommendations – Discover fashion like never before with AI-powered personalized recommendations. Our smart system analyzes your preferences and shopping patterns to suggest products that match your style, making every purchase a perfect fit..."
            ]
        }
    },
    
    related: [
        {
            id: 1,
            title: "Revamp Your Online Shopping Experience with Nivas EORS: Exceptional Features for a Delightful Journey",
            image: "assets/Article/Shopping.png",
            date: "Jan 15, 2025",
            author: "Nivas"
        },
        {
            id: 2,
            title: "Sustainable Fashion: Making a Difference with Every Purchase",
            image: "assets/Article/Shopping.png",
            date: "Jan 12, 2025",
            author: "Nivas"
        },
        {
            id: 3,
            title: "Celebrity Fashion Lines: The New Trend in Online Shopping",
            image: "assets/Article/Shopping.png",
            date: "Jan 8, 2025",
            author: "Nivas"
        }
    ]
};

// Function to load current article content based on ID
function loadCurrentArticle(articleId) {
    const article = blogContent.articles[articleId];
    if (!article) {
        console.error('Article not found:', articleId);
        return;
    }
    
    // Update main image
    const mainImage = document.querySelector('.image-container img');
    if (mainImage) {
        mainImage.src = article.mainImage;
    }
    
    // Update title and content in black overlay box
    const overlayDiv = document.querySelector('.responsive-div');
    if (overlayDiv) {
        const titleElement = overlayDiv.querySelector('.blog-title');
        if (titleElement) {
            titleElement.textContent = article.title;
        }
        
        // Update paragraphs
        const blogText = overlayDiv.querySelector('.blog-text');
        if (blogText) {
            blogText.innerHTML = article.content.map(para => `<p>${para}</p>`).join('');
        }
        
        // Update article image
        const articleImage = overlayDiv.querySelector('img[src*="Article.png"]');
        if (articleImage) {
            articleImage.src = article.articleImage;
        }
    }
}

// Function to get article ID from URL parameters
function getArticleIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id')) || 1; // Default to 1 if no ID is provided
}

// Function to create related article card
function createRelatedArticleCard(article) {
    return `
        <div class="col-12 col-md-6 col-lg-4">
            <a href="blogdetails.html?id=${article.id}" style="text-decoration: none; color: inherit;">
                <article class="article-card">
                    <img src="${article.image}" alt="${article.title}" class="article-image">
                    <div class="article-content">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="article-meta">By ${article.author} • ${article.date}</div>
                            <button class="share-btn" onclick="event.preventDefault(); toggleShareMenu(this)">
                                <i class="fas fa-share-alt"></i>
                            </button>
                            <div class="share-menu">
                                <div class="share-icon whatsapp">
                                    <i class="fab fa-whatsapp"></i>
                                </div>
                                <div class="share-icon facebook">
                                    <i class="fab fa-facebook-f"></i>
                                </div>
                                <div class="share-icon twitter">
                                    <i class="fab fa-twitter"></i>
                                </div>
                                <div class="share-icon linkedin">
                                    <i class="fab fa-linkedin-in"></i>
                                </div>
                            </div>
                        </div>
                        <h2 class="article-title">${article.title}</h2>
                    </div>
                </article>
            </a>
        </div>
    `;
}

// Function to load related articles
function loadRelatedArticles() {
    const relatedArticlesContainer = document.querySelector('#mobilearticle .row');
    if (relatedArticlesContainer) {
        const articlesHTML = blogContent.related.map(article => createRelatedArticleCard(article)).join('');
        relatedArticlesContainer.innerHTML = articlesHTML;
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const articleId = getArticleIdFromUrl();
    loadCurrentArticle(articleId);
    loadRelatedArticles();
    initializeSharing();
});