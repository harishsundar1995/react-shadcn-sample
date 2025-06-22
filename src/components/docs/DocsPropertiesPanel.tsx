
const DocsPropertiesPanel = () => {
  return (
    <aside className="w-80 bg-white border-l border-gray-200 h-screen sticky top-16 overflow-y-auto">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Properties</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">Usage with frameworks</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div>mountSignIn()</div>
              <div>unmountSignIn()</div>
              <div>openSignIn()</div>
              <div>closeSignIn()</div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">Customization</h4>
            <div className="space-y-2">
              <button className="flex items-center text-sm text-gray-700 hover:text-gray-900">
                📋 Copy page as markdown
              </button>
              <button className="flex items-center text-sm text-gray-700 hover:text-gray-900">
                📝 Edit this page on GitHub
              </button>
              <button className="flex items-center text-sm text-gray-700 hover:text-gray-900">
                💬 Open in ChatGPT
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default DocsPropertiesPanel;
