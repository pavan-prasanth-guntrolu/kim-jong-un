import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AuthComponent = ({ onSignIn }) => {
  const [authError, setAuthError] = useState(null);

  // Custom auth handler to catch errors
  const handleAuthError = (error) => {
    console.error("Auth error:", error);
    setAuthError(error.message);
  };

  return (
    <Card className="w-full max-w-md mx-auto glass-card border border-white/10">
      <CardHeader>
        <CardTitle className="text-center">Sign In / Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        {authError && (
          <div className="mb-4 p-3 bg-red-100 text-red-800 rounded">
            {authError}
          </div>
        )}
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
          providers={[]} // Keep third-party providers empty
          redirectTo={window.location.origin} // Use origin instead of hardcoded URL
          onError={handleAuthError}
        />
      </CardContent>
    </Card>
  );
};

export default AuthComponent;
