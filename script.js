// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeTabs();
    initializeChat();
    initializeScrollAnimations();
    initializeMobileMenu();
});

// 导航功能
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// 平滑滚动到指定部分
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 标签页切换功能
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // 移除所有活动状态
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // 添加活动状态
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// 聊天功能
function initializeChat() {
    const chatInput = document.getElementById('chatInput');
    const sendButton = document.getElementById('sendButton');
    const chatMessages = document.getElementById('chatMessages');
    const suggestionButtons = document.querySelectorAll('.suggestion-btn');
    
    // 预设的问答数据
    const qaData = {
        '什么是人工智能？': '人工智能（AI）是计算机科学的一个分支，旨在创建能够执行通常需要人类智能的任务的系统。这些任务包括学习、推理、感知、语言理解和问题解决。AI技术已经在我们的日常生活中广泛应用，从智能手机助手到自动驾驶汽车。',
        '如何学习编程？': '学习编程可以从以下几个步骤开始：1. 选择一门入门语言（如Python）2. 学习基础语法和概念 3. 动手做小项目 4. 阅读他人代码 5. 参与开源项目 6. 持续学习和实践。记住，编程是一门实践性很强的技能，多写代码是关键！',
        '写一首关于春天的诗': '春风轻抚绿柳枝，\n花开满园香四溢。\n小鸟欢唱新曲调，\n大地苏醒展生机。\n\n阳光温暖照大地，\n蝴蝶翩翩舞花间。\n春天来了万物新，\n希望播撒在心田。',
        '解释量子计算': '量子计算是一种利用量子力学原理进行计算的新型计算方式。与传统计算机使用比特（0或1）不同，量子计算机使用量子比特，可以同时处于多个状态的叠加。这使得量子计算机在某些特定问题上具有巨大的计算优势，比如密码破解、药物发现和优化问题等。'
    };
    
    // 发送消息函数
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, 'user');
            chatInput.value = '';
            
            // 模拟AI思考时间
            setTimeout(() => {
                const response = qaData[message] || '这是一个很有趣的问题！虽然我不能提供具体的答案，但我建议你可以尝试搜索相关信息或咨询专业人士。';
                addMessage(response, 'bot');
            }, 1000);
        }
    }
    
    // 添加消息到聊天界面
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = sender === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';
        
        const content = document.createElement('div');
        content.className = 'message-content';
        content.textContent = text;
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // 发送按钮点击事件
    sendButton.addEventListener('click', sendMessage);
    
    // 回车键发送消息
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // 建议问题点击事件
    suggestionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const question = this.getAttribute('data-question');
            chatInput.value = question;
            sendMessage();
        });
    });
}

// 滚动动画
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    const animatedElements = document.querySelectorAll('.app-card, .science-card, .about-section');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 移动端菜单
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // 点击菜单项后关闭菜单
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// 添加一些额外的动画效果
function addExtraAnimations() {
    // 为原理部分的动画容器添加一些动态效果
    const animationContainers = document.querySelectorAll('.animation-container');
    
    animationContainers.forEach(container => {
        // 添加一些随机的动画元素
        for (let i = 0; i < 5; i++) {
            const dot = document.createElement('div');
            dot.style.position = 'absolute';
            dot.style.width = '8px';
            dot.style.height = '8px';
            dot.style.background = '#6366f1';
            dot.style.borderRadius = '50%';
            dot.style.opacity = '0.6';
            dot.style.left = Math.random() * 80 + 10 + '%';
            dot.style.top = Math.random() * 80 + 10 + '%';
            dot.style.animation = `pulse ${2 + Math.random() * 2}s infinite`;
            container.appendChild(dot);
        }
    });
}

// 页面加载完成后添加额外动画
window.addEventListener('load', function() {
    addExtraAnimations();
});

// 添加一些CSS动画关键帧
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { 
            transform: scale(1); 
            opacity: 0.6; 
        }
        50% { 
            transform: scale(1.5); 
            opacity: 1; 
        }
    }
    
    @keyframes slideIn {
        from { 
            opacity: 0; 
            transform: translateX(-20px); 
        }
        to { 
            opacity: 1; 
            transform: translateX(0); 
        }
    }
    
    @keyframes fadeInUp {
        from { 
            opacity: 0; 
            transform: translateY(30px); 
        }
        to { 
            opacity: 1; 
            transform: translateY(0); 
        }
    }
    
    .message {
        animation: slideIn 0.3s ease;
    }
    
    .app-card, .science-card, .about-section {
        animation: fadeInUp 0.6s ease;
    }
`;
document.head.appendChild(style); 