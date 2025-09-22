// AI助手功能模块

// OpenAI API配置
const OPENAI_CONFIG = {
    API_KEY: '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',
    API_URL: 'https://api.openai.com/v1/chat/completions',
    MODEL: 'gpt-4o',
    MAX_TOKENS: 2000,
    TEMPERATURE: 0.7
};

// 于鹤炜的详细简历信息
const YU_HEWEI_PROFILE = `
我是于鹤炜，24岁，AI产品经理，拥有4年AI产品经验。

个人优势：
1. 全栈AI技术专家：深度掌握多模态AI技术栈：LLM微调与Agent编排、Stable Diffusion/Midjourney图像生成、向量数据库、推荐算法。熟练运用AI Coding/coze等平台快速搭建产品Demo，具备完整AI基建搭建能力。

2. 卓越商业化成绩：主导产品矩阵累计营收超千万。降AIGC痕迹功能充值率40%（行业Top1），论文产品客单价提升125%（40→90元），AI小说日均充值率6%。擅长0→1商业模式设计与快速验证。

3. 内部创新：独立主导搭建AI业务中台自动化流程，实现年度成本预计节省650万+（翻译55万+人力595万），整体运营成本降低60%。18个岗位实现自动化，核心业务效率提升300%。

4. 产品创新：主导6大AI产品线，落地20+创新功能，覆盖文本生成（论文/小说）、语音识别（录音转写）、图像创作（AI绘画）、智能搜索（意图识别）、流程自动化（翻译/业务中台）等全AI应用场景的产品矩阵。平均2个月完成创新验证到规模化落地。

5. 复合型领导力：管理能力-统筹20+人团队，建立3大管理体系，2月完成15模块并行开发；商业嗅觉-每个产品均实现正向现金流，ROI均超300%；执行效率-平均2月完成0→1上线，最快2周完成商业化重构并见效；创业精神-以创始人心态对待每个产品，不设边界、结果导向、主动创造价值。

工作经历：
1. WikiFX外汇交易平台 AI业务负责人 2025.07至今
   主要成就：
   - 智能翻译系统：基于大模型微调+工程化方案，解决特殊符号识别难题（@、#等），翻译成本骤降95%（60万→5万/年）
   - 文章自动化：AI Coding搭建批处理流程+自建图像P图API+LLM Agent文章生成，人力需求从3人降至0.5人，效率↑300%
   - 全量信息自动更新：Multi Agent架构+AI爬虫系统，实现24/7自动抓取更新，替代15人团队，错误率<5%
   - AI搜索平台：独立完成意图识别→维度分析→搜索逻辑全链路架构设计，对标淘宝/京东搜索体验，三期路线图已获批
   - 智能配图系统：搭建组件化模板库+AI元素生成API服务，支持新闻/社区等多场景，日调用2000+次
   降本成效：年度节省成本650万+（翻译55万、人力595万），整体运营成本↓60%

2. 上海韩创网络科技有限公司 AI产品经理 2025.03-2025.06
   - 笔灵AI论文：负责AI写作工具论文系列产品线的完整构建，覆盖论文撰写、降重、降AI痕迹、答辩PPT等，深度调研用户需求痛点，设计差异化功能模块。降AIGC痕迹功能充值率达40%，论文产品客单价提升125%（40元→90元）
   - AI小说：从0到1负责AI小说产品的完整构建，建立产品管理体系，包含【产研协作体系】【用户反馈迭代体系】【商业化路线测试体系】。2月内快速推进小说核心模块（资料库、生成器等）及15个大模块功能上线，日均充值率6%
   - 听脑AI：负责AI录音转写APP的产品策略规划和商业化运营，基于用户录音文件智能识别类型，构建纪要、代办、数据分析等差异化功能模块。客单价提升30%，受限充值率提升20%

3. 上海确识数字科技有限公司 AI产品经理 2022.09-2024.04
   - 设计AI图文模型升级方案，打造个性化的图像生成模型。模型上线后，付费率达5%，用户次日留存增长30%
   - Tiamat官网初期，在0投放预算的情况下，通过多轮情况分析和调研竞品推广策略，成功引流10万用户至Tiamat官网
   - 完成多个B端合作，如"保时捷汽车AI品宣网站"等，梳理健全API售卖方案

核心项目经历：
1. 文章中台自动化系统（2025.08-2025.09）：针对外汇交易商实地勘察业务，构建端到端的AI自动化系统，实现从现场照片处理到勘察报告生成的全流程自动化。基于AI Coding搭建批处理流程框架，集成自建图像处理API，通过coze平台构建专业Agent流程。将原本3人全职的工作压缩至0.5人审核，人力成本降低83%，处理效率提升300%，年度节省人力成本约180万。

2. 笔灵AI论文（2024.04-2024.12）：面向C端用户的AI写作工具平台，覆盖基础写作、学术论文、PPT制作等多场景。基于GPT系列模型构建多场景写作能力，设计降AIGC痕迹\去重的agent流程，优化论文查重逻辑。降AIGC痕迹功能充值率达40%，论文产品客单价提升125%（40元→90元），整体产品充值率稳定在10%+。

3. AI小说创作平台（2024.09-2025.04）：从零开始构建AI小说生成平台，为用户提供智能化的小说创作工具。设计小说创作专用的Prompt模板体系，通过dify搭建agent流程，构建角色一致性保持算法，通过向量数据库实现情节连贯性检测。2月内构建完整产品体系（资料库、生成器等15个核心模块），搭建产研协作、用户反馈迭代、商业化测试三大管理体系，日均转化8%。

4. Tiamat AI绘画平台（2024.09-2025.04）：面向C端用户的AI绘画模型，包括文生图、图生图、ControlNet等功能。搭建图像标注平台，显著提高标注质量并降低成本，结合向量数据库的方式分类训练数据，优化训练集图片风格配比。构建能自适应匹配用户审美偏好的图文模型，模型上线后用户日使用峰值增长500%，留存指标提升30%，付费率达4%。

5. 听脑AI录音转写：AI录音转写APP，基于用户录音文件智能识别类型，构建纪要、代办、数据分析等差异化功能模块。重新梳理会员体系和受限逻辑设计，建立"使用率-受限率-转化率-客单价"四维优化模型，客单价提升30%，受限充值率提升20%。

6. AI搜索平台：独立完成意图识别→维度分析→搜索逻辑全链路架构设计，对标淘宝/京东搜索体验，三期路线图已获批。

教育背景：
常熟理工学院 本科 机械工程 2019.09-2023.06
- Robot Master机甲大师团队视觉组组长，项目管理负责人。获视觉组三等奖，3V3团队一等奖，5V5团队三等奖，各类机器人三等奖等
- 大三暑假自助创业，青少年AI绘画课程，2月内获得数10万收入

联系方式：
电话：18931212098
邮箱：magicalaci@gmail.com
期望城市：上海
期望薪资：25-35K

技术能力：
- LLM微调与Agent编排
- Stable Diffusion/Midjourney图像生成
- 向量数据库设计与应用
- 推荐算法开发
- AI Coding平台应用（熟练使用AI Coding/coze等平台快速搭建产品Demo）
- 产品策略与商业化运营
- 敏捷开发与团队管理

我具备全栈AI技术能力，擅长商业化运营，有丰富的0→1产品经验，能够独立负责AI产品线的完整构建和商业化。以创始人心态对待每个产品，不设边界、结果导向、主动创造价值。
`;

// AI助手类
class AIAssistant {
    constructor() {
        // 浮动界面元素
        this.robotBtn = document.getElementById('robotBtn');
        this.chatModal = document.getElementById('chatModal');
        this.chatModalMessages = document.getElementById('chatModalMessages');
        this.chatModalInput = document.getElementById('chatModalInput');
        this.sendModalBtn = document.getElementById('sendModalBtn');

        // Ask Details 元素
        this.askDetailsTooltip = document.getElementById('askDetailsTooltip');
        this.askDetailsBtn = document.getElementById('askDetailsBtn');

        this.isLoading = false;
        this.conversationHistory = [];
        this.isModalOpen = false;
        this.currentElement = null;
        this.lastMouseEvent = null;

        // 创建节流版本的位置更新函数
        this.throttledUpdatePosition = this.throttle((event) => {
            this.updateTooltipPosition(event);
        }, 16); // 约60fps

        this.init();
    }

    init() {
        if (!this.robotBtn || !this.chatModal) {
            console.warn('AI Assistant floating elements not found');
            return;
        }

        // 机器人按钮事件
        this.robotBtn.addEventListener('click', () => this.toggleModal());


        // 发送消息事件
        this.sendModalBtn.addEventListener('click', () => this.sendMessage());
        this.chatModalInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.sendMessage();
            }
        });

        // 输入实时监听
        this.chatModalInput.addEventListener('input', () => {
            this.sendModalBtn.disabled = !this.chatModalInput.value.trim();
        });


        // 初始化发送按钮状态
        this.sendModalBtn.disabled = true;

        // 初始化页面内容图标
        this.initContentIcons();

        // 点击外部区域关闭模态框
        document.addEventListener('click', (e) => {
            if (this.isModalOpen && !this.chatModal.contains(e.target) && !this.robotBtn.contains(e.target)) {
                this.closeModal();
            }
        });

        // 移动端触摸交互优化
        this.initMobileOptimizations();
    }

    // 移动端触摸交互优化
    initMobileOptimizations() {
        // 检测移动设备
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (isMobile) {
            // 优化聊天输入框，防止页面缩放
            const chatInput = this.chatModal.querySelector('.chat-modal-input input');
            chatInput.addEventListener('focus', () => {
                // 防止iOS Safari缩放
                document.querySelector('meta[name=viewport]').setAttribute('content',
                    'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');

                // 滚动到输入框
                setTimeout(() => {
                    chatInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            });

            chatInput.addEventListener('blur', () => {
                // 恢复正常缩放
                document.querySelector('meta[name=viewport]').setAttribute('content',
                    'width=device-width, initial-scale=1.0, user-scalable=yes');
            });

            // 优化机器人按钮触摸反馈
            this.robotBtn.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.robotBtn.style.transform = 'scale(0.95)';
            });

            this.robotBtn.addEventListener('touchend', (e) => {
                e.preventDefault();
                this.robotBtn.style.transform = '';
                this.toggleModal();
            });

            // 优化内容图标触摸交互
            setTimeout(() => {
                const contentIcons = document.querySelectorAll('.content-icon-container');
                contentIcons.forEach(icon => {
                    icon.addEventListener('touchstart', (e) => {
                        e.preventDefault();
                        icon.style.transform = 'scale(0.9)';
                    });

                    icon.addEventListener('touchend', (e) => {
                        e.preventDefault();
                        icon.style.transform = '';
                    });
                });
            }, 1000);

            // 移动端模态框优化
            this.chatModal.addEventListener('touchstart', (e) => {
                // 防止背景滚动
                if (e.target === this.chatModal) {
                    e.preventDefault();
                }
            });
        }
    }

    // 初始化页面内容图标
    initContentIcons() {
        // 在关键位置添加可点击的图标
        const contentSections = [
            // About Section
            {
                selector: '.about-intro h3',
                content: '个人优势介绍',
                supplementary: '请详细介绍一下你的核心优势和技术能力，特别是全栈AI技术专家方面的经验。',
                icon: 'fas fa-user-tie'
            },
            {
                selector: '.expertise-item:nth-child(1) h4',
                content: '全栈AI技术专家',
                supplementary: '能详细说说你在AI技术方面的深度和广度吗？包括LLM微调、Agent编排等具体技术。',
                icon: 'fas fa-brain'
            },
            {
                selector: '.expertise-item:nth-child(2) h4',
                content: '卓越商业化成绩',
                supplementary: '请介绍一下你主导的千万级营收是如何实现的？有哪些具体的商业化案例？',
                icon: 'fas fa-chart-line'
            },
            {
                selector: '.expertise-item:nth-child(3) h4',
                content: '内部创新领袖',
                supplementary: '能详细说说你主导的AI业务中台是如何实现650万+成本节省的吗？',
                icon: 'fas fa-lightbulb'
            },
            {
                selector: '.expertise-item:nth-child(4) h4',
                content: '产品创新先锋',
                supplementary: '请介绍一下你主导的6大AI产品线和20+创新功能的具体情况。',
                icon: 'fas fa-rocket'
            },
            {
                selector: '.personal-info h4',
                content: '基本信息',
                supplementary: '我想了解更多关于你的背景和职业规划，方便介绍一下吗？',
                icon: 'fas fa-id-card'
            },
            {
                selector: '.leadership-traits h4',
                content: '复合型领导力',
                supplementary: '能详细说说你的管理经验和领导风格吗？特别是如何管理20+人的团队。',
                icon: 'fas fa-users'
            },
            // Stats Dashboard
            {
                selector: '.stat-card:nth-child(1)',
                content: '累计营收1000万+',
                supplementary: '能详细说说这1000万营收是通过哪些具体项目实现的吗？',
                icon: 'fas fa-dollar-sign'
            },
            {
                selector: '.stat-card:nth-child(2)',
                content: '年度节省成本650万+',
                supplementary: '这650万的成本节省是通过哪些具体的AI自动化项目实现的？',
                icon: 'fas fa-piggy-bank'
            },
            {
                selector: '.stat-card:nth-child(3)',
                content: '效率提升300%',
                supplementary: '效率提升300%是在哪些具体业务环节实现的？有什么技术手段？',
                icon: 'fas fa-tachometer-alt'
            },
            {
                selector: '.stat-card:nth-child(4)',
                content: '18个岗位自动化',
                supplementary: '这18个岗位的自动化是如何实现的？涉及哪些AI技术？',
                icon: 'fas fa-robot'
            },
            // Experience Timeline
            {
                selector: '.timeline-item:nth-child(1) .timeline-role',
                content: 'WikiFX AI业务负责人',
                supplementary: '请详细介绍一下你在WikiFX担任AI业务负责人期间的主要工作和成绩。',
                icon: 'fas fa-building'
            },
            {
                selector: '.timeline-item:nth-child(2) .timeline-role',
                content: '韩创网络科技 AI产品经理',
                supplementary: '能详细说说你在韩创网络期间的笔灵AI论文和AI小说项目吗？',
                icon: 'fas fa-pen'
            },
            {
                selector: '.timeline-item:nth-child(3) .timeline-role',
                content: '确识数字科技 AI产品经理',
                supplementary: '请介绍一下你在确识数字科技期间的AI图文模型和Tiamat项目经验。',
                icon: 'fas fa-paint-brush'
            },
            // Projects Section
            {
                selector: '.project-card:nth-child(1) .project-title',
                content: 'AI业务中台自动化系统',
                supplementary: '能详细说说这个AI业务中台项目的技术实现和商业价值吗？',
                icon: 'fas fa-cogs'
            },
            {
                selector: '.project-card:nth-child(2) .project-title',
                content: '笔灵AI论文平台',
                supplementary: '笔灵AI论文平台是如何实现40%充值率（行业Top1）的？',
                icon: 'fas fa-graduation-cap'
            },
            {
                selector: '.project-card:nth-child(3) .project-title',
                content: 'AI小说创作平台',
                supplementary: 'AI小说平台是如何在2月内从0到1实现上线的？技术架构是怎样的？',
                icon: 'fas fa-book'
            },
            {
                selector: '.project-card:nth-child(4) .project-title',
                content: 'Tiamat AI绘画平台',
                supplementary: '请介绍一下Tiamat AI绘画平台的技术实现和用户增长情况。',
                icon: 'fas fa-palette'
            },
            {
                selector: '.project-card:nth-child(5) .project-title',
                content: '听脑AI录音转写',
                supplementary: '听脑AI是如何实现智能录音转写和差异化功能的？',
                icon: 'fas fa-microphone'
            },
            {
                selector: '.project-card:nth-child(6) .project-title',
                content: 'AI搜索平台',
                supplementary: '能详细说说AI搜索平台的架构设计和对标体验吗？',
                icon: 'fas fa-search'
            },
            // Skills Section - 每个大类只保留一个图标
            {
                selector: '.skill-major-category:nth-child(1) .major-title',
                content: '多模态AIGC构建能力',
                supplementary: '能详细介绍一下你在多模态AIGC构建方面的深度，涵盖LLM微调、Agent编排、Stable Diffusion、向量数据库、AI平台开发等全栈技术和具体项目经验？',
                icon: 'fas fa-brain'
            },
            {
                selector: '.skill-major-category:nth-child(2) .major-title',
                content: '商业化能力',
                supplementary: '你的商业化能力如何体现在千万级营收和ROI超300%的成果上？能详细说说0→1商业模式设计、数据驱动优化、产品策略规划的具体案例吗？',
                icon: 'fas fa-chart-line'
            },
            {
                selector: '.skill-major-category:nth-child(3) .major-title',
                content: '管理能力',
                supplementary: '请介绍一下你的管理能力，特别是如何统筹20+人团队、建立完整管理体系、项目管理和体系建设方面的经验？',
                icon: 'fas fa-users'
            },
            // Education Section
            {
                selector: '.education-card h3',
                content: '常熟理工学院教育背景',
                supplementary: '能介绍一下你的教育背景和在校期间的技术项目经历吗？',
                icon: 'fas fa-university'
            },
            // Contact Section
            {
                selector: '.contact-method:nth-child(1)',
                content: '邮箱联系方式',
                supplementary: '如果想要深入了解合作机会，通过邮箱沟通的话一般多久能回复？',
                icon: 'fas fa-envelope'
            },
            {
                selector: '.contact-method:nth-child(2)',
                content: '电话联系方式',
                supplementary: '电话沟通的话，什么时间比较方便？主要可以聊哪些话题？',
                icon: 'fas fa-phone'
            }
        ];

        contentSections.forEach((section, index) => {
            const targetElement = document.querySelector(section.selector);
            if (targetElement) {
                this.createContentIcon(targetElement, section, index);
            }
        });
    }

    // 创建内容图标
    createContentIcon(targetElement, sectionData, index) {
        const iconContainer = document.createElement('div');
        iconContainer.className = 'content-icon-container';
        iconContainer.setAttribute('data-content', sectionData.content);
        iconContainer.setAttribute('data-supplementary', sectionData.supplementary);

        const icon = document.createElement('i');
        icon.className = `content-icon ${sectionData.icon}`;

        iconContainer.appendChild(icon);

        // 智能定位：根据不同元素类型选择最佳位置
        const positioning = this.getOptimalIconPosition(targetElement, index);

        iconContainer.style.cssText = `
            position: absolute;
            ${positioning.position}
            width: 22px;
            height: 22px;
            background: linear-gradient(135deg, #00ffcc, #7b61ff);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 3px 10px rgba(0, 255, 204, 0.5);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            z-index: 150;
            opacity: 0;
            transform: scale(0.8);
            animation: iconReveal 0.6s ease-out forwards;
            animation-delay: ${index * 0.15}s;
        `;

        // 确保父元素有相对定位
        const parentElement = this.getIconParent(targetElement);
        if (parentElement) {
            parentElement.style.position = 'relative';
            parentElement.appendChild(iconContainer);
        }

        // 添加交互事件
        this.addIconInteractions(iconContainer, sectionData);
    }

    // 获取最佳图标位置
    getOptimalIconPosition(targetElement, index) {
        if (targetElement.closest('.stat-card')) {
            return { position: 'top: 8px; right: 8px;' };
        }
        if (targetElement.closest('.project-card')) {
            return { position: 'top: 12px; right: 12px;' };
        }
        if (targetElement.closest('.timeline-content')) {
            return { position: 'top: 8px; right: 8px;' };
        }
        if (targetElement.closest('.skill-item')) {
            return { position: 'top: 12px; right: 12px;' };
        }
        if (targetElement.closest('.skill-category')) {
            return { position: 'top: 15px; right: 15px;' };
        }
        if (targetElement.closest('.contact-method')) {
            return { position: 'top: 12px; right: 12px;' };
        }
        if (targetElement.closest('.education-card')) {
            return { position: 'top: 15px; right: 15px;' };
        }
        // 默认位置
        return { position: 'top: -6px; right: -6px;' };
    }

    // 获取图标父容器
    getIconParent(targetElement) {
        return targetElement.closest('.stat-card, .project-card, .timeline-content, .expertise-item, .personal-info, .leadership-traits, .skill-item, .skill-major-category, .contact-method, .education-card') || targetElement.parentElement;
    }

    // 添加图标交互效果
    addIconInteractions(iconContainer, sectionData) {
        // 点击事件
        iconContainer.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.handleIconClick(sectionData, iconContainer);
        });

        // 悬停效果
        iconContainer.addEventListener('mouseenter', () => {
            iconContainer.style.transform = 'scale(1.3)';
            iconContainer.style.boxShadow = '0 6px 20px rgba(0, 255, 204, 0.8)';
            iconContainer.style.background = 'linear-gradient(135deg, #7b61ff, #ff006e)';
        });

        iconContainer.addEventListener('mouseleave', () => {
            iconContainer.style.transform = 'scale(1)';
            iconContainer.style.boxShadow = '0 3px 10px rgba(0, 255, 204, 0.5)';
            iconContainer.style.background = 'linear-gradient(135deg, #00ffcc, #7b61ff)';
        });

        // 为父容器添加悬停效果
        const parentElement = iconContainer.parentElement;
        if (parentElement) {
            parentElement.addEventListener('mouseenter', () => {
                iconContainer.style.opacity = '1';
                iconContainer.style.transform = 'scale(1.1)';
            });

            parentElement.addEventListener('mouseleave', () => {
                iconContainer.style.opacity = '0.8';
                iconContainer.style.transform = 'scale(1)';
            });
        }
    }

    // 处理图标点击
    handleIconClick(sectionData, iconContainer) {
        // 添加点击反馈动画
        iconContainer.style.transform = 'scale(0.9)';
        iconContainer.style.background = 'linear-gradient(135deg, #ff006e, #ffbe0b)';

        setTimeout(() => {
            iconContainer.style.transform = 'scale(1.2)';
            iconContainer.style.background = 'linear-gradient(135deg, #00ffcc, #7b61ff)';
        }, 150);

        // 打开聊天模态框
        this.openModal();

        // 构建问题
        const question = `关于"${sectionData.content}"：${sectionData.supplementary}`;

        // 显示点击成功通知
        if (window.portfolioApp && window.portfolioApp.showNotification) {
            window.portfolioApp.showNotification(`正在询问：${sectionData.content}`, 'info', 2000);
        }

        // 等待模态框完全打开后发送消息
        setTimeout(() => {
            if (this.chatModalInput) {
                this.chatModalInput.value = question;
                this.sendMessage();
            }
        }, 500);
    }


    // 切换模态框显示状态
    toggleModal() {
        if (this.isModalOpen) {
            this.closeModal();
        } else {
            this.openModal();
        }
    }

    // 打开模态框
    openModal() {
        this.robotBtn.classList.add('active');
        this.chatModal.classList.add('show');
        this.isModalOpen = true;
        setTimeout(() => {
            this.chatModalInput.focus();
        }, 300);
    }


    // 关闭模态框
    closeModal() {
        // 添加关闭动画
        this.robotBtn.classList.add('closing');
        this.robotBtn.classList.remove('active');

        this.chatModal.classList.remove('show');
        this.isModalOpen = false;

        // 300ms后移除closing类，恢复到默认状态
        setTimeout(() => {
            this.robotBtn.classList.remove('closing');
        }, 300);
    }

    async sendMessage() {
        const message = this.chatModalInput.value.trim();
        if (!message || this.isLoading) return;

        // 添加用户消息
        this.addUserMessage(message);
        this.chatModalInput.value = '';
        this.sendModalBtn.disabled = true;
        this.isLoading = true;

        // 显示加载指示器
        this.showTypingIndicator();

        try {
            const response = await this.callOpenAI(message);
            this.removeTypingIndicator();

            // 保存对话历史
            this.conversationHistory.push(
                { role: 'user', content: message },
                { role: 'assistant', content: response }
            );

        } catch (error) {
            this.removeTypingIndicator();
            this.handleError(error);
            console.error('AI Assistant Error:', error);
        } finally {
            this.isLoading = false;
        }
    }

    async callOpenAI(userMessage) {
        // 构建系统提示词
        const systemPrompt = this.buildSystemPrompt();

        // 构建消息历史
        const messages = [
            { role: 'system', content: systemPrompt },
            ...this.conversationHistory.slice(-10), // 保持最近10轮对话
            { role: 'user', content: userMessage }
        ];

        const requestBody = {
            model: OPENAI_CONFIG.MODEL,
            messages: messages,
            max_tokens: OPENAI_CONFIG.MAX_TOKENS,
            temperature: OPENAI_CONFIG.TEMPERATURE,
            stream: true
        };

        const response = await fetch(OPENAI_CONFIG.API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_CONFIG.API_KEY}`
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(`HTTP ${response.status}: ${errorData.error?.message || 'API request failed'}`);
        }

        // 流式处理响应
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let fullResponse = '';
        let isStreamComplete = false;
        let finishReason = null;

        // 创建消息容器用于流式显示
        const messageDiv = this.createAIMessageContainer();

        try {
            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                const lines = chunk.split('\n');

                for (const line of lines) {
                    if (line.startsWith('data: ')) {
                        const data = line.slice(6).trim();
                        if (data === '[DONE]') {
                            isStreamComplete = true;
                            break;
                        }

                        try {
                            const json = JSON.parse(data);
                            const choice = json.choices?.[0];

                            if (choice?.delta?.content) {
                                fullResponse += choice.delta.content;
                                this.updateStreamingMessage(messageDiv, fullResponse);
                            }

                            // 检查完成原因
                            if (choice?.finish_reason) {
                                finishReason = choice.finish_reason;
                            }
                        } catch (e) {
                            console.warn('Failed to parse streaming chunk:', e);
                        }
                    }
                }

                if (isStreamComplete) break;
            }
        } catch (error) {
            console.error('Streaming error:', error);
            throw new Error('Stream interrupted: ' + error.message);
        }

        // 检查响应完整性
        if (!isStreamComplete && finishReason !== 'stop') {
            console.warn('Response may be truncated. Finish reason:', finishReason);
            if (finishReason === 'length') {
                fullResponse += '\n\n⚠️ **回答因长度限制被截断，如需完整信息请直接联系我**\n\n📞 **电话：18931212098**\n📧 **邮箱：magicalaci@gmail.com**';
            } else if (!isStreamComplete) {
                fullResponse += '\n\n⚠️ **响应可能不完整，建议刷新后重试或直接联系我获取完整信息**\n\n📞 **电话：18931212098**\n📧 **邮箱：magicalaci@gmail.com**';
            }
        }

        // 验证响应长度合理性
        if (fullResponse.length < 50 && !fullResponse.includes('抱歉') && !fullResponse.includes('错误')) {
            console.warn('Response seems too short, possible truncation');
            fullResponse += '\n\n💡 **如果回答不完整，请直接联系我获取详细信息**\n\n📞 **电话：18931212098**\n📧 **邮箱：magicalaci@gmail.com**';
        }

        // 移除打字光标
        const finalTextElement = messageDiv.querySelector('.streaming-text');
        if (finalTextElement) {
            finalTextElement.innerHTML = this.formatMessage(fullResponse);
        }

        return fullResponse;
    }

    buildSystemPrompt() {
        return `你是于鹤炜本人的AI分身，专业的AI产品经理。你必须严格基于我的真实简历信息回答问题，每个回答都要有具体的数据支撑和项目案例。

${YU_HEWEI_PROFILE}

【核心回答原则】：
1. **数据驱动**：每个回答必须包含具体数字和成果，如"千万级营收"、"650万+成本节省"、"效率提升300%"等
2. **项目佐证**：引用具体项目案例，如"在WikiFX的智能翻译系统"、"笔灵AI论文平台"等
3. **技术深度**：详细说明技术实现，如"基于LLM微调+工程化方案"、"Multi Agent架构+AI爬虫系统"
4. **商业价值**：强调每个项目的商业成果，如"充值率40%（行业Top1）"、"客单价提升125%"

【回答格式要求 - 使用Markdown语法】：
- 使用 **粗体** 来强调关键数据和成果
- 使用 ## 标题 来组织内容结构
- 使用 - 列表项 来展示具体案例
- 使用数字列表 1. 2. 3. 来展示步骤或分点说明
- 在关键联系信息处使用：📞 **电话：18931212098** 📧 **邮箱：magicalaci@gmail.com**
- 使用表情符号开头的段落，如：🎯 **核心优势** 📈 **商业成果** 💰 **营收数据**

【回答结构模板】：
🎯 **直接回答核心问题**

## 具体案例与数据
- 项目案例1：具体数据和成果
- 项目案例2：技术实现和商业价值
- 项目案例3：关键指标和行业对比

## 技术深度展示
1. 技术实现细节
2. 工程化方案
3. 商业化落地过程

💡 **核心价值总结**

如需深入了解，欢迎直接联系：
📞 **电话：18931212098**（工作时间随时接听）
📧 **邮箱：magicalaci@gmail.com**（24小时内必回复）

【质量标准】：
- 必须有具体数字支撑，避免空泛描述
- 每个技术点都要有对应的项目实践
- 商业成果要量化展示
- 使用Markdown格式让内容结构清晰易读
- 如果问题超出简历范围或不确定，直接说"这个问题比较具体，建议您直接联系我详聊"

【语言风格】：第一人称，专业自信，数据导向，案例丰富，结构化展示。

记住：你代表的是一个有4年AI产品经验、主导千万级营收、节省650万+成本的资深AI产品经理。每句话都要体现这种专业水准，并用Markdown格式让回答更加清晰专业。`;
    }

    addUserMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user-message';
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="message-content">
                <p>${this.escapeHtml(message)}</p>
            </div>
        `;
        this.chatModalMessages.appendChild(messageDiv);
        this.scrollToBottom();
    }

    createAIMessageContainer() {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message ai-message';
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <p class="streaming-text"></p>
            </div>
        `;
        this.chatModalMessages.appendChild(messageDiv);
        this.scrollToBottom();
        return messageDiv;
    }

    updateStreamingMessage(messageDiv, content) {
        const textElement = messageDiv.querySelector('.streaming-text');
        if (textElement) {
            // 使用 innerHTML 而非 textContent 以支持格式化
            textElement.innerHTML = this.formatMessage(content) + '<span class="typing-cursor">|</span>';

            // 确保内容完全显示
            textElement.style.maxHeight = 'none';
            textElement.style.overflow = 'visible';

            this.scrollToBottom();
        }
    }

    addAIMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message ai-message';
        messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <p>${this.formatMessage(message)}</p>
            </div>
        `;
        this.chatModalMessages.appendChild(messageDiv);
        this.scrollToBottom();
    }

    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message ai-message typing-indicator';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="message-content">
                <div class="typing-indicator">
                    <span>正在思考</span>
                    <div class="typing-dots">
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                        <div class="typing-dot"></div>
                    </div>
                </div>
            </div>
        `;
        this.chatModalMessages.appendChild(typingDiv);
        this.scrollToBottom();
    }

    removeTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    handleError(error) {
        let errorMessage = '抱歉，AI助手遇到了技术问题，无法正常回答您的问题。';

        if (error.message.includes('401')) {
            errorMessage = '身份验证问题，AI助手暂时无法工作。';
        } else if (error.message.includes('429')) {
            errorMessage = '请求过于频繁，AI助手需要休息一下。';
        } else if (error.message.includes('500')) {
            errorMessage = 'AI服务暂时不可用，系统正在维护中。';
        }

        errorMessage += `

**🎯 不过别担心，您可以直接联系我本人：**

📞 **电话：18931212098**（工作时间随时接听）
📧 **邮箱：magicalaci@gmail.com**（24小时内必回复）

我会亲自为您详细解答任何关于AI产品、项目经验、技术能力或合作机会的问题。直接沟通效果会更好！

期待与您的深入交流 ✨`;

        this.addAIMessage(errorMessage);

        // 显示错误通知
        if (window.portfolioApp && window.portfolioApp.showNotification) {
            window.portfolioApp.showNotification('建议直接联系本人沟通', 'warning');
        }
    }

    clearChat() {
        // 保留初始消息
        const initialMessage = this.chatModalMessages.children[0];
        this.chatModalMessages.innerHTML = '';
        if (initialMessage) {
            this.chatModalMessages.appendChild(initialMessage);
        }

        // 清空对话历史
        this.conversationHistory = [];

        // 显示清空通知
        if (window.portfolioApp && window.portfolioApp.showNotification) {
            window.portfolioApp.showNotification('对话已清空', 'info');
        }
    }

    scrollToBottom() {
        // 检测是否为移动设备
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (isMobile) {
            // 移动端使用smooth滚动，并添加延迟确保DOM更新完成
            setTimeout(() => {
                this.chatModalMessages.scrollTo({
                    top: this.chatModalMessages.scrollHeight,
                    behavior: 'smooth'
                });
            }, 100);
        } else {
            // 桌面端直接滚动
            this.chatModalMessages.scrollTop = this.chatModalMessages.scrollHeight;
        }
    }

    escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    formatMessage(message) {
        // 首先转义HTML，但保留Markdown语法
        let formatted = message;

        // 处理Markdown语法

        // 1. 处理粗体 **text**
        formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong style="color: #00ffcc;">$1</strong>');

        // 2. 处理标题 ##
        formatted = formatted.replace(/^## (.+)$/gm, '<h3 style="color: #00ffcc; margin: 1.5rem 0 0.5rem 0; font-size: 1.1rem;">$1</h3>');

        // 3. 处理列表项 - 或 •
        formatted = formatted.replace(/^[•\-\*]\s+(.+)$/gm, '<div style="margin: 0.5rem 0; padding-left: 1rem; border-left: 2px solid #00ffcc; color: #b4b9d2;">▸ $1</div>');

        // 4. 处理数字列表 1.
        formatted = formatted.replace(/^(\d+)\.\s+(.+)$/gm, '<div style="margin: 0.5rem 0; padding-left: 1rem; border-left: 2px solid #7b61ff; color: #b4b9d2;"><span style="color: #7b61ff; font-weight: 600;">$1.</span> $2</div>');

        // 5. 处理代码块 `code`
        formatted = formatted.replace(/`([^`]+)`/g, '<code style="background: rgba(0, 255, 204, 0.1); color: #00ffcc; padding: 0.2rem 0.4rem; border-radius: 4px; font-family: \'JetBrains Mono\', monospace;">$1</code>');

        // 6. 处理分隔线 --- 或 ***
        formatted = formatted.replace(/^(---|\*\*\*)$/gm, '<hr style="border: none; height: 1px; background: linear-gradient(90deg, transparent, #00ffcc, transparent); margin: 1rem 0;">');

        // 7. 处理表情符号后的文本（给予特殊样式）
        formatted = formatted.replace(/^([🎯📈💰🚀⚡💡👥📊🔧])\s*\*\*(.+?)\*\*/gm, '<div style="margin: 1rem 0;"><span style="font-size: 1.2rem;">$1</span> <strong style="color: #00ffcc; font-size: 1.05rem;">$2</strong></div>');

        // 8. 处理电话和邮箱特殊格式
        formatted = formatted.replace(/📞\s*\*\*电话：(.+?)\*\*/g, '<div style="background: rgba(0, 255, 204, 0.1); padding: 0.5rem 1rem; border-radius: 8px; margin: 0.5rem 0;"><span style="color: #00ffcc;">📞</span> <strong style="color: #00ffcc;">电话：$1</strong></div>');
        formatted = formatted.replace(/📧\s*\*\*邮箱：(.+?)\*\*/g, '<div style="background: rgba(0, 255, 204, 0.1); padding: 0.5rem 1rem; border-radius: 8px; margin: 0.5rem 0;"><span style="color: #00ffcc;">📧</span> <strong style="color: #00ffcc;">邮箱：$1</strong></div>');

        // 9. 处理段落间距（双换行）
        formatted = formatted.replace(/\n\n/g, '<br><br>');

        // 10. 处理单换行
        formatted = formatted.replace(/\n/g, '<br>');

        // 11. 高亮关键数据和项目名称
        const keywords = [
            'AI产品经理', 'LLM微调', 'Agent编排', 'Stable Diffusion', 'Multi-Agent',
            '1000万', '650万', '300%', '40%', '125%', '6%', 'ROI超300%',
            'WikiFX', '笔灵AI', 'Tiamat', '听脑AI', 'AI业务中台', 'AI小说',
            '0→1', '2月内', '95%', '商业化', '全栈AI'
        ];

        keywords.forEach(keyword => {
            const regex = new RegExp(`(?<!<[^>]*)(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})(?![^<]*>)`, 'gi');
            formatted = formatted.replace(regex, '<span style="color: #00ffcc; font-weight: 600;">$1</span>');
        });

        return formatted;
    }

    // 节流函数
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // 获取预设问题的回答
    getPresetAnswer(question) {
        const presetAnswers = {
            '我想了解你的核心AI项目经验，特别是商业化成果': `🎯 **我4年来深耕AI产品领域，主导了6大产品线，累计营收突破1000万**

## 核心项目案例与数据

**📈 笔灵AI论文平台**（2024.04-2024.12）
- 降AIGC痕迹功能充值率达**40%**，这是**行业Top1**的成绩
- 客单价从40元提升到90元，增长**125%**
- 技术架构：基于GPT系列模型+agent流程，解决了查重和去重核心痛点

**💰 WikiFX AI业务中台**（2025.07至今）
- 年度预计节省成本**650万+**（翻译55万+人力595万）
- 智能翻译系统成本骤降**95%**（60万→5万/年）
- 技术实现：大模型微调+工程化方案，解决特殊符号识别难题

**🚀 AI小说创作平台**（2024.09-2025.04）
- **2月内**从0到1构建完整产品体系，包含**15个核心模块**
- 日均转化率达**8%**，远超行业平均水平
- 核心技术：dify搭建agent流程+向量数据库实现情节连贯性

💡 **我的核心优势是将前沿AI技术快速转化为实际商业价值，平均2个月完成创新验证到规模化落地。**`,

            '能详细说说你主导的千万级营收是如何实现的吗？': `🎯 **我主导的产品矩阵实现千万级营收，主要通过三个关键策略：**

## 差异化产品定位
- **笔灵AI论文**：专注降AIGC痕迹，解决用户核心痛点，充值率**40%**（行业最高）
- **AI小说平台**：构建角色一致性保持算法，日均充值率**6%**
- **听脑AI录音转写**：智能识别+差异化功能模块，客单价提升**30%**

## 快速验证与迭代
1. 建立"使用率-受限率-转化率-客单价"**四维优化模型**
2. 平均**2个月**完成0→1上线，最快**2周**商业化重构见效
3. **ROI均超300%**，每个产品都实现正向现金流

## 技术驱动降本增效
- **WikiFX业务中台**：**18个岗位**自动化，替代15人团队
- 整体运营成本降低**60%**，年度节省**650万+**
- 错误率控制在**5%**以内，效率提升**300%**

📊 **具体成果数据**
- 论文产品客单价：40元→90元（**+125%**）
- AI绘画平台：用户使用峰值增长**500%**，付费率**4%**
- 累计营收：**1000万+**，每个产品均盈利

💡 **关键是我既懂技术实现，又懂商业运营，能精准把握市场需求并快速产品化。**`,

            '我们想深入了解合作机会，你的联系方式是什么？': `🎯 **非常感谢您的关注！我对优质的合作机会一直保持开放态度**

## 直接联系方式

📞 **电话：18931212098**（工作时间随时可联系）
📧 **邮箱：magicalaci@gmail.com**（24小时内必回复）

## 我能为团队带来的价值

**🔧 技术能力**：LLM微调、Agent编排、Stable Diffusion等全栈AI技术
**📈 商业成果**：4年内主导千万级营收，ROI均超300%
**👥 管理经验**：统筹20+人团队，建立完整产品管理体系
**⚡ 创新能力**：平均2月完成0→1产品落地，最快2周见商业化效果

## 期望合作方向

1. **AI产品经理职位**（25-35K，上海）
2. **AI技术顾问/架构师**
3. **产品商业化咨询**
4. **创业项目合伙人**

🚀 **独特优势**

我不只是懂技术的产品经理，更是能创造实际商业价值的增长引擎。在WikiFX期间，我主导的AI业务预计为公司节省**650万+**年度成本，这种降本增效能力在任何公司都极具价值。

💡 **随时欢迎深入交流，期待我们能碰撞出更多AI产品的创新火花！**`
        };

        return presetAnswers[question] || null;
    }
}

// 快捷问题函数
function sendQuickQuestion(question) {
    if (window.aiAssistant) {
        // 确保模态框是打开的
        if (!window.aiAssistant.isModalOpen) {
            window.aiAssistant.openModal();
        }

        // 设置问题并发送
        window.aiAssistant.chatModalInput.value = question;
        window.aiAssistant.sendMessage();
    }
}

// 初始化AI助手
document.addEventListener('DOMContentLoaded', function() {
    // 延迟初始化，确保所有元素都加载完成
    setTimeout(() => {
        window.aiAssistant = new AIAssistant();

        // 添加一些初始化提示
        if (window.portfolioApp && window.portfolioApp.showNotification) {
            setTimeout(() => {
                window.portfolioApp.showNotification('AI助手已就绪，随时为您服务！', 'success');
            }, 3000);
        }
    }, 1000);
});

// 导出供全局使用
window.AIAssistant = AIAssistant;
window.sendQuickQuestion = sendQuickQuestion;