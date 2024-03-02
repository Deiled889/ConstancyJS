// 获取要进行动画的元素
const targetElement = document.getElementById('animatedElement');

// 定义动画的起始位置和结束位置
const startPosition = 0;
const endPosition = 100;

// 定义动画持续时间（毫秒）
const duration = 1000;

// 计算每毫秒的移动距离（匀速动画）
const velocity = (endPosition - startPosition) / duration;

// 获取动画开始的时间
const startTime = performance.now();

// 定义动画函数
function animate() {
    // 获取当前时间
    const currentTime = performance.now();
    // 计算动画已经进行的时间
    const elapsedTime = currentTime - startTime;
    // 计算当前位置
    const currentPosition = startPosition + velocity * elapsedTime;
    // 更新元素位置
    targetElement.style.left = currentPosition + 'px';
    // 判断动画是否完成
    if (elapsedTime < duration) {
        // 如果动画未完成，继续执行动画
        requestAnimationFrame(animate);
    }
}

// 开始动画
requestAnimationFrame(animate);
