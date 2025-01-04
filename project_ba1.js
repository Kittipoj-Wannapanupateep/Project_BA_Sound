document.addEventListener('DOMContentLoaded', function() {
    const soundButton = document.getElementById('sound-toggle');
    const soundIcon = soundButton.querySelector('.sound-icon');
    const backgroundMusic = document.getElementById('background-music');
    let isMuted = false;
    const characterDropdown = document.getElementById('character-dropdown');
    const backgroundContainer = document.getElementById('background-container');
    const clickSound = new Audio('audio/click.mp3');

    // ตั้งค่าเริ่มต้น
    soundButton.classList.remove('btn-light');
    soundButton.classList.add('btn-bright-success');
    backgroundMusic.volume = 0.5;

    // พั้งค่าพื้นหลังเริ่มต้น
    backgroundContainer.className = 'background-image bg-' + characterDropdown.value;

    // พยายามเล่นเพลงทันทีที่โหลดหน้า
    const playMusic = async () => {
        try {
            await backgroundMusic.play();
        } catch (err) {
            console.log('Auto-play prevented:', err);
            // ถ้าเล่นอัตโนมัติไม่ได้ ให้รอการ interact จากผู้ใช้
            document.addEventListener('click', function initPlay() {
                backgroundMusic.play();
                document.removeEventListener('click', initPlay);
            }, { once: true });
        }
    };

    playMusic();

    // ปุ่มควบคุมเสียง
    soundButton.addEventListener('click', function() {
        isMuted = !isMuted;
        
        if (isMuted) {
            // เปลี่ยนไอคอนเป็นปิดเสียงและหยุดเพลง
            soundIcon.src = "https://cdn-icons-png.flaticon.com/512/727/727240.png";
            soundButton.classList.remove('btn-bright-success');
            soundButton.classList.add('btn-danger');
            backgroundMusic.pause();
        } else {
            // เปลี่ยนไอคอนเป็นเปิดเสียงและเล่นเพลงต่อจากจุดที่หยุด
            soundIcon.src = "https://cdn-icons-png.flaticon.com/512/59/59284.png";
            soundButton.classList.remove('btn-danger');
            soundButton.classList.add('btn-bright-success');
            backgroundMusic.play();
        }
    });

    // เมื่อมีการเปลี่ยน option
    characterDropdown.addEventListener('change', function() {
        // ลบ class พื้นหลังเก่าทั้งหมดและเพิ่ม class ใหม่
        backgroundContainer.className = 'background-image bg-' + this.value;
    });

    // เพิ่มรายการไฟล์เสียงของ Mika และ Koyuki
    const mikaSounds = [
        'sound/mika/mika1.mp3',
        'sound/mika/mika2.mp3'
    ];

    const koyukiSounds = [
        'sound/koyuki/koyuki1.mp3',
        'sound/koyuki/koyuki2.mp3',
        'sound/koyuki/koyuki3.mp3'
    ];

    const reisaSounds = [
        'sound/reisa/reisa1.mp3',
        'sound/reisa/reisa2.mp3'
    ];

    // ฟังก์ชันสุ่มเสียง
    function getRandomSound(sounds) {
        const randomIndex = Math.floor(Math.random() * sounds.length);
        return sounds[randomIndex];
    }

    backgroundContainer.addEventListener('click', function(e) {
        const selectedCharacter = document.getElementById('character-dropdown').value;
        
        if (selectedCharacter === 'mika') {
            // สร้างภาพใหม่
            const clickImage = document.createElement('img');
            clickImage.src = 'https://i.pinimg.com/736x/61/c0/b4/61c0b472ee8ea17e1c49cf404dade55a.jpg';
            clickImage.className = 'click-image';
            
            // กำหนดตำแหน่งของภาพ
            clickImage.style.left = (e.pageX - 50) + 'px';
            clickImage.style.top = (e.pageY - 50) + 'px';
            
            // เพิ่มภาพลงในหน้าเว็บ
            document.body.appendChild(clickImage);
            
            // สุ่มและเล่นเสียง
            const randomSoundPath = getRandomSound(mikaSounds);
            const sound = new Audio(randomSoundPath);
            sound.volume = 0.2;
            sound.play();
            
            // ลบภาพหลังจากอนิเมชันจบ
            setTimeout(() => {
                clickImage.remove();
            }, 1000);
        } else if (selectedCharacter === 'koyuki') {
            // สร้างภาพใหม่
            const clickImage = document.createElement('img');
            clickImage.src = 'https://i.ytimg.com/vi/rAxKJz4FCrE/sddefault.jpg?sqp=-oaymwEmCIAFEOAD8quKqQMa8AEB-AHsA4AC4AOKAgwIABABGGUgUChcMA8=&rs=AOn4CLCdEEqu-Ld1LW-ugl5W_3qQpeiXwA';
            clickImage.className = 'click-image';
            
            // กำหนดตำแหน่งของภาพ
            clickImage.style.left = (e.pageX - 50) + 'px';
            clickImage.style.top = (e.pageY - 50) + 'px';
            
            // เพิ่มภาพลงในหน้าเว็บ
            document.body.appendChild(clickImage);
            
            // สุ่มและเล่นเสียง
            const randomSoundPath = getRandomSound(koyukiSounds);
            const sound = new Audio(randomSoundPath);
            sound.volume = 0.2;
            sound.play();
            
            // ลบภาพหลังจากอนิเมชันจบ
            setTimeout(() => {
                clickImage.remove();
            }, 1000);
        } else if (selectedCharacter === 'reisa') {
            // สร้างภาพใหม่
            const clickImage = document.createElement('img');
            clickImage.src = 'https://i.pinimg.com/736x/f0/51/14/f05114506cf2dbf10c3a8bc3fa5fcaa5.jpg';
            clickImage.className = 'click-image';
            
            // กำหนดตำแหน่งของภาพ
            clickImage.style.left = (e.pageX - 50) + 'px';
            clickImage.style.top = (e.pageY - 50) + 'px';
            
            // เพิ่มภาพลงในหน้าเว็บ
            document.body.appendChild(clickImage);
            
            // สุ่มและเล่นเสียง
            const randomSoundPath = getRandomSound(reisaSounds);
            const sound = new Audio(randomSoundPath);
            sound.volume = 0.2;
            sound.play();
            
            // ลบภาพหลังจากอนิเมชันจบ
            setTimeout(() => {
                clickImage.remove();
            }, 1000);
        }
    });
});
