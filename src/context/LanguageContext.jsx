import { createContext, useContext, useState } from 'react'

const translations = {
  HR: {
    nav: {
      home: 'Početna',
      projects: 'Projekti',
      contact: 'Kontakt',
    },
    hero: {
      available: 'dostupan za projekte',
      cta_contact: 'Kontaktiraj me',
      cta_projects: 'Pogledaj projekte',
      stats: [
        { br: '3+', opis: 'Godine iskustva' },
        { br: '20+', opis: 'Završenih projekata' },
        { br: 'React', opis: 'Primarni stack' },
      ],
    },
    about: {
      label: '— o meni',
      title: 'Gradim stvari koje',
      title_italic: 'zaista rade.',
      p1: 'Pasioniran sam oko web developmenta — od prvih wireframeova do deployanja gotovog projekta. Volim kada tehnologija i dizajn rade zajedno bez kompromisa.',
      p2: 'Trenutno sam fokusiran na React ekosustav, ali uvijek gledam širu sliku — korisničko iskustvo, performanse i kod koji je lako čitati i nadograđivati.',
    },
    contact: {
      label: '— kontakt',
      title: 'Imamo projekt?',
      title_italic: 'Pišimo se.',
      phone_label: 'Telefon',
      footer_rights: 'Sva prava pridržana.',
      footer_made: 'Napravljeno s React + Tailwind',
    },
  },
  EN: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      available: 'available for projects',
      cta_contact: 'Contact me',
      cta_projects: 'View projects',
      stats: [
        { br: '3+', opis: 'Years of experience' },
        { br: '20+', opis: 'Completed projects' },
        { br: 'React', opis: 'Primary stack' },
      ],
    },
    about: {
      label: '— about me',
      title: 'I build things that',
      title_italic: 'actually work.',
      p1: 'I am passionate about web development — from the first wireframes to deploying the finished project. I love when technology and design work together without compromise.',
      p2: 'Currently focused on the React ecosystem, but always looking at the bigger picture — user experience, performance, and code that is easy to read and extend.',
    },
    contact: {
      label: '— contact',
      title: 'Got a project?',
      title_italic: "Let's talk.",
      phone_label: 'Phone',
      footer_rights: 'All rights reserved.',
      footer_made: 'Built with React + Tailwind',
    },
  },
  DE: {
    nav: {
      home: 'Startseite',
      projects: 'Projekte',
      contact: 'Kontakt',
    },
    hero: {
      available: 'verfügbar für Projekte',
      cta_contact: 'Kontaktiere mich',
      cta_projects: 'Projekte ansehen',
      stats: [
        { br: '3+', opis: 'Jahre Erfahrung' },
        { br: '20+', opis: 'Abgeschlossene Projekte' },
        { br: 'React', opis: 'Primärer Stack' },
      ],
    },
    about: {
      label: '— über mich',
      title: 'Ich baue Dinge, die',
      title_italic: 'wirklich funktionieren.',
      p1: 'Ich bin leidenschaftlich an der Webentwicklung — von den ersten Wireframes bis zur Bereitstellung des fertigen Projekts. Ich liebe es, wenn Technologie und Design ohne Kompromisse zusammenarbeiten.',
      p2: 'Derzeit fokussiert auf das React-Ökosystem, aber immer mit Blick auf das große Ganze — Benutzererfahrung, Performance und Code, der leicht zu lesen und zu erweitern ist.',
    },
    contact: {
      label: '— Kontakt',
      title: 'Haben Sie ein Projekt?',
      title_italic: 'Schreiben Sie mir.',
      phone_label: 'Telefon',
      footer_rights: 'Alle Rechte vorbehalten.',
      footer_made: 'Erstellt mit React + Tailwind',
    },
  },
  IT: {
    nav: {
      home: 'Home',
      projects: 'Progetti',
      contact: 'Contatto',
    },
    hero: {
      available: 'disponibile per progetti',
      cta_contact: 'Contattami',
      cta_projects: 'Vedi progetti',
      stats: [
        { br: '3+', opis: 'Anni di esperienza' },
        { br: '20+', opis: 'Progetti completati' },
        { br: 'React', opis: 'Stack principale' },
      ],
    },
    about: {
      label: '— su di me',
      title: 'Costruisco cose che',
      title_italic: 'funzionano davvero.',
      p1: "Sono appassionato di sviluppo web — dai primi wireframe al deployment del progetto finito. Amo quando tecnologia e design lavorano insieme senza compromessi.",
      p2: "Attualmente focalizzato sull'ecosistema React, ma guardo sempre al quadro generale — esperienza utente, performance e codice facile da leggere ed estendere.",
    },
    contact: {
      label: '— contatto',
      title: 'Hai un progetto?',
      title_italic: 'Scriviamoci.',
      phone_label: 'Telefono',
      footer_rights: 'Tutti i diritti riservati.',
      footer_made: 'Realizzato con React + Tailwind',
    },
  },
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('HR')
  const t = translations[lang]
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
