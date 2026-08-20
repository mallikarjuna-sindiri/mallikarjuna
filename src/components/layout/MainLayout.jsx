import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import Footer from './Footer';
import OfflineScreen from '../common/OfflineScreen';
import useOnlineStatus from '../../hooks/useOnlineStatus';

export default function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isOnline = useOnlineStatus();

  return (
    <div className="min-h-screen bg-[var(--cream)] text-[var(--ink)] selection:bg-[rgba(255,107,53,0.18)] flex flex-col">
      <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main className="flex-grow flex flex-col">
        {isOnline ? (
          <div key={pathname} className="page-transition flex-1">
            <Outlet />
          </div>
        ) : (
          <OfflineScreen />
        )}
      </main>
      <Footer />
    </div>
  );
}
