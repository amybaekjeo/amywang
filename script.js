// 打开模态框
function openFolder(id) {
    document.querySelectorAll('.modal').forEach(modal => modal.classList.remove('active'));
    let modal = document.getElementById(id);
    modal.classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

// 关闭模态框
function closeFolder() {
    document.querySelectorAll('.modal').forEach(modal => modal.classList.remove('active'));
    document.getElementById('overlay').classList.remove('active');
}

// 点击背景遮罩或模态框外关闭
window.onclick = function(event) {
    if (event.target.classList.contains('modal') || event.target.id === 'overlay') {
        closeFolder();
    }
}

// 键盘事件：按下 Esc 键关闭模态框
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeFolder();
    }
});
