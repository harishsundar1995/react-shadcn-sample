import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Copy, Check } from "lucide-react";

const SignInDocs = () => {
  const [copiedSnippet, setCopiedSnippet] = useState("");

  const copyToClipboard = async (text: string, snippetId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedSnippet(snippetId);
      setTimeout(() => setCopiedSnippet(""), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const CodeSnippet = ({
    code,
    snippetId,
    language = "javascript",
  }: {
    code: string;
    snippetId: string;
    language?: string;
  }) => (
    <div className="relative">
      <div className="bg-gray-900 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
          <span className="text-xs text-gray-400 font-medium">{language}</span>
          <button
            onClick={() => copyToClipboard(code, snippetId)}
            className="flex items-center gap-1 text-xs text-gray-400 hover:text-white transition-colors"
          >
            {copiedSnippet === snippetId ? (
              <>
                <Check className="w-3 h-3" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                Copy
              </>
            )}
          </button>
        </div>
        <pre className="p-4 text-sm text-green-400 overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );

  const usageCode = `import { SignIn } from '@clerk/clerk-react'

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn 
        redirectUrl="/dashboard"
        signUpUrl="/sign-up"
      />
    </div>
  )
}`;

  const customizationCode = `<SignIn 
  appearance={{
    elements: {
      formButtonPrimary: 'bg-blue-600 hover:bg-blue-700',
      card: 'shadow-xl border-0'
    }
  }}
/>`;

  const mountSignInCode = `import { Clerk } from '@clerk/clerk-js'

const clerk = new Clerk(clerkPubKey)
await clerk.load()

const signInDiv = document.getElementById('sign-in')
clerk.mountSignIn(signInDiv)`;

  const unmountSignInCode = `clerk.unmountSignIn(signInDiv)`;

  const openSignInCode = `clerk.openSignIn()`;

  const closeSignInCode = `clerk.closeSignIn()`;

  return (
    <div className="p-8">
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span>UI Components</span>
          <span>/</span>
          <span>&lt;SignIn /&gt;</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          &lt;SignIn /&gt; component
        </h1>
      </div>

      {/* Documentation Content */}
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          The{" "}
          <code className="bg-gray-100 px-2 py-1 rounded text-sm">
            &lt;SignIn /&gt;
          </code>{" "}
          component renders a UI to allow users to sign in or sign up by
          default. The functionality of the{" "}
          <code className="bg-gray-100 px-2 py-1 rounded text-sm">
            &lt;SignIn /&gt;
          </code>{" "}
          component is controlled by the instance settings you specify in the
          Dashboard, such as sign-in and sign-up options and social connections.
          You can further customize the component by passing additional props.
        </p>

        <h2
          id="properties"
          className="text-2xl font-semibold text-gray-900 mb-4 scroll-mt-24"
        >
          Properties
        </h2>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                  redirectUrl
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Badge variant="outline">string</Badge>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  The URL to redirect to after successful sign-in
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                  signUpUrl
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Badge variant="outline">string</Badge>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  The URL of the sign-up page
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">
                  forceRedirectUrl
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Badge variant="outline">string</Badge>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  Forces redirect to this URL after sign-in
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2
          id="usage"
          className="text-2xl font-semibold text-gray-900 mb-4 scroll-mt-24"
        >
          Usage
        </h2>

        <div className="mb-8">
          <CodeSnippet
            code={usageCode}
            snippetId="usage-example"
            language="tsx"
          />
        </div>

        {/* Usage with frameworks methods */}
        <h3
          id="mountSignIn"
          className="text-xl font-semibold text-gray-900 mb-4 scroll-mt-24"
        >
          mountSignIn()
        </h3>
        <p className="text-gray-600 mb-4">
          Mounts the SignIn component to the specified DOM element.
        </p>
        <div className="mb-8">
          <CodeSnippet
            code={mountSignInCode}
            snippetId="mount-signin"
            language="javascript"
          />
        </div>

        <h3
          id="unmountSignIn"
          className="text-xl font-semibold text-gray-900 mb-4 scroll-mt-24"
        >
          unmountSignIn()
        </h3>
        <p className="text-gray-600 mb-4">
          Unmounts the SignIn component from the DOM.
        </p>
        <div className="mb-8">
          <CodeSnippet
            code={unmountSignInCode}
            snippetId="unmount-signin"
            language="javascript"
          />
        </div>

        <h3
          id="openSignIn"
          className="text-xl font-semibold text-gray-900 mb-4 scroll-mt-24"
        >
          openSignIn()
        </h3>
        <p className="text-gray-600 mb-4">
          Opens the SignIn component in a modal.
        </p>
        <div className="mb-8">
          <CodeSnippet
            code={openSignInCode}
            snippetId="open-signin"
            language="javascript"
          />
        </div>

        <h3
          id="closeSignIn"
          className="text-xl font-semibold text-gray-900 mb-4 scroll-mt-24"
        >
          closeSignIn()
        </h3>
        <p className="text-gray-600 mb-4">Closes the SignIn modal.</p>
        <div className="mb-8">
          <CodeSnippet
            code={closeSignInCode}
            snippetId="close-signin"
            language="javascript"
          />
        </div>

        <h2
          id="customization"
          className="text-2xl font-semibold text-gray-900 mb-4 scroll-mt-24"
        >
          Customization
        </h2>

        <p className="text-gray-600 mb-4">
          The SignIn component can be customized using the appearance prop to
          match your application's design system.
        </p>

        <div className="mb-8">
          <CodeSnippet
            code={customizationCode}
            snippetId="customization-example"
            language="tsx"
          />
        </div>
      </div>
    </div>
  );
};

export default SignInDocs;
