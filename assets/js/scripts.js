const PROJECTS = {
  redbull: {
    img: 'assets/images/redbull.png',
    cat: 'Campagne · Conceptualisation créative',
    title: 'RedBull Advertising',
    date: 'Janvier 2025 · Sup’de Com',
    intro: 'Dans le cadre de mon cursus chez Sup’de Com, j’ai travaillé sur la conceptualisation d’une nouvelle campagne publicitaire pour RedBull. L’objectif : renforcer l’image de marque « Extreme » tout en y insufflant une dimension narrative plus profonde.',
    sections: [
      {
        title: 'Démarche créative', items: [
          'Analyse des cibles et des tendances actuelles du marché',
          'Réalisation complète du storyboard pour guider la production vidéo',
          'Travail sur le storytelling et la direction artistique'
        ]
      }
    ],
    canva: 'https://ineslalam.my.canva.site/page-10',
    tags: ['Storyboarding', 'Copywriting', 'Direction artistique']
  },
  magazine: {
    img: 'assets/images/elyseesmarbeuf.png',
    cat: 'Éditorial · Direction artistique',
    title: 'Magazine Luxe & Beauté',
    date: 'Juin 2024 · Élysées Marbeuf',
    intro: 'Projet réalisé durant mon cursus à Élysées Marbeuf — création intégrale d’un magazine haut de gamme dédié à l’univers du luxe et de la beauté.',
    sections: [
      {
        title: 'Points clés', items: [
          'Direction Artistique : palettes, typographies et iconographies',
          'Mise en page sous InDesign : structuration visuelle',
          'Production d’un support print de qualité professionnelle'
        ]
      }
    ],
    canva: 'https://ineslalam.my.canva.site/page-11',
    tags: ['InDesign', 'Photoshop', 'Luxe']
  },
  riwaya: {
    img: 'assets/images/riwayatravel.png',
    cat: 'Vidéo · Scénarisation & montage',
    title: 'Riwaya Travel',
    date: 'Mars 2024 · Étude de cas',
    intro: 'Storytelling vidéo explorant l\'Algérie sous un angle responsable et culturel. Scénarisation, tournage, montage Premiere Pro.',
    sections: [
      {
        title: 'Réalisations', items: [
          'Branding complet : logo et identité chromatique',
          'Stratégie de marketing d’influence',
          'Conception du packaging minimaliste'
        ]
      }
    ],
    canva: 'https://ineslalam.my.canva.site/page-12',
    tags: ['E-commerce', 'Marketing', 'Identité Visuelle']
  },
  omycream: {
    img: 'assets/images/ohmycream.png',
    cat: 'Community Management · Beauté Premium',
    title: 'Oh My Cream',
    date: '2024–2025',
    intro: 'Animation des réseaux sociaux, e-réputation, emailing pour cette marque premium beauté parisienne.',
    sections: [
      {
        title: 'Résultats', items: [
          'Animation des comptes IG et FB',
          'Gestion de l\'e-réputation (+50 avis/mois)',
          'Newsletter et Emailing via Brevo'
        ]
      }
    ],
    canva: 'https://ineslalam.my.canva.site/page-7',
    tags: ['CM', 'Copywriting', 'Brevo']
  },
  rabot: {
    img: 'assets/images/grouperabot.png',
    cat: 'Événementiel · Communication',
    title: 'Groupe Rabot',
    date: '2025–2026',
    intro: 'Gestion complète de la communication : 3–5 comptes réseaux, production photo/vidéo en showroom, 4 événements organisés.',
    sections: [
      {
        title: 'Livrables', items: [
          'Pilotage de la ligne éditoriale',
          'Organisation d\'événements (portes ouvertes)',
          'Analyse des KPI et reporting mensuel'
        ]
      }
    ],
    canva: 'https://ineslalam.my.canva.site/page-6',
    tags: ['Événementiel', 'Photo', 'Suite Adobe']
  }
};

function openProject(id) {
  const p = PROJECTS[id];
  if (!p) return;

  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;

  document.getElementById('modal-img').src = p.img;
  document.getElementById('modal-cat').textContent = p.cat;
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-date').textContent = p.date;
  document.getElementById('modal-intro').textContent = p.intro;

  const cont = document.getElementById('modal-content');
  cont.innerHTML = '';
  if (p.sections) {
    p.sections.forEach(s => {
      let h = `<div style="margin-bottom:28px">
        <h4 class="modal-section-title">${s.title}</h4>
        <ul class="modal-section-list">`;
      s.items.forEach(it => { h += `<li>${it}</li>`; });
      h += `</ul></div>`;
      cont.innerHTML += h;
    });
  }

  const tbox = document.getElementById('modal-tags');
  tbox.innerHTML = '';
  if (p.tags) {
    p.tags.forEach(t => {
      tbox.innerHTML += `<span class="ptag">${t}</span>`;
    });
  }

  const canvaBtn = document.getElementById('modal-link-canva');
  if (p.canva) {
    canvaBtn.href = p.canva;
    canvaBtn.style.display = 'flex'; // Changed to flex to match HTML display:flex
  } else {
    canvaBtn.style.display = 'none';
  }


  overlay.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  // Trigger transition
  setTimeout(() => {
    overlay.classList.add('visible');
  }, 10);
}

function closeProject() {
  const overlay = document.getElementById('modal-overlay');
  if (!overlay) return;
  overlay.classList.remove('visible');
  setTimeout(() => {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }, 300);
}

// Close on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProject();
});


// Global click to close
window.onclick = function (event) {
  const overlay = document.getElementById('modal-overlay');
  if (event.target == overlay) {
    closeProject();
  }
}

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

window.addEventListener('load', () => {
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorRing = document.querySelector('.cursor-ring');

if (cursor && cursorRing) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorRing.style.left = e.clientX + 'px';
    cursorRing.style.top = e.clientY + 'px';
  });

  document.querySelectorAll('a, button, .pj').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '12px';
      cursor.style.height = '12px';
      cursorRing.style.width = '60px';
      cursorRing.style.height = '60px';
      cursorRing.style.borderColor = 'var(--pink)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '8px';
      cursor.style.height = '8px';
      cursorRing.style.width = '36px';
      cursorRing.style.height = '36px';
      cursorRing.style.borderColor = 'rgba(232, 48, 122, 0.4)';
    });
  });
}

function sendWhatsApp() {
  const name = document.getElementById('contact-name').value.trim();
  const email = document.getElementById('contact-email').value.trim();
  const company = document.getElementById('contact-company').value.trim();
  const message = document.getElementById('contact-message').value.trim();
  const btn = document.getElementById('submit-btn');

  // Basic Validation
  if (!name || !email || !message) {
    alert("Veuillez remplir tous les champs obligatoires (Nom, Email, Message).");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Veuillez entrer une adresse email valide.");
    return;
  }

  // Formatting WhatsApp Message
  const text = `Bonjour Inès,\n\nNouveau message de mon portfolio :\n\n- Nom : ${name}\n- Email : ${email}\n- Entreprise : ${company || 'Non spécifiée'}\n\n- Message :\n${message}`;

  const encodedText = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/33650221519?text=${encodedText}`;

  // Update button state
  btn.textContent = 'Redirection...';
  btn.style.background = 'var(--pink-l)';
  btn.disabled = true;

  // Open WhatsApp in a new tab
  window.open(whatsappUrl, '_blank');

  // Change button text to success after a short delay
  setTimeout(() => {
    btn.textContent = 'Message envoyé ✓';
  }, 1000);
}
