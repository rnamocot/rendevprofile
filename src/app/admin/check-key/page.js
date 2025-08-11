'use client';
import { useState } from 'react';
import { Key, CheckCircle, XCircle, Eye } from 'lucide-react';

export default function AdminKeyChecker() {
  const [testKey, setTestKey] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const testAdminKey = async () => {
    if (!testKey.trim()) return;
    
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch(`/api/resume-download?key=${encodeURIComponent(testKey)}`);
      const data = await response.json();

      if (response.ok && data.success) {
        setResult({ valid: true, message: 'Admin key is valid! ✅' });
      } else {
        setResult({ valid: false, message: 'Invalid admin key ❌' });
      }
    } catch (error) {
      setResult({ valid: false, message: 'Network error occurred' });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      testAdminKey();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Key className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Key Checker</h1>
          <p className="text-gray-600">Test your admin key for resume stats access</p>
        </div>

        <div className="space-y-6">
          <div>
            <label htmlFor="testKey" className="block text-sm font-medium text-gray-700 mb-2">
              Enter Admin Key
            </label>
            <input
              id="testKey"
              type="password"
              value={testKey}
              onChange={(e) => setTestKey(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
              placeholder="Enter admin key to test"
            />
          </div>

          <button
            onClick={testAdminKey}
            disabled={loading || !testKey.trim()}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Testing...
              </>
            ) : (
              <>
                <Eye className="w-5 h-5" />
                Test Key
              </>
            )}
          </button>

          {result && (
            <div className={`flex items-center gap-3 p-4 rounded-lg ${
              result.valid ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
            }`}>
              {result.valid ? (
                <CheckCircle className="w-6 h-6 text-green-600" />
              ) : (
                <XCircle className="w-6 h-6 text-red-600" />
              )}
              <span className={`font-medium ${result.valid ? 'text-green-900' : 'text-red-900'}`}>
                {result.message}
              </span>
            </div>
          )}

          {result?.valid && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Eye className="w-5 h-5 text-blue-600 mt-0.5" />
                <div className="text-sm">
                  <p className="text-blue-900 font-medium mb-1">Access Granted!</p>
                  <p className="text-blue-700 mb-2">
                    You can now access the resume statistics dashboard.
                  </p>
                  <a
                    href={`/admin/resume-stats?key=${encodeURIComponent(testKey)}`}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    View Dashboard
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Current Admin Key Setup:</h3>
          <div className="text-sm text-gray-600 space-y-1">
            <p>• Admin key: <code className="bg-white px-2 py-1 rounded text-xs">RenDev95</code></p>
            <p>• Hardcoded in API route for simplicity</p>
            <p>• No environment variables needed</p>
          </div>
        </div>

        <div className="mt-4 text-center">
          <a
            href="/admin/resume-stats"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            Go to Resume Stats Dashboard →
          </a>
        </div>
      </div>
    </div>
  );
}