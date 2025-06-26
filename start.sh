#!/bin/bash

echo "🚀 启动DeepSeek科普平台..."
echo "📱 项目将在浏览器中打开"
echo "🌐 访问地址: http://localhost:8000"
echo ""

# 检查Python是否可用
if command -v python3 &> /dev/null; then
    echo "✅ 使用Python3启动服务器..."
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "✅ 使用Python启动服务器..."
    python -m http.server 8000
else
    echo "❌ 未找到Python，请手动启动服务器"
    echo "💡 可以尝试: python3 -m http.server 8000"
    exit 1
fi 