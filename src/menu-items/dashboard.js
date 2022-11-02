// assets
import { IconChartLine, IconReportMoney } from '@tabler/icons';

// constant
const icons = { IconChartLine, IconReportMoney };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const spending = {
    id: 'spending',
    title: 'Spending',
    caption: 'Track Your Spending Habit',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Analytics',
            type: 'item',
            url: '/spending/analytics',
            icon: icons.IconChartLine,
            breadcrumbs: false
        },
        {
            id: 'second',
            title: 'Budget',
            type: 'item',
            url: '/spending/budget',
            icon: icons.IconReportMoney,
            breadcrumbs: false
        }
    ]
};

export default spending;
