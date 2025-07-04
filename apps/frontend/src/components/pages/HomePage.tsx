import { AuthForm } from '../auth/AuthForm';
import { BrandingSection } from '../layout/BrandingSection';

const HomePage = () => {
  return (
    <div className="homepage-container">
      <BrandingSection />
      <div className="auth-container">
        <div className="auth-wrapper">
          <div className="auth-header">
            <h2 className="auth-title">Accès à AIDD</h2>
            <p className="auth-subtitle">Connectez-vous pour explorer vos données</p>
          </div>
          <AuthForm />
        </div>
      </div>
    </div>
  );
};

export { HomePage };
