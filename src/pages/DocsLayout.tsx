
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import DocsSidebar from '@/components/docs/DocsSidebar';
import DocsPropertiesPanel from '@/components/docs/DocsPropertiesPanel';

const DocsLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex h-[calc(100vh-4rem)]">
        <DocsSidebar />
        <main className="flex-1 max-w-4xl overflow-y-auto">
          <Outlet />
        </main>
        <DocsPropertiesPanel />
      </div>
    </div>
  );
};

export default DocsLayout;
