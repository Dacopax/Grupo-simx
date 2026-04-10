'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { defaultSiteConfig } from '../lib/site-config';

// Use a fixed API base to avoid dynamic checks on each render
const API_BASE = process.env.NEXT_PUBLIC_API_BASE || '/api';

const SiteConfigContext = createContext(defaultSiteConfig);

// Transform API data to match expected structure
function transformConfig(apiConfig) {
    const defaults = defaultSiteConfig;

    const services = (apiConfig.services || defaults.services).map((s, i) => ({
        id: s.id || `service-${i}`,
        title: s.title || '',
        subtitle: s.subtitle || '',
        description: s.description || '',
        imageUrl: s.imageUrl || '',
        imageHint: s.imageHint || '',
        features: s.features || [],
        details: s.details || [],
    }));

    const portfolio = (apiConfig.portfolio || defaults.portfolio || []).map((p, i) => ({
        id: p.id || `project-${i}`,
        title: p.title || '',
        category: p.category || 'General',
        description: p.description || '',
        alcance: p.alcance || '',
        benefits: p.benefits || [],
        imageUrl: p.imageUrl || '',
    }));

    const projects = (apiConfig.projects || defaults.projects || []).map((p, i) => ({
        id: p.id || `project-${i}`,
        title: p.title || '',
        imageUrl: p.imageUrl || '',
    }));

    return {
        ...defaults,
        ...apiConfig,
        services,
        portfolio,
        projects,
        navigation: {
            ...defaults.navigation,
            ...apiConfig.navigation,
            links: apiConfig.navigation?.links || defaults.navigation.links,
            megaMenu: apiConfig.navigation?.megaMenu || defaults.navigation.megaMenu,
        },
        ui: {
            ...defaults.ui,
            ...apiConfig.ui,
            ticker: apiConfig.ui?.ticker || defaults.ui.ticker,
            whyUs: {
                ...defaults.ui.whyUs,
                ...apiConfig.ui?.whyUs,
                features: apiConfig.ui?.whyUs?.features || defaults.ui.whyUs.features,
                stats: apiConfig.ui?.whyUs?.stats || defaults.ui.whyUs.stats,
            }
        },
        contact: {
            ...defaults.contact,
            ...apiConfig.contact,
            phones: apiConfig.contact?.phones || defaults.contact?.phones || [],
            social: {
                ...defaults.contact?.social,
                ...(apiConfig.contact?.social || {})
            },
        },
        about: {
            ...defaults.about,
            ...apiConfig.about,
            values: apiConfig.about?.values || defaults.about?.values || [],
        },
        clients: {
            ...defaults.clients,
            ...apiConfig.clients,
            categories: apiConfig.clients?.categories || defaults.clients?.categories || [],
            brands: apiConfig.clients?.brands || defaults.clients?.brands || [],
        },
        stats: {
            ...defaults.stats,
            ...apiConfig.stats,
        },
    };
}

export function SiteConfigProvider({ children }) {
    const [config, setConfig] = useState(() => transformConfig(defaultSiteConfig));
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Using static config - no database/backend
        setConfig(transformConfig(defaultSiteConfig));
        setLoading(false);
        return () => { };
    }, []);

    return (
        <SiteConfigContext.Provider value={config}>
            {children}
        </SiteConfigContext.Provider>
    );
}

export function useSiteConfig() {
    return useContext(SiteConfigContext);
}
