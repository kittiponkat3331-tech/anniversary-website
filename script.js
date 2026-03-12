// Passcode validation
const CORRECT_PASSCODE = "140269";

function checkPasscode() {
    const input = document.getElementById('passcodeInput').value;
    const errorMsg = document.getElementById('errorMsg');
    
    if (input.length < 6) {
        errorMsg.textContent = '❌ กรุณากรอกรหัส 6 หลัก';
        return;
    }

    if (input === CORRECT_PASSCODE) {
        errorMsg.textContent = '';
        goToPage(2);
    } else {
        errorMsg.textContent = '❌ รหัสไม่ถูกต้อง';
        document.getElementById('passcodeInput').value = '';
    }
}

// Page navigation
function goToPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(`page${pageNumber}`);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    if (pageNumber === 1) {
        setTimeout(() => {
            document.getElementById('passcodeInput').focus();
        }, 500);
    }
}

// Save final message
function saveFinalMessage() {
    const message = document.getElementById('finalMessage').value.trim();

    if (!message) {
        alert('⚠️ กรุณากรอกข้อความ');
        return;
    }

    localStorage.setItem('anniversaryMessage', message);
    alert('✅ บันทึกเสร็จแล้ว!');
}

// Load saved message on page load
window.addEventListener('load', () => {
    const savedMessage = localStorage.getItem('anniversaryMessage');
    if (savedMessage)

