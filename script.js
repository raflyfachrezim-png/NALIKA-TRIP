// Fungsi Navigasi Halaman SPA
function showPage(pageId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => sec.classList.add('hidden'));

    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Tutup mobile menu
    document.getElementById('mobile-menu').classList.add('hidden');
    document.getElementById('menu-icon').className = 'fa-solid fa-bars';
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        icon.className = 'fa-solid fa-xmark';
    } else {
        menu.classList.add('hidden');
        icon.className = 'fa-solid fa-bars';
    }
}

function alertGede() {
    alert("Trip Gunung Gede Belum Tersedia saat ini ya, Cuy! Pantengin terus update selanjutnya di sosmed Nalika Trip!");
}

// Render Data dari database.js pas web dimuat
document.addEventListener("DOMContentLoaded", () => {
    // 1. Render Links Sosmed di Footer
    const footLinks = document.querySelectorAll(".footer-social-link");
    if(footLinks.length >= 3) {
        footLinks[0].href = NALIKA_DATABASE.socials.whatsapp;
        footLinks[1].href = NALIKA_DATABASE.socials.instagram;
        footLinks[2].href = NALIKA_DATABASE.socials.tiktok;
    }

    // 2. Render Halaman About
    document.getElementById("about-title").innerText = NALIKA_DATABASE.about.title;
    document.getElementById("about-desc1").innerText = NALIKA_DATABASE.about.desc1;
    document.getElementById("about-desc2").innerText = NALIKA_DATABASE.about.desc2;
    document.getElementById("about-img").src = NALIKA_DATABASE.about.image;

    // 3. Render Galeri Foto
    const galleryContainer = document.getElementById("gallery-grid");
    galleryContainer.innerHTML = NALIKA_DATABASE.gallery.map(item => `
        <div class="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-800 aspect-square">
            <img src="${item.image}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt="Galeri">
            <div class="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p class="text-xs text-amber-500 font-semibold">${item.tag}</p>
                <p class="text-sm font-medium">${item.caption}</p>
            </div>
        </div>
    `).join('');

    // 4. Render Detail Trip Kawah Ratu
    const kr = NALIKA_DATABASE.trips.kawahRatu;
    document.getElementById("kr-title").innerHTML = `One Day Trip <br><span class="text-amber-500">${kr.title}</span>`;
    document.getElementById("kr-price").innerText = `{kr.price} / Pax`;
    document.getElementById("kr-schedule").innerText = kr.schedule;
    document.getElementById("kr-mepo").innerText = kr.meetingPoint;
    document.getElementById("kr-desc").innerText = kr.desc;
    document.getElementById("kr-btn").href = kr.waLink;
    document.getElementById("kr-include").innerHTML = kr.includes.map(i => `<li>${i}</li>`).join('');
    document.getElementById("kr-exclude").innerHTML = kr.excludes.map(e => `<li>${e}</li>`).join('');

    // 5. Render Detail Trip Papandayan
    const pp = NALIKA_DATABASE.trips.papandayan;
    document.getElementById("pp-title").innerHTML = `One Day Trip <br><span class="text-amber-500">${pp.title}</span>`;
    document.getElementById("pp-price").innerText = `{pp.price} / Pax`;
    document.getElementById("pp-schedule").innerText = pp.schedule;
    document.getElementById("pp-mepo").innerText = pp.meetingPoint;
    document.getElementById("pp-desc").innerText = pp.desc;
    document.getElementById("pp-btn").href = pp.waLink;
    document.getElementById("pp-include").innerHTML = pp.includes.map(i => `<li>${i}</li>`).join('');
    document.getElementById("pp-exclude").innerHTML = pp.excludes.map(e => `<li>${e}</li>`).join('');
});
