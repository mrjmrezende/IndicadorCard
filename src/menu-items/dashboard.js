// assets
import { IconSearch, IconReportMedical, IconMoodEmpty, IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconReportMedical: IconReportMedical,
    IconDashboard: IconDashboard,
    IconMoodEmpty: IconMoodEmpty,
    IconSearch: IconSearch,
    IconDeviceAnalytics
};

//-----------------------|| DASHBOARD MENU ITEMS ||-----------------------//

export const dashboard = {
    id: 'dashboard',
    title: 'Menu Central',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Indicadores de saúde',
            type: 'item',
            url: '/dashboard/default',
            icon: icons['IconReportMedical'],
            breadcrumbs: false
        },
        {
            id: 'default',
            title: 'Estado Emocional',
            type: 'item',
            url: '/dashboard/estadoemocional',
            icon: icons['IconMoodEmpty'],
            breadcrumbs: false
        },
        {
            id: 'default',
            title: 'Exames Laboratorias',
            type: 'item',
            url: '/dashboard/estadoemocional',
            icon: icons['IconSearch'],
            breadcrumbs: false
        }
    ]
};
