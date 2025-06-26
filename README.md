# DeepSeek科普可视化平台

## 项目简介

这是一个关于大语言模型DeepSeek原理科普的H5网页应用，旨在通过通俗易懂、图文结合的方式，向大众科普AI语言模型的工作原理与应用场景。

## 🌐 在线访问

**项目已部署在GitHub Pages上，可以直接访问：**
- 主页面：https://ernestqhr.github.io/deepseek-science/
- 备用地址：https://ernestqhr.github.io/deepseeek/

## 功能特色

### 🎯 核心功能
- **首页介绍** - 项目概览和引导
- **三大原理** - 预训练、微调、生成的详细解释
- **应用场景** - 展示AI在多个领域的应用
- **模拟问答** - 交互式聊天体验
- **科学原理** - 深入的技术原理说明
- **关于页面** - 项目信息和AI协作说明

### 🎨 设计特色
- 现代化UI设计，响应式布局
- 流畅的动画效果和交互体验
- 移动端友好的设计
- 直观的可视化展示

### 💻 技术栈
- **前端**: HTML5 + CSS3 + JavaScript
- **动画**: CSS动画 + JavaScript交互
- **图标**: Font Awesome
- **部署**: GitHub Pages

## 🚀 快速开始

### 在线访问
直接访问：https://ernestqhr.github.io/deepseek-science/

### 本地运行
1. 克隆仓库：
```bash
git clone https://github.com/ErnestQHR/deepseek-science.git
cd deepseek-science
```

2. 启动本地服务器：
```bash
# 使用提供的启动脚本
./start.sh

# 或手动启动
python3 -m http.server 8000
```

3. 在浏览器中访问：`http://localhost:8000`

## 📁 项目结构

```
deepseek-science/
├── index.html              # 主页面
├── styles.css              # 样式文件
├── script.js               # JavaScript功能
├── start.sh                # 启动脚本
├── README.md               # 项目说明
├── 需求.md                 # 原始需求文档
├── .github/workflows/      # GitHub Actions配置
└── CNAME                   # 自定义域名配置
```

## 🌍 GitHub Pages部署

### 自动部署
项目已配置GitHub Actions，当你推送代码到main分支时，会自动部署到GitHub Pages。

### 手动部署步骤
1. 在GitHub上创建新仓库：`deepseek-science`
2. 推送代码到仓库：
```bash
git remote add origin https://github.com/ErnestQHR/deepseek-science.git
git branch -M main
git push -u origin main
```

3. 在仓库设置中启用GitHub Pages：
   - 进入仓库设置 (Settings)
   - 找到 "Pages" 选项
   - 选择 "Deploy from a branch"
   - 选择 "main" 分支和 "/ (root)" 文件夹
   - 点击 "Save"

4. 等待几分钟，你的网站就会在 `https://ernestqhr.github.io/deepseek-science/` 上线

## 📱 页面说明

### 1. 首页
- 项目标题和简介
- "开始探索"按钮引导用户进入

### 2. 原理介绍
- 三个标签页展示核心原理
- 左侧动画演示，右侧文字说明
- 包含类比理解和总结

### 3. 应用场景
- 卡片式展示6个主要应用领域
- 悬停动画效果

### 4. 模拟问答
- 聊天界面设计
- 预设问答数据
- 建议问题快速选择

### 5. 科学原理
- 三个核心技术详解
- 技术要点列表

### 6. 关于页面
- 作者团队信息
- 使用工具说明
- 技术栈展示
- AI协作声明

## 📱 响应式设计

项目完全支持响应式设计，适配以下设备：
- 桌面端 (1200px+)
- 平板端 (768px - 1199px)
- 手机端 (< 768px)

## 🌐 浏览器兼容性

支持所有现代浏览器：
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 👥 开发团队

- **作者**: DeepSeek科普团队
- **AI协作**: ChatGPT, DeepSeek
- **开发工具**: Cursor, Figma

## 📄 许可证

本项目仅供学习和科普使用。

## 🔄 更新日志

### v1.0.0 (2024-01-XX)
- 初始版本发布
- 完整的科普内容
- 响应式设计
- 交互功能实现
- GitHub Pages部署

---

**让AI技术更易懂，让知识更普及！** 🚀

**访问地址**: https://ernestqhr.github.io/deepseek-science/ 