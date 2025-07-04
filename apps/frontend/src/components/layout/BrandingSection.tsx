import { AIDDLogo } from '../ui/AIDDLogo';
import { Card, CardContent } from '../ui/Card';

const BrandingSection = () => {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
          <path d="M12 2L13.09 7.26L16 5L14.26 9.91L20 9L15.09 12L20 15L14.26 14.09L16 19L13.09 16.74L12 22L10.91 16.74L8 19L9.74 14.09L4 15L8.91 12L4 9L9.74 9.91L8 5L10.91 7.26L12 2Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Intelligence Artificielle',
      description: 'Analyses prédictives avancées et insights stratégiques.',
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
          <path d="M3 3V21H21V3H3ZM19 19H5V5H19V19Z" fill="currentColor"/>
          <path d="M7 7H9V17H7V7ZM11 10H13V17H11V10ZM15 13H17V17H15V13Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Visualisations Temps Réel',
      description: 'Tableaux de bord dynamiques et interactifs.',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
          <path d="M6 10C6 5.58172 9.58172 2 14 2C18.4183 2 22 5.58172 22 10V11C22 11.5523 21.5523 12 21 12C20.4477 12 20 11.5523 20 11V10C20 6.68629 17.3137 4 14 4C10.6863 4 8 6.68629 8 10V11H16C16.5523 11 17 11.4477 17 12V20C17 21.1046 16.1046 22 15 22H3C1.89543 22 1 21.1046 1 20V12C1 11.4477 1.44772 11 2 11H6V10Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Sécurité Enterprise',
      description: 'Chiffrement bancaire et conformité RGPD.',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
          <path d="M13 10V3L4 14H11V21L20 10H13Z" fill="currentColor"/>
        </svg>
      ),
      title: 'Performance Ultra',
      description: 'Traitement instantané de téraoctets.',
      gradient: 'from-amber-500 to-orange-600'
    }
  ];

  return (
    <div className="branding-section premium-gradient">
      <div className="branding-content-wrapper">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="logo-container">
            <AIDDLogo size="lg" />
          </div>
          <h1 className="hero-title">AIDD</h1>
          <p className="hero-subtitle">
            L'Intelligence Artificielle de nouvelle génération qui révolutionne l'analyse de données
          </p>
          <div className="hero-badges">
            <span className="badge">IA Avancée</span>
            <span className="badge">Temps Réel</span>
            <span className="badge">Enterprise</span>
          </div>
        </div>

        {/* Features Cards */}
        <div className="features-grid-premium">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card-premium group cursor-pointer">
              <CardContent className="feature-card-content-premium">
                <div className="feature-card-header">
                  <div className={`feature-card-icon-premium bg-gradient-to-br ${feature.gradient}`}>
                    <div className="feature-icon-wrapper">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="feature-card-arrow">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="transition-transform group-hover:translate-x-0.5">
                      <path d="M4.5 2L8 6L4.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="feature-card-text-content">
                  <h3 className="feature-card-title-premium">{feature.title}</h3>
                  <p className="feature-card-description-premium">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Précision</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10M+</div>
              <div className="stat-label">Données analysées</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">&lt; 1s</div>
              <div className="stat-label">Temps de réponse</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <p className="cta-text">Révolutionnez votre approche des données.</p>
          <p className="cta-subtext">Découvrez l'avenir de l'intelligence artificielle appliquée à vos données.</p>
        </div>
      </div>
    </div>
  );
};

export { BrandingSection };
