// assets
import { IconUsers, IconCoin, IconWallet, IconAward } from '@tabler/icons';

// constant
const icons = {
    IconUsers,
    IconCoin,
    IconWallet,
    IconAward
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const Rewards = {
    id: 'rewards',
    type: 'group',
    children: [
        {
            id: 'groups',
            title: 'Rewards',
            type: 'collapse',
            icon: icons.IconAward,

            children: [
                {
                    id: 'reards',
                    title: 'Points',
                    type: 'item',
                    url: '/rewards/points',
                    icon: icons.IconCoin,
                    breadcrumbs: false
                },
                {
                    id: 'register3',
                    title: 'Redeem',
                    type: 'item',
                    url: '/rewards/redeem',
                    icon: icons.IconWallet,
                    target: false
                }
            ]
        }
    ]
};

export default Rewards;
