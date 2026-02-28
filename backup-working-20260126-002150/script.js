// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
            mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.style.display = isExpanded ? 'none' : 'flex';
            navMenu.style.flexDirection = 'column';
            navMenu.style.position = 'absolute';
            navMenu.style.top = '100%';
            navMenu.style.left = '0';
            navMenu.style.right = '0';
            navMenu.style.background = 'rgba(255, 255, 255, 0.98)';
            navMenu.style.padding = '1rem';
            navMenu.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    }
    
    // Accordion Functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const accordionItem = this.closest('.accordion-item');
            const accordionContent = accordionItem.querySelector('.accordion-content');
            
            // Close all other accordions
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    otherHeader.setAttribute('aria-expanded', 'false');
                    const otherItem = otherHeader.closest('.accordion-item');
                    const otherContent = otherItem.querySelector('.accordion-content');
                    otherContent.style.maxHeight = '0';
                }
            });
            
            // Toggle current accordion
            this.setAttribute('aria-expanded', !isExpanded);
            if (!isExpanded) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = '0';
            }
        });
    });
    
    // Force hero video to play (especially for mobile)
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
        // Set video properties for mobile
        heroVideo.setAttribute('playsinline', 'true');
        heroVideo.setAttribute('webkit-playsinline', 'true');
        heroVideo.muted = true;
        
        // Try to play
        const playPromise = heroVideo.play();
        if (playPromise !== undefined) {
            playPromise.catch(function(error) {
                console.log('Video autoplay failed:', error);
                // Try to play again after user interaction (mobile fallback)
                const tryPlay = function() {
                    heroVideo.play().catch(function(err) {
                        console.log('Video play failed:', err);
                    });
                };
                document.addEventListener('touchstart', tryPlay, { once: true });
                document.addEventListener('click', tryPlay, { once: true });
            });
        }
        
        // Ensure video is visible on mobile
        heroVideo.style.display = 'block';
        heroVideo.style.width = '100%';
        heroVideo.style.height = '100%';
    }
    
    // Force services hero video to play (mobile optimization)
    const servicesHeroVideo = document.getElementById('services-hero-video');
    if (servicesHeroVideo) {
        servicesHeroVideo.setAttribute('playsinline', 'true');
        servicesHeroVideo.setAttribute('webkit-playsinline', 'true');
        servicesHeroVideo.muted = true;
        servicesHeroVideo.setAttribute('muted', 'true');
        const playPromise = servicesHeroVideo.play();
        if (playPromise !== undefined) {
            playPromise.catch(function(error) {
                console.log('Services hero video autoplay failed:', error);
                const tryPlay = function() {
                    servicesHeroVideo.play().catch(function(err) {
                        console.log('Services hero video play failed:', err);
                    });
                };
                document.addEventListener('touchstart', tryPlay, { once: true });
                document.addEventListener('click', tryPlay, { once: true });
            });
        }
        servicesHeroVideo.style.display = 'block';
        servicesHeroVideo.style.width = '100%';
        servicesHeroVideo.style.height = '100%';
    }
    
    // Force contact video to play (mobile optimization)
    const contactVideo = document.getElementById('contact-video') || document.querySelector('.contact-video');
    if (contactVideo) {
        contactVideo.setAttribute('playsinline', 'true');
        contactVideo.setAttribute('webkit-playsinline', 'true');
        contactVideo.muted = true;
        contactVideo.setAttribute('muted', 'true');
        
        // Ensure video is visible
        contactVideo.style.display = 'block';
        contactVideo.style.width = '100%';
        contactVideo.style.height = '100%';
        contactVideo.style.opacity = '0.2';
        
        // Try to play immediately
        const playVideo = function() {
            const playPromise = contactVideo.play();
            if (playPromise !== undefined) {
                playPromise.then(function() {
                    console.log('Contact video playing successfully');
                }).catch(function(error) {
                    console.log('Contact video autoplay failed:', error);
                    // Try to play again after user interaction (mobile fallback)
                    const tryPlay = function() {
                        contactVideo.play().catch(function(err) {
                            console.log('Contact video play failed:', err);
                        });
                    };
                    document.addEventListener('touchstart', tryPlay, { once: true });
                    document.addEventListener('click', tryPlay, { once: true });
                });
            }
        };
        
        // Try to play when video is ready
        if (contactVideo.readyState >= 2) {
            playVideo();
        } else {
            contactVideo.addEventListener('loadeddata', playVideo, { once: true });
            contactVideo.addEventListener('canplay', playVideo, { once: true });
        }
        
        // Also try on page load
        window.addEventListener('load', function() {
            setTimeout(playVideo, 100);
        });
    }
});
