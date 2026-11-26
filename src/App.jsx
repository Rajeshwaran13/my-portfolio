/** App shell — menu bar, routed views (with fade transition), dock + floating widgets. */
import { useState } from 'react';
import { Outlet, ScrollRestoration, useLocation } from 'react-router-dom';
import MenuBar from '@/components/layout/MenuBar';
import AppDock from '@/components/layout/AppDock';
import ChatBot from '@/components/widgets/ChatBot';
import WhatsAppButton from '@/components/widgets/WhatsAppButton';
import CommandPalette from '@/components/widgets/CommandPalette';
import { useHashScroll } from '@/hooks/useHashScroll';

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const location = useLocation();
  useHashScroll();

  return (
    <>
      <MenuBar onOpenPalette={() => setPaletteOpen(true)} />

      <div key={location.pathname} className="route-view">
        <Outlet />
      </div>

      <AppDock />
      <WhatsAppButton />
      <ChatBot />
      <CommandPalette
        open={paletteOpen}
        onOpen={() => setPaletteOpen(true)}
        onClose={() => setPaletteOpen(false)}
      />
      <ScrollRestoration getKey={(loc) => loc.pathname} />
    </>
  );
}
