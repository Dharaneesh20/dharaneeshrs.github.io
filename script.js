// Wait for DOM to completely load
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        setTimeout(() => {
            document.querySelector('.loader-wrapper').style.opacity = 0;
            document.querySelector('.loader-wrapper').style.visibility = 'hidden';
        }, 2000);
    });

    // Custom Cursor
    const cursor = document.querySelector('.custom-cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });

    document.addEventListener('mousedown', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });

    document.addEventListener('mouseup', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    });

    // Links hover effect for cursor
    const links = document.querySelectorAll('a, button, .burger, .project-card');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });
        
        link.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });

    // Navigation
    const nav = document.querySelector('nav');
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li a');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Burger menu toggle
    burger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        
        // Burger animation
        burger.classList.toggle('toggle');
        if (burger.classList.contains('toggle')) {
            burger.children[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            burger.children[1].style.opacity = '0';
            burger.children[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            burger.children[0].style.transform = 'none';
            burger.children[1].style.opacity = '1';
            burger.children[2].style.transform = 'none';
        }
    });

    // Close mobile menu on item click
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
            burger.classList.remove('toggle');
            burger.children[0].style.transform = 'none';
            burger.children[1].style.opacity = '1';
            burger.children[2].style.transform = 'none';
        });
    });

    // Active nav item based on scroll position
    const sections = document.querySelectorAll('section');
    
    function activeNavLink() {
        let fromTop = window.scrollY + 200;
        
        sections.forEach(section => {
            if (
                section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop
            ) {
                const id = section.getAttribute('id');
                
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${id}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', activeNavLink);

    // TypedJS for hero text animation
    if (document.querySelector('.typed-text')) {
        const options = {
            strings: ['Student at Sri Eshwar College', 'Web Developer', 'Tech Enthusiast', 'Problem Solver'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        };
        
        const typed = new Typed('.typed-text', options);
    }

    // Skill bars animation
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
        skillBars.forEach(skillBar => {
            const progress = skillBar.getAttribute('data-progress');
            skillBar.style.width = progress;
        });
    }

    // Animate skill circles
    const skillCircles = document.querySelectorAll('.skill-circle');
    
    function animateSkillCircles() {
        skillCircles.forEach(circle => {
            const percent = circle.getAttribute('data-percent');
            circle.style.background = `conic-gradient(var(--main-color) ${percent}%, var(--gray-color) 0%)`;
        });
    }

    // Reveal animation for education timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    function revealTimeline() {
        timelineItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight - 100) {
                item.style.opacity = 1;
                item.style.transform = 'translateX(0)';
            }
        });
    }

    // Scroll reveal animations
    ScrollReveal().reveal('.section-title', {
        origin: 'top',
        distance: '50px',
        duration: 1000,
        delay: 200
    });

    ScrollReveal().reveal('.about-image', {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        delay: 300
    });

    ScrollReveal().reveal('.about-text', {
        origin: 'right',
        distance: '50px',
        duration: 1000,
        delay: 300
    });

    ScrollReveal().reveal('.technical-skills', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 400,
        afterReveal: animateSkillBars
    });

    ScrollReveal().reveal('.soft-skills', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        delay: 600,
        afterReveal: animateSkillCircles
    });

    ScrollReveal().reveal('.certification-card', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        interval: 200,
        mobile: true,
        afterReveal: function(el) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        }
    });

    ScrollReveal().reveal('.project-card', {
        origin: 'bottom',
        distance: '50px',
        duration: 1000,
        interval: 200
    });

    ScrollReveal().reveal('.contact-info', {
        origin: 'left',
        distance: '50px',
        duration: 1000,
        delay: 300
    });

    ScrollReveal().reveal('.contact-form', {
        origin: 'right',
        distance: '50px',
        duration: 1000,
        delay: 300
    });

    // Run timeline animation on scroll
    window.addEventListener('scroll', revealTimeline);

    // Initial animations
    setTimeout(() => {
        revealTimeline();
    }, 1000);
});
