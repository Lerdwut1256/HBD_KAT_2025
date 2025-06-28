// Birthday celebration effects
function celebrate() {
    // Create celebration effect
    createCelebrationEffect();
    
    // Add more confetti
    addMoreConfetti();
    
    // Play celebration sound (if you add audio)
    playCelebrationSound();
    
    // Make balloons dance
    makeBalloonsDance();
    
    // Flash colors
    flashColors();
    
    // Add love-specific effects
    showLoveMessage();
    createHeartRain();
    pulseHearts();
}

function createCelebrationEffect() {
    const effects = ['💖', '💕', '💗', '💝', '💘', '💞', '✨', '🌟', '💫'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const effect = document.createElement('div');
            effect.className = 'celebration-effect';
            effect.textContent = effects[Math.floor(Math.random() * effects.length)];
            effect.style.left = Math.random() * 100 + '%';
            effect.style.top = Math.random() * 100 + '%';
            document.body.appendChild(effect);
            
            setTimeout(() => {
                effect.remove();
            }, 1000);
        }, i * 100);
    }
}

function addMoreConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#ff69b4', '#ff1493', '#da70d6', '#ff6347', '#ff91a4', '#ffb6c1', '#ffc0cb', '#ff8fa3'];
    
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = '0s';
            confetti.style.animationDuration = (Math.random() * 2 + 1) + 's';
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 3000);
        }, i * 50);
    }
}

function playCelebrationSound() {
    // You can add audio files and uncomment this section
    /*
    try {
        const audio = new Audio('celebration.mp3');
        audio.volume = 0.3;
        audio.play();
    } catch (error) {
        console.log('Audio not available');
    }
    */
    
    // Alternative: Use Web Audio API for simple beep sounds
    playBeepSequence();
}

function playBeepSequence() {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const frequencies = [523.25, 659.25, 783.99, 1046.50]; // C, E, G, C
    
    frequencies.forEach((freq, index) => {
        setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = freq;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
        }, index * 200);
    });
}

function makeBalloonsDance() {
    const balloons = document.querySelectorAll('.balloon');
    
    balloons.forEach((balloon, index) => {
        balloon.style.animation = 'none';
        setTimeout(() => {
            balloon.style.animation = 'float 0.5s ease-in-out infinite, balloonDance 2s ease-in-out';
        }, index * 100);
        
        setTimeout(() => {
            balloon.style.animation = 'float 3s ease-in-out infinite';
        }, 2000);
    });
}

function flashColors() {
    document.body.style.background = 'linear-gradient(135deg, #ff69b4 0%, #ff1493 50%, #da70d6 100%)';
    
    setTimeout(() => {
        document.body.style.background = 'linear-gradient(135deg, #ff91a4 0%, #ffb6c1 50%, #ffc0cb 100%)';
    }, 200);
    
    setTimeout(() => {
        document.body.style.background = 'linear-gradient(135deg, #ff6347 0%, #ff69b4 50%, #ff1493 100%)';
    }, 400);
    
    setTimeout(() => {
        document.body.style.background = 'linear-gradient(135deg, #ff9999 0%, #ffb3d9 30%, #ffd9ec 70%, #ffe6f2 100%)';
    }, 600);
}

// Add extra animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes balloonDance {
        0% { transform: translateY(0px) rotate(0deg); }
        25% { transform: translateY(-30px) rotate(-15deg); }
        50% { transform: translateY(-40px) rotate(0deg); }
        75% { transform: translateY(-30px) rotate(15deg); }
        100% { transform: translateY(0px) rotate(0deg); }
    }
`;
document.head.appendChild(style);

// Add romantic love messages
function showLoveMessage() {
    const loveMessages = [
        "รักบี๋ที่สุด 💕",
        "เธอคือความสุขของฉัน 💖",
        "ขอให้เราอยู่ด้วยกันตลอดไป 💗",
        "Happy Birthday My Love! 💝",
        "You are my everything! 💘"
    ];
    
    const message = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    const messageDiv = document.createElement('div');
    messageDiv.className = 'love-popup';
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(45deg, #ff69b4, #ff1493);
        color: white;
        padding: 20px 30px;
        border-radius: 20px;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 3000;
        animation: lovePopup 3s ease-out forwards;
        box-shadow: 0 10px 30px rgba(255,105,180,0.5);
        text-align: center;
    `;
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}

function createHeartRain() {
    const hearts = ['💖', '💕', '💗', '💝', '💘', '💞'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.cssText = `
                position: fixed;
                top: -50px;
                left: ${Math.random() * 100}%;
                font-size: 2rem;
                z-index: 1500;
                animation: heartFall 4s linear forwards;
                pointer-events: none;
            `;
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }, i * 100);
    }
}

function pulseHearts() {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        heart.style.animation = 'heartbeat 0.5s ease-in-out 6';
    });
}

// Add new CSS animations
const loveStyle = document.createElement('style');
loveStyle.textContent = `
    @keyframes lovePopup {
        0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
        }
        20% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 1;
        }
        80% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        100% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes heartFall {
        0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(loveStyle);

// Add click events to various elements
document.addEventListener('DOMContentLoaded', function() {
    // Make cake interactive
    const cake = document.querySelector('.cake');
    if (cake) {
        cake.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'cakeRotate 1s ease-in-out';
            }, 10);
            setTimeout(() => {
                this.style.animation = 'cakeRotate 4s ease-in-out infinite';
            }, 1000);
        });
    }
    
    // Make balloons interactive
    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
        balloon.addEventListener('click', function() {
            this.style.transform = 'translateY(-50px) scale(1.2)';
            setTimeout(() => {
                this.style.transform = '';
            }, 500);
        });
    });
    
    // Make gifts interactive
    const gifts = document.querySelectorAll('.gift');
    gifts.forEach(gift => {
        gift.addEventListener('click', function() {
            this.style.animation = 'none';
            this.style.transform = 'scale(1.3)';
            
            // Different gifts reveal different surprises
            if (this.textContent === '💎') {
                this.textContent = '💖';
                showLoveMessage();
            } else if (this.textContent === '🌹') {
                this.textContent = '💕';
                createHeartRain();
            } else if (this.textContent === '💍') {
                this.textContent = '💝';
                pulseHearts();
            }
            
            setTimeout(() => {
                this.style.transform = '';
                this.style.animation = 'giftBounce 2s ease-in-out infinite';
            }, 1000);
        });
    });
    
    // Make hearts interactive
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => {
        heart.addEventListener('click', function() {
            showLoveMessage();
        });
    });
    
    // Auto-celebration after page load
    setTimeout(() => {
        const title = document.querySelector('.birthday-title');
        if (title) {
            title.style.animation = 'titlePulse 0.5s ease-in-out 3';
        }
    }, 1000);
});

// Add special keyboard shortcuts
document.addEventListener('keydown', function(event) {
    switch(event.key.toLowerCase()) {
        case ' ': // Spacebar
            event.preventDefault();
            celebrate();
            break;
        case 'c': // C key for confetti
            addMoreConfetti();
            break;
        case 'b': // B key for balloon dance
            makeBalloonsDance();
            break;
        case 'm': // M key for music
            playBeepSequence();
            break;
        case 'l': // L key for love message
            showLoveMessage();
            break;
        case 'h': // H key for heart rain
            createHeartRain();
            break;
    }
});

// Display keyboard shortcuts hint
setTimeout(() => {
    console.log('💖 Romantic Birthday Page Shortcuts:');
    console.log('Space - Full romantic celebration');
    console.log('C - Add pink confetti');
    console.log('B - Make balloons dance');
    console.log('M - Play romantic music');
    console.log('L - Show love message');
    console.log('H - Create heart rain');
    console.log('💕 Click hearts, gifts, cake, and balloons for surprises!');
}, 2000);