#!/bin/bash
# 停止于鹤炜个人网站的所有服务

echo "🛑 停止于鹤炜个人网站服务..."
echo "=================================="

# 读取并终止服务器进程
if [ -f "../logs/server.pid" ]; then
    SERVER_PID=$(cat ../logs/server.pid)
    echo "🔌 停止HTTP服务器 (PID: $SERVER_PID)..."
    kill $SERVER_PID 2>/dev/null || true
    rm -f ../logs/server.pid
    echo "✅ HTTP服务器已停止"
else
    echo "⚠️  未找到服务器进程记录"
    # 备用方法：强制杀死所有python服务器
    pkill -f "python3 -m http.server 8080" 2>/dev/null || true
    echo "✅ 已尝试清理所有HTTP服务器进程"
fi

# 读取并终止隧道进程
if [ -f "../logs/tunnel.pid" ]; then
    TUNNEL_PID=$(cat ../logs/tunnel.pid)
    echo "🌐 停止Serveo隧道 (PID: $TUNNEL_PID)..."
    kill $TUNNEL_PID 2>/dev/null || true
    rm -f ../logs/tunnel.pid
    echo "✅ Serveo隧道已停止"
else
    echo "⚠️  未找到隧道进程记录"
    # 备用方法：强制杀死所有SSH隧道
    pkill -f "ssh.*serveo.net" 2>/dev/null || true
    echo "✅ 已尝试清理所有Serveo隧道"
fi

# 检查端口占用
echo ""
echo "🔍 检查端口清理状态..."

if lsof -i :8080 >/dev/null 2>&1; then
    echo "⚠️  端口8080仍被占用，尝试强制清理..."
    lsof -ti :8080 | xargs kill -9 2>/dev/null || true
    sleep 2
    if lsof -i :8080 >/dev/null 2>&1; then
        echo "❌ 端口8080清理失败，可能需要手动处理"
    else
        echo "✅ 端口8080已释放"
    fi
else
    echo "✅ 端口8080已释放"
fi

echo ""
echo "📝 清理部署记录..."
# 移动日志文件而不是删除（保留历史）
if [ -f "../logs/portfolio-server.log" ]; then
    TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
    mv "../logs/portfolio-server.log" "../logs/portfolio-server_${TIMESTAMP}.log.bak"
    echo "✅ 服务器日志已备份"
fi

if [ -f "../logs/portfolio-tunnel.log" ]; then
    TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
    mv "../logs/portfolio-tunnel.log" "../logs/portfolio-tunnel_${TIMESTAMP}.log.bak"
    echo "✅ 隧道日志已备份"
fi

echo ""
echo "🎉 于鹤炜个人网站服务已完全停止！"
echo "═══════════════════════════════════════════"
echo ""
echo "📁 历史日志备份位置: ../logs/*.log.bak"
echo "🚀 重新部署命令: ./deploy-portfolio.sh"
echo ""