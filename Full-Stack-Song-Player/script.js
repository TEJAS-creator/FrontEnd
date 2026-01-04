// 1. CONFIGURATION
const SUPABASE_URL = 'https://obbptslpudgztkccuwoa.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9iYnB0c2xwdWRnenRrY2N1d29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njc1MTk2ODQsImV4cCI6MjA4MzA5NTY4NH0.LalH8pOUQ8vYimUS5SbxlhxKfgsatPMiwdGvbUmaT7c';
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
// 2. DOM ELEMENTS
const audioPlayer = document.getElementById('main-audio');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const songTitle = document.getElementById('current-song-title');
const songListUI = document.getElementById('song-list');
const progressBar = document.getElementById('progress-bar');
const disk = document.getElementById('disk');
const playerCard = document.getElementById('player-card');

// 3. STATE MANAGEMENT
let allSongs = []; // This will store the list of files
let currentSongIndex = 0;

function trimName(name) {
    let clean = name.replace('.mp3', '').replace(/[-_]/g, ' ');
    return clean.trim().split(' ')[0].toUpperCase();
}

// 4. FETCH SONGS
async function fetchSongs() {
    const { data, error } = await _supabase.storage.from('songs').list();
    if (error) return;

    allSongs = data.filter(file => file.name !== '.emptyFolderPlaceholder');
    songListUI.innerHTML = '';

    allSongs.forEach((file, index) => {
        const li = document.createElement('li');
        li.innerText = trimName(file.name);
        li.onclick = () => {
            currentSongIndex = index;
            playSong(allSongs[currentSongIndex].name);
        };
        songListUI.appendChild(li);
    });
}

// 5. PLAY SONG LOGIC
function playSong(fileName) {
    const { data } = _supabase.storage.from('songs').getPublicUrl(fileName);
    audioPlayer.src = data.publicUrl;
    songTitle.innerText = trimName(fileName);
    audioPlayer.play();
    updateUIState(true);
}

function updateUIState(isPlaying) {
    if (isPlaying) {
        playerCard.classList.add('playing');
        disk.style.animationPlayState = 'running';
        playBtn.innerText = "⏸";
    } else {
        playerCard.classList.remove('playing');
        disk.style.animationPlayState = 'paused';
        playBtn.innerText = "▶";
    }
}

// ... [Keep your existing CONFIG and DOM Elements] ...
const progressWrapper = document.getElementById('progress-wrapper');

// 1. CLICK TO SEEK (Spotify Style)
progressWrapper.onclick = (e) => {
    if (!audioPlayer.src || audioPlayer.duration === 0) return;

    // Get the width of the bar and where the user clicked
    const width = progressWrapper.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;

    // Calculate new time: (click position / total width) * total duration
    audioPlayer.currentTime = (clickX / width) * duration;
};

// 2. KEYBOARD CONTROLS (Left/Right Arrows)
document.addEventListener('keydown', (e) => {
    // Prevent scrolling the page with arrows if necessary
    if (e.key === "ArrowRight" || e.key === "ArrowLeft" || e.key === " ") {
        e.preventDefault();
    }

    if (!audioPlayer.src) return;

    if (e.key === "ArrowRight") {
        // Go 10 seconds forward
        audioPlayer.currentTime = Math.min(audioPlayer.currentTime + 10, audioPlayer.duration);
    } 
    else if (e.key === "ArrowLeft") {
        // Go 10 seconds backward
        audioPlayer.currentTime = Math.max(audioPlayer.currentTime - 10, 0);
    }
    else if (e.key === " ") {
        // Spacebar to Play/Pause
        if (audioPlayer.paused) {
            audioPlayer.play();
            updateUIState(true);
        } else {
            audioPlayer.pause();
            updateUIState(false);
        }
    }
});

// ... [Keep your existing fetchSongs, playSong, and updateUIState functions] ...

// Ensure your ontimeupdate stays active to move the bar
audioPlayer.ontimeupdate = () => {
    if (audioPlayer.duration) {
        const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.style.width = percent + "%";
    }
};

// 6. NAVIGATION CONTROLS
nextBtn.onclick = () => {
    currentSongIndex++;
    if (currentSongIndex >= allSongs.length) {
        currentSongIndex = 0; // Loop back to start
    }
    playSong(allSongs[currentSongIndex].name);
};

prevBtn.onclick = () => {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = allSongs.length - 1; // Go to last song
    }
    playSong(allSongs[currentSongIndex].name);
};

playBtn.onclick = () => {
    if (!audioPlayer.src) {
        // If nothing is loaded, play the first song
        if (allSongs.length > 0) playSong(allSongs[0].name);
        return;
    }
    if (audioPlayer.paused) {
        audioPlayer.play();
        updateUIState(true);
    } else {
        audioPlayer.pause();
        updateUIState(false);
    }
};

// 7. AUTO-PLAY NEXT
audioPlayer.onended = () => {
    nextBtn.click(); // Automatically trigger the "Next" button logic
};

// 8. PROGRESS BAR
audioPlayer.ontimeupdate = () => {
    if (audioPlayer.duration) {
        const percent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.style.width = percent + "%";
    }
};


fetchSongs();
