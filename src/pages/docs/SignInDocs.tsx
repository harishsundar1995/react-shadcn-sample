
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const SignInDocs = () => {
  return (
    <div className="p-8">
      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span>UI Components</span>
          <span>/</span>
          <span>&lt;SignIn /&gt;</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">&lt;SignIn /&gt; component</h1>
      </div>

      {/* Component Preview */}
      <div className="mb-12">
        <Card className="max-w-md mx-auto bg-white shadow-lg">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-gray-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Sign in to Acme Co</h2>
              <p className="text-gray-600 text-sm">Welcome back! Please sign in to continue</p>
            </div>

            <div className="flex justify-center gap-4 mb-6">
              <Button variant="outline" size="sm" className="flex-1">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Google
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Facebook
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </Button>
            </div>

            <div className="text-center text-gray-500 text-sm mb-4">or</div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-1">Email address</label>
                <Input placeholder="Enter your email" className="w-full" />
              </div>
              
              <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                Continue →
              </Button>
            </div>

            <div className="text-center mt-6 text-sm text-gray-600">
              Don't have an account? <button className="text-blue-600 hover:underline">Sign up</button>
            </div>

            <div className="text-center mt-4 text-xs text-gray-500">
              Secured by <span className="font-semibold">🔒 clerk</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Documentation Content */}
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-8">
          The <code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;SignIn /&gt;</code> component renders a UI to allow users to sign in or sign up by default. The 
          functionality of the <code className="bg-gray-100 px-2 py-1 rounded text-sm">&lt;SignIn /&gt;</code> component is controlled by the instance settings you specify in the 
          Dashboard, such as sign-in and sign-up options and social connections. You can further 
          customize the component by passing additional props.
        </p>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Properties</h2>
        
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden mb-8">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">redirectUrl</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Badge variant="outline">string</Badge>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">The URL to redirect to after successful sign-in</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">signUpUrl</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Badge variant="outline">string</Badge>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">The URL of the sign-up page</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">forceRedirectUrl</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <Badge variant="outline">string</Badge>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">Forces redirect to this URL after sign-in</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Usage</h2>
        
        <div className="bg-gray-900 rounded-lg p-6 mb-8">
          <pre className="text-green-400 text-sm">
            <code>{`import { SignIn } from '@clerk/clerk-react'

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn 
        redirectUrl="/dashboard"
        signUpUrl="/sign-up"
      />
    </div>
  )
}`}</code>
          </pre>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Customization</h2>
        
        <p className="text-gray-600 mb-4">
          The SignIn component can be customized using the appearance prop to match your application's design system.
        </p>

        <div className="bg-gray-900 rounded-lg p-6">
          <pre className="text-green-400 text-sm">
            <code>{`<SignIn 
  appearance={{
    elements: {
      formButtonPrimary: 'bg-blue-600 hover:bg-blue-700',
      card: 'shadow-xl border-0'
    }
  }}
/>`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default SignInDocs;
