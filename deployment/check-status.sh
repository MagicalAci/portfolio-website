#!/bin/bash
# 检查于鹤炜个人网站部署状态

echo "📊 于鹤炜个人网站部署状态检查"
echo "=================================="

# 检查HTTP服务器状态
echo "🔌 HTTP服务器状态:"
if [ -f "../logs/server.pid" ]; then
    SERVER_PID=$(cat ../logs/server.pid)
    if ps -p $SERVER_PID > /dev/null; then
        echo "   ✅ 运行中 (PID: $SERVER_PID)"
        echo "   📍 本地地址: http://localhost:8080"

        # 测试本地访问
        if curl -s http://localhost:8080 >/dev/null; then
            echo "   🌐 本地访问: 正常"
        else
            echo "   ⚠️  本地访问: 异常"
        fi
    else
        echo "   ❌ 进程不存在 (PID: $SERVER_PID)"
        rm -f ../logs/server.pid
    fi
else
    echo "   ❓ 未找到进程记录"
    # 检查是否有Python服务器在运行
    if lsof -i :8080 >/dev/null 2>&1; then
        ACTIVE_PID=$(lsof -ti :8080)
        echo "   ⚠️  端口8080被占用 (PID: $ACTIVE_PID)"
    else
        echo "   ❌ 未运行"
    fi
fi

echo ""

# 检查Serveo隧道状态
echo "🌐 Serveo隧道状态:"
if [ -f "../logs/tunnel.pid" ]; then
    TUNNEL_PID=$(cat ../logs/tunnel.pid)
    if ps -p $TUNNEL_PID > /dev/null; then
        echo "   ✅ 运行中 (PID: $TUNNEL_PID)"

        # 从日志获取URL
        if [ -f "../logs/portfolio-tunnel.log" ]; then
            SERVEO_URL=$(tail -20 ../logs/portfolio-tunnel.log 2>/dev/null | grep -o 'https://[a-zA-Z0-9]*\.serveo\.net' | head -1)
            if [ ! -z "$SERVEO_URL" ]; then
                echo "   🌍 公网地址: $SERVEO_URL"

                # 测试公网访问
                echo "   🔍 测试公网访问..."
                if curl -s --max-time 10 "$SERVEO_URL" >/dev/null 2>&1; then
                    echo "   ✅ 公网访问: 正常"
                else
                    echo "   ⚠️  公网访问: 超时或异常"
                fi
            else
                echo "   ⏳ 公网地址: 获取中..."
            fi
        else
            echo "   ❓ 隧道日志文件不存在"
        fi
    else
        echo "   ❌ 进程不存在 (PID: $TUNNEL_PID)"
        rm -f ../logs/tunnel.pid
    fi
else
    echo "   ❓ 未找到进程记录"
    # 检查是否有SSH隧道在运行
    if pgrep -f "ssh.*serveo.net" >/dev/null; then
        SSH_PID=$(pgrep -f "ssh.*serveo.net")
        echo "   ⚠️  发现SSH隧道进程 (PID: $SSH_PID)"
    else
        echo "   ❌ 未运行"
    fi
fi

echo ""

# 系统资源使用情况
echo "💻 系统资源使用:"
if command -v ps &> /dev/null; then
    # CPU和内存使用情况
    if [ -f "../logs/server.pid" ] && [ -f "../logs/tunnel.pid" ]; then
        SERVER_PID=$(cat ../logs/server.pid)
        TUNNEL_PID=$(cat ../logs/tunnel.pid)

        if ps -p $SERVER_PID > /dev/null; then
            echo "   🖥️  服务器进程资源: $(ps -p $SERVER_PID -o pid,pcpu,pmem,time --no-headers)"
        fi

        if ps -p $TUNNEL_PID > /dev/null; then
            echo "   🌐 隧道进程资源: $(ps -p $TUNNEL_PID -o pid,pcpu,pmem,time --no-headers)"
        fi
    fi
fi

echo ""

# 日志文件状态
echo "📝 日志文件状态:"
if [ -f "../logs/portfolio-server.log" ]; then
    SERVER_LOG_SIZE=$(du -h ../logs/portfolio-server.log | cut -f1)
    echo "   📄 服务器日志: ${SERVER_LOG_SIZE} (../logs/portfolio-server.log)"
else
    echo "   📄 服务器日志: 不存在"
fi

if [ -f "../logs/portfolio-tunnel.log" ]; then
    TUNNEL_LOG_SIZE=$(du -h ../logs/portfolio-tunnel.log | cut -f1)
    echo "   🌍 隧道日志: ${TUNNEL_LOG_SIZE} (../logs/portfolio-tunnel.log)"
else
    echo "   🌍 隧道日志: 不存在"
fi

# 显示最近的隧道日志（查找URL）
if [ -f "../logs/portfolio-tunnel.log" ]; then
    echo ""
    echo "🔍 最新隧道信息:"
    echo "   $(tail -5 ../logs/portfolio-tunnel.log | grep -E "(serveo\.net|Forwarding)" | tail -2)"
fi

echo ""

# 网站功能状态
echo "🎯 网站功能状态:"
if curl -s http://localhost:8080 >/dev/null 2>&1; then
    echo "   ✅ 主页加载: 正常"
    echo "   🤖 AI助手: 集成ChatGPT API"
    echo "   📊 动态统计: Matrix背景效果"
    echo "   📱 响应式设计: 多设备适配"
    echo "   📄 简历下载: PDF文件支持"
else
    echo "   ❌ 主页加载: 异常"
fi

echo ""
echo "🔧 管理命令:"
echo "   🚀 重新部署: ./deploy-portfolio.sh"
echo "   🛑 停止服务: ./stop-portfolio.sh"
echo "   📝 查看日志: ./view-logs.sh"

echo ""
echo "=================================="

# 如果服务正常运行，显示访问信息
if [ -f "../logs/server.pid" ] && [ -f "../logs/tunnel.pid" ]; then
    SERVER_PID=$(cat ../logs/server.pid)
    TUNNEL_PID=$(cat ../logs/tunnel.pid)

    if ps -p $SERVER_PID > /dev/null && ps -p $TUNNEL_PID > /dev/null; then
        echo "✅ 于鹤炜个人网站运行正常，可以正常访问！"

        if [ -f "../logs/portfolio-tunnel.log" ]; then
            SERVEO_URL=$(tail -20 ../logs/portfolio-tunnel.log 2>/dev/null | grep -o 'https://[a-zA-Z0-9]*\.serveo\.net' | head -1)
            if [ ! -z "$SERVEO_URL" ]; then
                echo "🌍 立即访问: $SERVEO_URL"
            fi
        fi
    else
        echo "⚠️ 部分服务异常，建议重新部署"
    fi
else
    echo "❌ 网站未部署，请运行 ./deploy-portfolio.sh 开始部署"
fi

echo ""