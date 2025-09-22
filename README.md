# 于鹤炜 AI产品经理个人网站

一个现代化的AI产品经理个人作品集网站，集成了AI助手功能，支持与访客进行实时对话交流。

## 🌟 功能特点

### 核心功能
- **响应式设计** - 完美适配桌面、平板、手机设备
- **现代化UI** - 科技感十足的渐变色彩和动画效果
- **AI智能助手** - 基于ChatGPT的AI分身，可进行模拟面试和项目咨询
- **动态统计** - 实时动画展示关键成就数据
- **平滑滚动** - 流畅的页面导航和交互体验

### 页面结构
1. **首页 (Hero)** - 个人介绍和核心数据展示
2. **关于我 (About)** - 详细的个人信息和技能优势
3. **技能 (Skills)** - 技术栈全景图动态展示
4. **经历 (Experience)** - 工作经历时间线
5. **项目 (Projects)** - 核心项目案例展示
6. **教育 (Education)** - 教育背景和成就
7. **AI助手 (AI Assistant)** - 智能对话功能
8. **联系 (Contact)** - 联系方式和终端展示

## 🚀 本地部署

### 方法一：直接打开（推荐）
1. 导航到项目目录：
   ```bash
   cd /Users/wikiglobal/Downloads/Aci_coding/hh/portfolio-website/
   ```

2. 直接在浏览器中打开 `index.html` 文件：
   ```bash
   open index.html
   ```

### 方法二：本地服务器
如果遇到CORS问题，建议使用本地服务器：

1. 使用Python服务器：
   ```bash
   cd /Users/wikiglobal/Downloads/Aci_coding/hh/portfolio-website/
   python3 -m http.server 8000
   ```
   然后访问：http://localhost:8000

2. 使用Node.js服务器（如果已安装）：
   ```bash
   npx serve -s .
   ```

3. 使用VS Code Live Server扩展（如果使用VS Code）

## 🤖 AI助手配置

### API配置
AI助手已配置ChatGPT API，关键配置如下：
- **模型**：gpt-3.5-turbo
- **最大令牌**：500
- **温度**：0.7
- **API密钥**：已集成（请确保网络连接正常）

### 功能特点
- **第一人称回答**：以于鹤炜本人身份进行对话
- **智能理解**：可回答项目经历、技术能力、工作经验等问题
- **模拟面试**：支持HR进行模拟面试对话
- **联系方式提供**：自动提供联系方式便于深入沟通
- **快捷问题**：预设常见问题按钮，一键询问

### 快捷问题
- 🚀 AI项目经验
- 💰 商业化成果
- 🎯 模拟面试
- 📞 深入沟通

## 📁 项目结构

```
portfolio-website/
├── index.html          # 主HTML文件
├── css/
│   └── styles.css      # 样式表
├── js/
│   ├── app.js          # 主要功能脚本
│   └── ai-assistant.js # AI助手功能
├── images/             # 图片资源目录
├── assets/             # 其他资源文件
└── README.md           # 项目说明文档
```

## 🎨 技术栈

### 前端技术
- **HTML5** - 语义化结构
- **CSS3** - 现代样式和动画
- **JavaScript ES6+** - 交互功能
- **Font Awesome** - 图标库
- **Google Fonts** - 字体资源

### 核心库/框架
- **OpenAI API** - AI对话功能
- **Intersection Observer** - 滚动动画
- **CSS Grid & Flexbox** - 响应式布局
- **CSS Custom Properties** - 主题变量

### 动画效果
- **打字机效果** - 动态文字展示
- **数字计数动画** - 统计数据动画
- **滚动触发动画** - 元素入场效果
- **粒子背景** - 科技感背景动效
- **3D变换** - 卡片悬停效果

## ⚙️ 配置说明

### 响应式断点
- **移动设备**：< 768px
- **平板设备**：768px - 1024px
- **桌面设备**：> 1024px

### 颜色主题
```css
--primary: #00ffcc;      /* 主色调 - 青色 */
--secondary: #7b61ff;    /* 次要色 - 紫色 */
--accent: #ff006e;       /* 强调色 - 粉色 */
--bg-primary: #0a0e27;   /* 主背景 - 深蓝 */
--text-primary: #ffffff; /* 主文字 - 白色 */
```

## 🔧 自定义配置

### 修改个人信息
在 `js/ai-assistant.js` 文件中修改 `YU_HEWEI_PROFILE` 常量来更新个人简历信息。

### 修改API配置
在 `js/ai-assistant.js` 文件中修改 `OPENAI_CONFIG` 对象：
```javascript
const OPENAI_CONFIG = {
    API_KEY: 'your-api-key-here',
    MODEL: 'gpt-3.5-turbo',
    MAX_TOKENS: 500,
    TEMPERATURE: 0.7
};
```

### 修改样式主题
在 `css/styles.css` 文件的 `:root` 选择器中修改CSS变量。

## 🐛 问题排查

### 常见问题

1. **AI助手无响应**
   - 检查网络连接
   - 确认API密钥有效
   - 查看浏览器控制台错误信息

2. **样式显示异常**
   - 确保所有CSS文件路径正确
   - 检查浏览器是否支持现代CSS特性
   - 清除浏览器缓存

3. **动画效果不流畅**
   - 检查设备性能
   - 关闭浏览器硬件加速尝试
   - 减少并发动画效果

4. **移动端显示问题**
   - 确认viewport meta标签正确
   - 测试不同屏幕尺寸
   - 检查媒体查询断点

### 调试工具
- 浏览器开发者工具
- 控制台日志输出
- 网络请求监控
- 响应式设计模式

## 📱 浏览器兼容性

### 支持的浏览器
- **Chrome** 80+
- **Firefox** 75+
- **Safari** 13+
- **Edge** 80+

### 移动端支持
- **iOS Safari** 13+
- **Android Chrome** 80+
- **Samsung Internet** 12+

## 🚀 部署选项

### 静态网站托管
- **GitHub Pages** - 免费托管
- **Netlify** - 自动部署
- **Vercel** - 现代化部署
- **Firebase Hosting** - Google托管

### 服务器部署
- **Nginx** - 高性能Web服务器
- **Apache** - 传统Web服务器
- **CDN加速** - 全球内容分发

## 📞 技术支持

如有技术问题或需要定制开发，请联系：

**于鹤炜**
- 📱 电话：18931212098
- 📧 邮箱：magicalaci@gmail.com
- 🏙️ 位置：上海

---

🎯 **项目目标**：为AI产品经理打造专业的个人品牌展示平台，结合AI技术提升用户交互体验。

⚡ **更新日期**：2025年9月