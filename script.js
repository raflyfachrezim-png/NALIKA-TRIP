function showPage(pageId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(sec => sec.classList.add('hidden'));

    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) mobileMenu.classList.add('hidden');
    const menuIcon = document.getElementById('menu-icon');
    if (menuIcon) menuIcon.className = 'fa-solid fa-bars';
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
    alert("Trip Gunung Gede Belum Tersedia saat ini ya, Bapee! Pantengin terus update selanjutnya di sosmed Nalika Trip!");
}

document.addEventListener("DOMContentLoaded", () => {
    // 1. Social Links
    const footLinks = document.querySelectorAll(".footer-social-link");
    if (footLinks.length >= 3 && typeof NALIKA_DATABASE !== 'undefined') {
        footLinks[0].href = NALIKA_DATABASE.socials.whatsapp;
        footLinks[1].href = NALIKA_DATABASE.socials.instagram;
        footLinks[2].href = NALIKA_DATABASE.socials.tiktok;
    }

    // 2. About Section
    if (typeof NALIKA_DATABASE !== 'undefined' && NALIKA_DATABASE.about) {
        document.getElementById("about-title").innerText = NALIKA_DATABASE.about.title;
        document.getElementById("about-desc1").innerText = NALIKA_DATABASE.about.desc1;
        document.getElementById("about-desc2").innerText = NALIKA_DATABASE.about.desc2;
        document.getElementById("about-img").src = NALIKA_DATABASE.about.image;
    }

    // 3. Gallery Grid
    const galleryContainer = document.getElementById("gallery-grid");
    if (galleryContainer && typeof NALIKA_DATABASE !== 'undefined' && NALIKA_DATABASE.gallery) {
        galleryContainer.innerHTML = NALIKA_DATABASE.gallery.map(item => `
            <div class="rounded-2xl overflow-hidden shadow-lg border border-emerald-800/40 h-48 md:h-60">
                <img src="${item.image}" alt="Galeri Nalika Trip" class="w-full h-full object-cover hover:scale-110 transition duration-500">
            </div>
        `).join('');
    }

    // 4. Kawah Ratu
    if (typeof NALIKA_DATABASE !== 'undefined' && NALIKA_DATABASE.trips && NALIKA_DATABASE.trips.kawahRatu) {
        const kr = NALIKA_DATABASE.trips.kawahRatu;
        document.getElementById("kr-title").innerHTML = `One Day Trip <br><span class="text-amber-500">${kr.title}</span>`;
        document.getElementById("kr-price").innerText = `${kr.price} / Pax`;
        document.getElementById("kr-schedule").innerText = kr.schedule;
        document.getElementById("kr-mepo").innerText = kr.meetingPoint;
        document.getElementById("kr-desc").innerText = kr.desc;
        document.getElementById("kr-btn").href = kr.waLink;
        document.getElementById("kr-include").innerHTML = kr.includes.map(i => `<li>${i}</li>`).join('');
        document.getElementById("kr-exclude").innerHTML = kr.excludes.map(e => `<li>${e}</li>`).join('');
    }

    // 5. Papandayan
    if (typeof NALIKA_DATABASE !== 'undefined' && NALIKA_DATABASE.trips && NALIKA_DATABASE.trips.papandayan) {
        const pp = NALIKA_DATABASE.trips.papandayan;
        document.getElementById("pp-title").innerHTML = `One Day Trip <br><span class="text-amber-500">${pp.title}</span>`;
        document.getElementById("pp-price").innerText = `${pp.price} / Pax`;
        document.getElementById("pp-schedule").innerText = pp.schedule;
        document.getElementById("pp-mepo").innerText = pp.meetingPoint;
        document.getElementById("pp-desc").innerText = pp.desc;
        document.getElementById("pp-btn").href = pp.waLink;
        document.getElementById("pp-include").innerHTML = pp.includes.map(i => `<li>${i}</li>`).join('');
        document.getElementById("pp-exclude").innerHTML = pp.excludes.map(e => `<li>${e}</li>`).join('');
    }
});
