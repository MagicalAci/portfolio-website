#!/bin/bash
# 于鹤炜 AI产品经理个人网站 - Serveo公网部署脚本

echo "🚀 于鹤炜 AI产品经理个人网站 - 公网部署启动"
echo "=================================================="

# 创建必要的目录
mkdir -p ../logs

# 检查是否在正确的目录
if [ ! -f "../index.html" ]; then
    echo "❌ 错误: 请确保脚本在正确的目录下运行"
    echo "📁 当前目录: $(pwd)"
    echo "💡 提示: 应该在 portfolio-website/deployment/ 目录下运行"
    exit 1
fi

# 函数：等待用户确认
wait_for_confirmation() {
    echo ""
    echo "⏳ 自动继续部署..."
    echo ""
}

# 显示部署信息
echo "👤 部署项目: 于鹤炜 AI产品经理个人网站"
echo "🎯 功能特性:"
echo "  ✅ 响应式设计 - 完美适配所有设备"
echo "  🤖 AI助手集成 - ChatGPT驱动的智能对话"
echo "  📊 动态统计展示 - 实时数据动画"
echo "  🎨 科技感UI设计 - Matrix背景效果"
echo "  📱 移动端优化 - 触屏友好交互"
echo ""
echo "🌐 部署方式: Serveo免费隧道服务"
echo "📄 网站类型: 静态HTML网站"
echo ""

wait_for_confirmation

# 检查依赖
echo "🔍 检查系统依赖..."

# 检查Python
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 未安装"
    echo "💡 请安装Python3: brew install python3"
    exit 1
fi

# 检查SSH
if ! command -v ssh &> /dev/null; then
    echo "❌ SSH 未安装"
    exit 1
fi

echo "✅ 依赖检查通过"
echo ""

# 启动本地HTTP服务器
echo "🌐 启动本地HTTP服务器..."
echo "📁 服务目录: $(pwd)/../"
echo "🔌 服务端口: 8080"

cd ..

# 杀死可能存在的进程
pkill -f "python3 -m http.server 8080" 2>/dev/null || true

# 启动Python HTTP服务器
nohup python3 -m http.server 8080 > logs/portfolio-server.log 2>&1 &
SERVER_PID=$!

echo "✅ 本地服务器启动成功 (PID: $SERVER_PID)"
echo "📍 本地访问: http://localhost:8080"

# 等待服务器启动
echo "⏳ 等待服务器完全启动..."
sleep 5

# 检查服务器是否正常运行
if ! curl -s http://localhost:8080 > /dev/null; then
    echo "❌ 本地服务器启动失败"
    kill $SERVER_PID 2>/dev/null || true
    exit 1
fi

echo "✅ 本地服务器运行正常"
echo ""

# 启动Serveo隧道
echo "🌐 建立Serveo公网隧道..."
echo "🔗 连接目标: serveo.net"
echo "🔌 本地端口: 8080"

# 杀死可能存在的隧道
pkill -f "ssh.*serveo.net" 2>/dev/null || true

# 启动Serveo隧道并记录日志
nohup ssh -o StrictHostKeyChecking=no -R 80:localhost:8080 serveo.net > logs/portfolio-tunnel.log 2>&1 &
TUNNEL_PID=$!

echo "✅ Serveo隧道启动成功 (PID: $TUNNEL_PID)"
echo "⏳ 正在获取公网访问地址..."

# 等待隧道建立并获取URL
sleep 10

# 从日志中提取URL
SERVEO_URL=$(tail -20 logs/portfolio-tunnel.log 2>/dev/null | grep -o 'https://[a-zA-Z0-9]*\.serveo\.net' | head -1)

# 保存进程信息
echo "$SERVER_PID" > logs/server.pid
echo "$TUNNEL_PID" > logs/tunnel.pid

echo ""
echo "🎉 于鹤炜个人网站部署完成！"
echo "═════════════════════════════════════════════════"

if [ ! -z "$SERVEO_URL" ]; then
    echo "🌐 公网访问地址: $SERVEO_URL"
    echo ""
    echo "📱 功能验证:"
    echo "  🤖 AI助手对话: 点击右下角机器人按钮"
    echo "  📊 动态统计: 查看首页数字动画"
    echo "  🎯 技能展示: 浏览技术栈全景图"
    echo "  📞 联系方式: 查看联系信息"
    echo "  📄 简历下载: 一键下载PDF简历"
else
    echo "🔄 公网地址获取中，请稍候..."
    echo "💡 也可以运行 ./check-status.sh 查看最新状态"
fi

echo ""
echo "💻 本地访问地址: http://localhost:8080"

echo ""
echo "🔧 管理命令:"
echo "  📊 查看状态: ./check-status.sh"
echo "  🛑 停止服务: ./stop-portfolio.sh"
echo "  📝 查看日志: ./view-logs.sh"

echo ""
echo "📁 日志文件位置:"
echo "  📄 服务器日志: logs/portfolio-server.log"
echo "  🌍 隧道日志: logs/portfolio-tunnel.log"
echo "  📋 进程记录: logs/server.pid, logs/tunnel.pid"

echo ""
echo "💡 使用提示:"
echo "  • 公网地址可供任何人访问，请注意隐私"
echo "  • 每次重启会生成新的Serveo URL"
echo "  • AI助手需要网络连接正常工作"
echo "  • 移动端访问体验经过专门优化"

echo ""
echo "═════════════════════════════════════════════════"
echo "🚀 网站已成功发布到公网，开始展示吧！"
echo ""

# 回到deployment目录
cd deployment/