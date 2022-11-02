import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Rewards from 'views/track/Rewards';
import InternationalSpending from 'views/track/InternationalSpending';
import Budget from 'views/budget/Budget';
import Redeem from 'views/redeem/Redeem';
import Plan from 'views/Plan';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'spending',
            children: [
                {
                    path: 'analytics',
                    element: <DashboardDefault />
                },
                {
                    path: 'budget',
                    element: <Budget />
                }
            ]
        },
        {
            path: 'spending',
            children: [
                {
                    path: 'plan',
                    element: <Plan />
                },
                {
                    path: 'my-trips',
                    element: <InternationalSpending />
                }
            ]
        },
        {
            path: 'rewards',
            children: [
                {
                    path: 'points',
                    element: <Rewards />
                },
                {
                    path: 'redeem',
                    element: <Redeem />
                }
            ]
        }
    ]
};

export default MainRoutes;
