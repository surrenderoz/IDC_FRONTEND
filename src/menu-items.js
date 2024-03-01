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
                            url: '/dashboard/'
                        },
                        {
                            id: 'all-grants',
                            title: 'All Grants',
                            type: 'item',
                            url: '/grants/allgrants'
                        }
                    ]
                    // target: true,
                },
                {
                    id: 'budget',
                    title: 'Budget',
                    type: 'collapse',
                    icon: 'feather icon-home',
                    url: '/dashboard/',
                    children: [
                        {
                            id: 'add-budget',
                            title: 'Add Budget',
                            type: 'item',
                            url: '/dashboard/'
                        },
                        {
                            id: 'all-budget',
                            title: 'Budget List',
                            type: 'item',
                            url: '/dashboard/'
                        }
                    ]
                    // target: true,
                },
                {
                    id: 'general_ledger',
                    title: 'General Ledger',
                    type: 'collapse',
                    icon: 'feather icon-home',
                    url: '/dashboard/',
                    children: [
                        {
                            id: 'gl',
                            title: 'Import GL',
                            type: 'item',
                            url: '/dashboard/'
                        },
                        {
                            id: 'gl',
                            title: 'Export GL',
                            type: 'item',
                            url: '/dashboard/'
                        }
                    ]
                    // target: true,
                },

                {
                    id: 'reports',
                    title: 'Reports',
                    type: 'collapse',
                    icon: 'feather icon-home',
                    url: '/dashboard/',
                    children: [
                        {
                            id: 'log_report',
                            title: 'Grant Log Report',
                            type: 'item',
                            url: '/dashboard/'

                        },
                        {
                            id: 'listing_report',
                            title: 'Grant Listing Report',
                            type: 'item',
                            url: '/dashboard/'

                        },
                        {
                            id: 'overview_report',
                            title: 'Grant Overview Report',
                            type: 'item',
                            url: '/dashboard/'

                        },
                        {
                            id: 'idc_draw_report',
                            title: 'IDC Status Report',
                            type: 'item',
                            url: '/dashboard/'

                        },
                        {
                            id: 'budget_to_actual_report',
                            title: 'Budget To Actual Report',
                            type: 'item',
                            url: '/dashboard/'

                        },

                        {
                            id: 'idc_transfer_report',
                            title: 'IDC Transfer Report',
                            type: 'item',
                            url: '/dashboard/'

                        },

                        {
                            id: 'idc_calc_report',
                            title: 'IDC Calculation Report',
                            type: 'item',
                            url: '/dashboard/'

                        },
                        {

                            id: 'idc_accounting_report',
                            title: 'IDC Accounting Report',
                            type: 'item',
                            url: '/dashboard/analytics'
                        },
                    ]
                }
            ]
        }
    ]
};
export default chartData;
