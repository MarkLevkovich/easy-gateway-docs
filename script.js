// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Навигация
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.doc-section');
    
    // Показать первый раздел
    showSection('overview');
    
    // Обработчики для навигации
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            showSection(targetId);
            
            // Обновить активную ссылку
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Прокрутить вверх
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    
    // Функция показа раздела
    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }
});

// Копирование кода
function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const code = codeBlock.querySelector('code').textContent;
    
    // Удалить символы приглашения командной строки
    const cleanCode = code.replace(/\$\s*/g, '').replace(/\>\>\>\s*/g, '');
    
    navigator.clipboard.writeText(cleanCode).then(() => {
        button.textContent = 'copied';
        button.style.color = '#fff';
        button.style.backgroundColor = '#238636';
        
        setTimeout(() => {
            button.textContent = 'copy';
            button.style.color = '';
            button.style.backgroundColor = '';
        }, 1500);
    }).catch(err => {
        console.error('copy error:', err);
        button.textContent = 'error';
        setTimeout(() => {
            button.textContent = 'copy';
        }, 1500);
    });
}