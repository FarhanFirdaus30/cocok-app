/* =========================================================
   COCOK — Logic aplikasi
   Catatan: Ini adalah simulasi front-end. Semua data disimpan
   di localStorage browser (tidak ada server sungguhan).
   ========================================================= */

const STORE_KEYS = {
  USER: 'cocok_user',
  DECK_INDEX: 'cocok_deck_index',
  MATCHES: 'cocok_matches',
  LIKED: 'cocok_liked',
  CHAT_PREFIX: 'cocok_chat_',
};

/* ---------- Util penyimpanan ---------- */
function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}
function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/* ---------- Akun ---------- */
function getUser() {
  return readJSON(STORE_KEYS.USER, null);
}
function saveUser(user) {
  writeJSON(STORE_KEYS.USER, user);
}
function logoutUser() {
  localStorage.removeItem(STORE_KEYS.USER);
}
function requireAuth(redirectTo) {
  const user = getUser();
  if (!user) {
    window.location.href = redirectTo || 'index.html';
  }
  return user;
}

/* ---------- Deck (antrean profil) ---------- */
function getDeckIndex() {
  return readJSON(STORE_KEYS.DECK_INDEX, 0);
}
function setDeckIndex(i) {
  writeJSON(STORE_KEYS.DECK_INDEX, i);
}
function resetDeck() {
  setDeckIndex(0);
}

/* ---------- Suka & Match ---------- */
function getLiked() {
  return readJSON(STORE_KEYS.LIKED, []);
}
function addLiked(id) {
  const liked = getLiked();
  if (!liked.includes(id)) {
    liked.push(id);
    writeJSON(STORE_KEYS.LIKED, liked);
  }
}
function getMatches() {
  return readJSON(STORE_KEYS.MATCHES, []);
}
function addMatch(id) {
  const matches = getMatches();
  if (!matches.includes(id)) {
    matches.unshift(id);
    writeJSON(STORE_KEYS.MATCHES, matches);
  }
}
function isMatch(id) {
  return getMatches().includes(id);
}

// Peluang match: super like selalu match, like biasa 65% peluang.
function tryMatch(id, isSuper) {
  addLiked(id);
  const chance = isSuper ? 1 : 0.65;
  const matched = Math.random() < chance;
  if (matched) addMatch(id);
  return matched;
}

/* ---------- Chat ---------- */
function chatKey(id) {
  return STORE_KEYS.CHAT_PREFIX + id;
}
function getChat(id) {
  return readJSON(chatKey(id), []);
}
function saveChat(id, messages) {
  writeJSON(chatKey(id), messages);
}
function pushMessage(id, from, text) {
  const messages = getChat(id);
  messages.push({ from, text, time: Date.now() });
  saveChat(id, messages);
  return messages;
}
function lastMessage(id) {
  const messages = getChat(id);
  return messages.length ? messages[messages.length - 1] : null;
}
function formatTime(ts) {
  const d = new Date(ts);
  return d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
}

/* ---------- Bantuan profil ---------- */
function findProfile(id) {
  return PROFILES.find((p) => p.id === id);
}

/* ---------- Toast notifikasi ringan ---------- */
function showToast(message) {
  let toastEl = document.querySelector('.toast');
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.className = 'toast';
    document.body.appendChild(toastEl);
  }
  toastEl.textContent = message;
  toastEl.classList.add('show');
  clearTimeout(toastEl._timer);
  toastEl._timer = setTimeout(() => toastEl.classList.remove('show'), 2200);
}

/* ---------- Avatar builder (dipakai di semua halaman) ---------- */
function avatarStyle(seedString) {
  let seed = 0;
  for (let i = 0; i < seedString.length; i++) seed += seedString.charCodeAt(i);
  const [c1, c2] = paletteFor(seed);
  return `background: linear-gradient(135deg, ${c1}, ${c2});`;
}
