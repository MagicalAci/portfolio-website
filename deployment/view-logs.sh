#!/bin/bash
# 查看于鹤炜个人网站的部署日志

echo "📝 于鹤炜个人网站 - 日志查看器"
echo "=================================="

# 函数：显示菜单
show_menu() {
    echo ""
    echo "选择要查看的日志："
    echo "1️⃣  服务器日志 (HTTP服务器运行日志)"
    echo "2️⃣  隧道日志 (Serveo公网隧道日志)"
    echo "3️⃣  实时监控 (所有日志的实时更新)"
    echo "4️⃣  错误日志 (只显示错误信息)"
    echo "5️⃣  清理日志 (清空所有日志文件)"
    echo "0️⃣  退出"
    echo ""
}

# 函数：查看服务器日志
view_server_log() {
    echo "📄 服务器日志 (HTTP Server Log):"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

    if [ -f "../logs/portfolio-server.log" ]; then
        echo "📁 文件: ../logs/portfolio-server.log"
        echo "📊 大小: $(du -h ../logs/portfolio-server.log | cut -f1)"
        echo ""

        # 显示最后50行
        echo "📋 最近50行日志:"
        echo "----------------------------------------"
        tail -50 ../logs/portfolio-server.log
    else
        echo "❌ 服务器日志文件不存在"
        echo "💡 提示: 请先运行 ./deploy-portfolio.sh 启动服务"
    fi
}

# 函数：查看隧道日志
view_tunnel_log() {
    echo "🌍 隧道日志 (Serveo Tunnel Log):"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

    if [ -f "../logs/portfolio-tunnel.log" ]; then
        echo "📁 文件: ../logs/portfolio-tunnel.log"
        echo "📊 大小: $(du -h ../logs/portfolio-tunnel.log | cut -f1)"
        echo ""

        # 提取并显示公网URL
        SERVEO_URL=$(tail -20 ../logs/portfolio-tunnel.log 2>/dev/null | grep -o 'https://[a-zA-Z0-9]*\.serveo\.net' | head -1)
        if [ ! -z "$SERVEO_URL" ]; then
            echo "🌐 当前公网地址: $SERVEO_URL"
            echo ""
        fi

        # 显示最后50行
        echo "📋 最近50行日志:"
        echo "----------------------------------------"
        tail -50 ../logs/portfolio-tunnel.log
    else
        echo "❌ 隧道日志文件不存在"
        echo "💡 提示: 请先运行 ./deploy-portfolio.sh 启动隧道"
    fi
}

# 函数：实时监控日志
monitor_logs() {
    echo "📊 实时日志监控 (按 Ctrl+C 退出):"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

    # 检查日志文件是否存在
    LOG_FILES=()
    if [ -f "../logs/portfolio-server.log" ]; then
        LOG_FILES+=("../logs/portfolio-server.log")
    fi
    if [ -f "../logs/portfolio-tunnel.log" ]; then
        LOG_FILES+=("../logs/portfolio-tunnel.log")
    fi

    if [ ${#LOG_FILES[@]} -eq 0 ]; then
        echo "❌ 没有找到日志文件"
        echo "💡 提示: 请先运行 ./deploy-portfolio.sh 启动服务"
        return
    fi

    echo "📁 监控文件: ${LOG_FILES[*]}"
    echo "⏰ 开始实时监控..."
    echo ""

    # 使用tail -f监控多个文件
    tail -f "${LOG_FILES[@]}" 2>/dev/null
}

# 函数：查看错误日志
view_error_logs() {
    echo "🚨 错误日志 (Error Logs Only):"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

    local found_errors=false

    # 检查服务器错误
    if [ -f "../logs/portfolio-server.log" ]; then
        echo "📄 服务器错误:"
        local server_errors=$(grep -i "error\|exception\|fail\|refused" ../logs/portfolio-server.log | tail -10)
        if [ ! -z "$server_errors" ]; then
            echo "$server_errors"
            found_errors=true
        else
            echo "   ✅ 无错误记录"
        fi
        echo ""
    fi

    # 检查隧道错误
    if [ -f "../logs/portfolio-tunnel.log" ]; then
        echo "🌍 隧道错误:"
        local tunnel_errors=$(grep -i "error\|exception\|fail\|refused\|timeout" ../logs/portfolio-tunnel.log | tail -10)
        if [ ! -z "$tunnel_errors" ]; then
            echo "$tunnel_errors"
            found_errors=true
        else
            echo "   ✅ 无错误记录"
        fi
        echo ""
    fi

    if [ "$found_errors" = false ]; then
        echo "🎉 恭喜！没有发现错误记录，系统运行正常"
    fi
}

# 函数：清理日志
clean_logs() {
    echo "🧹 清理日志文件:"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

    echo "⚠️  这将删除所有日志文件，是否继续？"
    read -p "输入 'yes' 确认清理: " confirm

    if [ "$confirm" = "yes" ]; then
        # 备份当前日志
        if [ -f "../logs/portfolio-server.log" ] || [ -f "../logs/portfolio-tunnel.log" ]; then
            TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
            echo "📦 创建备份..."

            if [ -f "../logs/portfolio-server.log" ]; then
                cp "../logs/portfolio-server.log" "../logs/portfolio-server_${TIMESTAMP}.log.bak"
                rm "../logs/portfolio-server.log"
                echo "   ✅ 服务器日志已备份并清理"
            fi

            if [ -f "../logs/portfolio-tunnel.log" ]; then
                cp "../logs/portfolio-tunnel.log" "../logs/portfolio-tunnel_${TIMESTAMP}.log.bak"
                rm "../logs/portfolio-tunnel.log"
                echo "   ✅ 隧道日志已备份并清理"
            fi

            echo ""
            echo "🎉 日志清理完成！"
            echo "📁 备份位置: ../logs/*_${TIMESTAMP}.log.bak"
        else
            echo "ℹ️  没有找到需要清理的日志文件"
        fi
    else
        echo "❌ 清理已取消"
    fi
}

# 主循环
while true; do
    show_menu
    read -p "请选择操作 (0-5): " choice

    case $choice in
        1)
            view_server_log
            ;;
        2)
            view_tunnel_log
            ;;
        3)
            monitor_logs
            ;;
        4)
            view_error_logs
            ;;
        5)
            clean_logs
            ;;
        0)
            echo "👋 退出日志查看器"
            break
            ;;
        *)
            echo "❌ 无效选择，请输入 0-5"
            ;;
    esac

    if [ "$choice" != "0" ]; then
        echo ""
        read -p "按 Enter 返回主菜单..."
    fi
done