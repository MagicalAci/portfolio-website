// 网站主要功能脚本

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// 初始化应用
function initializeApp() {
    // 预加载器和Matrix效果
    initPreloader();
    initMatrixEffect();

    // 导航功能
    initNavigation();

    // 滚动动画
    initScrollAnimations();

    // 统计动画
    initStatsAnimation();

    // 打字机效果
    initTypingEffect();

    // 平滑滚动
    initSmoothScroll();

    // 终端动画
    initTerminalAnimation();

    // 技能球体动画
    initSkillsAnimation();

    // 滚动指示器
    initScrollIndicator();
}

// 预加载器
function initPreloader() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const preloader = document.getElementById('preloader');
            if (preloader) {
                preloader.classList.add('hidden');
                setTimeout(() => {
                    preloader.style.display = 'none';
                }, 500);
            }
        }, 2000);
    });
}

// Matrix背景效果
function initMatrixEffect() {
    const matrixBackground = document.getElementById('matrixBackground');
    if (!matrixBackground) return;

    // AI和技术相关术语
    const techTerms = [
        'LLM',
        'Agent',
        'GPT',
        'ML',
        'AI',
        'NLP',
        'CNN',
        'RNN',
        'BERT',
        'Transformer',
        'PyTorch',
        'TensorFlow',
        'Scikit',
        'Pandas',
        'NumPy',
        'Python',
        'JavaScript',
        'React',
        'Node.js',
        'API',
        'REST',
        'GraphQL',
        'Docker',
        'K8s',
        'AWS',
        'GCP',
        'Azure',
        'Redis',
        'MongoDB',
        'PostgreSQL',
        'Elasticsearch',
        'Kafka',
        'Spark',
        'Hadoop',
        'Vector',
        'Embedding',
        'Similarity',
        'Cosine',
        'Matrix',
        'Neural',
        'Deep',
        'Learning',
        'Algorithm',
        'Model',
        'Training',
        'Inference',
        'Optimization',
        'Gradient',
        'Backprop',
        'Loss',
        'Accuracy',
        'Precision',
        'Recall',
        'F1Score',
        'ROC',
        'AUC',
        'Cross',
        'Validation',
        'Overfitting',
        'Regularization',
        'Dropout',
        'BatchNorm',
        'Attention',
        'Encoder',
        'Decoder',
        'Tokenizer',
        'Fine-tuning',
        'RLHF',
        'Prompt',
        'ChatGPT',
        'OpenAI',
        'Anthropic',
        'Claude',
        'LangChain',
        'Hugging',
        'Face',
        'Stable',
        'Diffusion',
        'CLIP',
        'DALL-E',
        'Midjourney',
        'ControlNet',
        'LoRA',
        'PEFT',
        'Quantization',
        'Distillation',
        'Multi-modal',
        'Vision',
        'Audio',
        'Speech',
        'Recognition',
        'Generation',
        'Synthesis',
        'Classification',
        'Detection',
        'Segmentation',
        'Clustering',
        'Regression',
        'Reinforcement',
        'Q-Learning',
        'Policy',
        'Reward',
        'Environment',
        'Agent-based',
        'Multi-agent',
        'Ensemble',
        'Bagging',
        'Boosting',
        'Random',
        'Forest',
        'SVM',
        'KMeans',
        'DBSCAN',
        'PCA',
        'TSNE',
        'UMAP'
    ];

    // 创建更多列，密度更高
    const columnCount = Math.floor(window.innerWidth / 60);

    for (let i = 0; i < columnCount; i++) {
        createMatrixColumn(matrixBackground, techTerms, i);
    }
}

function createMatrixColumn(container, terms, columnIndex) {
    const column = document.createElement('div');
    column.className = 'matrix-column';

    // 随机位置
    column.style.left = `${(columnIndex * 60) + Math.random() * 40}px`;

    // 随机动画持续时间
    const duration = 6 + Math.random() * 8; // 6-14秒，更快
    column.style.animationDuration = `${duration}s`;

    // 随机延迟
    const delay = Math.random() * 3;
    column.style.animationDelay = `${delay}s`;

    // 生成术语列表
    const termCount = 20 + Math.random() * 15; // 20-35个术语，更多
    let columnContent = '';

    for (let i = 0; i < termCount; i++) {
        const term = terms[Math.floor(Math.random() * terms.length)];
        const spacing = Math.random() > 0.7 ? '\n\n' : '\n';
        columnContent += term + spacing;
    }

    column.textContent = columnContent;
    container.appendChild(column);

    // 当动画结束后，重新创建这个列
    column.addEventListener('animationend', () => {
        if (container.contains(column)) {
            container.removeChild(column);
            // 延迟一段时间后重新创建
            setTimeout(() => {
                if (container.parentNode) { // 确保预加载器还在
                    createMatrixColumn(container, terms, columnIndex);
                }
            }, Math.random() * 3000);
        }
    });
}

// 导航功能
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // 汉堡菜单切换
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // 点击导航链接时关闭菜单
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // 点击外部区域关闭菜单
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }

    // 滚动时高亮当前部分
    window.addEventListener('scroll', highlightCurrentSection);
}

// 高亮当前部分
function highlightCurrentSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// 滚动动画
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // 添加动画类
    const elementsToAnimate = document.querySelectorAll(`
        .expertise-item,
        .project-card,
        .timeline-item,
        .education-card,
        .contact-method,
        .section-header,
        .about-intro,
        .personal-info,
        .leadership-traits
    `);

    elementsToAnimate.forEach((element, index) => {
        element.classList.add('fade-in');
        observer.observe(element);

        // 添加延迟动画效果
        element.style.animationDelay = `${index * 0.1}s`;
    });
}

// 统计数字动画
function initStatsAnimation() {
    const statCards = document.querySelectorAll('.stat-card');
    let statsAnimated = false;

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !statsAnimated) {
                animateStats();
                statsAnimated = true;
            }
        });
    }, { threshold: 0.5 });

    if (statCards.length > 0) {
        statsObserver.observe(statCards[0]);
    }
}

// 统计动画函数
function animateStats() {
    const statValues = document.querySelectorAll('.stat-value');

    statValues.forEach(stat => {
        const targetValue = parseInt(stat.dataset.value);
        const unit = stat.nextElementSibling?.textContent || '';

        if (targetValue) {
            animateCounter(stat, 0, targetValue, 2000);
        }
    });
}

// 数字计数动画
function animateCounter(element, start, end, duration) {
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // 使用缓动函数
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (end - start) * easeOutQuart);

        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = end;
        }
    }

    requestAnimationFrame(updateCounter);
}

// 打字机效果
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;

    const texts = [
        'AI Product Architect',
        'LLM Fine-tuning Expert',
        'Agent Orchestration Specialist',
        'Business Growth Driver'
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeWriter() {
        const currentText = texts[textIndex];

        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // 停顿时间
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }

        setTimeout(typeWriter, typeSpeed);
    }

    // 延迟开始打字效果
    setTimeout(typeWriter, 1000);
}

// 平滑滚动
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80; // 导航栏高度

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 终端动画
function initTerminalAnimation() {
    const terminalLines = document.querySelectorAll('.terminal-line');

    const terminalObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 重置动画
                terminalLines.forEach(line => {
                    line.style.opacity = '0';
                    line.style.animation = 'none';
                });

                // 重新开始动画
                setTimeout(() => {
                    terminalLines.forEach(line => {
                        line.style.animation = 'terminalFadeIn 0.5s forwards';
                    });
                }, 100);

                terminalObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const terminal = document.querySelector('.terminal');
    if (terminal) {
        terminalObserver.observe(terminal);
    }
}

// 技能球体动画
function initSkillsAnimation() {
    const skillSpheres = document.querySelectorAll('.skill-sphere');

    skillSpheres.forEach((sphere, index) => {
        // 鼠标悬停效果
        sphere.addEventListener('mouseenter', () => {
            sphere.style.animationPlayState = 'paused';
            sphere.style.transform = 'scale(1.2)';
            sphere.style.zIndex = '10';
        });

        sphere.addEventListener('mouseleave', () => {
            sphere.style.animationPlayState = 'running';
            sphere.style.transform = '';
            sphere.style.zIndex = '';
        });

        // 点击效果
        sphere.addEventListener('click', () => {
            const skill = sphere.dataset.skill || sphere.textContent;
            showSkillInfo(skill);
        });
    });
}

// 显示技能信息
function showSkillInfo(skill) {
    const skillInfos = {
        'LLM微调': '深度学习模型微调，提升特定任务性能',
        'Agent编排': '智能代理系统设计与编排，实现复杂业务流程自动化',
        'Stable Diffusion': 'AI图像生成技术，创造高质量视觉内容',
        '向量数据库': '高维数据存储与检索，支持语义搜索和推荐系统',
        '推荐算法': '个性化推荐系统设计，提升用户体验和转化率',
        'AI Coding': '代码生成与优化工具，提升开发效率',
        '产品设计': '用户体验设计与产品策略规划',
        '商业化': '产品商业化策略与收入增长优化'
    };

    const info = skillInfos[skill] || `${skill} - 专业技能领域`;
    showNotification(info, 'info');
}

// 滚动指示器
function initScrollIndicator() {
    const scrollIndicator = document.createElement('div');
    scrollIndicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #00ffcc, #7b61ff, #ff006e);
        z-index: 9999;
        transition: width 0.1s ease;
    `;

    document.body.appendChild(scrollIndicator);

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;
        scrollIndicator.style.width = scrolled + '%';
    });
}

// 通知系统
function showNotification(message, type = 'info', duration = 3000) {
    // 移除现有通知
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;

    const colors = {
        info: '#00ffcc',
        success: '#8ac926',
        warning: '#ffbe0b',
        error: '#ff006e'
    };

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${colors[type] || colors.info};
        color: #0a0e27;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 9999;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-weight: 600;
        font-size: 0.9rem;
    `;

    notification.textContent = message;
    document.body.appendChild(notification);

    // 触发动画
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // 自动移除
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, duration);
}

// 项目卡片交互
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// 键盘快捷键
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K 打开命令面板（如果有的话）
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        showNotification('快捷键功能开发中...', 'info');
    }

    // ESC 关闭移动端菜单
    if (e.key === 'Escape') {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');

        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// 视差滚动效果
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const aurora = document.querySelector('.aurora');

    if (aurora) {
        aurora.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// 性能优化：防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 节流函数
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// 优化滚动性能
const optimizedScrollHandler = throttle(() => {
    highlightCurrentSection();
}, 100);

window.addEventListener('scroll', optimizedScrollHandler);

// 窗口大小变化处理
window.addEventListener('resize', debounce(() => {
    // 重新计算动画
    const skillSpheres = document.querySelectorAll('.skill-sphere');
    if (window.innerWidth <= 768) {
        skillSpheres.forEach(sphere => {
            sphere.style.animation = 'none';
            sphere.style.position = 'static';
            sphere.style.transform = 'none';
        });
    } else {
        skillSpheres.forEach(sphere => {
            sphere.style.animation = '';
            sphere.style.position = '';
            sphere.style.transform = '';
        });
    }
}, 250));

// 错误处理
window.addEventListener('error', (e) => {
    console.error('JavaScript Error:', e.error);
    // 可以在这里添加错误报告功能
});

// 未处理的 Promise 拒绝
window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled Promise Rejection:', e.reason);
    e.preventDefault();
});

// 简历下载功能
function downloadResume() {
    // 显示下载提示
    showNotification('正在下载PDF简历...', 'info');

    try {
        // 创建下载链接
        const element = document.createElement('a');
        element.href = 'assets/于鹤炜-AI产品经理-简历.pdf';
        element.download = '于鹤炜-AI产品经理-简历.pdf';
        element.target = '_blank'; // 在新标签页打开，确保下载体验

        // 触发下载
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);

        // 显示成功提示
        setTimeout(() => {
            showNotification('PDF简历下载成功！', 'success');
        }, 500);

        // 提供联系信息
        setTimeout(() => {
            showNotification('有任何问题欢迎联系：magicalaci@gmail.com', 'info', 4000);
        }, 2500);

    } catch (error) {
        console.error('下载失败:', error);
        showNotification('下载失败，请稍后重试', 'error');

        // 备选方案：提供直接联系方式
        setTimeout(() => {
            showNotification('您也可以直接联系获取简历：18931212098', 'info', 5000);
        }, 1500);
    }
}

// 生成简历内容
function generateResumeContent() {
    return `
═══════════════════════════════════════════════════════════════
                        于鹤炜 - AI产品经理
═══════════════════════════════════════════════════════════════

📍 基本信息
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
姓名：于鹤炜
年龄：24岁
电话：18931212098
邮箱：magicalaci@gmail.com
期望城市：上海
期望薪资：25-35K

🚀 个人简介
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
4年深耕AI产品领域，主导千万级营收产品矩阵。
擅长将前沿AI技术转化为商业价值，以创始人心态打造每一个产品。
用技术创新驱动业务增长，重新定义AI产品的可能性。

💪 核心优势
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. 全栈AI技术专家
   深度掌握多模态AI技术栈：LLM微调与Agent编排、Stable Diffusion/Midjourney图像生成、
   向量数据库、推荐算法。熟练运用AI Coding/coze等平台快速搭建产品Demo。

2. 卓越商业化成绩
   主导产品矩阵累计营收超千万。降AIGC痕迹功能充值率40%（行业Top1），
   论文产品客单价提升125%，AI小说日均充值率6%。

3. 内部创新领袖
   独立主导搭建AI业务中台自动化流程，实现年度成本预计节省650万+，
   整体运营成本降低60%。18个岗位实现自动化，核心业务效率提升300%。

4. 产品创新先锋
   主导6大AI产品线，落地20+创新功能，覆盖文本生成、语音识别、图像创作、
   智能搜索、流程自动化等全AI应用场景。平均2个月完成创新验证到规模化落地。

📊 关键成就数据
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 累计营收：1000万+
• 年度节省成本：650万+
• 效率提升：300%
• 岗位自动化：18个

💼 工作经历
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
【WikiFX外汇交易平台】AI业务负责人 (2025.07 - 至今)
• 智能翻译系统：成本降低95%（60万→5万/年）
• 文章自动化：人力需求3人→0.5人，效率↑300%
• 年度节省成本650万+，整体运营成本↓60%
• 18个岗位实现自动化，错误率控制在5%以内

【上海韩创网络科技】AI产品经理 (2025.03 - 2025.06)
• 笔灵AI论文：降AIGC痕迹充值率40%（行业Top1）
• 论文产品客单价提升125%（40→90元）
• AI小说：2月内从0到1，日均充值率6%
• 听脑AI：客单价↑30%，受限充值率↑20%

【上海确识数字科技】AI产品经理 (2022.09 - 2024.04)
• AI图文模型：付费率达5%，用户次日留存↑30%
• 0投放预算引流10万用户至Tiamat官网
• 完成保时捷汽车AI品宣网站等多个B端合作
• 构建自适应用户审美偏好的图文模型系统

🛠️ 技术技能
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• LLM微调与Agent编排
• Stable Diffusion/Midjourney图像生成
• 向量数据库设计与应用
• 推荐算法开发
• AI Coding平台应用
• 产品策略与商业化运营
• 敏捷开发与团队管理

🚀 核心项目
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. AI业务中台自动化系统
   构建端到端的AI自动化系统，年度节省650万+，效率提升300%，18个岗位自动化

2. 笔灵AI论文平台
   充值率40%（行业Top1），客单价提升125%，行业排名#1

3. AI小说创作平台
   2月快速上线，日充值率6%，15个核心模块

4. Tiamat AI绘画平台
   使用峰值增长500%，留存提升30%，付费率4%

5. 听脑AI录音转写
   客单价提升30%，受限充值率提升20%，2周重构周期

6. AI搜索平台
   3期路线图获批，全链路架构设计，Top级对标体验

🎓 教育背景
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
常熟理工学院 | 本科 | 机械工程 (2019.09 - 2023.06)

🏆 主要成就
• Robot Master机甲大师团队视觉组组长，获多项团队奖项
• 大三暑假自主创业，青少年AI绘画课程，2月内获得数10万收入

👥 复合型领导力
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• 管理能力：统筹20+人团队，建立3大管理体系
• 商业嗅觉：每个产品均实现正向现金流，ROI均超300%
• 执行效率：平均2月完成0→1上线，最快2周商业化重构
• 创业精神：创始人心态，不设边界、结果导向

═══════════════════════════════════════════════════════════════
更多详情请访问个人网站或联系本人深入沟通
电话：189-3121-2098 | 邮箱：magicalaci@gmail.com
═══════════════════════════════════════════════════════════════
    `;
}

// 导出主要函数供其他脚本使用
window.portfolioApp = {
    showNotification,
    animateCounter,
    debounce,
    throttle,
    downloadResume
};

// 将downloadResume函数设为全局函数
window.downloadResume = downloadResume;