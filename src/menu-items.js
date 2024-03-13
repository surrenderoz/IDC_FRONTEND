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
                    url: '/dashboard/',
                    // target: true,
                },
                {
                    id: 'grants',
                    title: 'Funds',
                    type: 'item',
                    icon: 'feather icon-layers',
                    url: '/funds/allfunds',
                    // children: [
                    //     {
                    //         id: 'add-grants',
                    //         title: 'Add Grants',
                    //         type: 'item',
                    //         url: '/grants/add_grants'
                    //     },
                    //     {
                    //         id: 'all-grants',
                    //         title: 'All Grants',
                    //         type: 'item',
                    //         url: '/grants/allgrants'
                    //     }
                    // ]
                    // target: true,
                },
                // {
                //     id: 'budget',
                //     title: 'Budget',
                //     type: 'collapse',
                //     icon: 'feather icon-briefcase',
                //     url: '/dashboard/',
                //     children: [
                //         {
                //             id: 'add-budget',
                //             title: 'Add Budget',
                //             type: 'item',
                //             url: '/budgets/add_budget'
                //         },
                //         {
                //             id: 'all-budget',
                //             title: 'Budget List',
                //             type: 'item',
                //             url: '/budgets/allbudgets'
                //         }
                //     ]
                //     // target: true,
                // },
                {
                    id: 'general_ledger',
                    title: 'General Ledger',
                    type: 'collapse',
                    icon: 'feather icon-book',
                    url: '/dashboard/',
                    children: [
                        {
                            id: 'import_gl',
                            title: 'Import GL',
                            type: 'item',
                            url: '/#'
                        },
                        {
                            id: 'export_gl',
                            title: 'Export GL',
                            type: 'item',
                            url: '/#'
                        }
                    ]
                    // target: true,
                },

                {
                    id: 'reports',
                    title: 'Reports',
                    type: 'collapse',
                    icon: 'feather icon-file-text',
                    url: '/dashboard/',
                    children: [
                        {
                            id: 'log_report',
                            title: 'Grant Log Report',
                            type: 'item',
                            url: '/#'
                        },
                        {
                            id: 'listing_report',
                            title: 'Grant Listing Report',
                            type: 'item',
                            url: '/#'
                        },
                        {
                            id: 'overview_report',
                            title: 'Grant Overview Report',
                            type: 'item',
                            url: '/#'
                        },
                        {
                            id: 'idc_draw_report',
                            title: 'IDC Status Report',
                            type: 'item',
                            url: '/#'
                        },
                        {
                            id: 'budget_to_actual_report',
                            title: 'Budget To Actual Report',
                            type: 'item',
                            url: '/#'
                        },

                        {
                            id: 'idc_transfer_report',
                            title: 'IDC Transfer Report',
                            type: 'item',
                            url: '/#'
                        },
                        {
                            id: 'idc_calc_report',
                            title: 'IDC Calculation Report',
                            type: 'item',
                            url: '/#'
                        },
                        {

                            id: 'idc_accounting_report',
                            title: 'IDC Accounting Report',
                            type: 'item',
                            url: '/#'
                        },
                    ]
                }
            ]
        }
    ]
};
export default chartData;
