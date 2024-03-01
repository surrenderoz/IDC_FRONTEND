const chartData = {
    items: [
        {
            id: 'navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    icon: 'feather icon-home',
                    url: '/dashboard/default'
                    // target: true,
                },
                {
                    id: 'grants',
                    title: 'Grants',
                    type: 'collapse',
                    icon: 'feather icon-home',
                    url: '/dashboard/',
                    children: [
                        {
                            id: 'add-grants',
                            title: 'Add Grants',
                            type: 'item',
                            icon: 'feather icon-home',
                            url: '/dashboard/'
                        },
                        {
                            id: 'all-grants',
                            title: 'All Grants',
                            type: 'item',
                            icon: 'feather icon-home',
                            url: '/dashboard/'
                        }
                    ]
                    // target: true,
                },
                {
                    id: 'idc-cal',
                    title: 'Reports',
                    type: 'item',
                    icon: 'feather icon-home',
                    url: '/dashboard/'
                    // target: true,
                },
                {
                    id: 'reports',
                    title: 'Reports',
                    type: 'item',
                    icon: 'feather icon-home',
                    url: '/dashboard/'
                    // target: true,
                }
            ]
        }
    ]
};
export default chartData;
