<template>
  <!--
    Tower frame + wordmark use currentColor so they flip with the parent's text color.
    Pass a Tailwind class like "text-zinc-800 dark:text-zinc-200" to control both modes.
    Orange beacon and X-braces are always orange — they read well on any background.
  -->
  <svg
    viewBox="0 0 345 90"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    role="img"
    aria-label="Technicom Corporation"
  >
    <!-- ── Beacon at top ── -->
    <line x1="34" y1="6"  x2="34" y2="22" stroke="currentColor" stroke-width="2"   stroke-linecap="round"/>
    <circle cx="34" cy="5" r="9" fill="#F97316" opacity="0.25"/>
    <circle cx="34" cy="5" r="5" fill="#F97316"/>

    <!-- ── Tower body — outer legs ── -->
    <line x1="30" y1="22" x2="9"  y2="84" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="38" y1="22" x2="59" y2="84" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>

    <!-- Horizontal cross-bars -->
    <line x1="30" y1="22" x2="38" y2="22" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="23" y1="43" x2="45" y2="43" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="16" y1="64" x2="52" y2="64" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="9"  y1="84" x2="59" y2="84" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>

    <!-- ── Orange X-braces (always orange) ── -->
    <line x1="30" y1="22" x2="45" y2="43" stroke="#F97316" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="38" y1="22" x2="23" y2="43" stroke="#F97316" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="23" y1="43" x2="52" y2="64" stroke="#F97316" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="45" y1="43" x2="16" y2="64" stroke="#F97316" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="16" y1="64" x2="59" y2="84" stroke="#F97316" stroke-width="3.5" stroke-linecap="round"/>
    <line x1="52" y1="64" x2="9"  y2="84" stroke="#F97316" stroke-width="3.5" stroke-linecap="round"/>

    <!-- ── Wordmark — Exo 2 Italic Bold ── -->
    <text
      x="76"
      y="62"
      font-family="'Exo 2', 'Trebuchet MS', Arial, sans-serif"
      font-size="44"
      font-weight="700"
      font-style="italic"
      letter-spacing="0.5"
      fill="currentColor"
    >Technicom</text>
  </svg>
</template>
