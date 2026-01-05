// JavaScript Document
// 给按钮绑定点击事件：显示/隐藏技能列表
const btn = document.getElementById('btn');
const skillBox = document.getElementById('skill-box');

btn.addEventListener('click', function() {
    // 切换隐藏/显示状态
    if (skillBox.classList.contains('hidden')) {
        skillBox.classList.remove('hidden');
        btn.textContent = '收起技能列表';
    } else {
        skillBox.classList.add('hidden');
        btn.textContent = '点击查看我的技能';
    }
});